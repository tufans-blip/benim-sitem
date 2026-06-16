# Assets — Tufan Sezer

## Wordmark (no image logo)

The brand has **no image logo**. The mark is live text in JetBrains Mono:

```html
<a class="logo" href="#top" style="font-family:var(--font-mono);font-size:13px;letter-spacing:.12em;color:var(--ts-ink);text-decoration:none">
  TUFAN<b style="color:var(--ts-amber)">SEZER</b> / AI·FILM
</a>
```

- `TUFAN` in `--ts-ink`, `SEZER` in `--ts-amber`, suffix `/ AI·FILM` inherits ink.
- Always uppercase, tracked `.12em`. Reproduce as text, never rasterize.

## Iconography

No icon font / SVG set / emoji. Icons are Unicode glyphs only:
`→` (CTA), `✕` (close), `●` (REC, animated), `▶` (play). The play control is a
1px amber circle wrapping a `▶`. See the ICONOGRAPHY section of the root `readme.md`.

## `work/` — portfolio imagery

Reference / product photography and AI character renders used as work thumbnails in
the portfolio UI kit. Warm, dramatic key light, high detail. Copied from
`portfolio/images/`. Filenames are slugged; originals were long.

| File | Subject |
|---|---|
| `b2.png` | Unmatched: Jurassic Park — board game (ad-film work) |
| `Wolverine.png` | Wolverine figure |
| `Transistor_RedFigurine_005.png` | Transistor — Red, vinyl figure |
| `mlp-chibis.jpg` | My Little Pony chibi series |
| `mondoid.jpg` | Melting Stripe — Mondoid vinyl figure |
| `gen-*.png` | AI-generated character renders |
| `abe-sapien.png` | Abe Sapien |
| `work-*.{png,jpg}`, `img-2411.jpg`, `r3-3868.jpg`, `unnamed-12.png` | misc work |
| `javier.jpeg` | portrait |

> **Showreel:** `portfolio/showreel.mp4` was too large to copy. The `ReelFrame`
> component falls back to a poster/placeholder; supply the mp4 to restore playback.
