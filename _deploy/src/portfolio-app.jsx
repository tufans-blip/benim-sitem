/* Portfolio UI kit — screen sections. Composes the DS components. Exports window.TS_App. */
const DS = window.TufanSezerDesignSystem_d584c6;
const { Button, Slate, Badge, FilterTab, Tag, Quote, ReelFrame, WorkCard } = DS;
const D = window.TS_DATA;

const wrap = { maxWidth: "var(--layout-max)", margin: "0 auto", padding: "0 var(--layout-gutter)" };

// Thumbnail (kartta dönen önizleme) için hafif WebM + MP4 fallback.
// iOS WebM'i desteklemezse veya önizleme webm'i henüz yoksa tarayıcı otomatik MP4'e düşer.
// Tam boy izleme (lightbox/showreel) ayrıca tam kaliteli MP4 kullanır — burada kalite düşmez.
function ThumbSources({ mp4 }) {
  const webm = mp4.replace(/\.mp4$/i, "-preview.webm");
  return (
    <React.Fragment>
      {D.webmReady ? <source src={webm} type="video/webm" /> : null}
      <source src={mp4} type="video/mp4" />
    </React.Fragment>
  );
}
function WebpImage({ src, alt = "", style, loading = "lazy", decoding = "async", defer = false }) {
  const webp = src.replace(/\.(jpe?g|png)$/i, ".webp");
  const hasWebp = typeof D === "object" && D.webpSet && D.webpSet[webp];
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(!defer);

  React.useEffect(() => {
    if (!defer || typeof window === "undefined" || !ref.current) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { setVisible(true); io.disconnect(); break; }
    }, { rootMargin: "400px 0px", threshold: 0.01 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [defer]);

  if (!visible) {
    return <div ref={ref} aria-hidden="true" style={{ width: "100%", height: "100%", background: "var(--ts-bg-sink)" }} />;
  }
  // If the build produced thumbs mapping, prefer the appropriate thumb
  const TS_THUMBS = typeof window !== "undefined" ? window.TS_THUMBS || {} : {};
  const entry = TS_THUMBS[src];
  const useThumb = entry ? (entry.thumb320 || entry.thumb480) : null;
  const srcForImg = useThumb ? useThumb : src;
  const hasSrcset = entry && entry.thumb480;
  const srcset = hasSrcset ? `${entry.thumb480} 480w, ${entry.thumb320} 320w` : (entry && entry.thumb320 ? entry.thumb320 : null);
  const sizes = hasSrcset ? "(max-width: 480px) 320px, 480px" : undefined;
  const wrapperStyle = { display: "block", width: "100%", height: "100%" };
  const picRef = React.useRef(null);
  if (entry && entry.lqip) {
    wrapperStyle.backgroundImage = `url(${entry.lqip})`;
    wrapperStyle.backgroundSize = "cover";
    wrapperStyle.backgroundPosition = "center";
    wrapperStyle.transition = "background-image .3s ease-out";
  }
  const handleLoad = React.useCallback(() => {
    if (picRef.current) picRef.current.style.backgroundImage = "none";
  }, []);
  return (
    <picture ref={picRef} style={wrapperStyle}>
      {srcset ? <source srcSet={srcset} sizes={sizes} type="image/webp" /> : (hasWebp ? <source srcSet={webp} type="image/webp" /> : null)}
      <img src={srcForImg} alt={alt} loading={loading} decoding={decoding} style={style} onLoad={handleLoad} />
    </picture>
  );
}
function AutoVideo({ poster, style, children }) {
  const ref = React.useRef(null);
  const [canLoad, setCanLoad] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const [saveData, setSaveData] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 640px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  React.useEffect(() => {
    if (typeof navigator === "undefined" || !navigator.connection) return;
    const conn = navigator.connection;
    const update = () => setSaveData(Boolean(conn.saveData));
    update();
    conn.addEventListener("change", update);
    return () => conn.removeEventListener("change", update);
  }, []);

  React.useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (typeof IntersectionObserver === "undefined") {
      setCanLoad(true);
      return;
    }
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          setCanLoad(true);
          break;
        }
      }
    }, { rootMargin: "300px 0px", threshold: 0.01 });
    io.observe(v);
    return () => io.disconnect();
  }, []);

  React.useEffect(() => {
    const v = ref.current;
    if (!v || !canLoad || isMobile || saveData) return;
    v.muted = true;
    v.defaultMuted = true;
    v.play().catch(() => {});
    return () => v.pause();
  }, [canLoad, isMobile, saveData]);

  const showVideo = canLoad && !isMobile && !saveData;
  return (
    <video ref={ref} poster={poster} muted loop playsInline preload={showVideo ? "metadata" : "none"} style={style}>
      {showVideo ? children : null}
    </video>
  );
}
const secHeadH2 = { fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--text-h2)", letterSpacing: "-.01em", color: "var(--ts-ink)", margin: "16px 0 0" };

