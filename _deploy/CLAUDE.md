# Tufan Sezer Portfolio — Geliştirici Notları

## Deploy öncesi otomatik optimizasyon

Deploy komutu çalıştırılmadan önce aşağıdaki adımlar **her zaman ve sormadan** uygulanır.

### Yeni resimler (PNG / JPG / JPEG)
- `assets/` altındaki tüm yeni `.png`, `.jpg`, `.jpeg` dosyaları WebP'ye dönüştürülür (quality: 80).
- Orijinal dosya silinir, `.webp` uzantılı yeni dosya aynı yere yazılır.
- `data.js` ve `src/*.jsx` içindeki path referansları otomatik güncellenir.
- Araç: `sharp` (zaten `devDependencies` içinde).

### Yeni videolar (MP4)
- `assets/` veya kök dizindeki yeni `.mp4` dosyaları ffmpeg ile yeniden encode edilir.
- Ayarlar: `-c:v libx264 -crf 23 -preset slow -c:a copy -movflags +faststart`
- Orijinin üzerine yazılır.
- Araç: `ffmpeg` (sistemde kurulu).

### Kontrol yöntemi
Deploy öncesinde `dist/` içindeki dosyalar ile `assets/` ve kök dizin karşılaştırılır; `dist/` de olmayan yeni dosyalar optimize edilerek build'e dahil edilir.

---

## Deploy süreci

```bash
npm run build
netlify deploy --prod --dir=dist
```

Site: https://2funart.netlify.app
