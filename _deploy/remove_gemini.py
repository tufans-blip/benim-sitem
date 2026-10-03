"""
Gemini watermark remover v6.
- Scores blobs by local contrast (how much brighter than background)
  not just defect count — eliminates false positives on uniform backgrounds
- Iterates until no more stars found (cleans remnants)
- Inpaints bounding box + generous margin for full coverage
"""
import cv2
import numpy as np
from pathlib import Path
import sys

ASSETS    = Path(r"d:\armaDOCs\arma\Desktop\Tufan Sezer Design System\_deploy\assets\work")
CROP      = 220
MIN_AREA  = 40
MAX_AREA  = 9000
MARGIN    = 40
INPAINT_R = 16
MIN_DEF   = 3
MAX_ITERS = 4   # max inpaint passes per image


def _blob_contrast(gray_crop, contour):
    """How much brighter is the blob than the rest of the corner?"""
    h, w = gray_crop.shape
    blob_mask = np.zeros((h, w), dtype=np.uint8)
    cv2.drawContours(blob_mask, [contour], -1, 255, -1)
    bg_mask = cv2.bitwise_not(blob_mask)
    blob_mean = cv2.mean(gray_crop, mask=blob_mask)[0]
    bg_mean   = cv2.mean(gray_crop, mask=bg_mask)[0]
    return blob_mean - bg_mean


def _best_blob(gray_crop):
    """Return (bbox, score) of the most star-like blob in the crop."""
    local_max  = int(gray_crop.max())
    local_mean = float(gray_crop.mean())
    local_std  = float(gray_crop.std())
    adaptive   = int(local_mean + 1.5 * local_std)

    thresh_list = sorted(
        {245, 230, 215, adaptive, 195, 175, 155, 135, 115},
        reverse=True,
    )

    best_score = -999
    best_bbox  = None

    for thresh in thresh_list:
        if thresh >= local_max or thresh < 80:
            continue
        _, binary = cv2.threshold(gray_crop, thresh, 255, cv2.THRESH_BINARY)
        contours, _ = cv2.findContours(binary, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
        for cnt in contours:
            area = cv2.contourArea(cnt)
            if not (MIN_AREA < area < MAX_AREA):
                continue
            x, y, bw, bh = cv2.boundingRect(cnt)
            aspect = max(bw, bh) / max(min(bw, bh), 1)
            if aspect > 3.0:
                continue
            hull = cv2.convexHull(cnt, returnPoints=False)
            if hull is None or len(hull) < 3:
                continue
            try:
                defects = cv2.convexityDefects(cnt, hull)
                n_def = len(defects) if defects is not None else 0
            except Exception:
                n_def = 0
            if n_def < MIN_DEF:
                continue
            contrast = _blob_contrast(gray_crop, cnt)
            # Score: contrast is the primary driver; defects secondary
            score = contrast * 2 + n_def * 3
            if score > best_score:
                best_score = score
                best_bbox  = (x, y, bw, bh)

    return best_bbox, best_score


def find_gemini_mask(img_bgr):
    h, w = img_bgr.shape[:2]
    ch = min(CROP, h)
    cw = min(CROP, w)

    best_global_score = -999
    best_corner       = None

    for name, y0, x0 in [("BL", h-ch, 0), ("BR", h-ch, w-cw)]:
        crop = img_bgr[y0:y0+ch, x0:x0+cw]
        gray = cv2.cvtColor(crop, cv2.COLOR_BGR2GRAY)
        bbox, score = _best_blob(gray)
        if bbox and score > best_global_score:
            best_global_score = score
            best_corner       = (name, y0, x0, bbox)

    # Minimum contrast threshold: blob must be meaningfully brighter than bg
    if best_corner is None or best_global_score < 5:
        return None, None

    name, y0, x0, (bx, by, bw, bh) = best_corner

    # Expand bounding box by MARGIN
    used_ch = min(CROP, h)
    used_cw = min(CROP, w)
    x1 = max(0,       bx - MARGIN)
    y1 = max(0,       by - MARGIN)
    x2 = min(used_cw, bx + bw + MARGIN)
    y2 = min(used_ch, by + bh + MARGIN)

    full_mask = np.zeros((h, w), dtype=np.uint8)
    full_mask[y0+y1 : y0+y2, x0+x1 : x0+x2] = 255
    return full_mask, name


def process_image(path: Path):
    img = cv2.imread(str(path))
    if img is None:
        return False, None
    if img.shape[0] < 40 or img.shape[1] < 40:
        return False, None

    cleaned = False
    first_corner = None

    for _ in range(MAX_ITERS):
        mask, corner = find_gemini_mask(img)
        if mask is None:
            break
        img = cv2.inpaint(img, mask, INPAINT_R, cv2.INPAINT_TELEA)
        if not cleaned:
            first_corner = corner
        cleaned = True

    if cleaned:
        cv2.imwrite(str(path), img, [int(cv2.IMWRITE_WEBP_QUALITY), 90])

    return cleaned, first_corner


scan_root = Path(sys.argv[1]) if len(sys.argv) > 1 else ASSETS
exts = {".webp", ".jpg", ".jpeg", ".png"}
all_images = [p for p in scan_root.rglob("*") if p.suffix.lower() in exts]

print(f"{len(all_images)} gorsel taraniyor: {scan_root}\n")
cleaned = []
for p in all_images:
    ok, corner = process_image(p)
    if ok:
        cleaned.append(str(p))
        print(f"  OK [{corner}] {p.relative_to(ASSETS)}")

print(f"\nToplam {len(cleaned)} gorselden Gemini watermark temizlendi.")