function Nav() {
  const links = [["#isler","İşler"],["#yorumlar","Yorumlar"],["#araclar","Araçlar"],["#iletisim","İletişim"]];
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "linear-gradient(to bottom, rgba(20,17,14,.92), rgba(20,17,14,0))", backdropFilter: "blur(2px)" }}>
      <div style={{ ...wrap, padding: "20px var(--layout-gutter)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <a href="#top" style={{ fontFamily: "var(--font-mono)", fontSize: "13px", letterSpacing: ".12em", textDecoration: "none", color: "var(--ts-ink)" }}>
          TUFAN<b style={{ color: "var(--ts-amber)", fontWeight: 500 }}>SEZER</b> / AI·FILM
        </a>
        <ul style={{ display: "flex", gap: "28px", listStyle: "none", margin: 0, padding: 0 }} className="ts-navlinks">
          {links.map(([h,l]) => (
            <li key={h}><a href={h} style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: ".1em", textTransform: "uppercase", textDecoration: "none", color: "var(--ts-ink-dim)" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--ts-amber)"} onMouseLeave={e => e.currentTarget.style.color = "var(--ts-ink-dim)"}>{l}</a></li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function Hero({ onExpandReel, onPickCat }) {
  const cards = [
    { k: "reklam",   label: "A.İ FİLM ÇALIŞMALARI",   no: "01", top: "-9%",  left: "2%",  rot: -8, w: "430px", tone: "beige", video: "gas.mp4" },
    { k: "karakter", label: "FİGÜR · OYUNCAK SEKTÖRÜ", no: "02", top: "12%", left: "45%", rot: -2, w: "420px", tone: "beige", img: "assets/work/oyuncak-sektoru/harley/harley-thumb.png" },
    { k: "diger",    label: "DİĞER İŞLER",           no: "03", top: "45%", left: "0%",  rot: 7,  w: "344px", tone: "beige", img: "assets/work/sorcerer-mickey.jpg" },
    { k: "all",      label: "TÜMÜ",                  no: "04", top: "60%", left: "52%", rot: -4, w: "287px", tone: "beige", img: "assets/work/abe-poster.png" },
  ];
  const [topCard, setTopCard] = React.useState(null);
  return (
    <header id="top" style={{ minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", padding: "120px 0 60px" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "var(--letterbox)", background: "#000", zIndex: 2 }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "var(--letterbox)", background: "#000", zIndex: 2 }} />
      <div style={{ ...wrap, display: "grid", gridTemplateColumns: ".82fr 1.18fr", gap: "40px", alignItems: "center" }} className="ts-hero-grid">
        <div>
          <Slate>İstanbul · 2013'ten beri görsel üretim</Slate>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "var(--text-hero)", lineHeight: 1.0, letterSpacing: "-.02em", color: "var(--ts-ink)", margin: "20px 0 24px" }}>
            Karakterden kareye,<br /><span style={{ color: "var(--ts-ink)", borderBottom: "6px solid var(--ts-amber)", paddingBottom: "4px" }}>AI ile film</span> üretiyorum.
          </h1>
          <p style={{ fontFamily: "var(--font-body)", color: "var(--ts-ink-dim)", fontSize: "var(--text-lead)", maxWidth: "46ch", lineHeight: 1.6, marginBottom: "36px" }}>
            Karakter tasarımı, kısa reklam filmleri ve animasyon — <b style={{ color: "var(--ts-ink)", fontWeight: 600 }}>ComfyUI tabanlı, uçtan uca lokal prodüksiyon.</b> Konsepten render'a tek elden.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
            <Button variant="amber" href="#iletisim">Proje Konuşalım →</Button>
            <Button variant="ghost" href="#" onClick={(e) => { e.preventDefault(); onExpandReel(); }}>▶ Showreel'i İzle</Button>
          </div>
        </div>
        {/* Floating category cards */}
        <div style={{ position: "relative", aspectRatio: "1 / .92", minHeight: "780px" }} className="ts-hero-cards">
          {cards.map((c, i) => {
            return (
            <a key={c.k} href="#isler" onClick={() => onPickCat(c.k)}
              style={{ position: "absolute", top: c.top, left: c.left, width: c.w, display: "block",
                zIndex: topCard === c.k ? 10 : i + 1,
                padding: "14px 14px 18px", textDecoration: "none",
                background: "var(--card-bg, #e6dcc4)",
                border: "1px solid var(--card-line, rgba(0,0,0,.20))", borderRadius: "12px",
                boxShadow: "var(--card-shadow, 0 32px 70px rgba(0,0,0,.6))",
                transform: `rotate(${c.rot}deg)`,
                transition: "transform .35s cubic-bezier(.22,1,.36,1), border-color .25s, box-shadow .35s",
                willChange: "translate",
                animation: `tsHeroFloat ${3.4 + i * .5}s ease-in-out ${i * .45}s infinite alternate` }}
              onMouseEnter={e => { setTopCard(c.k); e.currentTarget.style.transform = "rotate(0deg) translateY(-8px) scale(1.04)"; e.currentTarget.style.borderColor = "var(--ts-amber)"; e.currentTarget.style.boxShadow = "var(--card-shadow-hover, 0 46px 95px rgba(0,0,0,.72))"; e.currentTarget.style.animationPlayState = "paused"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = `rotate(${c.rot}deg)`; e.currentTarget.style.borderColor = "var(--card-line, rgba(0,0,0,.20))"; e.currentTarget.style.boxShadow = "var(--card-shadow, 0 32px 70px rgba(0,0,0,.6))"; e.currentTarget.style.animationPlayState = "running"; }}>
              <span className="ts-card-grain"></span>
              <span style={{ display: "block", aspectRatio: "16 / 9", borderRadius: "8px", overflow: "hidden", background: "var(--ts-bg-sink)", marginBottom: "12px", border: "1px solid var(--card-line, rgba(0,0,0,.20))" }}>
                {c.video ? (
                  <AutoVideo style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", pointerEvents: "none" }}>
                    <ThumbSources mp4={c.video} />
                  </AutoVideo>
                ) : (
                  <WebpImage src={c.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                )}
              </span>
              <span style={{ display: "block", padding: "0 8px" }}>
                <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "13px", letterSpacing: ".22em", color: "var(--card-kicker, #a06a16)", marginBottom: "9px" }}>{c.no} · KATEGORİ</span>
                <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "clamp(13px, 1.15vw, 17px)", letterSpacing: ".16em", color: "var(--card-ink, #241d12)", whiteSpace: "nowrap" }}>{c.label}</span>
              </span>
            </a>
            );
          })}
        </div>
      </div>
      <style>{"@keyframes tsHeroFloat{0%{translate:0 -22px}100%{translate:0 22px}}@media(prefers-reduced-motion:reduce){.ts-hero-cards a{animation:none!important}}"}</style>
    </header>
  );
}

function FloatingCards({ works, onOpen, positions, overlay, aspect, showGuide }) {
  const [topCard, setTopCard] = React.useState(null);
  const [isMobile, setIsMobile] = React.useState(typeof window !== "undefined" && window.matchMedia("(max-width: 640px)").matches);
  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const fn = () => setIsMobile(mq.matches);
    fn();
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);
  // Mobilde geniş (16/9) figür kartlarını da dikey (4/5) yap — film sekmesindeki kartlar gibi.
  const wide = aspect === "16 / 9" && !isMobile;
  const cardAspect = wide ? "16 / 9" : (aspect === "16 / 9" ? "4 / 5" : (aspect || "4 / 5"));
  const rots = [-6, 4, -4, 5, -5, 3, -3, 6, -6, 4, -4, 5];
  const COLS = wide ? 4 : 3;
  const colLeft = wide ? [0, 24, 48, 72] : [1.5, 35, 68.5];
  // Aralıklar cqw (konteyner genişliğine oranlı) — mobilde kart küçülünce boşluk da küçülür.
  // Figür (4 sütun): temiz iki kademeli tuğla deseni — 1. ve 3. sütun hizalı, 2. ve 4. hafif düşük.
  const colOff = wide ? [0, 6, 0, 6] : [0, 13, 6];
  const STEP = wide ? 20 : 45, BASE = 2;
  const rows = Math.ceil(works.length / COLS);
  const containerH = (rows - 1) * STEP + Math.max(...colOff) + BASE + (wide ? 23 : 42);
  return (
    <div style={{ containerType: "inline-size", width: "100%" }}>
    <div className="ts-reel-cards" style={{ position: "relative", width: "100%", minHeight: containerH + "cqw" }}>
      {showGuide ? (
        <div aria-hidden="true" style={{ position: "absolute", inset: "-24px 0", zIndex: 90, pointerEvents: "none" }}>
          {/* Sol ışık */}
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "2px", borderLeft: "2px dashed var(--ts-amber)" }}></div>
          {/* Sağ ışık */}
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "2px", borderRight: "2px dashed var(--ts-amber)" }}></div>
          {/* Güvenli alan gölgesi (dışı çok hafif maskeli) */}
          <div style={{ position: "absolute", inset: 0, boxShadow: "inset 0 0 0 1px rgba(216,151,60,.10)" }}></div>
          {/* Etiket */}
          <div style={{ position: "absolute", top: "0", left: "50%", transform: "translate(-50%,-50%)",
            fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: ".12em", textTransform: "uppercase",
            color: "#1a1410", background: "var(--ts-amber)", padding: "5px 12px", borderRadius: "999px", whiteSpace: "nowrap" }}>
            Standart site sınırı · 1320px
          </div>
          <div style={{ position: "absolute", left: "6px", top: "6px", fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: ".1em", color: "var(--ts-amber)" }}>← sol kenar</div>
          <div style={{ position: "absolute", right: "6px", top: "6px", fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: ".1em", color: "var(--ts-amber)", textAlign: "right" }}>sağ kenar →</div>
        </div>
      ) : null}
      {works.map((w, i) => {
        let p;
        if (positions && positions[i]) {
          p = positions[i];
        } else {
          const col = i % COLS;
          const row = Math.floor(i / COLS);
          p = { top: (BASE + row * STEP + colOff[col]) + "cqw", left: colLeft[col] + "%", rot: rots[i % rots.length], w: wide ? "28%" : (overlay ? "31%" : "30%") };
        }
        return (
          <a key={w.id} href="#" onClick={(e) => { e.preventDefault(); onOpen(w); }}
            style={{ position: "absolute", top: p.top, left: p.left, width: p.w, display: "block",
              zIndex: topCard === w.id ? 99 : i + 1,
              padding: overlay ? 0 : "14px 14px 18px", textDecoration: "none",
              background: overlay ? "var(--ts-bg-sink)" : "var(--card-bg, #e6dcc4)",
              border: "1px solid " + (overlay ? "rgba(255,255,255,.14)" : "var(--card-line, rgba(0,0,0,.20))"),
              borderRadius: overlay ? "16px" : "12px", overflow: overlay ? "hidden" : "visible",
              boxShadow: "var(--card-shadow, 0 32px 70px rgba(0,0,0,.6))", transform: `rotate(${p.rot}deg)`,
              transition: "transform .35s cubic-bezier(.22,1,.36,1), border-color .25s, box-shadow .35s",
              willChange: "translate",
              animation: `tsHeroFloat ${3.4 + i * .5}s ease-in-out ${i * .45}s infinite alternate` }}
            onMouseEnter={e => { setTopCard(w.id); e.currentTarget.style.transform = "rotate(0deg) translateY(-8px) scale(1.04)"; e.currentTarget.style.borderColor = "var(--ts-amber)"; e.currentTarget.style.boxShadow = "var(--card-shadow-hover, 0 46px 95px rgba(0,0,0,.72))"; e.currentTarget.style.animationPlayState = "paused"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = `rotate(${p.rot}deg)`; e.currentTarget.style.borderColor = overlay ? "rgba(255,255,255,.14)" : "var(--card-line, rgba(0,0,0,.20))"; e.currentTarget.style.boxShadow = "var(--card-shadow, 0 32px 70px rgba(0,0,0,.6))"; e.currentTarget.style.animationPlayState = "running"; }}>
            {overlay ? (
              <span style={{ position: "relative", display: "block", width: "100%", aspectRatio: cardAspect, overflow: "hidden", background: "var(--ts-bg-sink)" }}>
                {w.video ? (
                  <AutoVideo poster={w.image} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}>
                    <ThumbSources mp4={w.videoSrc} />
                  </AutoVideo>
                ) : (
                  <WebpImage src={w.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                )}
                <span style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,6,5,.86) 0%, rgba(8,6,5,.42) 26%, transparent 52%)" }}></span>
                <span style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "0 22px 22px" }}>
                  <span style={{ display: "block", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: wide ? "clamp(6px, 1.3cqw, 15px)" : "clamp(10px, 2.3cqw, 28px)", letterSpacing: "-.01em", lineHeight: 1.1, color: "#fff", textShadow: "0 2px 14px rgba(0,0,0,.55)" }}>{w.title}</span>
                </span>
              </span>
            ) : (
              <React.Fragment>
                <span className="ts-card-grain"></span>
                <span style={{ display: "block", aspectRatio: "16 / 9", borderRadius: "8px", overflow: "hidden", background: "var(--ts-bg-sink)", marginBottom: "12px", border: "1px solid var(--card-line, rgba(0,0,0,.20))" }}>
                  {w.video ? (
                    <AutoVideo poster={w.image} style={{ width: "100%", height: "100%", objectFit: w.fit === "contain" || w.fit === "scale-down" ? "contain" : "cover", display: "block" }}>
                      <ThumbSources mp4={w.videoSrc} />
                    </AutoVideo>
                  ) : (
                    <WebpImage src={w.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  )}
                </span>
                <span style={{ display: "block", padding: "2px 8px 4px" }}>
                  <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: ".22em", textTransform: "uppercase", color: "var(--card-kicker, #a06a16)", marginBottom: "8px" }}>{w.meta}</span>
                  <span style={{ display: "block", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "19px", letterSpacing: "-.01em", lineHeight: 1.2, color: "var(--card-ink, #241d12)", marginBottom: w.desc ? "6px" : 0 }}>{w.title}</span>
                  {w.desc ? <span style={{ display: "block", fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: 1.5, color: "rgba(36,29,18,.72)" }}>{w.desc}</span> : null}
                </span>
              </React.Fragment>
            )}
          </a>
        );
      })}
      <style>{"@media(prefers-reduced-motion:reduce){.ts-reel-cards a{animation:none!important}}@media(max-width:640px){.ts-reel-cards a{animation:none!important}}"}</style>
    </div>
    </div>
  );
}

function LogoMarquee() {
  // İki renkli (krem silüet + koyu zemin) markalar şeridi.
  const logos = ["funko", "marvel", "disney", "dc", "cn", "kr", "p", "dhc", "pop"];
  const row = logos.concat(logos);
  return (
    <div style={{ margin: "0 0 52px" }}>
      <div className="ts-logo-marquee" style={{ position: "relative", overflow: "hidden", padding: "6px 0",
        borderTop: "1px solid var(--ts-line)", borderBottom: "1px solid var(--ts-line)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent)",
        maskImage: "linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent)" }}>
        <div className="ts-logo-track" style={{ display: "flex", alignItems: "center", gap: "72px", width: "max-content", paddingLeft: "72px", animation: "tsLogoScroll 42s linear infinite" }}>
          {row.map((n, i) => {
            const big = n === "disney";
            const dc = n === "dc";
            const dhc = n === "dhc";
            const cn = n === "cn";
            const med = n === "kr" || n === "p" || n === "pop";
            return (
            <img key={i} src={"assets/logos/mono/" + n + ".png"} alt="" aria-hidden="true" loading="lazy" decoding="async"
              style={{ height: big ? "59px" : dhc ? "70px" : dc ? "52px" : cn ? "48px" : med ? "58px" : "40px", width: "auto", maxWidth: big ? "280px" : "180px", objectFit: "contain", opacity: big ? 0.96 : 0.82, flex: "none", display: "block" }} />
            );
          })}
        </div>
        <style>{"@keyframes tsLogoScroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}.ts-logo-marquee:hover .ts-logo-track{animation-play-state:paused}.ts-logo-marquee img{transition:opacity .25s}.ts-logo-marquee img:hover{opacity:1}@media(prefers-reduced-motion:reduce){.ts-logo-track{animation:none!important}}"}</style>
      </div>
    </div>
  );
}

function WorkGrid({ onOpen, cat, setCat }) {
  const shown = D.works.filter(w => cat === "all" || w.cat === cat);
  const isFloating = cat === "reklam" || cat === "karakter";
  return (
    <section id="isler" style={{ padding: "var(--space-section) 0" }}>
      <div style={wrap}>
        <div style={{ marginBottom: "54px" }}>
          <Slate>Sahne 01 — Seçili İşler</Slate>
        </div>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "36px", alignItems: "center" }}>
          {D.filters.map(([k,v]) => <FilterTab key={k} active={cat===k} onClick={() => setCat(k)}>{v}</FilterTab>)}
        </div>
        {cat === "karakter" ? <LogoMarquee /> : null}
        {isFloating ? (
          <FloatingCards works={shown} onOpen={onOpen} overlay={true} aspect={cat === "karakter" ? "16 / 9" : "4 / 5"} showGuide={false} />
        ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "var(--grid-gap)" }} className="ts-works">
          {shown.map(w => (
            <WorkCard key={w.id} image={w.image} video={w.video} fit={w.fit} meta={w.meta} title={w.title} description={w.desc}
              href="#" onClick={(e) => { e.preventDefault(); onOpen(w); }} />
          ))}
        </div>
        )}
      </div>
    </section>
  );
}

function Quotes() {
  return (
    <section id="yorumlar" style={{ padding: "0 0 var(--space-section)" }}>
      <div style={wrap}>
        <div style={{ marginBottom: "54px" }}>
          <Slate>Sahne 02 — Müşteri Yorumları</Slate>
          <h2 style={secHeadH2}>Birlikte çalışanlar ne diyor</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "var(--grid-gap)" }} className="ts-quotes">
          {D.quotes.map((q,i) => <Quote key={i} name={q.name} role={q.role}>{q.text}</Quote>)}
        </div>
      </div>
    </section>
  );
}

function ToolsStrip() {
  return (
    <section id="araclar" style={{ padding: "70px 0", borderTop: "1px solid var(--ts-line)", borderBottom: "1px solid var(--ts-line)" }}>
      <div style={{ ...wrap, textAlign: "center" }}>
        <Slate align="center" tick={false}>Prodüksiyon Altyapısı</Slate>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "14px 34px", justifyContent: "center", alignItems: "center", marginTop: "30px" }}>
          {D.tools.map(t => <Tag key={t} variant="tool">{t}</Tag>)}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="iletisim" style={{ textAlign: "center", padding: "140px 0", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "var(--glow-amber)" }} />
      <div style={{ ...wrap, position: "relative" }}>
        <Slate align="center" tick={false}>Son Sahne</Slate>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "var(--text-display)", letterSpacing: "-.02em", color: "var(--ts-ink)", margin: "18px 0 14px" }}>
          Aklında bir<br />proje mi var?
        </h2>
        <p style={{ fontFamily: "var(--font-body)", color: "var(--ts-ink-dim)", maxWidth: "50ch", margin: "0 auto 40px", lineHeight: 1.6 }}>
          Karakter, reklam filmi, animasyon — fikrini anlat, nasıl üretileceğini birlikte planlayalım. Freelance projelere ve tam zamanlı fırsatlara açığım.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Button variant="amber" href="mailto:eposta@adresin.com">Bana Yaz →</Button>
          <Button variant="ghost" href="#">Instagram</Button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--ts-line)", padding: "28px 0" }}>
      <div style={{ ...wrap, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px",
        fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: ".1em", color: "var(--ts-ink-dim)", textTransform: "uppercase" }}>
        <span>© 2026 Tufan Sezer — İstanbul</span>
        <span>AI Artist · Filmmaker · Pipeline Builder</span>
      </div>
    </footer>
  );
}

function Lightbox({ item, onClose }) {
  const vref = React.useRef(null);
  const touchRef = React.useRef(null);
  const swipedRef = React.useRef(false);
  const [idx, setIdx] = React.useState(0);
  const [selected, setSelected] = React.useState(null);
  const gallery = (item && item.gallery && item.gallery.length) ? item.gallery : null;
  React.useEffect(() => { setIdx(0); setSelected(null); }, [item]);
  React.useEffect(() => {
    if (!item || !item.videoSrc) return;
    const v = vref.current;
    if (!v) return;
    v.currentTime = 0;
    v.muted = false;
    v.volume = 1;
    v.play().catch(() => { v.muted = true; v.play().catch(() => {}); });
    return () => { v.pause(); v.src = ""; v.load(); };
  }, [item]);
  const goRel = React.useCallback((d) => {
    if (!gallery) return;
    setSelected(s => (s == null ? s : Math.min(gallery.length - 1, Math.max(0, s + d))));
  }, [gallery]);
  React.useEffect(() => {
    if (!gallery) return;
    const onKey = e => {
      if (selected == null) return;
      if (e.key === "Escape") setSelected(null);
      else if (e.key === "ArrowRight") goRel(1);
      else if (e.key === "ArrowLeft") goRel(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [gallery, selected, goRel]);
  if (!item) return null;

  // ── Project gallery: tilted scrolling strip; click → big image center, strip blurred below ─
  if (gallery) {
    const big = selected != null;
    const navBtnStyle = (side) => ({ position: "absolute", top: "50%", [side]: "max(12px, 3vw)", transform: "translateY(-50%)", pointerEvents: "auto", zIndex: 3, width: "56px", height: "56px", borderRadius: "50%", border: "1px solid var(--ts-line)", background: "rgba(10,8,7,.55)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", color: "var(--ts-ink)", fontSize: "30px", lineHeight: 1, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", paddingBottom: "4px" });
    const TH_W = 320, TH_H = Math.round(TH_W * 9 / 16), GAP = 20, ROW_GAP = 20;
    const nRows = gallery.length > 8 ? 3 : 2; // ≤8 görsel → 2 sıra, >8 → 3 sıra
    const metaParts = item.meta.split("·").map(s => s.trim());
    // Each row: a distinct ordering (rotated offset + alternating reverse) of the same images.
    const rowOrder = (r) => {
      const off = Math.floor(gallery.length * r / nRows) + r;
      const idxs = gallery.map((_, k) => (k + off) % gallery.length);
      if (r % 2 === 1) idxs.reverse();
      return idxs;
    };
    const rowDur = (r) => Math.max(22, gallery.length * 6) * [1, 1.3, 0.85][r];
    const strip = (
      <div className="ts-galstrip" style={{ position: "absolute", top: "50%", left: "-30%", width: "160%", overflow: "visible", transform: "translateY(-50%) rotate(-5deg)", filter: big ? "blur(3px)" : "none", opacity: big ? .3 : 1, transition: "filter .35s, opacity .35s", maskImage: "linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent)", WebkitMaskImage: "linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent)", display: "flex", flexDirection: "column", gap: `${ROW_GAP}px` }}>
        {Array.from({ length: nRows }, (_, r) => {
          const loop = rowOrder(r).concat(rowOrder(r));
          const rev = r % 2 === 1; // row 0 → left, row 1 → right, row 2 → left
          return (
            <div key={r} style={{ overflow: "visible" }}>
              <div className="ts-track" style={{ display: "flex", gap: `${GAP}px`, width: "max-content", animation: `${rev ? "tsMarqueeRev" : "tsMarquee"} ${rowDur(r)}s linear infinite` }}>
                {loop.map((real, i) => {
                  const active = big && real === selected;
                  return (
                    <button key={i} onClick={(e) => { e.stopPropagation(); setSelected(real); }} aria-label={"Görsel " + (real + 1)}
                      style={{ flex: "0 0 auto", width: `${TH_W}px`, height: `${TH_H}px`, padding: 0, cursor: "pointer", borderRadius: "12px", overflow: "hidden",
                        border: "1px solid " + (active ? "var(--ts-amber)" : "var(--ts-line)"), background: "var(--ts-bg-sink)",
                        boxShadow: active ? "0 22px 50px rgba(0,0,0,.5)" : "0 12px 28px rgba(0,0,0,.4)", transition: "border-color .3s, box-shadow .3s" }}>
                      <WebpImage src={gallery[real]} alt="" defer={true} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
    return (
      <div style={{ position: "fixed", inset: 0, zIndex: 200, background: "#0a0807", display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <style>{"@keyframes tsMarquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}@keyframes tsMarqueeRev{from{transform:translateX(-50%)}to{transform:translateX(0)}}.ts-galstrip:hover .ts-track{animation-play-state:paused}.ts-galstrip:hover{filter:blur(0)!important;opacity:1!important}@keyframes tsFade{from{opacity:0;transform:scale(.985)}to{opacity:1;transform:none}}"}</style>
        <button onClick={onClose} style={{ position: "fixed", top: "24px", right: "28px", zIndex: 4, background: "rgba(10,8,7,.7)", backdropFilter: "blur(4px)", border: "1px solid var(--ts-line)", color: "var(--ts-ink)", fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: ".1em", padding: "10px 16px", cursor: "pointer", textTransform: "uppercase" }}>Kapat ✕</button>

        {/* Title */}
        <div style={{ textAlign: "center", padding: "72px 24px 0", flex: "0 0 auto", position: "relative", zIndex: 1, pointerEvents: "none" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(40px, 6vw, 88px)", lineHeight: .95, letterSpacing: "-.02em", color: "var(--ts-ink)", margin: 0, textTransform: "uppercase" }}>{item.title.split("—")[0].trim()}</h2>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: ".34em", textTransform: "uppercase", color: "var(--ts-amber)", marginTop: "14px" }}>{metaParts[metaParts.length - 1]} · {big ? `${String(selected + 1).padStart(2, "0")}/${String(gallery.length).padStart(2, "0")}` : `${String(gallery.length).padStart(2, "0")} GÖRSEL`}</div>
        </div>

        {/* Stage: strip stays mounted & centered (keeps scroll position + size); big image overlays on top */}
        <div onClick={(e) => { if (big && e.target === e.currentTarget) setSelected(null); }} style={{ flex: "1 1 auto", minHeight: 0, position: "relative", overflow: "hidden", display: "flex", alignItems: "center" }}>
          {strip}
          {big && (
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px 32px", pointerEvents: "none", zIndex: 2 }}>
              {selected > 0 && (
                <button onClick={(e) => { e.stopPropagation(); goRel(-1); }} aria-label="Önceki görsel" style={navBtnStyle("left")}>‹</button>
              )}
              <img key={gallery[selected]} src={gallery[selected]} alt={item.title} decoding="async" fetchpriority="high"
                onClick={() => { if (swipedRef.current) { swipedRef.current = false; return; } setSelected(null); }}
                onTouchStart={(e) => { touchRef.current = e.touches[0].clientX; swipedRef.current = false; }}
                onTouchEnd={(e) => { if (touchRef.current == null) return; const dx = e.changedTouches[0].clientX - touchRef.current; touchRef.current = null; if (Math.abs(dx) > 45) { swipedRef.current = true; goRel(dx < 0 ? 1 : -1); } }}
                style={{ maxWidth: "min(1000px, 88vw)", maxHeight: "82%", objectFit: "contain", borderRadius: "16px", border: "1px solid var(--ts-line)", background: "var(--ts-bg-sink)", boxShadow: "0 30px 80px rgba(0,0,0,.6)", animation: "tsFade .4s ease", cursor: "zoom-out", pointerEvents: "auto", display: "block", touchAction: "pan-y", userSelect: "none", WebkitUserSelect: "none" }} />
              {selected < gallery.length - 1 && (
                <button onClick={(e) => { e.stopPropagation(); goRel(1); }} aria-label="Sonraki görsel" style={navBtnStyle("right")}>›</button>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  // ── Single image / video ───────────────────────────────────────
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(10,8,6,.94)", display: "flex", alignItems: "center", justifyContent: "center", padding: "32px" }}>
      <button onClick={onClose} style={{ position: "absolute", top: "24px", right: "28px", background: "none", border: "1px solid var(--ts-line)", color: "var(--ts-ink)", fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: ".1em", padding: "10px 16px", cursor: "pointer", textTransform: "uppercase" }}>Kapat ✕</button>
      <div style={{ width: "min(960px,100%)" }} onClick={e => e.stopPropagation()}>
        {item.videoSrc ? (
          <video ref={vref} src={item.videoSrc} poster={item.image} controls autoPlay playsInline style={{ width: "100%", maxHeight: "76vh", objectFit: "contain", border: "1px solid var(--ts-line)", background: "#000", display: "block" }} />
        ) : (
          <img src={item.image} alt={item.title} decoding="async" style={{ width: "100%", maxHeight: "86vh", objectFit: "contain", border: "1px solid var(--ts-line)", background: "var(--ts-bg-sink)", display: "block" }} />
        )}
        <div style={{ marginTop: "14px", fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--ts-ink-dim)" }}>
          <span style={{ color: "var(--ts-amber)" }}>{item.title}</span> — {item.meta}
        </div>
      </div>
    </div>
  );
}

function ReelLightbox({ open, src, onClose }) {
  const vref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const v = vref.current;
    if (!v) return;
    v.currentTime = 0;
    v.muted = false;
    v.volume = 1;
    v.play().catch(() => { v.muted = true; v.play().catch(() => {}); });
    return () => { v.pause(); v.src = ""; v.load(); };
  }, [open]);
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 220, background: "rgba(10,8,6,.95)", display: "flex", alignItems: "center", justifyContent: "center", padding: "32px" }}>
      <button onClick={onClose} style={{ position: "absolute", top: "24px", right: "28px", background: "none", border: "1px solid var(--ts-line)", color: "var(--ts-ink)", fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: ".1em", padding: "10px 16px", cursor: "pointer", textTransform: "uppercase" }}>Kapat ✕</button>
      <div style={{ width: "min(1100px,100%)" }} onClick={e => e.stopPropagation()}>
        <video ref={vref} src={src} controls autoPlay playsInline style={{ width: "100%", maxHeight: "82vh", objectFit: "contain", border: "1px solid var(--ts-line)", background: "#000", display: "block" }} />
        <div style={{ marginTop: "14px", fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--ts-ink-dim)" }}>
          <span style={{ color: "var(--ts-amber)" }}>Showreel</span> — Tufan Sezer · 2026
        </div>
      </div>
    </div>
  );
}

function App() {
  const [lb, setLb] = React.useState(null);
  const [reelOpen, setReelOpen] = React.useState(false);
  const [cat, setCat] = React.useState("reklam");
  React.useEffect(() => {
    const onKey = e => { if (e.key === "Escape") { setLb(null); setReelOpen(false); } };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  return (
    <div className="ts-grain" style={{ background: "var(--ts-bg)", minHeight: "100vh" }}>
      <Nav />
      <Hero onExpandReel={() => setReelOpen(true)} onPickCat={setCat} />
      <WorkGrid onOpen={setLb} cat={cat} setCat={setCat} />
      <Quotes />
      <ToolsStrip />
      <FinalCTA />
      <Footer />
      <Lightbox item={lb} onClose={() => setLb(null)} />
      <ReelLightbox open={reelOpen} src="showreel.mp4" onClose={() => setReelOpen(false)} />
    </div>
  );
}

window.TS_App = App;
