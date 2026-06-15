/* @ds-bundle: {"format":3,"namespace":"TufanSezerDesignSystem_d584c6","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Slate","sourcePath":"components/actions/Slate.jsx"},{"name":"Badge","sourcePath":"components/controls/Badge.jsx"},{"name":"FilterTab","sourcePath":"components/controls/FilterTab.jsx"},{"name":"Tag","sourcePath":"components/controls/Tag.jsx"},{"name":"Quote","sourcePath":"components/display/Quote.jsx"},{"name":"ReelFrame","sourcePath":"components/display/ReelFrame.jsx"},{"name":"WorkCard","sourcePath":"components/display/WorkCard.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"b2211fa3e4a0","components/actions/Slate.jsx":"817db5d538ce","components/controls/Badge.jsx":"103a0c011115","components/controls/FilterTab.jsx":"33a5c09619e7","components/controls/Tag.jsx":"583034fec2e1","components/display/Quote.jsx":"c5075bf2de80","components/display/ReelFrame.jsx":"40a44fe48722","components/display/WorkCard.jsx":"855f87424edc","site/data.js":"c1bdc4eb203a","site/portfolio-app.js":"e065069eb2fe","site/tweaks-panel.jsx":"6591467622ed","ui_kits/portfolio/Sections.jsx":"3ad057da40e9","ui_kits/portfolio/Sections.standalone.jsx":"f057f4f42190","ui_kits/portfolio/data.js":"9e14bd857c6d","ui_kits/portfolio/data.standalone.js":"240ce7150b24","ui_kits/portfolio/ios-frame.jsx":"be3343be4b51","ui_kits/portfolio/tweaks-panel.jsx":"6591467622ed"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TufanSezerDesignSystem_d584c6 = window.TufanSezerDesignSystem_d584c6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — Tufan Sezer
 * Mono, uppercase, tracked, square. Two variants: solid amber + ghost.
 * The signature CTA pattern (with a trailing → arrow) is just `children`.
 */
function Button({
  variant = "amber",
  as = "a",
  size = "md",
  href,
  onClick,
  disabled = false,
  type,
  children,
  style,
  ...rest
}) {
  const Tag = as;
  const pad = size === "sm" ? "12px 20px" : size === "lg" ? "18px 32px" : "16px 28px";
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    fontFamily: "var(--font-mono)",
    fontSize: size === "sm" ? "12px" : "13px",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    fontWeight: 500,
    padding: pad,
    border: "1px solid transparent",
    borderRadius: "0",
    textDecoration: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition: "transform var(--dur-fast, .15s) var(--ease-out, ease), background var(--dur-base, .2s), color var(--dur-base, .2s), border-color var(--dur-base, .2s)",
    background: "transparent",
    whiteSpace: "nowrap"
  };
  const variants = {
    amber: {
      background: "var(--ts-amber)",
      color: "var(--ts-on-amber)"
    },
    ghost: {
      borderColor: "var(--ts-line)",
      color: "var(--ts-ink-dim)"
    },
    solid: {
      background: "var(--ts-ink)",
      color: "var(--ts-bg)"
    }
  };
  const onEnter = e => {
    if (disabled) return;
    if (variant === "amber") {
      e.currentTarget.style.background = "var(--ts-amber-hi)";
      e.currentTarget.style.transform = "translateY(-2px)";
    } else if (variant === "ghost") {
      e.currentTarget.style.borderColor = "var(--ts-amber)";
      e.currentTarget.style.color = "var(--ts-amber)";
    } else {
      e.currentTarget.style.transform = "translateY(-2px)";
    }
  };
  const onLeave = e => {
    e.currentTarget.style.background = variants[variant].background || "transparent";
    e.currentTarget.style.transform = "none";
    e.currentTarget.style.borderColor = variants[variant].borderColor || "transparent";
    e.currentTarget.style.color = variants[variant].color;
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: Tag === "a" ? href : undefined,
    type: Tag === "button" ? type || "button" : undefined,
    onClick: disabled ? undefined : onClick,
    "aria-disabled": disabled || undefined,
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    onMouseEnter: onEnter,
    onMouseLeave: onLeave
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/Slate.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Slate — the mono kicker label that precedes section headings.
 * An uppercase amber line with a short amber tick rule before it.
 * The brand's signature labelling device ("Sahne 01 — Seçili İşler").
 */
function Slate({
  children,
  align = "start",
  tick = true,
  color = "var(--ts-amber)",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "12px",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color,
      display: "flex",
      alignItems: "center",
      justifyContent: align === "center" ? "center" : "flex-start",
      gap: "12px",
      ...style
    }
  }, rest), tick && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: "34px",
      height: "1px",
      background: color,
      display: "inline-block",
      flex: "none"
    }
  }), children);
}
Object.assign(__ds_scope, { Slate });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Slate.jsx", error: String((e && e.message) || e) }); }

// components/controls/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small mono status/overlay chip.
 *  - "rec"   : animated red REC dot (live/recording status only)
 *  - "video" : amber-on-dim play badge overlaid on thumbnails ("▶ Video")
 *  - "amber" : solid amber chip
 */
function Badge({
  variant = "video",
  children,
  style,
  ...rest
}) {
  const base = {
    fontFamily: "var(--font-mono)",
    fontSize: "10px",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    padding: variant === "rec" ? "0" : "4px 8px",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    borderRadius: "0"
  };
  const variants = {
    rec: {
      color: "var(--ts-rec)",
      padding: 0,
      background: "transparent"
    },
    video: {
      background: "rgba(0,0,0,.7)",
      color: "var(--ts-amber)"
    },
    amber: {
      background: "var(--ts-amber)",
      color: "var(--ts-on-amber)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), variant === "rec" && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      animation: "ts-blink 1.4s steps(1) infinite"
    }
  }, "\u25CF"), children, /*#__PURE__*/React.createElement("style", null, `@keyframes ts-blink{50%{opacity:0}}`));
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/Badge.jsx", error: String((e && e.message) || e) }); }

// components/controls/FilterTab.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FilterTab — mono, square filter/segmented button used in the work grid.
 * Inactive = hairline ghost; active = solid amber. Warms to amber on hover.
 */
function FilterTab({
  active = false,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const base = {
    fontFamily: "var(--font-mono)",
    fontSize: "12px",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    background: "none",
    border: "1px solid var(--ts-line)",
    color: "var(--ts-ink-dim)",
    padding: "10px 18px",
    borderRadius: "0",
    cursor: "pointer",
    transition: "all var(--dur-base, .2s)"
  };
  const activeStyle = {
    background: "var(--ts-amber)",
    borderColor: "var(--ts-amber)",
    color: "var(--ts-on-amber)"
  };
  const hoverStyle = !active && hover ? {
    borderColor: "var(--ts-amber)",
    color: "var(--ts-amber)"
  } : null;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    "aria-pressed": active,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...(active ? activeStyle : null),
      ...hoverStyle,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { FilterTab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/FilterTab.jsx", error: String((e && e.message) || e) }); }

// components/controls/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — a quiet mono inline label. Two flavors:
 *  - "tool"  : plain mono text used in the production-tools strip (hover → amber)
 *  - "meta"  : the production-credit line on cards ("Klip · LTX 2.3 · 24fps")
 */
function Tag({
  variant = "tool",
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const shared = {
    fontFamily: "var(--font-mono)",
    textTransform: "uppercase",
    display: "inline-block"
  };
  const variants = {
    tool: {
      fontSize: "13px",
      letterSpacing: "0.1em",
      color: hover ? "var(--ts-amber)" : "var(--ts-ink-dim)",
      transition: "color var(--dur-base, .2s)",
      cursor: "default"
    },
    meta: {
      fontSize: "10.5px",
      letterSpacing: "0.12em",
      color: "var(--ts-amber-deep)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...shared,
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/Tag.jsx", error: String((e && e.message) || e) }); }

// components/display/Quote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Quote — a client testimonial card. Hairline panel with a big amber
 * opening quotation mark, the quote body, and a mono attribution line
 * where the name is amber.
 */
function Quote({
  children,
  name,
  role,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      border: "1px solid var(--ts-line)",
      background: "var(--ts-bg-raise)",
      borderRadius: "12px",
      padding: "30px 28px",
      margin: 0,
      position: "relative",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "52px",
      color: "var(--ts-amber)",
      lineHeight: 1,
      display: "block",
      marginBottom: "10px"
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "15.5px",
      color: "var(--ts-ink)",
      lineHeight: 1.6,
      margin: "0 0 20px"
    }
  }, children), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--ts-ink-dim)"
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--ts-amber)",
      fontWeight: 500
    }
  }, name), role ? ` — ${role}` : ""));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Quote.jsx", error: String((e && e.message) || e) }); }

// components/display/ReelFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ReelFrame — the cinematic showreel container. 16:9 dark well with a
 * hairline border, REC + label chrome along the top, and either a
 * <video>, a poster image, or a play-ring placeholder inside.
 */
function ReelFrame({
  src,
  poster,
  label = "SHOWREEL · 2026",
  rec = true,
  onExpand,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      aspectRatio: "16 / 9",
      background: "var(--ts-bg-raise)",
      border: "1px solid var(--ts-line)",
      borderRadius: "0",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "12px",
      left: "14px",
      right: "14px",
      display: "flex",
      justifyContent: "space-between",
      zIndex: 3,
      pointerEvents: "none"
    }
  }, rec ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "rec"
  }, "REC") : /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: "var(--ts-ink-dim)"
    }
  }, label)), src ? /*#__PURE__*/React.createElement("div", {
    onClick: onExpand,
    role: onExpand ? "button" : undefined,
    "aria-label": onExpand ? "Showreel'i büyüt" : undefined,
    style: {
      position: "absolute",
      inset: 0,
      cursor: onExpand ? "pointer" : "default"
    }
  }, /*#__PURE__*/React.createElement("video", {
    src: src,
    poster: poster,
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "metadata",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "contain",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "14px",
      background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,179,64,.10), transparent 70%), rgba(14,12,10," + (hover ? ".42" : ".18") + ")",
      transition: "background var(--dur-base, .2s)",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "72px",
      height: "72px",
      borderRadius: "50%",
      border: "1px solid var(--ts-amber)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--ts-amber)",
      fontSize: "20px",
      paddingLeft: "4px",
      background: "rgba(14,12,10,.35)",
      transform: hover ? "scale(1.08)" : "none",
      transition: "transform var(--dur-base, .2s)"
    }
  }, "\u25B6"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      letterSpacing: ".14em",
      color: "var(--ts-ink)",
      textTransform: "uppercase"
    }
  }, "B\xFCy\xFCt"))) : poster ? /*#__PURE__*/React.createElement("img", {
    src: poster,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "14px",
      background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,179,64,.12), transparent 70%), repeating-linear-gradient(45deg, transparent 0 18px, rgba(255,255,255,.015) 18px 19px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "72px",
      height: "72px",
      borderRadius: "50%",
      border: "1px solid var(--ts-amber)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--ts-amber)",
      fontSize: "20px",
      transform: hover ? "scale(1.08)" : "none",
      transition: "transform var(--dur-base, .2s)"
    }
  }, "\u25B6"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      letterSpacing: ".14em",
      color: "var(--ts-ink-dim)",
      textTransform: "uppercase"
    }
  }, "Showreel")));
}
Object.assign(__ds_scope, { ReelFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/ReelFrame.jsx", error: String((e && e.message) || e) }); }

// components/display/WorkCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * WorkCard — a portfolio work tile. Dark image well (16:10, cover),
 * hairline border that warms to amber + lifts on hover, mono meta credit,
 * display title, dim description. Optional video badge.
 */
function WorkCard({
  image,
  alt = "",
  meta,
  title,
  description,
  video = false,
  fit = "cover",
  href = "#",
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: "var(--ts-bg-raise)",
      border: `1px solid ${hover ? "var(--ts-amber-deep)" : "var(--ts-line)"}`,
      borderRadius: "12px",
      overflow: "hidden",
      textDecoration: "none",
      display: "block",
      transform: hover ? "translateY(-4px)" : "none",
      transition: "border-color var(--dur-slow, .25s), transform var(--dur-slow, .25s)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "16 / 10",
      overflow: "hidden",
      background: "var(--ts-bg-sink)"
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: fit,
      transform: hover ? "scale(1.04)" : "none",
      transition: "transform .4s var(--ease-out, ease)"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      letterSpacing: ".14em",
      color: "var(--ts-ink-faint)",
      textTransform: "uppercase"
    }
  }, "g\xF6rsel"), video && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: "10px",
      right: "10px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "video"
  }, "\u25B6 Video"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 18px 18px"
    }
  }, meta && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "8px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    variant: "meta"
  }, meta)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "19px",
      color: "var(--ts-ink)",
      margin: "0 0 6px",
      lineHeight: 1.2
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      color: "var(--ts-ink-dim)",
      lineHeight: 1.5,
      margin: 0
    }
  }, description)));
}
Object.assign(__ds_scope, { WorkCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/WorkCard.jsx", error: String((e && e.message) || e) }); }

// site/data.js
try { (() => {
/* Portfolio UI-kit content. Sets window.TS_DATA. */
window.TS_DATA = {
  // WebM önizleme dosyaları eklenince (her video için "x-preview.webm") bunu true yapın;
  // kartlar hafif WebM kullanır, iOS/destek yoksa otomatik MP4'e düşer. Tam boy izleme her zaman MP4 (tam kalite).
  webmReady: false,
  works: [{
    id: "benzin",
    cat: "reklam",
    video: true,
    videoSrc: "showreel.mp4",
    image: "assets/work/javier.jpeg",
    fit: "scale-down",
    meta: "Klip · LTX 2.3 · 24fps",
    title: "Benzin İstasyonu — Animasyon Kısa Film",
    desc: "İki karakterli, kilitli kamera sinematik kısa. Karakter tasarımından lip-sync'e tam pipeline."
  }, {
    id: "kidrobot",
    cat: "reklam",
    video: true,
    videoSrc: "dog.mp4",
    image: "assets/work/dog-poster.png",
    fit: "contain",
    meta: "Reklam · LTX 2.3 · 24fps",
    title: "Dog — Karakter Reklamı",
    desc: "Köpek karakterli kısa reklam filmi. Lip-sync ve animasyon tam pipeline."
  }, {
    id: "donald",
    cat: "reklam",
    video: true,
    videoSrc: "bunnyskate.mp4",
    image: "assets/work/bunnyskate-poster.png",
    meta: "Reklam · LTX 2.3 · 24fps",
    title: "BunnySkate — Reklam Filmi",
    desc: "Kaykaylı karakter reklam filmi. Hareket ve sahne ışığı uçtan uca AI pipeline ile."
  }, {
    id: "keyblade",
    cat: "reklam",
    video: true,
    videoSrc: "nesquik.mp4",
    image: "assets/work/nesquik-poster.png",
    fit: "contain",
    meta: "Reklam · LTX 2.3 · 24fps",
    title: "Nesquik — Ürün Reklamı",
    desc: "Marka ürün reklamı için sinematik kısa. Karakter ve ürün kurgusu tek elden."
  }, {
    id: "toys",
    cat: "reklam",
    video: true,
    videoSrc: "toys.mp4",
    image: "assets/work/toys-poster.png",
    meta: "Reklam · LTX 2.3 · 24fps",
    title: "ToyS — Koleksiyon Figür Reklamı",
    desc: "Premium koleksiyon figürü için sinematik ürün filmi. Sahne ışığı ve materyal çalışması AI pipeline ile."
  }, {
    id: "wolverine",
    cat: "karakter",
    image: "assets/work/oyuncak-sektoru/Wolverine.png",
    gallery: ["assets/work/oyuncak-sektoru/Wolverine.png", "assets/work/oyuncak-sektoru/wolverine/w2.png", "assets/work/oyuncak-sektoru/wolverine/w3.png", "assets/work/oyuncak-sektoru/wolverine/w4.png", "assets/work/oyuncak-sektoru/wolverine/w5.png", "assets/work/oyuncak-sektoru/wolverine/w6.png", "assets/work/oyuncak-sektoru/wolverine/w7.png", "assets/work/oyuncak-sektoru/wolverine/w8.png", "assets/work/oyuncak-sektoru/wolverine/w9.png", "assets/work/oyuncak-sektoru/wolverine/p1.jpg", "assets/work/oyuncak-sektoru/wolverine/p2.jpg"],
    meta: "Karakter · Figür",
    title: "Wolverine",
    desc: "Mondo 1/6 figürü; alternatif baş, el ve aksesuar setiyle çok açılı ürün galerisi."
  }, {
    id: "transistor",
    cat: "karakter",
    image: "assets/work/oyuncak-sektoru/Transistor_RedFigurine_005.png",
    gallery: ["assets/work/oyuncak-sektoru/Transistor_RedFigurine_005.png", "assets/work/oyuncak-sektoru/red/r1.png", "assets/work/oyuncak-sektoru/red/r2.png", "assets/work/oyuncak-sektoru/red/r3.png", "assets/work/oyuncak-sektoru/red/r6.png", "assets/work/oyuncak-sektoru/red/r7.png", "assets/work/oyuncak-sektoru/red/slide.jpg", "assets/work/oyuncak-sektoru/red/latest.png", "assets/work/oyuncak-sektoru/red/c1.png", "assets/work/oyuncak-sektoru/red/c2.png", "assets/work/oyuncak-sektoru/red/c3.png"],
    meta: "Karakter · Vinyl Figür",
    title: "Transistor — Red",
    desc: "Kutulu koleksiyon figürü ve ambalaj görseli; çok açılı detay galerisi."
  }, {
    id: "mlp",
    cat: "karakter",
    image: "assets/work/oyuncak-sektoru/mlp-chibis.jpg",
    gallery: ["assets/work/oyuncak-sektoru/mlp-chibis.jpg", "assets/work/oyuncak-sektoru/mlp/feature.jpg", "assets/work/oyuncak-sektoru/mlp/group.jpg"],
    meta: "Karakter · Chibi Serisi",
    title: "My Little Pony Chibis",
    desc: "WeLoveFine chibi serisi; karakter ve grup lansman görselleri."
  }, {
    id: "mondoid",
    cat: "karakter",
    image: "assets/work/oyuncak-sektoru/mondoid.jpg",
    gallery: ["assets/work/oyuncak-sektoru/mondoid.jpg", "assets/work/oyuncak-sektoru/mondoids/melting-1.jpg", "assets/work/oyuncak-sektoru/mondoids/melting-2.jpg", "assets/work/oyuncak-sektoru/mondoids/melting-3.jpg", "assets/work/oyuncak-sektoru/mondoids/raptor-1.jpg", "assets/work/oyuncak-sektoru/mondoids/raptor-2.jpg", "assets/work/oyuncak-sektoru/mondoids/trex-1.jpg", "assets/work/oyuncak-sektoru/mondoids/trex-2.jpg", "assets/work/oyuncak-sektoru/mondoids/melting-4.jpg", "assets/work/oyuncak-sektoru/mondoids/vaultboy.jpg", "assets/work/oyuncak-sektoru/mondoids/vaulthand.jpg", "assets/work/oyuncak-sektoru/mondoids/gremlins.png", "assets/work/oyuncak-sektoru/mondoids/caco-turn.png", "assets/work/oyuncak-sektoru/mondoids/caco.png", "assets/work/oyuncak-sektoru/mondoids/base.png", "assets/work/oyuncak-sektoru/mondoids/mb1.jpg", "assets/work/oyuncak-sektoru/mondoids/mb2.jpg", "assets/work/oyuncak-sektoru/mondoids/r2293.jpg", "assets/work/oyuncak-sektoru/mondoids/r2297.jpg", "assets/work/oyuncak-sektoru/mondoids/key.png", "assets/work/oyuncak-sektoru/mondoids/p1.jpg", "assets/work/oyuncak-sektoru/mondoids/p2.jpg", "assets/work/oyuncak-sektoru/mondoids/p3.jpg", "assets/work/oyuncak-sektoru/mondoids/p4.jpg"],
    meta: "Karakter · Vinyl Figür",
    title: "Mondoids",
    desc: "Materyal ve yüzey çalışması ön planda vinyl figür."
  }, {
    id: "abe",
    cat: "karakter",
    image: "assets/work/abe-sapien.png",
    gallery: ["assets/work/abe-poster.png", "assets/work/abe-sapien.png", "assets/work/oyuncak-sektoru/abe/abe-1.jpg", "assets/work/oyuncak-sektoru/abe/abe-4.jpg", "assets/work/oyuncak-sektoru/abe/abe-9.jpg", "assets/work/oyuncak-sektoru/abe/abe-footer.png", "assets/work/oyuncak-sektoru/abe/p1.png", "assets/work/oyuncak-sektoru/abe/p2.png", "assets/work/oyuncak-sektoru/abe/p3.png"],
    meta: "Konsept · Karakter",
    title: "Abe Sapien",
    desc: "Konsept render, soğuk film-grade tamamlayıcı tonlar."
  }, {
    id: "gen2",
    cat: "karakter",
    image: "assets/work/shadowed-kingdom.png",
    gallery: ["assets/work/shadowed-kingdom.png", "assets/work/oyuncak-sektoru/shadowed/sk1.jpg", "assets/work/oyuncak-sektoru/shadowed/sk2.png", "assets/work/oyuncak-sektoru/shadowed/sk3.jpg", "assets/work/oyuncak-sektoru/shadowed/sk4.jpg", "assets/work/oyuncak-sektoru/shadowed/sk5.png", "assets/work/oyuncak-sektoru/shadowed/sk6.png", "assets/work/oyuncak-sektoru/shadowed/sk7.png", "assets/work/oyuncak-sektoru/shadowed/sk8.png", "assets/work/oyuncak-sektoru/shadowed/sk9.png", "assets/work/oyuncak-sektoru/shadowed/sk10.png"],
    meta: "Tabletop Game Figür · Disney",
    title: "The Shadowed Kingdom",
    desc: "Disney karakterlerinden tabletop oyun figür serisi; konsept ve render galerisi."
  }, {
    id: "breezly",
    cat: "karakter",
    image: "assets/work/oyuncak-sektoru/breezly-pop.jpg",
    gallery: ["assets/work/oyuncak-sektoru/pop/breezly.jpg", "assets/work/oyuncak-sektoru/pop/topcat.jpg", "assets/work/oyuncak-sektoru/pop/lippy-lion.jpg", "assets/work/oyuncak-sektoru/pop/hardy-har-har.jpg", "assets/work/oyuncak-sektoru/pop/metallica-james.jpg", "assets/work/oyuncak-sektoru/pop/metallica-lars.jpg", "assets/work/oyuncak-sektoru/pop/metallica-kirk.jpg", "assets/work/oyuncak-sektoru/pop/metallica-robert.jpg", "assets/work/oyuncak-sektoru/pop/elf-buddy.jpg", "assets/work/oyuncak-sektoru/pop/elf-jovie.jpg", "assets/work/oyuncak-sektoru/pop/elf-papa.jpg", "assets/work/oyuncak-sektoru/pop/horror-norman.jpg", "assets/work/oyuncak-sektoru/pop/horror-annabelle.jpg", "assets/work/oyuncak-sektoru/pop/blackhole-maximillian.jpg", "assets/work/oyuncak-sektoru/pop/blackhole-vincent.jpg", "assets/work/oyuncak-sektoru/pop/figment.jpg", "assets/work/oyuncak-sektoru/pop/wedge-antilles.jpg", "assets/work/oyuncak-sektoru/pop/zack-ryder.jpg"],
    meta: "Funko · Vinyl Figür",
    title: "Pop!",
    desc: "Kutulu vinyl figür ve ambalaj görseli; stüdyo ışığıyla ürün çekimi. Seri galerisi."
  }, {
    id: "thundercats-diorama",
    cat: "karakter",
    image: "assets/work/oyuncak-sektoru/funko-thundercats.jpeg",
    gallery: ["assets/work/oyuncak-sektoru/funko-thundercats.jpeg", "assets/work/oyuncak-sektoru/thundercats/tc-1.jpg", "assets/work/oyuncak-sektoru/thundercats/tc-2.jpg", "assets/work/oyuncak-sektoru/thundercats/tc-3.jpg", "assets/work/oyuncak-sektoru/thundercats/tc-4.jpg", "assets/work/oyuncak-sektoru/thundercats/tc-5.jpg", "assets/work/oyuncak-sektoru/thundercats/tc-6.jpg", "assets/work/oyuncak-sektoru/thundercats/tc-7.jpg", "assets/work/oyuncak-sektoru/thundercats/tc-8.jpg", "assets/work/oyuncak-sektoru/thundercats/tc-9.jpg", "assets/work/oyuncak-sektoru/thundercats/tc-10.jpg", "assets/work/oyuncak-sektoru/thundercats/tc-11.jpg", "assets/work/oyuncak-sektoru/thundercats/tc-12.jpg", "assets/work/oyuncak-sektoru/thundercats/p1.png", "assets/work/oyuncak-sektoru/thundercats/p2.png", "assets/work/oyuncak-sektoru/thundercats/p3.png"],
    meta: "Figür · Diorama",
    title: "ThunderCats — Diorama",
    desc: "Seri lansman görseli, sahne dioraması ve kompozisyon."
  }, {
    id: "nbc",
    cat: "karakter",
    image: "assets/work/oyuncak-sektoru/dotakin/main.jpg",
    gallery: ["assets/work/oyuncak-sektoru/dotakin/main.jpg", "assets/work/oyuncak-sektoru/dotakin/group.jpg", "assets/work/oyuncak-sektoru/dotakin/s1.jpg", "assets/work/oyuncak-sektoru/dotakin/s3.jpg", "assets/work/oyuncak-sektoru/dotakin/p1.png", "assets/work/oyuncak-sektoru/dotakin/p2.png", "assets/work/oyuncak-sektoru/dotakin/p3.png", "assets/work/oyuncak-sektoru/dotakin/p4.png", "assets/work/oyuncak-sektoru/dotakin/p5.png", "assets/work/oyuncak-sektoru/dotakin/p6.png"],
    meta: "Figür · Seri",
    title: "Dotakin",
    desc: "Dotakins Series 2 blind-box serisi; karakter seti ve ambalaj galerisi."
  }, {
    id: "chibi-villain",
    cat: "karakter",
    image: "assets/work/oyuncak-sektoru/nightmare/nbc-thumb.jpg",
    gallery: ["assets/work/oyuncak-sektoru/nightmare/nbc-group.jpg", "assets/work/oyuncak-sektoru/nightmare/nbc-behemoth.jpg", "assets/work/oyuncak-sektoru/nightmare/nbc-mayor.jpg", "assets/work/oyuncak-sektoru/nightmare/nbc-zero.jpg", "assets/work/oyuncak-sektoru/nightmare/nbc-jack.png", "assets/work/oyuncak-sektoru/nightmare/nbc-finkelstein.png", "assets/work/oyuncak-sektoru/nightmare/nbc-extra1.jpg", "assets/work/oyuncak-sektoru/nightmare/nbc-s1.png", "assets/work/oyuncak-sektoru/nightmare/nbc-s2.png", "assets/work/oyuncak-sektoru/nightmare/nbc-s3.png", "assets/work/oyuncak-sektoru/nightmare/p1.png", "assets/work/oyuncak-sektoru/nightmare/p2.png", "assets/work/oyuncak-sektoru/nightmare/p3.png", "assets/work/oyuncak-sektoru/nightmare/p4.png", "assets/work/oyuncak-sektoru/nightmare/p5.png"],
    meta: "Figür · Seri",
    title: "Nightmare Before Christmas",
    desc: "Tim Burton evreninden karakter seti; tutarlı palet ve yüzey çalışması."
  }, {
    id: "dragon",
    cat: "karakter",
    image: "assets/work/oyuncak-sektoru/dragon/dragon-thumb.png",
    gallery: ["assets/work/oyuncak-sektoru/dragon/d1.png", "assets/work/oyuncak-sektoru/dragon/d4.png", "assets/work/oyuncak-sektoru/dragon/d5.png", "assets/work/oyuncak-sektoru/dragon/d7.png", "assets/work/oyuncak-sektoru/dragon/d8.png", "assets/work/oyuncak-sektoru/dragon/d9.png", "assets/work/oyuncak-sektoru/dragon/d12.png", "assets/work/oyuncak-sektoru/dragon/d16.png", "assets/work/oyuncak-sektoru/dragon/d17.png", "assets/work/oyuncak-sektoru/dragon/d19.png", "assets/work/oyuncak-sektoru/dragon/d3d.png", "assets/work/oyuncak-sektoru/dragon/hero.png", "assets/work/oyuncak-sektoru/dragon/p1.png", "assets/work/oyuncak-sektoru/dragon/p2.png", "assets/work/oyuncak-sektoru/dragon/p3.png"],
    meta: "Figür · Heykel",
    title: "Ice Dragon — Dark Horse",
    desc: "Game of Thrones buz ejderhası heykeli; çok açılı detay galerisi."
  }, {
    id: "harley",
    cat: "karakter",
    image: "assets/work/oyuncak-sektoru/harley/h1.jpg",
    gallery: ["assets/work/oyuncak-sektoru/harley/h1.jpg", "assets/work/oyuncak-sektoru/harley/h2.jpg", "assets/work/oyuncak-sektoru/harley/h3.jpg", "assets/work/oyuncak-sektoru/harley/h4.jpg", "assets/work/oyuncak-sektoru/harley/h5.jpg", "assets/work/oyuncak-sektoru/harley/h6.jpg"],
    meta: "Figür · Art Figür",
    title: "Harley Quinn — Art Figür",
    desc: "Kidrobot art figürü; renk ve poz detay galerisi."
  }, {
    id: "gorillaz",
    cat: "karakter",
    image: "assets/work/oyuncak-sektoru/gorillaz/front.jpg",
    gallery: ["assets/work/oyuncak-sektoru/gorillaz/front.jpg", "assets/work/oyuncak-sektoru/gorillaz/murdoc.png", "assets/work/oyuncak-sektoru/gorillaz/noodle-head.png", "assets/work/oyuncak-sektoru/gorillaz/noodle1.png", "assets/work/oyuncak-sektoru/gorillaz/noodle2.png", "assets/work/oyuncak-sektoru/gorillaz/wip1.png"],
    meta: "Karakter · Figür",
    title: "Gorillaz",
    desc: "Gorillaz grup figürleri; karakter sculpt ve turnaround çalışmaları."
  }, {
    id: "jp",
    cat: "karakter",
    image: "assets/work/oyuncak-sektoru/jp/b2.png",
    gallery: ["assets/work/oyuncak-sektoru/jp/b2.png", "assets/work/oyuncak-sektoru/jp/scene.png", "assets/work/oyuncak-sektoru/jp/arnold.png", "assets/work/oyuncak-sektoru/jp/worker.png", "assets/work/oyuncak-sektoru/jp/b.png", "assets/work/oyuncak-sektoru/jp/untitled.png", "assets/work/oyuncak-sektoru/jp/p1.png", "assets/work/oyuncak-sektoru/jp/p2.png", "assets/work/oyuncak-sektoru/jp/p3.png", "assets/work/oyuncak-sektoru/jp/p4.png", "assets/work/oyuncak-sektoru/jp/p5.png", "assets/work/oyuncak-sektoru/jp/p6.png"],
    meta: "Mondo Games · Minyatür",
    title: "Jurassic Park — Unmatched",
    desc: "Unmatched: Jurassic Park masa oyunu minyatürleri; karakter ve T-Rex sculpt çalışmaları."
  }, {
    id: "avatar",
    cat: "karakter",
    image: "assets/work/oyuncak-sektoru/avatar/zuko.png",
    gallery: ["assets/work/oyuncak-sektoru/avatar/zuko.png", "assets/work/oyuncak-sektoru/avatar/katara.png", "assets/work/oyuncak-sektoru/avatar/aang.png", "assets/work/oyuncak-sektoru/avatar/zuko2.png", "assets/work/oyuncak-sektoru/avatar/zuko3.png", "assets/work/oyuncak-sektoru/avatar/katara2.png", "assets/work/oyuncak-sektoru/avatar/katara-bw.png", "assets/work/oyuncak-sektoru/avatar/g1.png", "assets/work/oyuncak-sektoru/avatar/g2.png", "assets/work/oyuncak-sektoru/avatar/g3.png", "assets/work/oyuncak-sektoru/avatar/g4.png"],
    meta: "Karakter · Figür",
    title: "Avatar: Son Hava Bükücü",
    desc: "Zuko, Katara ve Aang figürleri; ateş bükme efektiyle çok açılı turnaround."
  }, {
    id: "simpsons",
    cat: "karakter",
    image: "assets/work/oyuncak-sektoru/simpsons/homer.png",
    gallery: ["assets/work/oyuncak-sektoru/simpsons/homer.png", "assets/work/oyuncak-sektoru/simpsons/marge.png", "assets/work/oyuncak-sektoru/simpsons/devil-flanders.png", "assets/work/oyuncak-sektoru/simpsons/alien-president.png", "assets/work/oyuncak-sektoru/simpsons/radioactive-man.png", "assets/work/oyuncak-sektoru/simpsons/moomoo-homer.png", "assets/work/oyuncak-sektoru/simpsons/drederick.png", "assets/work/oyuncak-sektoru/simpsons/mcbain-commando.png", "assets/work/oyuncak-sektoru/simpsons/mcbain-cop.png", "assets/work/oyuncak-sektoru/simpsons/chef.png", "assets/work/oyuncak-sektoru/simpsons/skowie.png", "assets/work/oyuncak-sektoru/simpsons/dna2.png", "assets/work/oyuncak-sektoru/simpsons/billy-troy.png", "assets/work/oyuncak-sektoru/simpsons/bunny-troy.png", "assets/work/oyuncak-sektoru/simpsons/group.jpg"],
    meta: "Karakter · Figür",
    title: "The Simpsons — Korku Evi",
    desc: "Treehouse of Horror temalı Simpsons figür serisi; renkli karakter tasarımları."
  }, {
    id: "dino",
    cat: "karakter",
    image: "assets/work/oyuncak-sektoru/dino/c1.png",
    gallery: ["assets/work/oyuncak-sektoru/dino/c1.png", "assets/work/oyuncak-sektoru/dino/c2.png", "assets/work/oyuncak-sektoru/dino/c3.png", "assets/work/oyuncak-sektoru/dino/d1.png", "assets/work/oyuncak-sektoru/dino/d2.png", "assets/work/oyuncak-sektoru/dino/d3.png"],
    meta: "A.İ · 3D Baskı",
    title: "Dino",
    desc: "Stilize dino figürü; A.İ konsept ve resin baskı çalışması."
  }, {
    id: "vale",
    cat: "karakter",
    image: "assets/work/oyuncak-sektoru/vale/v1.png",
    gallery: ["assets/work/oyuncak-sektoru/vale/v1.png", "assets/work/oyuncak-sektoru/vale/v2.png", "assets/work/oyuncak-sektoru/vale/v3.png", "assets/work/oyuncak-sektoru/vale/p1.jpg", "assets/work/oyuncak-sektoru/vale/p2.jpg"],
    meta: "Karakter · Figür",
    title: "Vale — Barbar",
    desc: "Barbar savaşçı figürü; konsept ve ürün görselleri."
  }, {
    id: "r3",
    cat: "diger",
    image: "assets/work/r3-3868.jpg",
    meta: "Ürün · Görsel",
    title: "Ürün Çekimi",
    desc: "Stüdyo zemininde ürün görseli."
  }, {
    id: "anit-heykel",
    cat: "diger",
    image: "assets/work/diger-isler/install2.jpg",
    gallery: ["assets/work/diger-isler/install2.jpg", "assets/work/diger-isler/s-fig1.png", "assets/work/diger-isler/s-fig2.png", "assets/work/diger-isler/s-fig3.png", "assets/work/diger-isler/r3.jpg", "assets/work/diger-isler/s-horse1.png", "assets/work/diger-isler/s-horse2.png", "assets/work/diger-isler/s-horse3.png", "assets/work/diger-isler/s-horse4.png", "assets/work/diger-isler/s-horse5.png", "assets/work/diger-isler/s-horse6.png", "assets/work/diger-isler/r2.jpg", "assets/work/diger-isler/install3.jpg", "assets/work/diger-isler/install4.jpg", "assets/work/diger-isler/r1.jpg", "assets/work/diger-isler/r4.jpg", "assets/work/diger-isler/r5.jpg", "assets/work/diger-isler/install1.jpg", "assets/work/diger-isler/02.jpg"],
    meta: "Kamusal · Heykel & Anıt",
    title: "Anıtsal Heykel Çalışmaları",
    desc: "Kamusal anıt heykeller — klasik savaşçı, atlı figür ve zafer quadriga'sı; ZBrush sculpt'tan döküm ve montaja."
  }, {
    id: "w8",
    cat: "diger",
    image: "assets/work/oyuncak-sektoru/mugs/predator.png",
    gallery: ["assets/work/oyuncak-sektoru/mugs/serpent.jpg", "assets/work/oyuncak-sektoru/mugs/predator.png", "assets/work/oyuncak-sektoru/mugs/mickey.jpg", "assets/work/oyuncak-sektoru/mugs/modok.jpg", "assets/work/oyuncak-sektoru/mugs/scrooge.png", "assets/work/oyuncak-sektoru/mugs/r7268.jpg", "assets/work/oyuncak-sektoru/mugs/r3201.jpg", "assets/work/oyuncak-sektoru/mugs/r1982.jpg", "assets/work/oyuncak-sektoru/mugs/m8.jpg", "assets/work/oyuncak-sektoru/mugs/m11.jpg", "assets/work/oyuncak-sektoru/mugs/m12.jpg", "assets/work/oyuncak-sektoru/mugs/m14.jpg", "assets/work/oyuncak-sektoru/mugs/ariel.jpg", "assets/work/oyuncak-sektoru/mugs/mikem.png", "assets/work/oyuncak-sektoru/mugs/predator-turn.png", "assets/work/oyuncak-sektoru/mugs/rev.png", "assets/work/oyuncak-sektoru/mugs/spf.png", "assets/work/oyuncak-sektoru/mugs/img6563.jpg", "assets/work/oyuncak-sektoru/mugs/img6662.jpg", "assets/work/oyuncak-sektoru/mugs/r3868b.jpg"],
    meta: "Ceramics · Mugs",
    title: "Tiki Mugs",
    desc: "Seramik tiki mug koleksiyonu; tasarım, turnaround ve üretim görselleri."
  }, {
    id: "img2411",
    cat: "karakter",
    image: "assets/work/oyuncak-sektoru/rickmorti/rm-1.jpg",
    gallery: ["assets/work/oyuncak-sektoru/rickmorti/rm-1.jpg", "assets/work/oyuncak-sektoru/rickmorti/rm-2.png", "assets/work/oyuncak-sektoru/rickmorti/rm-3.png", "assets/work/oyuncak-sektoru/rickmorti/rm-4.png", "assets/work/oyuncak-sektoru/rickmorti/rm-5.jpg", "assets/work/oyuncak-sektoru/rickmorti/rm-6.png", "assets/work/oyuncak-sektoru/rickmorti/rm-7.png", "assets/work/oyuncak-sektoru/rickmorti/rm-8.png", "assets/work/oyuncak-sektoru/rickmorti/rm-9.png"],
    meta: "Mondo · Heykel",
    title: "Rick&Morti",
    desc: "Mondo özel heykeli; turntable render seçkisi ve stüdyo ürün çekimi."
  }],
  quotes: [{
    name: "Deniz Aksoy",
    role: "Reklam Filmi Projesi",
    text: "Teslim hızı ve revizyon süreci kusursuzdu. Brief'i tek seferde yakaladı, sonuç beklentimizin çok üstündeydi."
  }, {
    name: "Mert Çelik",
    role: "Karakter Tasarımı",
    text: "Karakterin yüz ifadeleri tam istediğimiz gibiydi. Pipeline'ı kendi kuruyor olması süreci inanılmaz hızlandırdı."
  }, {
    name: "Selin Yıldız",
    role: "Animasyon Projesi",
    text: "Konsepten teslimat videosuna kadar her şeyi tek elden çözdü. İletişim net, sonuç sinematik."
  }],
  tools: ["ComfyUI", "LTX Video 2.3", "Flux 2", "Qwen Image Edit", "Z-Image Turbo", "ZBrush", "Custom Node Dev", "Lip-Sync Pipeline"],
  filters: [["reklam", "Reklam Filmleri+A.İ"], ["karakter", "Figür Oyuncak Sektörü"], ["diger", "Diğer İşler"], ["all", "Tümü"]]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/data.js", error: String((e && e.message) || e) }); }

// site/portfolio-app.js
try { (() => {
/* Portfolio UI kit — screen sections. Composes the DS components. Exports window.TS_App. */
const DS = window.TufanSezerDesignSystem_d584c6;
const {
  Button,
  Slate,
  Badge,
  FilterTab,
  Tag,
  Quote,
  ReelFrame,
  WorkCard
} = DS;
const D = window.TS_DATA;
const wrap = {
  maxWidth: "var(--layout-max)",
  margin: "0 auto",
  padding: "0 var(--layout-gutter)"
};

// Thumbnail (kartta dönen önizleme) için hafif WebM + MP4 fallback.
// iOS WebM'i desteklemezse veya önizleme webm'i henüz yoksa tarayıcı otomatik MP4'e düşer.
// Tam boy izleme (lightbox/showreel) ayrıca tam kaliteli MP4 kullanır — burada kalite düşmez.
function ThumbSources({
  mp4
}) {
  const webm = mp4.replace(/\.mp4$/i, "-preview.webm");
  return /*#__PURE__*/React.createElement(React.Fragment, null, D.webmReady ? /*#__PURE__*/React.createElement("source", {
    src: webm,
    type: "video/webm"
  }) : null, /*#__PURE__*/React.createElement("source", {
    src: mp4,
    type: "video/mp4"
  }));
}
const secHeadH2 = {
  fontFamily: "var(--font-display)",
  fontWeight: 700,
  fontSize: "var(--text-h2)",
  letterSpacing: "-.01em",
  color: "var(--ts-ink)",
  margin: "16px 0 0"
};
function Nav() {
  const links = [["#isler", "İşler"], ["#yorumlar", "Yorumlar"], ["#araclar", "Araçlar"], ["#iletisim", "İletişim"]];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: "linear-gradient(to bottom, rgba(20,17,14,.92), rgba(20,17,14,0))",
      backdropFilter: "blur(2px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: "20px var(--layout-gutter)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "13px",
      letterSpacing: ".12em",
      textDecoration: "none",
      color: "var(--ts-ink)"
    }
  }, "TUFAN", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--ts-amber)",
      fontWeight: 500
    }
  }, "SEZER"), " / AI\xB7FILM"), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "flex",
      gap: "28px",
      listStyle: "none",
      margin: 0,
      padding: 0
    },
    className: "ts-navlinks"
  }, links.map(([h, l]) => /*#__PURE__*/React.createElement("li", {
    key: h
  }, /*#__PURE__*/React.createElement("a", {
    href: h,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "12px",
      letterSpacing: ".1em",
      textTransform: "uppercase",
      textDecoration: "none",
      color: "var(--ts-ink-dim)"
    },
    onMouseEnter: e => e.currentTarget.style.color = "var(--ts-amber)",
    onMouseLeave: e => e.currentTarget.style.color = "var(--ts-ink-dim)"
  }, l))))));
}
function Hero({
  onExpandReel,
  onPickCat
}) {
  const cards = [{
    k: "reklam",
    label: "A.İ FİLM ÇALIŞMALARI",
    no: "01",
    top: "-9%",
    left: "2%",
    rot: -8,
    w: "430px",
    tone: "beige",
    video: "gas.mp4"
  }, {
    k: "karakter",
    label: "FİGÜR · OYUNCAK SEKTÖRÜ",
    no: "02",
    top: "12%",
    left: "45%",
    rot: -2,
    w: "420px",
    tone: "beige",
    img: "assets/work/oyuncak-sektoru/harley/harley-thumb.png"
  }, {
    k: "diger",
    label: "DİĞER İŞLER",
    no: "03",
    top: "45%",
    left: "0%",
    rot: 7,
    w: "344px",
    tone: "beige",
    img: "assets/work/sorcerer-mickey.jpg"
  }, {
    k: "all",
    label: "TÜMÜ",
    no: "04",
    top: "60%",
    left: "52%",
    rot: -4,
    w: "287px",
    tone: "beige",
    img: "assets/work/abe-poster.png"
  }];
  const [topCard, setTopCard] = React.useState(null);
  return /*#__PURE__*/React.createElement("header", {
    id: "top",
    style: {
      minHeight: "100svh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "relative",
      padding: "120px 0 60px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "var(--letterbox)",
      background: "#000",
      zIndex: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: "var(--letterbox)",
      background: "#000",
      zIndex: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "grid",
      gridTemplateColumns: ".82fr 1.18fr",
      gap: "40px",
      alignItems: "center"
    },
    className: "ts-hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Slate, null, "\u0130stanbul \xB7 2013'ten beri g\xF6rsel \xFCretim"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--text-hero)",
      lineHeight: 1.0,
      letterSpacing: "-.02em",
      color: "var(--ts-ink)",
      margin: "20px 0 24px"
    }
  }, "Karakterden kareye,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ts-ink)",
      borderBottom: "6px solid var(--ts-amber)",
      paddingBottom: "4px"
    }
  }, "AI ile film"), " \xFCretiyorum."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      color: "var(--ts-ink-dim)",
      fontSize: "var(--text-lead)",
      maxWidth: "46ch",
      lineHeight: 1.6,
      marginBottom: "36px"
    }
  }, "Karakter tasar\u0131m\u0131, k\u0131sa reklam filmleri ve animasyon \u2014 ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--ts-ink)",
      fontWeight: 600
    }
  }, "ComfyUI tabanl\u0131, u\xE7tan uca lokal prod\xFCksiyon."), " Konsepten render'a tek elden."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "16px",
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "amber",
    href: "#iletisim"
  }, "Proje Konu\u015Fal\u0131m \u2192"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    href: "#",
    onClick: e => {
      e.preventDefault();
      onExpandReel();
    }
  }, "\u25B6 Showreel'i \u0130zle"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "1 / .92",
      minHeight: "780px"
    },
    className: "ts-hero-cards"
  }, cards.map((c, i) => {
    return /*#__PURE__*/React.createElement("a", {
      key: c.k,
      href: "#isler",
      onClick: () => onPickCat(c.k),
      style: {
        position: "absolute",
        top: c.top,
        left: c.left,
        width: c.w,
        display: "block",
        zIndex: topCard === c.k ? 10 : i + 1,
        padding: "14px 14px 18px",
        textDecoration: "none",
        background: "var(--card-bg, #e6dcc4)",
        border: "1px solid var(--card-line, rgba(0,0,0,.20))",
        borderRadius: "12px",
        boxShadow: "var(--card-shadow, 0 32px 70px rgba(0,0,0,.6))",
        transform: `rotate(${c.rot}deg)`,
        transition: "transform .35s cubic-bezier(.22,1,.36,1), border-color .25s, box-shadow .35s",
        willChange: "translate",
        animation: `tsHeroFloat ${3.4 + i * .5}s ease-in-out ${i * .45}s infinite alternate`
      },
      onMouseEnter: e => {
        setTopCard(c.k);
        e.currentTarget.style.transform = "rotate(0deg) translateY(-8px) scale(1.04)";
        e.currentTarget.style.borderColor = "var(--ts-amber)";
        e.currentTarget.style.boxShadow = "var(--card-shadow-hover, 0 46px 95px rgba(0,0,0,.72))";
        e.currentTarget.style.animationPlayState = "paused";
      },
      onMouseLeave: e => {
        e.currentTarget.style.transform = `rotate(${c.rot}deg)`;
        e.currentTarget.style.borderColor = "var(--card-line, rgba(0,0,0,.20))";
        e.currentTarget.style.boxShadow = "var(--card-shadow, 0 32px 70px rgba(0,0,0,.6))";
        e.currentTarget.style.animationPlayState = "running";
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ts-card-grain"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        aspectRatio: "16 / 9",
        borderRadius: "8px",
        overflow: "hidden",
        background: "var(--ts-bg-sink)",
        marginBottom: "12px",
        border: "1px solid var(--card-line, rgba(0,0,0,.20))"
      }
    }, c.video ? /*#__PURE__*/React.createElement("video", {
      autoPlay: true,
      muted: true,
      loop: true,
      playsInline: true,
      preload: "metadata",
      ref: el => {
        if (el) {
          el.muted = true;
          el.defaultMuted = true;
        }
      },
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
        pointerEvents: "none"
      }
    }, /*#__PURE__*/React.createElement(ThumbSources, {
      mp4: c.video
    })) : /*#__PURE__*/React.createElement("img", {
      src: c.img,
      alt: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block"
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        padding: "0 8px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontFamily: "var(--font-mono)",
        fontSize: "13px",
        letterSpacing: ".22em",
        color: "var(--card-kicker, #a06a16)",
        marginBottom: "9px"
      }
    }, c.no, " \xB7 KATEGOR\u0130"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontFamily: "var(--font-mono)",
        fontSize: "clamp(13px, 1.15vw, 17px)",
        letterSpacing: ".16em",
        color: "var(--card-ink, #241d12)",
        whiteSpace: "nowrap"
      }
    }, c.label)));
  }))), /*#__PURE__*/React.createElement("style", null, "@keyframes tsHeroFloat{0%{translate:0 -22px}100%{translate:0 22px}}@media(prefers-reduced-motion:reduce){.ts-hero-cards a{animation:none!important}}"));
}
function FloatingCards({
  works,
  onOpen,
  positions,
  overlay,
  aspect,
  showGuide
}) {
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
  const cardAspect = wide ? "16 / 9" : aspect === "16 / 9" ? "4 / 5" : aspect || "4 / 5";
  const rots = [-6, 4, -4, 5, -5, 3, -3, 6, -6, 4, -4, 5];
  const COLS = wide ? 4 : 3;
  const colLeft = wide ? [0, 24, 48, 72] : [1.5, 35, 68.5];
  // Aralıklar cqw (konteyner genişliğine oranlı) — mobilde kart küçülünce boşluk da küçülür.
  // Figür (4 sütun): temiz iki kademeli tuğla deseni — 1. ve 3. sütun hizalı, 2. ve 4. hafif düşük.
  const colOff = wide ? [0, 6, 0, 6] : [0, 13, 6];
  const STEP = wide ? 20 : 45,
    BASE = 2;
  const rows = Math.ceil(works.length / COLS);
  const containerH = (rows - 1) * STEP + Math.max(...colOff) + BASE + (wide ? 23 : 42);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      containerType: "inline-size",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ts-reel-cards",
    style: {
      position: "relative",
      width: "100%",
      minHeight: containerH + "cqw"
    }
  }, showGuide ? /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: "-24px 0",
      zIndex: 90,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: "2px",
      borderLeft: "2px dashed var(--ts-amber)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 0,
      top: 0,
      bottom: 0,
      width: "2px",
      borderRight: "2px dashed var(--ts-amber)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      boxShadow: "inset 0 0 0 1px rgba(216,151,60,.10)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "0",
      left: "50%",
      transform: "translate(-50%,-50%)",
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: "#1a1410",
      background: "var(--ts-amber)",
      padding: "5px 12px",
      borderRadius: "999px",
      whiteSpace: "nowrap"
    }
  }, "Standart site s\u0131n\u0131r\u0131 \xB7 1320px"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "6px",
      top: "6px",
      fontFamily: "var(--font-mono)",
      fontSize: "10px",
      letterSpacing: ".1em",
      color: "var(--ts-amber)"
    }
  }, "\u2190 sol kenar"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: "6px",
      top: "6px",
      fontFamily: "var(--font-mono)",
      fontSize: "10px",
      letterSpacing: ".1em",
      color: "var(--ts-amber)",
      textAlign: "right"
    }
  }, "sa\u011F kenar \u2192")) : null, works.map((w, i) => {
    let p;
    if (positions && positions[i]) {
      p = positions[i];
    } else {
      const col = i % COLS;
      const row = Math.floor(i / COLS);
      p = {
        top: BASE + row * STEP + colOff[col] + "cqw",
        left: colLeft[col] + "%",
        rot: rots[i % rots.length],
        w: wide ? "28%" : overlay ? "31%" : "30%"
      };
    }
    return /*#__PURE__*/React.createElement("a", {
      key: w.id,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onOpen(w);
      },
      style: {
        position: "absolute",
        top: p.top,
        left: p.left,
        width: p.w,
        display: "block",
        zIndex: topCard === w.id ? 99 : i + 1,
        padding: overlay ? 0 : "14px 14px 18px",
        textDecoration: "none",
        background: overlay ? "var(--ts-bg-sink)" : "var(--card-bg, #e6dcc4)",
        border: "1px solid " + (overlay ? "rgba(255,255,255,.14)" : "var(--card-line, rgba(0,0,0,.20))"),
        borderRadius: overlay ? "16px" : "12px",
        overflow: overlay ? "hidden" : "visible",
        boxShadow: "var(--card-shadow, 0 32px 70px rgba(0,0,0,.6))",
        transform: `rotate(${p.rot}deg)`,
        transition: "transform .35s cubic-bezier(.22,1,.36,1), border-color .25s, box-shadow .35s",
        willChange: "translate",
        animation: `tsHeroFloat ${3.4 + i * .5}s ease-in-out ${i * .45}s infinite alternate`
      },
      onMouseEnter: e => {
        setTopCard(w.id);
        e.currentTarget.style.transform = "rotate(0deg) translateY(-8px) scale(1.04)";
        e.currentTarget.style.borderColor = "var(--ts-amber)";
        e.currentTarget.style.boxShadow = "var(--card-shadow-hover, 0 46px 95px rgba(0,0,0,.72))";
        e.currentTarget.style.animationPlayState = "paused";
      },
      onMouseLeave: e => {
        e.currentTarget.style.transform = `rotate(${p.rot}deg)`;
        e.currentTarget.style.borderColor = overlay ? "rgba(255,255,255,.14)" : "var(--card-line, rgba(0,0,0,.20))";
        e.currentTarget.style.boxShadow = "var(--card-shadow, 0 32px 70px rgba(0,0,0,.6))";
        e.currentTarget.style.animationPlayState = "running";
      }
    }, overlay ? /*#__PURE__*/React.createElement("span", {
      style: {
        position: "relative",
        display: "block",
        width: "100%",
        aspectRatio: cardAspect,
        overflow: "hidden",
        background: "var(--ts-bg-sink)"
      }
    }, w.video ? /*#__PURE__*/React.createElement("video", {
      poster: w.image,
      autoPlay: true,
      muted: true,
      loop: true,
      playsInline: true,
      preload: "metadata",
      ref: el => {
        if (el) {
          el.muted = true;
          el.defaultMuted = true;
        }
      },
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block"
      }
    }, /*#__PURE__*/React.createElement(ThumbSources, {
      mp4: w.videoSrc
    })) : /*#__PURE__*/React.createElement("img", {
      src: w.image,
      alt: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top, rgba(8,6,5,.86) 0%, rgba(8,6,5,.42) 26%, transparent 52%)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        padding: "0 22px 22px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        fontSize: wide ? "clamp(6px, 1.3cqw, 15px)" : "clamp(10px, 2.3cqw, 28px)",
        letterSpacing: "-.01em",
        lineHeight: 1.1,
        color: "#fff",
        textShadow: "0 2px 14px rgba(0,0,0,.55)"
      }
    }, w.title))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "ts-card-grain"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        aspectRatio: "16 / 9",
        borderRadius: "8px",
        overflow: "hidden",
        background: "var(--ts-bg-sink)",
        marginBottom: "12px",
        border: "1px solid var(--card-line, rgba(0,0,0,.20))"
      }
    }, w.video ? /*#__PURE__*/React.createElement("video", {
      poster: w.image,
      autoPlay: true,
      muted: true,
      loop: true,
      playsInline: true,
      preload: "metadata",
      ref: el => {
        if (el) {
          el.muted = true;
          el.defaultMuted = true;
        }
      },
      style: {
        width: "100%",
        height: "100%",
        objectFit: w.fit === "contain" || w.fit === "scale-down" ? "contain" : "cover",
        display: "block"
      }
    }, /*#__PURE__*/React.createElement(ThumbSources, {
      mp4: w.videoSrc
    })) : /*#__PURE__*/React.createElement("img", {
      src: w.image,
      alt: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block"
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        padding: "2px 8px 4px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        letterSpacing: ".22em",
        textTransform: "uppercase",
        color: "var(--card-kicker, #a06a16)",
        marginBottom: "8px"
      }
    }, w.meta), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: "19px",
        letterSpacing: "-.01em",
        lineHeight: 1.2,
        color: "var(--card-ink, #241d12)",
        marginBottom: w.desc ? "6px" : 0
      }
    }, w.title), w.desc ? /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontFamily: "var(--font-body)",
        fontSize: "14px",
        lineHeight: 1.5,
        color: "rgba(36,29,18,.72)"
      }
    }, w.desc) : null)));
  }), /*#__PURE__*/React.createElement("style", null, "@media(prefers-reduced-motion:reduce){.ts-reel-cards a{animation:none!important}}")));
}
function WorkGrid({
  onOpen,
  cat,
  setCat
}) {
  const shown = D.works.filter(w => cat === "all" || w.cat === cat);
  const [showGuide, setShowGuide] = React.useState(false);
  const isFloating = cat === "reklam" || cat === "karakter";
  return /*#__PURE__*/React.createElement("section", {
    id: "isler",
    style: {
      padding: "var(--space-section) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "54px"
    }
  }, /*#__PURE__*/React.createElement(Slate, null, "Sahne 01 \u2014 Se\xE7ili \u0130\u015Fler"), /*#__PURE__*/React.createElement("h2", {
    style: secHeadH2
  }, "Shot list")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
      marginBottom: "36px",
      alignItems: "center"
    }
  }, D.filters.map(([k, v]) => /*#__PURE__*/React.createElement(FilterTab, {
    key: k,
    active: cat === k,
    onClick: () => setCat(k)
  }, v)), isFloating ? /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowGuide(g => !g),
    style: {
      marginLeft: "auto",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      cursor: "pointer",
      fontFamily: "var(--font-mono)",
      fontSize: "12px",
      letterSpacing: ".08em",
      textTransform: "uppercase",
      padding: "8px 14px",
      borderRadius: "999px",
      background: showGuide ? "rgba(216,151,60,.16)" : "transparent",
      border: "1px solid " + (showGuide ? "var(--ts-amber)" : "var(--ts-line)"),
      color: showGuide ? "var(--ts-amber)" : "var(--ts-ink-dim)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "14px",
      height: "0",
      borderTop: "2px dashed currentColor",
      display: "inline-block"
    }
  }), "S\u0131n\u0131r \xE7izgisi") : null), isFloating ? /*#__PURE__*/React.createElement(FloatingCards, {
    works: shown,
    onOpen: onOpen,
    overlay: true,
    aspect: cat === "karakter" ? "16 / 9" : "4 / 5",
    showGuide: showGuide
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--grid-gap)"
    },
    className: "ts-works"
  }, shown.map(w => /*#__PURE__*/React.createElement(WorkCard, {
    key: w.id,
    image: w.image,
    video: w.video,
    fit: w.fit,
    meta: w.meta,
    title: w.title,
    description: w.desc,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onOpen(w);
    }
  })))));
}
function Quotes() {
  return /*#__PURE__*/React.createElement("section", {
    id: "yorumlar",
    style: {
      padding: "0 0 var(--space-section)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "54px"
    }
  }, /*#__PURE__*/React.createElement(Slate, null, "Sahne 02 \u2014 M\xFC\u015Fteri Yorumlar\u0131"), /*#__PURE__*/React.createElement("h2", {
    style: secHeadH2
  }, "Birlikte \xE7al\u0131\u015Fanlar ne diyor")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--grid-gap)"
    },
    className: "ts-quotes"
  }, D.quotes.map((q, i) => /*#__PURE__*/React.createElement(Quote, {
    key: i,
    name: q.name,
    role: q.role
  }, q.text)))));
}
function ToolsStrip() {
  return /*#__PURE__*/React.createElement("section", {
    id: "araclar",
    style: {
      padding: "70px 0",
      borderTop: "1px solid var(--ts-line)",
      borderBottom: "1px solid var(--ts-line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Slate, {
    align: "center",
    tick: false
  }, "Prod\xFCksiyon Altyap\u0131s\u0131"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "14px 34px",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "30px"
    }
  }, D.tools.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    variant: "tool"
  }, t)))));
}
function FinalCTA() {
  return /*#__PURE__*/React.createElement("section", {
    id: "iletisim",
    style: {
      textAlign: "center",
      padding: "140px 0",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      background: "var(--glow-amber)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Slate, {
    align: "center",
    tick: false
  }, "Son Sahne"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--text-display)",
      letterSpacing: "-.02em",
      color: "var(--ts-ink)",
      margin: "18px 0 14px"
    }
  }, "Akl\u0131nda bir", /*#__PURE__*/React.createElement("br", null), "proje mi var?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      color: "var(--ts-ink-dim)",
      maxWidth: "50ch",
      margin: "0 auto 40px",
      lineHeight: 1.6
    }
  }, "Karakter, reklam filmi, animasyon \u2014 fikrini anlat, nas\u0131l \xFCretilece\u011Fini birlikte planlayal\u0131m. Freelance projelere ve tam zamanl\u0131 f\u0131rsatlara a\xE7\u0131\u011F\u0131m."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "16px",
      justifyContent: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "amber",
    href: "mailto:eposta@adresin.com"
  }, "Bana Yaz \u2192"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    href: "#"
  }, "Instagram"))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "1px solid var(--ts-line)",
      padding: "28px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "12px",
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      letterSpacing: ".1em",
      color: "var(--ts-ink-dim)",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Tufan Sezer \u2014 \u0130stanbul"), /*#__PURE__*/React.createElement("span", null, "AI Artist \xB7 Filmmaker \xB7 Pipeline Builder")));
}
function Lightbox({
  item,
  onClose
}) {
  const vref = React.useRef(null);
  const [idx, setIdx] = React.useState(0);
  const [selected, setSelected] = React.useState(null);
  const gallery = item && item.gallery && item.gallery.length ? item.gallery : null;
  React.useEffect(() => {
    setIdx(0);
    setSelected(null);
  }, [item]);
  React.useEffect(() => {
    if (!item || !item.videoSrc) return;
    const v = vref.current;
    if (!v) return;
    v.currentTime = 0;
    v.muted = false;
    v.volume = 1;
    v.play().catch(() => {
      v.muted = true;
      v.play().catch(() => {});
    });
    return () => {
      v.pause();
      v.src = "";
      v.load();
    };
  }, [item]);
  React.useEffect(() => {
    if (!gallery) return;
    const onKey = e => {
      if (e.key === "Escape" && selected != null) {
        setSelected(null);
      } else if (e.key === "ArrowRight") setIdx(i => Math.min(i + 1, gallery.length - 1));else if (e.key === "ArrowLeft") setIdx(i => Math.max(i - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [gallery, selected]);
  if (!item) return null;

  // ── Project gallery: tilted scrolling strip; click → big image center, strip blurred below ─
  if (gallery) {
    const big = selected != null;
    const TH_W = 320,
      TH_H = Math.round(TH_W * 9 / 16),
      GAP = 20,
      ROW_GAP = 20;
    const nRows = gallery.length > 8 ? 3 : 2; // ≤8 görsel → 2 sıra, >8 → 3 sıra
    const metaParts = item.meta.split("·").map(s => s.trim());
    // Each row: a distinct ordering (rotated offset + alternating reverse) of the same images.
    const rowOrder = r => {
      const off = Math.floor(gallery.length * r / nRows) + r;
      const idxs = gallery.map((_, k) => (k + off) % gallery.length);
      if (r % 2 === 1) idxs.reverse();
      return idxs;
    };
    const rowDur = r => Math.max(22, gallery.length * 6) * [1, 1.3, 0.85][r];
    const strip = /*#__PURE__*/React.createElement("div", {
      className: "ts-galstrip",
      style: {
        position: "absolute",
        top: "50%",
        left: "-30%",
        width: "160%",
        overflow: "visible",
        transform: "translateY(-50%) rotate(-5deg)",
        filter: big ? "blur(3px)" : "none",
        opacity: big ? .3 : 1,
        transition: "filter .35s, opacity .35s",
        maskImage: "linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent)",
        WebkitMaskImage: "linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent)",
        display: "flex",
        flexDirection: "column",
        gap: `${ROW_GAP}px`
      }
    }, Array.from({
      length: nRows
    }, (_, r) => {
      const loop = rowOrder(r).concat(rowOrder(r));
      const rev = r % 2 === 1; // row 0 → left, row 1 → right, row 2 → left
      return /*#__PURE__*/React.createElement("div", {
        key: r,
        style: {
          overflow: "visible"
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "ts-track",
        style: {
          display: "flex",
          gap: `${GAP}px`,
          width: "max-content",
          animation: `${rev ? "tsMarqueeRev" : "tsMarquee"} ${rowDur(r)}s linear infinite`
        }
      }, loop.map((real, i) => {
        const active = big && real === selected;
        return /*#__PURE__*/React.createElement("button", {
          key: i,
          onClick: e => {
            e.stopPropagation();
            setSelected(real);
          },
          "aria-label": "Görsel " + (real + 1),
          style: {
            flex: "0 0 auto",
            width: `${TH_W}px`,
            height: `${TH_H}px`,
            padding: 0,
            cursor: "pointer",
            borderRadius: "12px",
            overflow: "hidden",
            border: "1px solid " + (active ? "var(--ts-amber)" : "var(--ts-line)"),
            background: "var(--ts-bg-sink)",
            boxShadow: active ? "0 22px 50px rgba(0,0,0,.5)" : "0 12px 28px rgba(0,0,0,.4)",
            transition: "border-color .3s, box-shadow .3s"
          }
        }, /*#__PURE__*/React.createElement("img", {
          src: gallery[real],
          alt: "",
          style: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block"
          }
        }));
      })));
    }));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "#0a0807",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("style", null, "@keyframes tsMarquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}@keyframes tsMarqueeRev{from{transform:translateX(-50%)}to{transform:translateX(0)}}.ts-galstrip:hover .ts-track{animation-play-state:paused}.ts-galstrip:hover{filter:blur(0)!important;opacity:1!important}@keyframes tsFade{from{opacity:0;transform:scale(.985)}to{opacity:1;transform:none}}"), /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      style: {
        position: "fixed",
        top: "24px",
        right: "28px",
        zIndex: 4,
        background: "rgba(10,8,7,.7)",
        backdropFilter: "blur(4px)",
        border: "1px solid var(--ts-line)",
        color: "var(--ts-ink)",
        fontFamily: "var(--font-mono)",
        fontSize: "12px",
        letterSpacing: ".1em",
        padding: "10px 16px",
        cursor: "pointer",
        textTransform: "uppercase"
      }
    }, "Kapat \u2715"), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        padding: "72px 24px 0",
        flex: "0 0 auto",
        position: "relative",
        zIndex: 1,
        pointerEvents: "none"
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        fontSize: "clamp(40px, 6vw, 88px)",
        lineHeight: .95,
        letterSpacing: "-.02em",
        color: "var(--ts-ink)",
        margin: 0,
        textTransform: "uppercase"
      }
    }, item.title.split("—")[0].trim()), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "12px",
        letterSpacing: ".34em",
        textTransform: "uppercase",
        color: "var(--ts-amber)",
        marginTop: "14px"
      }
    }, metaParts[metaParts.length - 1], " \xB7 ", big ? `${String(selected + 1).padStart(2, "0")}/${String(gallery.length).padStart(2, "0")}` : `${String(gallery.length).padStart(2, "0")} GÖRSEL`)), /*#__PURE__*/React.createElement("div", {
      onClick: e => {
        if (big && e.target === e.currentTarget) setSelected(null);
      },
      style: {
        flex: "1 1 auto",
        minHeight: 0,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center"
      }
    }, strip, big && /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 32px",
        pointerEvents: "none",
        zIndex: 2
      }
    }, /*#__PURE__*/React.createElement("img", {
      key: gallery[selected],
      src: gallery[selected],
      alt: item.title,
      onClick: () => setSelected(null),
      style: {
        maxWidth: "min(1000px, 88vw)",
        maxHeight: "82%",
        objectFit: "contain",
        borderRadius: "16px",
        border: "1px solid var(--ts-line)",
        background: "var(--ts-bg-sink)",
        boxShadow: "0 30px 80px rgba(0,0,0,.6)",
        animation: "tsFade .4s ease",
        cursor: "zoom-out",
        pointerEvents: "auto",
        display: "block"
      }
    }))));
  }

  // ── Single image / video ───────────────────────────────────────
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 200,
      background: "rgba(10,8,6,.94)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "32px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      position: "absolute",
      top: "24px",
      right: "28px",
      background: "none",
      border: "1px solid var(--ts-line)",
      color: "var(--ts-ink)",
      fontFamily: "var(--font-mono)",
      fontSize: "12px",
      letterSpacing: ".1em",
      padding: "10px 16px",
      cursor: "pointer",
      textTransform: "uppercase"
    }
  }, "Kapat \u2715"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "min(960px,100%)"
    },
    onClick: e => e.stopPropagation()
  }, item.videoSrc ? /*#__PURE__*/React.createElement("video", {
    ref: vref,
    src: item.videoSrc,
    poster: item.image,
    controls: true,
    autoPlay: true,
    playsInline: true,
    style: {
      width: "100%",
      maxHeight: "76vh",
      objectFit: "contain",
      border: "1px solid var(--ts-line)",
      background: "#000",
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement("img", {
    src: item.image,
    alt: item.title,
    style: {
      width: "100%",
      maxHeight: "86vh",
      objectFit: "contain",
      border: "1px solid var(--ts-line)",
      background: "var(--ts-bg-sink)",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "14px",
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: "var(--ts-ink-dim)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ts-amber)"
    }
  }, item.title), " \u2014 ", item.meta)));
}
function ReelLightbox({
  open,
  src,
  onClose
}) {
  const vref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const v = vref.current;
    if (!v) return;
    v.currentTime = 0;
    v.muted = false;
    v.volume = 1;
    v.play().catch(() => {
      v.muted = true;
      v.play().catch(() => {});
    });
    return () => {
      v.pause();
      v.src = "";
      v.load();
    };
  }, [open]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 220,
      background: "rgba(10,8,6,.95)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "32px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      position: "absolute",
      top: "24px",
      right: "28px",
      background: "none",
      border: "1px solid var(--ts-line)",
      color: "var(--ts-ink)",
      fontFamily: "var(--font-mono)",
      fontSize: "12px",
      letterSpacing: ".1em",
      padding: "10px 16px",
      cursor: "pointer",
      textTransform: "uppercase"
    }
  }, "Kapat \u2715"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "min(1100px,100%)"
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("video", {
    ref: vref,
    src: src,
    controls: true,
    autoPlay: true,
    playsInline: true,
    style: {
      width: "100%",
      maxHeight: "82vh",
      objectFit: "contain",
      border: "1px solid var(--ts-line)",
      background: "#000",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "14px",
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: "var(--ts-ink-dim)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ts-amber)"
    }
  }, "Showreel"), " \u2014 Tufan Sezer \xB7 2026")));
}
function App() {
  const [lb, setLb] = React.useState(null);
  const [reelOpen, setReelOpen] = React.useState(false);
  const [cat, setCat] = React.useState("reklam");
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === "Escape") {
        setLb(null);
        setReelOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "ts-grain",
    style: {
      background: "var(--ts-bg)",
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, {
    onExpandReel: () => setReelOpen(true),
    onPickCat: setCat
  }), /*#__PURE__*/React.createElement(WorkGrid, {
    onOpen: setLb,
    cat: cat,
    setCat: setCat
  }), /*#__PURE__*/React.createElement(Quotes, null), /*#__PURE__*/React.createElement(ToolsStrip, null), /*#__PURE__*/React.createElement(FinalCTA, null), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(Lightbox, {
    item: lb,
    onClose: () => setLb(null)
  }), /*#__PURE__*/React.createElement(ReelLightbox, {
    open: reelOpen,
    src: "showreel.mp4",
    onClose: () => setReelOpen(false)
  }));
}
window.TS_App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/portfolio-app.js", error: String((e && e.message) || e) }); }

// site/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Sections.jsx
try { (() => {
/* Portfolio UI kit — screen sections. Composes the DS components. Exports window.TS_App. */
const DS = window.TufanSezerDesignSystem_d584c6;
const {
  Button,
  Slate,
  Badge,
  FilterTab,
  Tag,
  Quote,
  ReelFrame,
  WorkCard
} = DS;
const D = window.TS_DATA;
const wrap = {
  maxWidth: "var(--layout-max)",
  margin: "0 auto",
  padding: "0 var(--layout-gutter)"
};

// Thumbnail (kartta dönen önizleme) için hafif WebM + MP4 fallback.
// iOS WebM'i desteklemezse veya önizleme webm'i henüz yoksa tarayıcı otomatik MP4'e düşer.
// Tam boy izleme (lightbox/showreel) ayrıca tam kaliteli MP4 kullanır — burada kalite düşmez.
function ThumbSources({
  mp4
}) {
  const webm = mp4.replace(/\.mp4$/i, "-preview.webm");
  return /*#__PURE__*/React.createElement(React.Fragment, null, D.webmReady ? /*#__PURE__*/React.createElement("source", {
    src: webm,
    type: "video/webm"
  }) : null, /*#__PURE__*/React.createElement("source", {
    src: mp4,
    type: "video/mp4"
  }));
}
const secHeadH2 = {
  fontFamily: "var(--font-display)",
  fontWeight: 700,
  fontSize: "var(--text-h2)",
  letterSpacing: "-.01em",
  color: "var(--ts-ink)",
  margin: "16px 0 0"
};
function Nav() {
  const links = [["#isler", "İşler"], ["#yorumlar", "Yorumlar"], ["#araclar", "Araçlar"], ["#iletisim", "İletişim"]];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: "linear-gradient(to bottom, rgba(20,17,14,.92), rgba(20,17,14,0))",
      backdropFilter: "blur(2px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: "20px var(--layout-gutter)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "13px",
      letterSpacing: ".12em",
      textDecoration: "none",
      color: "var(--ts-ink)"
    }
  }, "TUFAN", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--ts-amber)",
      fontWeight: 500
    }
  }, "SEZER"), " / AI\xB7FILM"), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "flex",
      gap: "28px",
      listStyle: "none",
      margin: 0,
      padding: 0
    },
    className: "ts-navlinks"
  }, links.map(([h, l]) => /*#__PURE__*/React.createElement("li", {
    key: h
  }, /*#__PURE__*/React.createElement("a", {
    href: h,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "12px",
      letterSpacing: ".1em",
      textTransform: "uppercase",
      textDecoration: "none",
      color: "var(--ts-ink-dim)"
    },
    onMouseEnter: e => e.currentTarget.style.color = "var(--ts-amber)",
    onMouseLeave: e => e.currentTarget.style.color = "var(--ts-ink-dim)"
  }, l))))));
}
function Hero({
  onExpandReel,
  onPickCat
}) {
  const cards = [{
    k: "reklam",
    label: "A.İ FİLM ÇALIŞMALARI",
    no: "01",
    top: "-9%",
    left: "2%",
    rot: -8,
    w: "430px",
    tone: "beige",
    video: "gas.mp4"
  }, {
    k: "karakter",
    label: "FİGÜR · OYUNCAK SEKTÖRÜ",
    no: "02",
    top: "12%",
    left: "45%",
    rot: -2,
    w: "420px",
    tone: "beige",
    img: "../../assets/work/oyuncak-sektoru/harley/harley-thumb.png"
  }, {
    k: "diger",
    label: "DİĞER İŞLER",
    no: "03",
    top: "45%",
    left: "0%",
    rot: 7,
    w: "344px",
    tone: "beige",
    img: "../../assets/work/sorcerer-mickey.jpg"
  }, {
    k: "all",
    label: "TÜMÜ",
    no: "04",
    top: "60%",
    left: "52%",
    rot: -4,
    w: "287px",
    tone: "beige",
    img: "../../assets/work/abe-poster.png"
  }];
  const [topCard, setTopCard] = React.useState(null);
  return /*#__PURE__*/React.createElement("header", {
    id: "top",
    style: {
      minHeight: "100svh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "relative",
      padding: "120px 0 60px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "var(--letterbox)",
      background: "#000",
      zIndex: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: "var(--letterbox)",
      background: "#000",
      zIndex: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "grid",
      gridTemplateColumns: ".82fr 1.18fr",
      gap: "40px",
      alignItems: "center"
    },
    className: "ts-hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Slate, null, "\u0130stanbul \xB7 2013'ten beri g\xF6rsel \xFCretim"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--text-hero)",
      lineHeight: 1.0,
      letterSpacing: "-.02em",
      color: "var(--ts-ink)",
      margin: "20px 0 24px"
    }
  }, "Karakterden kareye,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ts-ink)",
      borderBottom: "6px solid var(--ts-amber)",
      paddingBottom: "4px"
    }
  }, "AI ile film"), " \xFCretiyorum."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      color: "var(--ts-ink-dim)",
      fontSize: "var(--text-lead)",
      maxWidth: "46ch",
      lineHeight: 1.6,
      marginBottom: "36px"
    }
  }, "Karakter tasar\u0131m\u0131, k\u0131sa reklam filmleri ve animasyon \u2014 ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--ts-ink)",
      fontWeight: 600
    }
  }, "ComfyUI tabanl\u0131, u\xE7tan uca lokal prod\xFCksiyon."), " Konsepten render'a tek elden."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "16px",
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "amber",
    href: "#iletisim"
  }, "Proje Konu\u015Fal\u0131m \u2192"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    href: "#",
    onClick: e => {
      e.preventDefault();
      onExpandReel();
    }
  }, "\u25B6 Showreel'i \u0130zle"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "1 / .92",
      minHeight: "780px"
    },
    className: "ts-hero-cards"
  }, cards.map((c, i) => {
    return /*#__PURE__*/React.createElement("a", {
      key: c.k,
      href: "#isler",
      onClick: () => onPickCat(c.k),
      style: {
        position: "absolute",
        top: c.top,
        left: c.left,
        width: c.w,
        display: "block",
        zIndex: topCard === c.k ? 10 : i + 1,
        padding: "14px 14px 18px",
        textDecoration: "none",
        background: "var(--card-bg, #e6dcc4)",
        border: "1px solid var(--card-line, rgba(0,0,0,.20))",
        borderRadius: "12px",
        boxShadow: "var(--card-shadow, 0 32px 70px rgba(0,0,0,.6))",
        transform: `rotate(${c.rot}deg)`,
        transition: "transform .35s cubic-bezier(.22,1,.36,1), border-color .25s, box-shadow .35s",
        willChange: "translate",
        animation: `tsHeroFloat ${3.4 + i * .5}s ease-in-out ${i * .45}s infinite alternate`
      },
      onMouseEnter: e => {
        setTopCard(c.k);
        e.currentTarget.style.transform = "rotate(0deg) translateY(-8px) scale(1.04)";
        e.currentTarget.style.borderColor = "var(--ts-amber)";
        e.currentTarget.style.boxShadow = "var(--card-shadow-hover, 0 46px 95px rgba(0,0,0,.72))";
        e.currentTarget.style.animationPlayState = "paused";
      },
      onMouseLeave: e => {
        e.currentTarget.style.transform = `rotate(${c.rot}deg)`;
        e.currentTarget.style.borderColor = "var(--card-line, rgba(0,0,0,.20))";
        e.currentTarget.style.boxShadow = "var(--card-shadow, 0 32px 70px rgba(0,0,0,.6))";
        e.currentTarget.style.animationPlayState = "running";
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ts-card-grain"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        aspectRatio: "16 / 9",
        borderRadius: "8px",
        overflow: "hidden",
        background: "var(--ts-bg-sink)",
        marginBottom: "12px",
        border: "1px solid var(--card-line, rgba(0,0,0,.20))"
      }
    }, c.video ? /*#__PURE__*/React.createElement("video", {
      autoPlay: true,
      muted: true,
      loop: true,
      playsInline: true,
      preload: "metadata",
      ref: el => {
        if (el) {
          el.muted = true;
          el.defaultMuted = true;
        }
      },
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
        pointerEvents: "none"
      }
    }, /*#__PURE__*/React.createElement(ThumbSources, {
      mp4: c.video
    })) : /*#__PURE__*/React.createElement("img", {
      src: c.img,
      alt: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block"
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        padding: "0 8px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontFamily: "var(--font-mono)",
        fontSize: "13px",
        letterSpacing: ".22em",
        color: "var(--card-kicker, #a06a16)",
        marginBottom: "9px"
      }
    }, c.no, " \xB7 KATEGOR\u0130"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontFamily: "var(--font-mono)",
        fontSize: "clamp(13px, 1.15vw, 17px)",
        letterSpacing: ".16em",
        color: "var(--card-ink, #241d12)",
        whiteSpace: "nowrap"
      }
    }, c.label)));
  }))), /*#__PURE__*/React.createElement("style", null, "@keyframes tsHeroFloat{0%{translate:0 -22px}100%{translate:0 22px}}@media(prefers-reduced-motion:reduce){.ts-hero-cards a{animation:none!important}}"));
}
function FloatingCards({
  works,
  onOpen,
  positions,
  overlay,
  aspect,
  showGuide
}) {
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
  const cardAspect = wide ? "16 / 9" : aspect === "16 / 9" ? "4 / 5" : aspect || "4 / 5";
  const rots = [-6, 4, -4, 5, -5, 3, -3, 6, -6, 4, -4, 5];
  const COLS = wide ? 4 : 3;
  const colLeft = wide ? [0, 24, 48, 72] : [1.5, 35, 68.5];
  // Aralıklar cqw (konteyner genişliğine oranlı) — mobilde kart küçülünce boşluk da küçülür.
  // Figür (4 sütun): temiz iki kademeli tuğla deseni — 1. ve 3. sütun hizalı, 2. ve 4. hafif düşük.
  const colOff = wide ? [0, 6, 0, 6] : [0, 13, 6];
  const STEP = wide ? 20 : 45,
    BASE = 2;
  const rows = Math.ceil(works.length / COLS);
  const containerH = (rows - 1) * STEP + Math.max(...colOff) + BASE + (wide ? 23 : 42);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      containerType: "inline-size",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ts-reel-cards",
    style: {
      position: "relative",
      width: "100%",
      minHeight: containerH + "cqw"
    }
  }, showGuide ? /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: "-24px 0",
      zIndex: 90,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: "2px",
      borderLeft: "2px dashed var(--ts-amber)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 0,
      top: 0,
      bottom: 0,
      width: "2px",
      borderRight: "2px dashed var(--ts-amber)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      boxShadow: "inset 0 0 0 1px rgba(216,151,60,.10)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "0",
      left: "50%",
      transform: "translate(-50%,-50%)",
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: "#1a1410",
      background: "var(--ts-amber)",
      padding: "5px 12px",
      borderRadius: "999px",
      whiteSpace: "nowrap"
    }
  }, "Standart site s\u0131n\u0131r\u0131 \xB7 1320px"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "6px",
      top: "6px",
      fontFamily: "var(--font-mono)",
      fontSize: "10px",
      letterSpacing: ".1em",
      color: "var(--ts-amber)"
    }
  }, "\u2190 sol kenar"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: "6px",
      top: "6px",
      fontFamily: "var(--font-mono)",
      fontSize: "10px",
      letterSpacing: ".1em",
      color: "var(--ts-amber)",
      textAlign: "right"
    }
  }, "sa\u011F kenar \u2192")) : null, works.map((w, i) => {
    let p;
    if (positions && positions[i]) {
      p = positions[i];
    } else {
      const col = i % COLS;
      const row = Math.floor(i / COLS);
      p = {
        top: BASE + row * STEP + colOff[col] + "cqw",
        left: colLeft[col] + "%",
        rot: rots[i % rots.length],
        w: wide ? "28%" : overlay ? "31%" : "30%"
      };
    }
    return /*#__PURE__*/React.createElement("a", {
      key: w.id,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onOpen(w);
      },
      style: {
        position: "absolute",
        top: p.top,
        left: p.left,
        width: p.w,
        display: "block",
        zIndex: topCard === w.id ? 99 : i + 1,
        padding: overlay ? 0 : "14px 14px 18px",
        textDecoration: "none",
        background: overlay ? "var(--ts-bg-sink)" : "var(--card-bg, #e6dcc4)",
        border: "1px solid " + (overlay ? "rgba(255,255,255,.14)" : "var(--card-line, rgba(0,0,0,.20))"),
        borderRadius: overlay ? "16px" : "12px",
        overflow: overlay ? "hidden" : "visible",
        boxShadow: "var(--card-shadow, 0 32px 70px rgba(0,0,0,.6))",
        transform: `rotate(${p.rot}deg)`,
        transition: "transform .35s cubic-bezier(.22,1,.36,1), border-color .25s, box-shadow .35s",
        willChange: "translate",
        animation: `tsHeroFloat ${3.4 + i * .5}s ease-in-out ${i * .45}s infinite alternate`
      },
      onMouseEnter: e => {
        setTopCard(w.id);
        e.currentTarget.style.transform = "rotate(0deg) translateY(-8px) scale(1.04)";
        e.currentTarget.style.borderColor = "var(--ts-amber)";
        e.currentTarget.style.boxShadow = "var(--card-shadow-hover, 0 46px 95px rgba(0,0,0,.72))";
        e.currentTarget.style.animationPlayState = "paused";
      },
      onMouseLeave: e => {
        e.currentTarget.style.transform = `rotate(${p.rot}deg)`;
        e.currentTarget.style.borderColor = overlay ? "rgba(255,255,255,.14)" : "var(--card-line, rgba(0,0,0,.20))";
        e.currentTarget.style.boxShadow = "var(--card-shadow, 0 32px 70px rgba(0,0,0,.6))";
        e.currentTarget.style.animationPlayState = "running";
      }
    }, overlay ? /*#__PURE__*/React.createElement("span", {
      style: {
        position: "relative",
        display: "block",
        width: "100%",
        aspectRatio: cardAspect,
        overflow: "hidden",
        background: "var(--ts-bg-sink)"
      }
    }, w.video ? /*#__PURE__*/React.createElement("video", {
      poster: w.image,
      autoPlay: true,
      muted: true,
      loop: true,
      playsInline: true,
      preload: "metadata",
      ref: el => {
        if (el) {
          el.muted = true;
          el.defaultMuted = true;
        }
      },
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block"
      }
    }, /*#__PURE__*/React.createElement(ThumbSources, {
      mp4: w.videoSrc
    })) : /*#__PURE__*/React.createElement("img", {
      src: w.image,
      alt: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top, rgba(8,6,5,.86) 0%, rgba(8,6,5,.42) 26%, transparent 52%)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        padding: "0 22px 22px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        fontSize: wide ? "clamp(6px, 1.3cqw, 15px)" : "clamp(10px, 2.3cqw, 28px)",
        letterSpacing: "-.01em",
        lineHeight: 1.1,
        color: "#fff",
        textShadow: "0 2px 14px rgba(0,0,0,.55)"
      }
    }, w.title))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "ts-card-grain"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        aspectRatio: "16 / 9",
        borderRadius: "8px",
        overflow: "hidden",
        background: "var(--ts-bg-sink)",
        marginBottom: "12px",
        border: "1px solid var(--card-line, rgba(0,0,0,.20))"
      }
    }, w.video ? /*#__PURE__*/React.createElement("video", {
      poster: w.image,
      autoPlay: true,
      muted: true,
      loop: true,
      playsInline: true,
      preload: "metadata",
      ref: el => {
        if (el) {
          el.muted = true;
          el.defaultMuted = true;
        }
      },
      style: {
        width: "100%",
        height: "100%",
        objectFit: w.fit === "contain" || w.fit === "scale-down" ? "contain" : "cover",
        display: "block"
      }
    }, /*#__PURE__*/React.createElement(ThumbSources, {
      mp4: w.videoSrc
    })) : /*#__PURE__*/React.createElement("img", {
      src: w.image,
      alt: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block"
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        padding: "2px 8px 4px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        letterSpacing: ".22em",
        textTransform: "uppercase",
        color: "var(--card-kicker, #a06a16)",
        marginBottom: "8px"
      }
    }, w.meta), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: "19px",
        letterSpacing: "-.01em",
        lineHeight: 1.2,
        color: "var(--card-ink, #241d12)",
        marginBottom: w.desc ? "6px" : 0
      }
    }, w.title), w.desc ? /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontFamily: "var(--font-body)",
        fontSize: "14px",
        lineHeight: 1.5,
        color: "rgba(36,29,18,.72)"
      }
    }, w.desc) : null)));
  }), /*#__PURE__*/React.createElement("style", null, "@media(prefers-reduced-motion:reduce){.ts-reel-cards a{animation:none!important}}")));
}
function LogoMarquee() {
  // İki renkli (krem silüet + koyu zemin) markalar şeridi.
  const logos = ["funko", "marvel", "disney", "dc", "cn", "kr", "p", "dhc", "pop"];
  const row = logos.concat(logos);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 0 52px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ts-logo-marquee",
    style: {
      position: "relative",
      overflow: "hidden",
      padding: "6px 0",
      borderTop: "1px solid var(--ts-line)",
      borderBottom: "1px solid var(--ts-line)",
      WebkitMaskImage: "linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent)",
      maskImage: "linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ts-logo-track",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "72px",
      width: "max-content",
      paddingLeft: "72px",
      animation: "tsLogoScroll 42s linear infinite"
    }
  }, row.map((n, i) => {
    const big = n === "disney";
    const dc = n === "dc";
    const dhc = n === "dhc";
    const cn = n === "cn";
    const med = n === "kr" || n === "p" || n === "pop";
    return /*#__PURE__*/React.createElement("img", {
      key: i,
      src: "../../assets/logos/mono/" + n + ".png",
      alt: "",
      "aria-hidden": "true",
      style: {
        height: big ? "59px" : dhc ? "70px" : dc ? "52px" : cn ? "48px" : med ? "58px" : "40px",
        width: "auto",
        maxWidth: big ? "280px" : "180px",
        objectFit: "contain",
        opacity: big ? 0.96 : 0.82,
        flex: "none",
        display: "block"
      }
    });
  })), /*#__PURE__*/React.createElement("style", null, "@keyframes tsLogoScroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}.ts-logo-marquee:hover .ts-logo-track{animation-play-state:paused}.ts-logo-marquee img{transition:opacity .25s}.ts-logo-marquee img:hover{opacity:1}@media(prefers-reduced-motion:reduce){.ts-logo-track{animation:none!important}}")));
}
function WorkGrid({
  onOpen,
  cat,
  setCat
}) {
  const shown = D.works.filter(w => cat === "all" || w.cat === cat);
  const [showGuide, setShowGuide] = React.useState(false);
  const isFloating = cat === "reklam" || cat === "karakter";
  return /*#__PURE__*/React.createElement("section", {
    id: "isler",
    style: {
      padding: "var(--space-section) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "54px"
    }
  }, /*#__PURE__*/React.createElement(Slate, null, "Sahne 01 \u2014 Se\xE7ili \u0130\u015Fler"), /*#__PURE__*/React.createElement("h2", {
    style: secHeadH2
  }, "Shot list")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
      marginBottom: "36px",
      alignItems: "center"
    }
  }, D.filters.map(([k, v]) => /*#__PURE__*/React.createElement(FilterTab, {
    key: k,
    active: cat === k,
    onClick: () => setCat(k)
  }, v))), cat === "karakter" ? /*#__PURE__*/React.createElement(LogoMarquee, null) : null, isFloating ? /*#__PURE__*/React.createElement(FloatingCards, {
    works: shown,
    onOpen: onOpen,
    overlay: true,
    aspect: cat === "karakter" ? "16 / 9" : "4 / 5",
    showGuide: showGuide
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--grid-gap)"
    },
    className: "ts-works"
  }, shown.map(w => /*#__PURE__*/React.createElement(WorkCard, {
    key: w.id,
    image: w.image,
    video: w.video,
    fit: w.fit,
    meta: w.meta,
    title: w.title,
    description: w.desc,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onOpen(w);
    }
  })))));
}
function Quotes() {
  return /*#__PURE__*/React.createElement("section", {
    id: "yorumlar",
    style: {
      padding: "0 0 var(--space-section)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "54px"
    }
  }, /*#__PURE__*/React.createElement(Slate, null, "Sahne 02 \u2014 M\xFC\u015Fteri Yorumlar\u0131"), /*#__PURE__*/React.createElement("h2", {
    style: secHeadH2
  }, "Birlikte \xE7al\u0131\u015Fanlar ne diyor")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--grid-gap)"
    },
    className: "ts-quotes"
  }, D.quotes.map((q, i) => /*#__PURE__*/React.createElement(Quote, {
    key: i,
    name: q.name,
    role: q.role
  }, q.text)))));
}
function ToolsStrip() {
  return /*#__PURE__*/React.createElement("section", {
    id: "araclar",
    style: {
      padding: "70px 0",
      borderTop: "1px solid var(--ts-line)",
      borderBottom: "1px solid var(--ts-line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Slate, {
    align: "center",
    tick: false
  }, "Prod\xFCksiyon Altyap\u0131s\u0131"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "14px 34px",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "30px"
    }
  }, D.tools.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    variant: "tool"
  }, t)))));
}
function FinalCTA() {
  return /*#__PURE__*/React.createElement("section", {
    id: "iletisim",
    style: {
      textAlign: "center",
      padding: "140px 0",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      background: "var(--glow-amber)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Slate, {
    align: "center",
    tick: false
  }, "Son Sahne"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--text-display)",
      letterSpacing: "-.02em",
      color: "var(--ts-ink)",
      margin: "18px 0 14px"
    }
  }, "Akl\u0131nda bir", /*#__PURE__*/React.createElement("br", null), "proje mi var?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      color: "var(--ts-ink-dim)",
      maxWidth: "50ch",
      margin: "0 auto 40px",
      lineHeight: 1.6
    }
  }, "Karakter, reklam filmi, animasyon \u2014 fikrini anlat, nas\u0131l \xFCretilece\u011Fini birlikte planlayal\u0131m. Freelance projelere ve tam zamanl\u0131 f\u0131rsatlara a\xE7\u0131\u011F\u0131m."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "16px",
      justifyContent: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "amber",
    href: "mailto:eposta@adresin.com"
  }, "Bana Yaz \u2192"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    href: "#"
  }, "Instagram"))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "1px solid var(--ts-line)",
      padding: "28px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "12px",
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      letterSpacing: ".1em",
      color: "var(--ts-ink-dim)",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Tufan Sezer \u2014 \u0130stanbul"), /*#__PURE__*/React.createElement("span", null, "AI Artist \xB7 Filmmaker \xB7 Pipeline Builder")));
}
function Lightbox({
  item,
  onClose
}) {
  const vref = React.useRef(null);
  const [idx, setIdx] = React.useState(0);
  const [selected, setSelected] = React.useState(null);
  const gallery = item && item.gallery && item.gallery.length ? item.gallery : null;
  React.useEffect(() => {
    setIdx(0);
    setSelected(null);
  }, [item]);
  React.useEffect(() => {
    if (!item || !item.videoSrc) return;
    const v = vref.current;
    if (!v) return;
    v.currentTime = 0;
    v.muted = false;
    v.volume = 1;
    v.play().catch(() => {
      v.muted = true;
      v.play().catch(() => {});
    });
    return () => {
      v.pause();
      v.src = "";
      v.load();
    };
  }, [item]);
  React.useEffect(() => {
    if (!gallery) return;
    const onKey = e => {
      if (e.key === "Escape" && selected != null) {
        setSelected(null);
      } else if (e.key === "ArrowRight") setIdx(i => Math.min(i + 1, gallery.length - 1));else if (e.key === "ArrowLeft") setIdx(i => Math.max(i - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [gallery, selected]);
  if (!item) return null;

  // ── Project gallery: tilted scrolling strip; click → big image center, strip blurred below ─
  if (gallery) {
    const big = selected != null;
    const TH_W = 320,
      TH_H = Math.round(TH_W * 9 / 16),
      GAP = 20,
      ROW_GAP = 20;
    const nRows = gallery.length > 8 ? 3 : 2; // ≤8 görsel → 2 sıra, >8 → 3 sıra
    const metaParts = item.meta.split("·").map(s => s.trim());
    // Each row: a distinct ordering (rotated offset + alternating reverse) of the same images.
    const rowOrder = r => {
      const off = Math.floor(gallery.length * r / nRows) + r;
      const idxs = gallery.map((_, k) => (k + off) % gallery.length);
      if (r % 2 === 1) idxs.reverse();
      return idxs;
    };
    const rowDur = r => Math.max(22, gallery.length * 6) * [1, 1.3, 0.85][r];
    const strip = /*#__PURE__*/React.createElement("div", {
      className: "ts-galstrip",
      style: {
        position: "absolute",
        top: "50%",
        left: "-30%",
        width: "160%",
        overflow: "visible",
        transform: "translateY(-50%) rotate(-5deg)",
        filter: big ? "blur(3px)" : "none",
        opacity: big ? .3 : 1,
        transition: "filter .35s, opacity .35s",
        maskImage: "linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent)",
        WebkitMaskImage: "linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent)",
        display: "flex",
        flexDirection: "column",
        gap: `${ROW_GAP}px`
      }
    }, Array.from({
      length: nRows
    }, (_, r) => {
      const loop = rowOrder(r).concat(rowOrder(r));
      const rev = r % 2 === 1; // row 0 → left, row 1 → right, row 2 → left
      return /*#__PURE__*/React.createElement("div", {
        key: r,
        style: {
          overflow: "visible"
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "ts-track",
        style: {
          display: "flex",
          gap: `${GAP}px`,
          width: "max-content",
          animation: `${rev ? "tsMarqueeRev" : "tsMarquee"} ${rowDur(r)}s linear infinite`
        }
      }, loop.map((real, i) => {
        const active = big && real === selected;
        return /*#__PURE__*/React.createElement("button", {
          key: i,
          onClick: e => {
            e.stopPropagation();
            setSelected(real);
          },
          "aria-label": "Görsel " + (real + 1),
          style: {
            flex: "0 0 auto",
            width: `${TH_W}px`,
            height: `${TH_H}px`,
            padding: 0,
            cursor: "pointer",
            borderRadius: "12px",
            overflow: "hidden",
            border: "1px solid " + (active ? "var(--ts-amber)" : "var(--ts-line)"),
            background: "var(--ts-bg-sink)",
            boxShadow: active ? "0 22px 50px rgba(0,0,0,.5)" : "0 12px 28px rgba(0,0,0,.4)",
            transition: "border-color .3s, box-shadow .3s"
          }
        }, /*#__PURE__*/React.createElement("img", {
          src: gallery[real],
          alt: "",
          style: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block"
          }
        }));
      })));
    }));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "#0a0807",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("style", null, "@keyframes tsMarquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}@keyframes tsMarqueeRev{from{transform:translateX(-50%)}to{transform:translateX(0)}}.ts-galstrip:hover .ts-track{animation-play-state:paused}.ts-galstrip:hover{filter:blur(0)!important;opacity:1!important}@keyframes tsFade{from{opacity:0;transform:scale(.985)}to{opacity:1;transform:none}}"), /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      style: {
        position: "fixed",
        top: "24px",
        right: "28px",
        zIndex: 4,
        background: "rgba(10,8,7,.7)",
        backdropFilter: "blur(4px)",
        border: "1px solid var(--ts-line)",
        color: "var(--ts-ink)",
        fontFamily: "var(--font-mono)",
        fontSize: "12px",
        letterSpacing: ".1em",
        padding: "10px 16px",
        cursor: "pointer",
        textTransform: "uppercase"
      }
    }, "Kapat \u2715"), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        padding: "72px 24px 0",
        flex: "0 0 auto",
        position: "relative",
        zIndex: 1,
        pointerEvents: "none"
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        fontSize: "clamp(40px, 6vw, 88px)",
        lineHeight: .95,
        letterSpacing: "-.02em",
        color: "var(--ts-ink)",
        margin: 0,
        textTransform: "uppercase"
      }
    }, item.title.split("—")[0].trim()), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "12px",
        letterSpacing: ".34em",
        textTransform: "uppercase",
        color: "var(--ts-amber)",
        marginTop: "14px"
      }
    }, metaParts[metaParts.length - 1], " \xB7 ", big ? `${String(selected + 1).padStart(2, "0")}/${String(gallery.length).padStart(2, "0")}` : `${String(gallery.length).padStart(2, "0")} GÖRSEL`)), /*#__PURE__*/React.createElement("div", {
      onClick: e => {
        if (big && e.target === e.currentTarget) setSelected(null);
      },
      style: {
        flex: "1 1 auto",
        minHeight: 0,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center"
      }
    }, strip, big && /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 32px",
        pointerEvents: "none",
        zIndex: 2
      }
    }, /*#__PURE__*/React.createElement("img", {
      key: gallery[selected],
      src: gallery[selected],
      alt: item.title,
      onClick: () => setSelected(null),
      style: {
        maxWidth: "min(1000px, 88vw)",
        maxHeight: "82%",
        objectFit: "contain",
        borderRadius: "16px",
        border: "1px solid var(--ts-line)",
        background: "var(--ts-bg-sink)",
        boxShadow: "0 30px 80px rgba(0,0,0,.6)",
        animation: "tsFade .4s ease",
        cursor: "zoom-out",
        pointerEvents: "auto",
        display: "block"
      }
    }))));
  }

  // ── Single image / video ───────────────────────────────────────
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 200,
      background: "rgba(10,8,6,.94)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "32px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      position: "absolute",
      top: "24px",
      right: "28px",
      background: "none",
      border: "1px solid var(--ts-line)",
      color: "var(--ts-ink)",
      fontFamily: "var(--font-mono)",
      fontSize: "12px",
      letterSpacing: ".1em",
      padding: "10px 16px",
      cursor: "pointer",
      textTransform: "uppercase"
    }
  }, "Kapat \u2715"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "min(960px,100%)"
    },
    onClick: e => e.stopPropagation()
  }, item.videoSrc ? /*#__PURE__*/React.createElement("video", {
    ref: vref,
    src: item.videoSrc,
    poster: item.image,
    controls: true,
    autoPlay: true,
    playsInline: true,
    style: {
      width: "100%",
      maxHeight: "76vh",
      objectFit: "contain",
      border: "1px solid var(--ts-line)",
      background: "#000",
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement("img", {
    src: item.image,
    alt: item.title,
    style: {
      width: "100%",
      maxHeight: "86vh",
      objectFit: "contain",
      border: "1px solid var(--ts-line)",
      background: "var(--ts-bg-sink)",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "14px",
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: "var(--ts-ink-dim)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ts-amber)"
    }
  }, item.title), " \u2014 ", item.meta)));
}
function ReelLightbox({
  open,
  src,
  onClose
}) {
  const vref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const v = vref.current;
    if (!v) return;
    v.currentTime = 0;
    v.muted = false;
    v.volume = 1;
    v.play().catch(() => {
      v.muted = true;
      v.play().catch(() => {});
    });
    return () => {
      v.pause();
      v.src = "";
      v.load();
    };
  }, [open]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 220,
      background: "rgba(10,8,6,.95)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "32px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      position: "absolute",
      top: "24px",
      right: "28px",
      background: "none",
      border: "1px solid var(--ts-line)",
      color: "var(--ts-ink)",
      fontFamily: "var(--font-mono)",
      fontSize: "12px",
      letterSpacing: ".1em",
      padding: "10px 16px",
      cursor: "pointer",
      textTransform: "uppercase"
    }
  }, "Kapat \u2715"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "min(1100px,100%)"
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("video", {
    ref: vref,
    src: src,
    controls: true,
    autoPlay: true,
    playsInline: true,
    style: {
      width: "100%",
      maxHeight: "82vh",
      objectFit: "contain",
      border: "1px solid var(--ts-line)",
      background: "#000",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "14px",
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: "var(--ts-ink-dim)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ts-amber)"
    }
  }, "Showreel"), " \u2014 Tufan Sezer \xB7 2026")));
}
function App() {
  const [lb, setLb] = React.useState(null);
  const [reelOpen, setReelOpen] = React.useState(false);
  const [cat, setCat] = React.useState("reklam");
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === "Escape") {
        setLb(null);
        setReelOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "ts-grain",
    style: {
      background: "var(--ts-bg)",
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, {
    onExpandReel: () => setReelOpen(true),
    onPickCat: setCat
  }), /*#__PURE__*/React.createElement(WorkGrid, {
    onOpen: setLb,
    cat: cat,
    setCat: setCat
  }), /*#__PURE__*/React.createElement(Quotes, null), /*#__PURE__*/React.createElement(ToolsStrip, null), /*#__PURE__*/React.createElement(FinalCTA, null), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(Lightbox, {
    item: lb,
    onClose: () => setLb(null)
  }), /*#__PURE__*/React.createElement(ReelLightbox, {
    open: reelOpen,
    src: "showreel.mp4",
    onClose: () => setReelOpen(false)
  }));
}
window.TS_App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Sections.standalone.jsx
try { (() => {
/* Portfolio UI kit — screen sections. Composes the DS components. Exports window.TS_App. */
const DS = window.TufanSezerDesignSystem_d584c6;
const {
  Button,
  Slate,
  Badge,
  FilterTab,
  Tag,
  Quote,
  ReelFrame,
  WorkCard
} = DS;
const D = window.TS_DATA;
const wrap = {
  maxWidth: "var(--layout-max)",
  margin: "0 auto",
  padding: "0 var(--layout-gutter)"
};
const secHeadH2 = {
  fontFamily: "var(--font-display)",
  fontWeight: 700,
  fontSize: "var(--text-h2)",
  letterSpacing: "-.01em",
  color: "var(--ts-ink)",
  margin: "16px 0 0"
};
function Nav() {
  const links = [["#isler", "İşler"], ["#yorumlar", "Yorumlar"], ["#araclar", "Araçlar"], ["#iletisim", "İletişim"]];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: "linear-gradient(to bottom, rgba(20,17,14,.92), rgba(20,17,14,0))",
      backdropFilter: "blur(2px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: "20px var(--layout-gutter)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "13px",
      letterSpacing: ".12em",
      textDecoration: "none",
      color: "var(--ts-ink)"
    }
  }, "TUFAN", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--ts-amber)",
      fontWeight: 500
    }
  }, "SEZER"), " / AI\xB7FILM"), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "flex",
      gap: "28px",
      listStyle: "none",
      margin: 0,
      padding: 0
    },
    className: "ts-navlinks"
  }, links.map(([h, l]) => /*#__PURE__*/React.createElement("li", {
    key: h
  }, /*#__PURE__*/React.createElement("a", {
    href: h,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "12px",
      letterSpacing: ".1em",
      textTransform: "uppercase",
      textDecoration: "none",
      color: "var(--ts-ink-dim)"
    },
    onMouseEnter: e => e.currentTarget.style.color = "var(--ts-amber)",
    onMouseLeave: e => e.currentTarget.style.color = "var(--ts-ink-dim)"
  }, l))))));
}
function Hero({
  onExpandReel,
  onPickCat
}) {
  const cards = [{
    k: "reklam",
    label: "A.İ FİLM ÇALIŞMALARI",
    no: "01",
    top: "1%",
    left: "2%",
    rot: -8,
    w: "430px",
    tone: "beige",
    img: window.__resources["rgas"]
  }, {
    k: "karakter",
    label: "FİGÜR · OYUNCAK SEKTÖRÜ",
    no: "02",
    top: "60%",
    left: "52%",
    rot: -4,
    w: "410px",
    tone: "beige",
    img: window.__resources["r57"]
  }, {
    k: "diger",
    label: "DİĞER İŞLER",
    no: "03",
    top: "55%",
    left: "0%",
    rot: 7,
    w: "430px",
    tone: "beige",
    img: window.__resources["r58"]
  }, {
    k: "all",
    label: "TÜMÜ",
    no: "04",
    top: "12%",
    left: "40%",
    rot: -2,
    w: "420px",
    tone: "beige",
    img: window.__resources["r59"]
  }];
  const [topCard, setTopCard] = React.useState(null);
  return /*#__PURE__*/React.createElement("header", {
    id: "top",
    style: {
      minHeight: "100svh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "relative",
      padding: "120px 0 60px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "var(--letterbox)",
      background: "#000",
      zIndex: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: "var(--letterbox)",
      background: "#000",
      zIndex: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "grid",
      gridTemplateColumns: ".82fr 1.18fr",
      gap: "40px",
      alignItems: "center"
    },
    className: "ts-hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Slate, null, "\u0130stanbul \xB7 2013'ten beri g\xF6rsel \xFCretim"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--text-hero)",
      lineHeight: 1.0,
      letterSpacing: "-.02em",
      color: "var(--ts-ink)",
      margin: "20px 0 24px"
    }
  }, "Karakterden kareye,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ts-ink)",
      borderBottom: "6px solid var(--ts-amber)",
      paddingBottom: "4px"
    }
  }, "AI ile film"), " \xFCretiyorum."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      color: "var(--ts-ink-dim)",
      fontSize: "var(--text-lead)",
      maxWidth: "46ch",
      lineHeight: 1.6,
      marginBottom: "36px"
    }
  }, "Karakter tasar\u0131m\u0131, k\u0131sa reklam filmleri ve animasyon \u2014 ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--ts-ink)",
      fontWeight: 600
    }
  }, "ComfyUI tabanl\u0131, u\xE7tan uca lokal prod\xFCksiyon."), " Konsepten render'a tek elden."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "16px",
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "amber",
    href: "#iletisim"
  }, "Proje Konu\u015Fal\u0131m \u2192"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    href: "#",
    onClick: e => {
      e.preventDefault();
      onExpandReel();
    }
  }, "\u25B6 Showreel'i \u0130zle"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "1 / .92",
      minHeight: "780px"
    },
    className: "ts-hero-cards"
  }, cards.map((c, i) => {
    const beige = c.tone === "beige";
    return /*#__PURE__*/React.createElement("a", {
      key: c.k,
      href: "#isler",
      onClick: () => onPickCat(c.k),
      style: {
        position: "absolute",
        top: c.top,
        left: c.left,
        width: c.w,
        display: "block",
        zIndex: topCard === c.k ? 10 : i + 1,
        padding: "14px 14px 18px",
        textDecoration: "none",
        background: "var(--card-bg, #8c8373)",
        border: "1px solid var(--card-line, rgba(0,0,0,.28))",
        borderRadius: "12px",
        boxShadow: "0 32px 70px rgba(0,0,0,.6)",
        transform: `rotate(${c.rot}deg)`,
        transition: "transform .35s cubic-bezier(.22,1,.36,1), border-color .25s, box-shadow .35s",
        willChange: "translate",
        animation: `tsHeroFloat ${3.4 + i * .5}s ease-in-out ${i * .45}s infinite alternate`
      },
      onMouseEnter: e => {
        setTopCard(c.k);
        e.currentTarget.style.transform = "rotate(0deg) translateY(-8px) scale(1.04)";
        e.currentTarget.style.borderColor = "var(--ts-amber)";
        e.currentTarget.style.boxShadow = "0 46px 95px rgba(0,0,0,.72)";
        e.currentTarget.style.animationPlayState = "paused";
      },
      onMouseLeave: e => {
        e.currentTarget.style.transform = `rotate(${c.rot}deg)`;
        e.currentTarget.style.borderColor = "var(--card-line, rgba(0,0,0,.28))";
        e.currentTarget.style.boxShadow = "0 32px 70px rgba(0,0,0,.6)";
        e.currentTarget.style.animationPlayState = "running";
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        aspectRatio: "16 / 9",
        borderRadius: "8px",
        overflow: "hidden",
        background: "var(--ts-bg-sink)",
        marginBottom: "12px",
        border: "1px solid var(--card-line, rgba(0,0,0,.28))"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: c.img,
      alt: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block"
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        padding: "0 8px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontFamily: "var(--font-mono)",
        fontSize: "13px",
        letterSpacing: ".22em",
        color: "var(--card-kicker, #000000)",
        marginBottom: "9px"
      }
    }, c.no, " \xB7 KATEGOR\u0130"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontFamily: "var(--font-mono)",
        fontSize: "clamp(13px, 1.15vw, 17px)",
        letterSpacing: ".16em",
        color: "var(--card-ink, #ffffff)",
        whiteSpace: "nowrap"
      }
    }, c.label)));
  }))), /*#__PURE__*/React.createElement("style", null, "@keyframes tsHeroFloat{0%{translate:0 -22px}100%{translate:0 22px}}@media(prefers-reduced-motion:reduce){.ts-hero-cards a{animation:none!important}}"));
}
function WorkGrid({
  onOpen,
  cat,
  setCat
}) {
  const shown = D.works.filter(w => cat === "all" || w.cat === cat);
  return /*#__PURE__*/React.createElement("section", {
    id: "isler",
    style: {
      padding: "var(--space-section) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "54px"
    }
  }, /*#__PURE__*/React.createElement(Slate, null, "Sahne 01 \u2014 Se\xE7ili \u0130\u015Fler"), /*#__PURE__*/React.createElement("h2", {
    style: secHeadH2
  }, "Shot list")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
      marginBottom: "36px"
    }
  }, D.filters.map(([k, v]) => /*#__PURE__*/React.createElement(FilterTab, {
    key: k,
    active: cat === k,
    onClick: () => setCat(k)
  }, v))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--grid-gap)"
    },
    className: "ts-works"
  }, shown.map(w => /*#__PURE__*/React.createElement(WorkCard, {
    key: w.id,
    image: w.image,
    video: w.video,
    fit: w.fit,
    meta: w.meta,
    title: w.title,
    description: w.desc,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onOpen(w);
    }
  })))));
}
function Quotes() {
  return /*#__PURE__*/React.createElement("section", {
    id: "yorumlar",
    style: {
      padding: "0 0 var(--space-section)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "54px"
    }
  }, /*#__PURE__*/React.createElement(Slate, null, "Sahne 02 \u2014 M\xFC\u015Fteri Yorumlar\u0131"), /*#__PURE__*/React.createElement("h2", {
    style: secHeadH2
  }, "Birlikte \xE7al\u0131\u015Fanlar ne diyor")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--grid-gap)"
    },
    className: "ts-quotes"
  }, D.quotes.map((q, i) => /*#__PURE__*/React.createElement(Quote, {
    key: i,
    name: q.name,
    role: q.role
  }, q.text)))));
}
function ToolsStrip() {
  return /*#__PURE__*/React.createElement("section", {
    id: "araclar",
    style: {
      padding: "70px 0",
      borderTop: "1px solid var(--ts-line)",
      borderBottom: "1px solid var(--ts-line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Slate, {
    align: "center",
    tick: false
  }, "Prod\xFCksiyon Altyap\u0131s\u0131"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "14px 34px",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "30px"
    }
  }, D.tools.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    variant: "tool"
  }, t)))));
}
function FinalCTA() {
  return /*#__PURE__*/React.createElement("section", {
    id: "iletisim",
    style: {
      textAlign: "center",
      padding: "140px 0",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      background: "var(--glow-amber)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Slate, {
    align: "center",
    tick: false
  }, "Son Sahne"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--text-display)",
      letterSpacing: "-.02em",
      color: "var(--ts-ink)",
      margin: "18px 0 14px"
    }
  }, "Akl\u0131nda bir", /*#__PURE__*/React.createElement("br", null), "proje mi var?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      color: "var(--ts-ink-dim)",
      maxWidth: "50ch",
      margin: "0 auto 40px",
      lineHeight: 1.6
    }
  }, "Karakter, reklam filmi, animasyon \u2014 fikrini anlat, nas\u0131l \xFCretilece\u011Fini birlikte planlayal\u0131m. Freelance projelere ve tam zamanl\u0131 f\u0131rsatlara a\xE7\u0131\u011F\u0131m."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "16px",
      justifyContent: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "amber",
    href: "mailto:eposta@adresin.com"
  }, "Bana Yaz \u2192"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    href: "#"
  }, "Instagram"))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "1px solid var(--ts-line)",
      padding: "28px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "12px",
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      letterSpacing: ".1em",
      color: "var(--ts-ink-dim)",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Tufan Sezer \u2014 \u0130stanbul"), /*#__PURE__*/React.createElement("span", null, "AI Artist \xB7 Filmmaker \xB7 Pipeline Builder")));
}
function Lightbox({
  item,
  onClose
}) {
  const vref = React.useRef(null);
  const [idx, setIdx] = React.useState(0);
  const [selected, setSelected] = React.useState(null);
  const gallery = item && item.gallery && item.gallery.length ? item.gallery : null;
  React.useEffect(() => {
    setIdx(0);
    setSelected(null);
  }, [item]);
  React.useEffect(() => {
    if (!item || !item.videoSrc) return;
    const v = vref.current;
    if (!v) return;
    v.muted = true;
    v.currentTime = 0;
    v.play().catch(() => {});
    return () => {
      v.pause();
      v.src = "";
      v.load();
    };
  }, [item]);
  React.useEffect(() => {
    if (!gallery) return;
    const onKey = e => {
      if (e.key === "Escape" && selected != null) {
        setSelected(null);
      } else if (e.key === "ArrowRight") setIdx(i => Math.min(i + 1, gallery.length - 1));else if (e.key === "ArrowLeft") setIdx(i => Math.max(i - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [gallery, selected]);
  if (!item) return null;

  // ── Project gallery: tilted scrolling strip; click → big image center, strip blurred below ─
  if (gallery) {
    const big = selected != null;
    const TH_W = 480,
      TH_H = TH_W * 9 / 16,
      GAP = 24;
    const loop = gallery.concat(gallery);
    const dur = Math.max(24, gallery.length * 6);
    const metaParts = item.meta.split("·").map(s => s.trim());
    const strip = /*#__PURE__*/React.createElement("div", {
      className: "ts-galstrip",
      style: {
        position: "absolute",
        top: "50%",
        left: "-25%",
        width: "150%",
        overflow: "visible",
        transform: "translateY(-50%) rotate(-5deg)",
        filter: big ? "blur(3px)" : "none",
        opacity: big ? .3 : 1,
        transition: "filter .35s, opacity .35s",
        maskImage: "linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent)",
        WebkitMaskImage: "linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "ts-track",
      style: {
        display: "flex",
        gap: `${GAP}px`,
        width: "max-content",
        animation: `tsMarquee ${dur}s linear infinite`
      }
    }, loop.map((g, i) => {
      const real = i % gallery.length;
      const active = big && real === selected;
      return /*#__PURE__*/React.createElement("button", {
        key: i,
        onClick: e => {
          e.stopPropagation();
          setSelected(real);
        },
        "aria-label": "Görsel " + (real + 1),
        style: {
          flex: "0 0 auto",
          width: `${TH_W}px`,
          height: `${TH_H}px`,
          padding: 0,
          cursor: "pointer",
          borderRadius: "14px",
          overflow: "hidden",
          border: "1px solid " + (active ? "var(--ts-amber)" : "var(--ts-line)"),
          background: "var(--ts-bg-sink)",
          boxShadow: active ? "0 22px 50px rgba(0,0,0,.5)" : "0 14px 34px rgba(0,0,0,.4)",
          transition: "border-color .3s, box-shadow .3s"
        }
      }, /*#__PURE__*/React.createElement("img", {
        src: g,
        alt: "",
        style: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block"
        }
      }));
    })));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "#0a0807",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("style", null, "@keyframes tsMarquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}.ts-galstrip:hover .ts-track{animation-play-state:paused}.ts-galstrip:hover{filter:blur(0)!important;opacity:1!important}@keyframes tsFade{from{opacity:0;transform:scale(.985)}to{opacity:1;transform:none}}"), /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      style: {
        position: "fixed",
        top: "24px",
        right: "28px",
        zIndex: 4,
        background: "rgba(10,8,7,.7)",
        backdropFilter: "blur(4px)",
        border: "1px solid var(--ts-line)",
        color: "var(--ts-ink)",
        fontFamily: "var(--font-mono)",
        fontSize: "12px",
        letterSpacing: ".1em",
        padding: "10px 16px",
        cursor: "pointer",
        textTransform: "uppercase"
      }
    }, "Kapat \u2715"), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        padding: "72px 24px 0",
        flex: "0 0 auto",
        position: "relative",
        zIndex: 1,
        pointerEvents: "none"
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        fontSize: "clamp(40px, 6vw, 88px)",
        lineHeight: .95,
        letterSpacing: "-.02em",
        color: "var(--ts-ink)",
        margin: 0,
        textTransform: "uppercase"
      }
    }, item.title.split("—")[0].trim()), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "12px",
        letterSpacing: ".34em",
        textTransform: "uppercase",
        color: "var(--ts-amber)",
        marginTop: "14px"
      }
    }, metaParts[metaParts.length - 1], " \xB7 ", big ? `${String(selected + 1).padStart(2, "0")}/${String(gallery.length).padStart(2, "0")}` : `${String(gallery.length).padStart(2, "0")} GÖRSEL`)), /*#__PURE__*/React.createElement("div", {
      onClick: e => {
        if (big && e.target === e.currentTarget) setSelected(null);
      },
      style: {
        flex: "1 1 auto",
        minHeight: 0,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center"
      }
    }, strip, big && /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 32px",
        pointerEvents: "none",
        zIndex: 2
      }
    }, /*#__PURE__*/React.createElement("img", {
      key: gallery[selected],
      src: gallery[selected],
      alt: item.title,
      onClick: () => setSelected(null),
      style: {
        maxWidth: "min(1000px, 88vw)",
        maxHeight: "82%",
        objectFit: "contain",
        borderRadius: "16px",
        border: "1px solid var(--ts-line)",
        background: "var(--ts-bg-sink)",
        boxShadow: "0 30px 80px rgba(0,0,0,.6)",
        animation: "tsFade .4s ease",
        cursor: "zoom-out",
        pointerEvents: "auto",
        display: "block"
      }
    }))));
  }

  // ── Single image / video ───────────────────────────────────────
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 200,
      background: "rgba(10,8,6,.94)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "32px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      position: "absolute",
      top: "24px",
      right: "28px",
      background: "none",
      border: "1px solid var(--ts-line)",
      color: "var(--ts-ink)",
      fontFamily: "var(--font-mono)",
      fontSize: "12px",
      letterSpacing: ".1em",
      padding: "10px 16px",
      cursor: "pointer",
      textTransform: "uppercase"
    }
  }, "Kapat \u2715"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "min(960px,100%)"
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("img", {
    src: item.image,
    alt: item.title,
    style: {
      width: "100%",
      maxHeight: "86vh",
      objectFit: "contain",
      border: "1px solid var(--ts-line)",
      background: "var(--ts-bg-sink)",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "14px",
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: "var(--ts-ink-dim)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ts-amber)"
    }
  }, item.title), " \u2014 ", item.meta)));
}
function ReelLightbox({
  open,
  src,
  onClose
}) {
  const vref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const v = vref.current;
    if (!v) return;
    v.muted = true;
    v.currentTime = 0;
    v.play().catch(() => {});
    return () => {
      v.pause();
      v.src = "";
      v.load();
    };
  }, [open]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 220,
      background: "rgba(10,8,6,.95)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "32px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      position: "absolute",
      top: "24px",
      right: "28px",
      background: "none",
      border: "1px solid var(--ts-line)",
      color: "var(--ts-ink)",
      fontFamily: "var(--font-mono)",
      fontSize: "12px",
      letterSpacing: ".1em",
      padding: "10px 16px",
      cursor: "pointer",
      textTransform: "uppercase"
    }
  }, "Kapat \u2715"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "min(1100px,100%)"
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Showreel",
    style: {
      width: "100%",
      maxHeight: "82vh",
      objectFit: "contain",
      border: "1px solid var(--ts-line)",
      background: "#000",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "14px",
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: "var(--ts-ink-dim)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ts-amber)"
    }
  }, "Showreel"), " \u2014 Tufan Sezer \xB7 2026")));
}
function App() {
  const [lb, setLb] = React.useState(null);
  const [reelOpen, setReelOpen] = React.useState(false);
  const [cat, setCat] = React.useState("reklam");
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === "Escape") {
        setLb(null);
        setReelOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "ts-grain",
    style: {
      background: "var(--ts-bg)",
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, {
    onExpandReel: () => setReelOpen(true),
    onPickCat: setCat
  }), /*#__PURE__*/React.createElement(WorkGrid, {
    onOpen: setLb,
    cat: cat,
    setCat: setCat
  }), /*#__PURE__*/React.createElement(Quotes, null), /*#__PURE__*/React.createElement(ToolsStrip, null), /*#__PURE__*/React.createElement(FinalCTA, null), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(Lightbox, {
    item: lb,
    onClose: () => setLb(null)
  }), /*#__PURE__*/React.createElement(ReelLightbox, {
    open: reelOpen,
    src: window.__resources["r56"],
    onClose: () => setReelOpen(false)
  }));
}
window.TS_App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Sections.standalone.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/data.js
try { (() => {
/* Portfolio UI-kit content. Sets window.TS_DATA. */
window.TS_DATA = {
  // WebM önizleme dosyaları eklenince (her video için "x-preview.webm") bunu true yapın;
  // kartlar hafif WebM kullanır, iOS/destek yoksa otomatik MP4'e düşer. Tam boy izleme her zaman MP4 (tam kalite).
  webmReady: false,
  works: [{
    id: "benzin",
    cat: "reklam",
    video: true,
    videoSrc: "showreel.mp4",
    image: "../../assets/work/javier.jpeg",
    fit: "scale-down",
    meta: "Klip · LTX 2.3 · 24fps",
    title: "Benzin İstasyonu — Animasyon Kısa Film",
    desc: "İki karakterli, kilitli kamera sinematik kısa. Karakter tasarımından lip-sync'e tam pipeline."
  }, {
    id: "kidrobot",
    cat: "reklam",
    video: true,
    videoSrc: "dog.mp4",
    image: "../../assets/work/dog-poster.png",
    fit: "contain",
    meta: "Reklam · LTX 2.3 · 24fps",
    title: "Dog — Karakter Reklamı",
    desc: "Köpek karakterli kısa reklam filmi. Lip-sync ve animasyon tam pipeline."
  }, {
    id: "donald",
    cat: "reklam",
    video: true,
    videoSrc: "bunnyskate.mp4",
    image: "../../assets/work/bunnyskate-poster.png",
    meta: "Reklam · LTX 2.3 · 24fps",
    title: "BunnySkate — Reklam Filmi",
    desc: "Kaykaylı karakter reklam filmi. Hareket ve sahne ışığı uçtan uca AI pipeline ile."
  }, {
    id: "keyblade",
    cat: "reklam",
    video: true,
    videoSrc: "nesquik.mp4",
    image: "../../assets/work/nesquik-poster.png",
    fit: "contain",
    meta: "Reklam · LTX 2.3 · 24fps",
    title: "Nesquik — Ürün Reklamı",
    desc: "Marka ürün reklamı için sinematik kısa. Karakter ve ürün kurgusu tek elden."
  }, {
    id: "toys",
    cat: "reklam",
    video: true,
    videoSrc: "toys.mp4",
    image: "../../assets/work/toys-poster.png",
    meta: "Reklam · LTX 2.3 · 24fps",
    title: "ToyS — Koleksiyon Figür Reklamı",
    desc: "Premium koleksiyon figürü için sinematik ürün filmi. Sahne ışığı ve materyal çalışması AI pipeline ile."
  }, {
    id: "wolverine",
    cat: "karakter",
    image: "../../assets/work/oyuncak-sektoru/Wolverine.png",
    gallery: ["../../assets/work/oyuncak-sektoru/Wolverine.png", "../../assets/work/oyuncak-sektoru/wolverine/w2.png", "../../assets/work/oyuncak-sektoru/wolverine/w3.png", "../../assets/work/oyuncak-sektoru/wolverine/w4.png", "../../assets/work/oyuncak-sektoru/wolverine/w5.png", "../../assets/work/oyuncak-sektoru/wolverine/w6.png", "../../assets/work/oyuncak-sektoru/wolverine/w7.png", "../../assets/work/oyuncak-sektoru/wolverine/w8.png", "../../assets/work/oyuncak-sektoru/wolverine/w9.png", "../../assets/work/oyuncak-sektoru/wolverine/p1.jpg", "../../assets/work/oyuncak-sektoru/wolverine/p2.jpg"],
    meta: "Karakter · Figür",
    title: "Wolverine",
    desc: "Mondo 1/6 figürü; alternatif baş, el ve aksesuar setiyle çok açılı ürün galerisi."
  }, {
    id: "transistor",
    cat: "karakter",
    image: "../../assets/work/oyuncak-sektoru/Transistor_RedFigurine_005.png",
    gallery: ["../../assets/work/oyuncak-sektoru/Transistor_RedFigurine_005.png", "../../assets/work/oyuncak-sektoru/red/r1.png", "../../assets/work/oyuncak-sektoru/red/r2.png", "../../assets/work/oyuncak-sektoru/red/r3.png", "../../assets/work/oyuncak-sektoru/red/r6.png", "../../assets/work/oyuncak-sektoru/red/r7.png", "../../assets/work/oyuncak-sektoru/red/slide.jpg", "../../assets/work/oyuncak-sektoru/red/latest.png", "../../assets/work/oyuncak-sektoru/red/c1.png", "../../assets/work/oyuncak-sektoru/red/c2.png", "../../assets/work/oyuncak-sektoru/red/c3.png", "../../assets/work/oyuncak-sektoru/red/p1.png", "../../assets/work/oyuncak-sektoru/red/p2.png"],
    meta: "Karakter · Vinyl Figür",
    title: "Transistor — Red",
    desc: "Kutulu koleksiyon figürü ve ambalaj görseli; çok açılı detay galerisi."
  }, {
    id: "mlp",
    cat: "karakter",
    image: "../../assets/work/oyuncak-sektoru/mlp-chibis.jpg",
    gallery: ["../../assets/work/oyuncak-sektoru/mlp-chibis.jpg", "../../assets/work/oyuncak-sektoru/mlp/feature.jpg", "../../assets/work/oyuncak-sektoru/ponies/group.jpg", "../../assets/work/oyuncak-sektoru/ponies/celestia.webp", "../../assets/work/oyuncak-sektoru/ponies/luna.webp", "../../assets/work/oyuncak-sektoru/ponies/rainbow.webp", "../../assets/work/oyuncak-sektoru/ponies/fluttershy.webp", "../../assets/work/oyuncak-sektoru/ponies/lyra.webp", "../../assets/work/oyuncak-sektoru/ponies/octavia.webp", "../../assets/work/oyuncak-sektoru/mlp/group.jpg"],
    meta: "WeLoveFine · Chibi Figür",
    title: "My Little Pony — Chibi Serisi",
    desc: "WeLoveFine chibi figür serisi; Celestia, Luna, Rainbow Dash, Fluttershy, Lyra ve Octavia ürün çekimleri."
  }, {
    id: "mondoid",
    cat: "karakter",
    image: "../../assets/work/oyuncak-sektoru/mondoid.jpg",
    gallery: ["../../assets/work/oyuncak-sektoru/mondoid.jpg", "../../assets/work/oyuncak-sektoru/mondoids/melting-1.jpg", "../../assets/work/oyuncak-sektoru/mondoids/melting-2.jpg", "../../assets/work/oyuncak-sektoru/mondoids/melting-3.jpg", "../../assets/work/oyuncak-sektoru/mondoids/raptor-1.jpg", "../../assets/work/oyuncak-sektoru/mondoids/raptor-2.jpg", "../../assets/work/oyuncak-sektoru/mondoids/trex-1.jpg", "../../assets/work/oyuncak-sektoru/mondoids/trex-2.jpg", "../../assets/work/oyuncak-sektoru/mondoids/melting-4.jpg", "../../assets/work/oyuncak-sektoru/mondoids/vaultboy.jpg", "../../assets/work/oyuncak-sektoru/mondoids/vaulthand.jpg", "../../assets/work/oyuncak-sektoru/mondoids/gremlins.png", "../../assets/work/oyuncak-sektoru/mondoids/caco-turn.png", "../../assets/work/oyuncak-sektoru/mondoids/caco.png", "../../assets/work/oyuncak-sektoru/mondoids/base.png", "../../assets/work/oyuncak-sektoru/mondoids/mb1.jpg", "../../assets/work/oyuncak-sektoru/mondoids/mb2.jpg", "../../assets/work/oyuncak-sektoru/mondoids/r2293.jpg", "../../assets/work/oyuncak-sektoru/mondoids/r2297.jpg", "../../assets/work/oyuncak-sektoru/mondoids/key.png", "../../assets/work/oyuncak-sektoru/mondoids/p1.jpg", "../../assets/work/oyuncak-sektoru/mondoids/p2.jpg", "../../assets/work/oyuncak-sektoru/mondoids/p3.jpg", "../../assets/work/oyuncak-sektoru/mondoids/p4.jpg", "../../assets/work/oyuncak-sektoru/mondoids/x1.jpg", "../../assets/work/oyuncak-sektoru/mondoids/x2.jpg", "../../assets/work/oyuncak-sektoru/mondoids/x3.jpg", "../../assets/work/oyuncak-sektoru/mondoids/x4.jpg", "../../assets/work/oyuncak-sektoru/mondoids/x5.jpg", "../../assets/work/oyuncak-sektoru/mondoids/x6.jpg", "../../assets/work/oyuncak-sektoru/mondoids/x7.jpg", "../../assets/work/oyuncak-sektoru/mondoids/x8.jpg", "../../assets/work/oyuncak-sektoru/mondoids/x9.jpg", "../../assets/work/oyuncak-sektoru/mondoids/x10.jpg", "../../assets/work/oyuncak-sektoru/mondoids/x11.jpg", "../../assets/work/oyuncak-sektoru/mondoids/x12.jpg", "../../assets/work/oyuncak-sektoru/mondoids/x13.jpg", "../../assets/work/oyuncak-sektoru/mondoids/x14.jpg", "../../assets/work/oyuncak-sektoru/mondoids/x15.png", "../../assets/work/oyuncak-sektoru/mondoids/x16.png", "../../assets/work/oyuncak-sektoru/mondoids/x17.png", "../../assets/work/oyuncak-sektoru/mondoids/x18.png", "../../assets/work/oyuncak-sektoru/mondoids/x19.png", "../../assets/work/oyuncak-sektoru/mondoids/x20.png", "../../assets/work/oyuncak-sektoru/mondoids/x21.png", "../../assets/work/oyuncak-sektoru/mondoids/x22.png", "../../assets/work/oyuncak-sektoru/mondoids/x23.png", "../../assets/work/oyuncak-sektoru/mondoids/x24.png", "../../assets/work/oyuncak-sektoru/mondoids/x25.png", "../../assets/work/oyuncak-sektoru/mondoids/x26.png", "../../assets/work/oyuncak-sektoru/mondoids/x27.png"],
    meta: "Karakter · Vinyl Figür",
    title: "Mondoids",
    desc: "Materyal ve yüzey çalışması ön planda vinyl figür."
  }, {
    id: "abe",
    cat: "karakter",
    image: "../../assets/work/abe-sapien.png",
    gallery: ["../../assets/work/abe-poster.png", "../../assets/work/abe-sapien.png", "../../assets/work/oyuncak-sektoru/abe/abe-1.jpg", "../../assets/work/oyuncak-sektoru/abe/abe-4.jpg", "../../assets/work/oyuncak-sektoru/abe/abe-9.jpg", "../../assets/work/oyuncak-sektoru/abe/abe-footer.png", "../../assets/work/oyuncak-sektoru/abe/p1.png", "../../assets/work/oyuncak-sektoru/abe/p2.png", "../../assets/work/oyuncak-sektoru/abe/p3.png", "../../assets/work/oyuncak-sektoru/abe/p4.png", "../../assets/work/oyuncak-sektoru/abe/p5.png", "../../assets/work/oyuncak-sektoru/abe/p6.png", "../../assets/work/oyuncak-sektoru/abe/p7.png", "../../assets/work/oyuncak-sektoru/abe/p8.png", "../../assets/work/oyuncak-sektoru/abe/p9.png", "../../assets/work/oyuncak-sektoru/abe/p10.png", "../../assets/work/oyuncak-sektoru/abe/p11.png"],
    meta: "Konsept · Karakter",
    title: "Abe Sapien",
    desc: "Konsept render, soğuk film-grade tamamlayıcı tonlar."
  }, {
    id: "gen2",
    cat: "karakter",
    image: "../../assets/work/shadowed-kingdom.png",
    gallery: ["../../assets/work/shadowed-kingdom.png", "../../assets/work/oyuncak-sektoru/shadowed/sk1.jpg", "../../assets/work/oyuncak-sektoru/shadowed/sk2.png", "../../assets/work/oyuncak-sektoru/shadowed/sk3.jpg", "../../assets/work/oyuncak-sektoru/shadowed/sk4.jpg", "../../assets/work/oyuncak-sektoru/shadowed/sk5.png", "../../assets/work/oyuncak-sektoru/shadowed/sk6.png", "../../assets/work/oyuncak-sektoru/shadowed/sk7.png", "../../assets/work/oyuncak-sektoru/shadowed/sk8.png", "../../assets/work/oyuncak-sektoru/shadowed/sk9.png", "../../assets/work/oyuncak-sektoru/shadowed/sk10.png", "../../assets/work/oyuncak-sektoru/shadowed/sk11.jpg", "../../assets/work/oyuncak-sektoru/shadowed/sk12.png", "../../assets/work/oyuncak-sektoru/shadowed/sk13.png", "../../assets/work/oyuncak-sektoru/shadowed/sk14.png", "../../assets/work/oyuncak-sektoru/shadowed/sk15.jpg", "../../assets/work/oyuncak-sektoru/shadowed/sk16.png"],
    meta: "Tabletop Game Figür · Disney",
    title: "The Shadowed Kingdom",
    desc: "Disney karakterlerinden tabletop oyun figür serisi; konsept ve render galerisi."
  }, {
    id: "breezly",
    cat: "karakter",
    image: "../../assets/work/oyuncak-sektoru/breezly-pop.jpg",
    gallery: ["../../assets/work/oyuncak-sektoru/pop/breezly.jpg", "../../assets/work/oyuncak-sektoru/pop/topcat.jpg", "../../assets/work/oyuncak-sektoru/pop/lippy-lion.jpg", "../../assets/work/oyuncak-sektoru/pop/hardy-har-har.jpg", "../../assets/work/oyuncak-sektoru/pop/metallica-james.jpg", "../../assets/work/oyuncak-sektoru/pop/metallica-lars.jpg", "../../assets/work/oyuncak-sektoru/pop/metallica-kirk.jpg", "../../assets/work/oyuncak-sektoru/pop/metallica-robert.jpg", "../../assets/work/oyuncak-sektoru/pop/elf-buddy.jpg", "../../assets/work/oyuncak-sektoru/pop/elf-jovie.jpg", "../../assets/work/oyuncak-sektoru/pop/elf-papa.jpg", "../../assets/work/oyuncak-sektoru/pop/horror-norman.jpg", "../../assets/work/oyuncak-sektoru/pop/horror-annabelle.jpg", "../../assets/work/oyuncak-sektoru/pop/blackhole-maximillian.jpg", "../../assets/work/oyuncak-sektoru/pop/blackhole-vincent.jpg", "../../assets/work/oyuncak-sektoru/pop/figment.jpg", "../../assets/work/oyuncak-sektoru/pop/wedge-antilles.jpg", "../../assets/work/oyuncak-sektoru/pop/zack-ryder.jpg", "../../assets/work/oyuncak-sektoru/pop/predator-pop.webp", "../../assets/work/oyuncak-sektoru/pop/pop-extra1.jpg", "../../assets/work/oyuncak-sektoru/pop/pop-extra2.webp"],
    meta: "Funko · Vinyl Figür",
    title: "Pop!",
    desc: "Kutulu vinyl figür ve ambalaj görseli; stüdyo ışığıyla ürün çekimi. Seri galerisi."
  }, {
    id: "thundercats-diorama",
    cat: "karakter",
    image: "../../assets/work/oyuncak-sektoru/funko-thundercats.jpeg",
    gallery: ["../../assets/work/oyuncak-sektoru/funko-thundercats.jpeg", "../../assets/work/oyuncak-sektoru/thundercats/tc-1.jpg", "../../assets/work/oyuncak-sektoru/thundercats/tc-2.jpg", "../../assets/work/oyuncak-sektoru/thundercats/tc-3.jpg", "../../assets/work/oyuncak-sektoru/thundercats/tc-4.jpg", "../../assets/work/oyuncak-sektoru/thundercats/tc-5.jpg", "../../assets/work/oyuncak-sektoru/thundercats/tc-6.jpg", "../../assets/work/oyuncak-sektoru/thundercats/tc-7.jpg", "../../assets/work/oyuncak-sektoru/thundercats/tc-8.jpg", "../../assets/work/oyuncak-sektoru/thundercats/tc-9.jpg", "../../assets/work/oyuncak-sektoru/thundercats/tc-10.jpg", "../../assets/work/oyuncak-sektoru/thundercats/tc-11.jpg", "../../assets/work/oyuncak-sektoru/thundercats/tc-12.jpg", "../../assets/work/oyuncak-sektoru/thundercats/p1.png", "../../assets/work/oyuncak-sektoru/thundercats/p2.png", "../../assets/work/oyuncak-sektoru/thundercats/p3.png", "../../assets/work/oyuncak-sektoru/thundercats/p4.png", "../../assets/work/oyuncak-sektoru/thundercats/p5.png", "../../assets/work/oyuncak-sektoru/thundercats/p6.png", "../../assets/work/oyuncak-sektoru/thundercats/p7.png", "../../assets/work/oyuncak-sektoru/thundercats/p8.png", "../../assets/work/oyuncak-sektoru/thundercats/p9.png", "../../assets/work/oyuncak-sektoru/thundercats/p10.png", "../../assets/work/oyuncak-sektoru/thundercats/p11.png", "../../assets/work/oyuncak-sektoru/thundercats/p12.png"],
    meta: "Figür · Diorama",
    title: "ThunderCats — Diorama",
    desc: "Seri lansman görseli, sahne dioraması ve kompozisyon."
  }, {
    id: "nbc",
    cat: "karakter",
    image: "../../assets/work/oyuncak-sektoru/dotakin/main.jpg",
    gallery: ["../../assets/work/oyuncak-sektoru/dotakin/main.jpg", "../../assets/work/oyuncak-sektoru/dotakin/group.jpg", "../../assets/work/oyuncak-sektoru/dotakin/s1.jpg", "../../assets/work/oyuncak-sektoru/dotakin/s3.jpg", "../../assets/work/oyuncak-sektoru/dotakin/p1.png", "../../assets/work/oyuncak-sektoru/dotakin/p2.png", "../../assets/work/oyuncak-sektoru/dotakin/p3.png", "../../assets/work/oyuncak-sektoru/dotakin/p4.png", "../../assets/work/oyuncak-sektoru/dotakin/p5.png", "../../assets/work/oyuncak-sektoru/dotakin/p6.png", "../../assets/work/oyuncak-sektoru/dotakin/p7.png", "../../assets/work/oyuncak-sektoru/dotakin/p8.png", "../../assets/work/oyuncak-sektoru/dotakin/p9.png", "../../assets/work/oyuncak-sektoru/dotakin/p10.png", "../../assets/work/oyuncak-sektoru/dotakin/p11.png", "../../assets/work/oyuncak-sektoru/dotakin/p12.png", "../../assets/work/oyuncak-sektoru/dotakin/p13.png", "../../assets/work/oyuncak-sektoru/dotakin/p14.png", "../../assets/work/oyuncak-sektoru/dotakin/p15.png"],
    meta: "Figür · Seri",
    title: "Dotakin",
    desc: "Dotakins Series 2 blind-box serisi; karakter seti ve ambalaj galerisi."
  }, {
    id: "chibi-villain",
    cat: "karakter",
    image: "../../assets/work/oyuncak-sektoru/nightmare/nbc-thumb.jpg",
    gallery: ["../../assets/work/oyuncak-sektoru/nightmare/nbc-group.jpg", "../../assets/work/oyuncak-sektoru/nightmare/nbc-behemoth.jpg", "../../assets/work/oyuncak-sektoru/nightmare/nbc-mayor.jpg", "../../assets/work/oyuncak-sektoru/nightmare/nbc-zero.jpg", "../../assets/work/oyuncak-sektoru/nightmare/nbc-jack.png", "../../assets/work/oyuncak-sektoru/nightmare/nbc-finkelstein.png", "../../assets/work/oyuncak-sektoru/nightmare/nbc-extra1.jpg", "../../assets/work/oyuncak-sektoru/nightmare/nbc-s1.png", "../../assets/work/oyuncak-sektoru/nightmare/nbc-s2.png", "../../assets/work/oyuncak-sektoru/nightmare/nbc-s3.png", "../../assets/work/oyuncak-sektoru/nightmare/p1.png", "../../assets/work/oyuncak-sektoru/nightmare/p2.png", "../../assets/work/oyuncak-sektoru/nightmare/p3.png", "../../assets/work/oyuncak-sektoru/nightmare/p4.png", "../../assets/work/oyuncak-sektoru/nightmare/p5.png", "../../assets/work/oyuncak-sektoru/nightmare/nbc-render.jpg", "../../assets/work/oyuncak-sektoru/nightmare/nbc-group2.webp", "../../assets/work/oyuncak-sektoru/nightmare/nbc-w1.png", "../../assets/work/oyuncak-sektoru/nightmare/nbc-w2.png"],
    meta: "Figür · Seri",
    title: "Nightmare Before Christmas",
    desc: "Tim Burton evreninden karakter seti; tutarlı palet ve yüzey çalışması."
  }, {
    id: "dragon",
    cat: "karakter",
    image: "../../assets/work/oyuncak-sektoru/dragon/dragon-thumb.png",
    gallery: ["../../assets/work/oyuncak-sektoru/dragon/d1.png", "../../assets/work/oyuncak-sektoru/dragon/d4.png", "../../assets/work/oyuncak-sektoru/dragon/d5.png", "../../assets/work/oyuncak-sektoru/dragon/d7.png", "../../assets/work/oyuncak-sektoru/dragon/d8.png", "../../assets/work/oyuncak-sektoru/dragon/d9.png", "../../assets/work/oyuncak-sektoru/dragon/d12.png", "../../assets/work/oyuncak-sektoru/dragon/d16.png", "../../assets/work/oyuncak-sektoru/dragon/d17.png", "../../assets/work/oyuncak-sektoru/dragon/d19.png", "../../assets/work/oyuncak-sektoru/dragon/d3d.png", "../../assets/work/oyuncak-sektoru/dragon/hero.png", "../../assets/work/oyuncak-sektoru/dragon/p1.png", "../../assets/work/oyuncak-sektoru/dragon/p2.png", "../../assets/work/oyuncak-sektoru/dragon/p3.png", "../../assets/work/oyuncak-sektoru/dragon/p4.png", "../../assets/work/oyuncak-sektoru/dragon/p5.png", "../../assets/work/oyuncak-sektoru/dragon/p6.png", "../../assets/work/oyuncak-sektoru/dragon/p7.png"],
    meta: "Figür · Heykel",
    title: "Ice Dragon — Dark Horse",
    desc: "Game of Thrones buz ejderhası heykeli; çok açılı detay galerisi."
  }, {
    id: "harley",
    cat: "karakter",
    image: "../../assets/work/oyuncak-sektoru/harley/h1.jpg",
    gallery: ["../../assets/work/oyuncak-sektoru/harley/h1.jpg", "../../assets/work/oyuncak-sektoru/harley/h2.jpg", "../../assets/work/oyuncak-sektoru/harley/h3.jpg", "../../assets/work/oyuncak-sektoru/harley/h4.jpg", "../../assets/work/oyuncak-sektoru/harley/h5.jpg", "../../assets/work/oyuncak-sektoru/harley/h6.jpg", "../../assets/work/oyuncak-sektoru/harley/h7.webp", "../../assets/work/oyuncak-sektoru/harley/h8.jpg", "../../assets/work/oyuncak-sektoru/harley/h9.webp", "../../assets/work/oyuncak-sektoru/harley/h10.webp", "../../assets/work/oyuncak-sektoru/harley/h11.jpg"],
    meta: "Figür · Art Figür",
    title: "Harley Quinn — Art Figür",
    desc: "Kidrobot art figürü; renk ve poz detay galerisi."
  }, {
    id: "gorillaz",
    cat: "karakter",
    image: "../../assets/work/oyuncak-sektoru/gorillaz/front.jpg",
    gallery: ["../../assets/work/oyuncak-sektoru/gorillaz/front.jpg", "../../assets/work/oyuncak-sektoru/gorillaz/murdoc.png", "../../assets/work/oyuncak-sektoru/gorillaz/noodle-head.png", "../../assets/work/oyuncak-sektoru/gorillaz/noodle1.png", "../../assets/work/oyuncak-sektoru/gorillaz/noodle2.png", "../../assets/work/oyuncak-sektoru/gorillaz/wip1.png", "../../assets/work/oyuncak-sektoru/gorillaz/wip2.png", "../../assets/work/oyuncak-sektoru/gorillaz/wip3.png", "../../assets/work/oyuncak-sektoru/gorillaz/wip4.png"],
    meta: "Karakter · Figür",
    title: "Gorillaz",
    desc: "Gorillaz grup figürleri; karakter sculpt ve turnaround çalışmaları."
  }, {
    id: "jp",
    cat: "karakter",
    image: "../../assets/work/oyuncak-sektoru/jp/b2.png",
    gallery: ["../../assets/work/oyuncak-sektoru/jp/b2.png", "../../assets/work/oyuncak-sektoru/jp/scene.png", "../../assets/work/oyuncak-sektoru/jp/arnold.png", "../../assets/work/oyuncak-sektoru/jp/worker.png", "../../assets/work/oyuncak-sektoru/jp/b.png", "../../assets/work/oyuncak-sektoru/jp/untitled.png", "../../assets/work/oyuncak-sektoru/jp/p1.png", "../../assets/work/oyuncak-sektoru/jp/p2.png", "../../assets/work/oyuncak-sektoru/jp/p3.png", "../../assets/work/oyuncak-sektoru/jp/p4.png", "../../assets/work/oyuncak-sektoru/jp/p5.png", "../../assets/work/oyuncak-sektoru/jp/p6.png", "../../assets/work/oyuncak-sektoru/jp/p7.png", "../../assets/work/oyuncak-sektoru/jp/p8.png", "../../assets/work/oyuncak-sektoru/jp/p9.png", "../../assets/work/oyuncak-sektoru/jp/p10.png", "../../assets/work/oyuncak-sektoru/jp/p11.png", "../../assets/work/oyuncak-sektoru/jp/p12.png", "../../assets/work/oyuncak-sektoru/jp/p13.png", "../../assets/work/oyuncak-sektoru/jp/p14.png", "../../assets/work/oyuncak-sektoru/jp/p15.png", "../../assets/work/oyuncak-sektoru/jp/p16.png", "../../assets/work/oyuncak-sektoru/jp/p17.png", "../../assets/work/oyuncak-sektoru/jp/p18.png", "../../assets/work/oyuncak-sektoru/jp/p19.png", "../../assets/work/oyuncak-sektoru/jp/p20.png", "../../assets/work/oyuncak-sektoru/jp/p21.png", "../../assets/work/oyuncak-sektoru/jp/p22.png"],
    meta: "Mondo Games · Minyatür",
    title: "Jurassic Park — Unmatched",
    desc: "Unmatched: Jurassic Park masa oyunu minyatürleri; karakter ve T-Rex sculpt çalışmaları."
  }, {
    id: "avatar",
    cat: "karakter",
    image: "../../assets/work/oyuncak-sektoru/avatar/zuko.png",
    gallery: ["../../assets/work/oyuncak-sektoru/avatar/zuko.png", "../../assets/work/oyuncak-sektoru/avatar/katara.png", "../../assets/work/oyuncak-sektoru/avatar/aang.png", "../../assets/work/oyuncak-sektoru/avatar/zuko2.png", "../../assets/work/oyuncak-sektoru/avatar/zuko3.png", "../../assets/work/oyuncak-sektoru/avatar/katara2.png", "../../assets/work/oyuncak-sektoru/avatar/katara-bw.png", "../../assets/work/oyuncak-sektoru/avatar/g1.png", "../../assets/work/oyuncak-sektoru/avatar/g2.png", "../../assets/work/oyuncak-sektoru/avatar/g3.png", "../../assets/work/oyuncak-sektoru/avatar/g4.png", "../../assets/work/oyuncak-sektoru/avatar/korra1.webp", "../../assets/work/oyuncak-sektoru/avatar/korra2.webp", "../../assets/work/oyuncak-sektoru/avatar/korra3.webp", "../../assets/work/oyuncak-sektoru/avatar/korra-env.webp", "../../assets/work/oyuncak-sektoru/avatar/zuko-s1.webp", "../../assets/work/oyuncak-sektoru/avatar/zuko-s2.webp", "../../assets/work/oyuncak-sektoru/avatar/katara-s1.webp", "../../assets/work/oyuncak-sektoru/avatar/katara-s2.webp", "../../assets/work/oyuncak-sektoru/avatar/korra4.webp", "../../assets/work/oyuncak-sektoru/avatar/korra5.webp", "../../assets/work/oyuncak-sektoru/avatar/korra6.webp", "../../assets/work/oyuncak-sektoru/avatar/korra7.webp", "../../assets/work/oyuncak-sektoru/avatar/zuko-s3.webp", "../../assets/work/oyuncak-sektoru/avatar/zuko-s4.webp", "../../assets/work/oyuncak-sektoru/avatar/zuko-s5.webp", "../../assets/work/oyuncak-sektoru/avatar/p1.webp", "../../assets/work/oyuncak-sektoru/avatar/p2.webp", "../../assets/work/oyuncak-sektoru/avatar/p3.webp", "../../assets/work/oyuncak-sektoru/avatar/p4.webp", "../../assets/work/oyuncak-sektoru/avatar/p5.webp", "../../assets/work/oyuncak-sektoru/avatar/p6.webp", "../../assets/work/oyuncak-sektoru/avatar/g5.png", "../../assets/work/oyuncak-sektoru/avatar/katara3.png"],
    meta: "Karakter · Figür",
    title: "Avatar: Son Hava Bükücü",
    desc: "Zuko, Katara ve Aang figürleri; ateş bükme efektiyle çok açılı turnaround."
  }, {
    id: "simpsons",
    cat: "karakter",
    image: "../../assets/work/oyuncak-sektoru/simpsons/homer.png",
    gallery: ["../../assets/work/oyuncak-sektoru/simpsons/homer.png", "../../assets/work/oyuncak-sektoru/simpsons/marge.png", "../../assets/work/oyuncak-sektoru/simpsons/devil-flanders.png", "../../assets/work/oyuncak-sektoru/simpsons/alien-president.png", "../../assets/work/oyuncak-sektoru/simpsons/radioactive-man.png", "../../assets/work/oyuncak-sektoru/simpsons/moomoo-homer.png", "../../assets/work/oyuncak-sektoru/simpsons/drederick.png", "../../assets/work/oyuncak-sektoru/simpsons/mcbain-commando.png", "../../assets/work/oyuncak-sektoru/simpsons/mcbain-cop.png", "../../assets/work/oyuncak-sektoru/simpsons/chef.png", "../../assets/work/oyuncak-sektoru/simpsons/skowie.png", "../../assets/work/oyuncak-sektoru/simpsons/dna2.png", "../../assets/work/oyuncak-sektoru/simpsons/billy-troy.png", "../../assets/work/oyuncak-sektoru/simpsons/bunny-troy.png", "../../assets/work/oyuncak-sektoru/simpsons/group.jpg", "../../assets/work/oyuncak-sektoru/simpsons/jimmy-troy.png", "../../assets/work/oyuncak-sektoru/simpsons/s2023-1.webp", "../../assets/work/oyuncak-sektoru/simpsons/s2023-2.webp", "../../assets/work/oyuncak-sektoru/simpsons/s2023-3.webp", "../../assets/work/oyuncak-sektoru/simpsons/s2023-4.webp", "../../assets/work/oyuncak-sektoru/simpsons/s2023-5.webp", "../../assets/work/oyuncak-sektoru/simpsons/s2023-6.webp", "../../assets/work/oyuncak-sektoru/simpsons/prod1.jpg", "../../assets/work/oyuncak-sektoru/simpsons/prod2.jpg", "../../assets/work/oyuncak-sektoru/simpsons/prod3.jpg", "../../assets/work/oyuncak-sektoru/simpsons/prod4.jpg", "../../assets/work/oyuncak-sektoru/simpsons/moomoo2.png"],
    meta: "Karakter · Figür",
    title: "The Simpsons — Korku Evi",
    desc: "Treehouse of Horror temalı Simpsons figür serisi; renkli karakter tasarımları."
  }, {
    id: "dino",
    cat: "karakter",
    image: "../../assets/work/oyuncak-sektoru/dino/c1.png",
    gallery: ["../../assets/work/oyuncak-sektoru/dino/c1.png", "../../assets/work/oyuncak-sektoru/dino/c2.png", "../../assets/work/oyuncak-sektoru/dino/c3.png", "../../assets/work/oyuncak-sektoru/dino/d1.png", "../../assets/work/oyuncak-sektoru/dino/d2.png", "../../assets/work/oyuncak-sektoru/dino/d3.png", "../../assets/work/oyuncak-sektoru/dino/s1.jpg"],
    meta: "A.İ · 3D Baskı",
    title: "Dino",
    desc: "Stilize dino figürü; A.İ konsept ve resin baskı çalışması."
  }, {
    id: "vale",
    cat: "karakter",
    image: "../../assets/work/oyuncak-sektoru/vale/v1.png",
    gallery: ["../../assets/work/oyuncak-sektoru/vale/v1.png", "../../assets/work/oyuncak-sektoru/vale/v2.png", "../../assets/work/oyuncak-sektoru/vale/v3.png", "../../assets/work/oyuncak-sektoru/vale/p1.jpg", "../../assets/work/oyuncak-sektoru/vale/p2.jpg", "../../assets/work/oyuncak-sektoru/vale/val-medusa.webp", "../../assets/work/oyuncak-sektoru/vale/val-mimic.webp"],
    meta: "Karakter · Figür",
    title: "Vale — Barbar",
    desc: "Barbar savaşçı figürü; konsept ve ürün görselleri."
  }, {
    id: "r3",
    cat: "diger",
    image: "../../assets/work/r3-3868.jpg",
    meta: "Ürün · Görsel",
    title: "Ürün Çekimi",
    desc: "Stüdyo zemininde ürün görseli."
  }, {
    id: "anit-heykel",
    cat: "diger",
    image: "../../assets/work/diger-isler/install2.jpg",
    gallery: ["../../assets/work/diger-isler/install2.jpg", "../../assets/work/diger-isler/s-fig1.png", "../../assets/work/diger-isler/s-fig2.png", "../../assets/work/diger-isler/s-fig3.png", "../../assets/work/diger-isler/r3.jpg", "../../assets/work/diger-isler/s-horse1.png", "../../assets/work/diger-isler/s-horse2.png", "../../assets/work/diger-isler/s-horse3.png", "../../assets/work/diger-isler/s-horse4.png", "../../assets/work/diger-isler/s-horse5.png", "../../assets/work/diger-isler/s-horse6.png", "../../assets/work/diger-isler/r2.jpg", "../../assets/work/diger-isler/install3.jpg", "../../assets/work/diger-isler/install4.jpg", "../../assets/work/diger-isler/r1.jpg", "../../assets/work/diger-isler/r4.jpg", "../../assets/work/diger-isler/r5.jpg", "../../assets/work/diger-isler/install1.jpg", "../../assets/work/diger-isler/02.jpg"],
    meta: "Kamusal · Heykel & Anıt",
    title: "Anıtsal Heykel Çalışmaları",
    desc: "Kamusal anıt heykeller — klasik savaşçı, atlı figür ve zafer quadriga'sı; ZBrush sculpt'tan döküm ve montaja."
  }, {
    id: "w8",
    cat: "diger",
    image: "../../assets/work/oyuncak-sektoru/mugs/predator.png",
    gallery: ["../../assets/work/oyuncak-sektoru/mugs/serpent.jpg", "../../assets/work/oyuncak-sektoru/mugs/predator.png", "../../assets/work/oyuncak-sektoru/mugs/mickey.jpg", "../../assets/work/oyuncak-sektoru/mugs/modok.jpg", "../../assets/work/oyuncak-sektoru/mugs/scrooge.png", "../../assets/work/oyuncak-sektoru/mugs/r7268.jpg", "../../assets/work/oyuncak-sektoru/mugs/r3201.jpg", "../../assets/work/oyuncak-sektoru/mugs/r1982.jpg", "../../assets/work/oyuncak-sektoru/mugs/m8.jpg", "../../assets/work/oyuncak-sektoru/mugs/m11.jpg", "../../assets/work/oyuncak-sektoru/mugs/m12.jpg", "../../assets/work/oyuncak-sektoru/mugs/m14.jpg", "../../assets/work/oyuncak-sektoru/mugs/ariel.jpg", "../../assets/work/oyuncak-sektoru/mugs/mikem.png", "../../assets/work/oyuncak-sektoru/mugs/predator-turn.png", "../../assets/work/oyuncak-sektoru/mugs/rev.png", "../../assets/work/oyuncak-sektoru/mugs/spf.png", "../../assets/work/oyuncak-sektoru/mugs/img6563.jpg", "../../assets/work/oyuncak-sektoru/mugs/img6662.jpg", "../../assets/work/oyuncak-sektoru/mugs/r3868b.jpg"],
    meta: "Ceramics · Mugs",
    title: "Tiki Mugs",
    desc: "Seramik tiki mug koleksiyonu; tasarım, turnaround ve üretim görselleri."
  }, {
    id: "img2411",
    cat: "karakter",
    image: "../../assets/work/oyuncak-sektoru/rickmorti/rm-1.jpg",
    gallery: ["../../assets/work/oyuncak-sektoru/rickmorti/rm-1.jpg", "../../assets/work/oyuncak-sektoru/rickmorti/rm-2.png", "../../assets/work/oyuncak-sektoru/rickmorti/rm-3.png", "../../assets/work/oyuncak-sektoru/rickmorti/rm-4.png", "../../assets/work/oyuncak-sektoru/rickmorti/rm-5.jpg", "../../assets/work/oyuncak-sektoru/rickmorti/rm-6.png", "../../assets/work/oyuncak-sektoru/rickmorti/rm-7.png", "../../assets/work/oyuncak-sektoru/rickmorti/rm-8.png", "../../assets/work/oyuncak-sektoru/rickmorti/rm-9.png"],
    meta: "Mondo · Heykel",
    title: "Rick&Morti",
    desc: "Mondo özel heykeli; turntable render seçkisi ve stüdyo ürün çekimi."
  }],
  quotes: [{
    name: "Deniz Aksoy",
    role: "Reklam Filmi Projesi",
    text: "Teslim hızı ve revizyon süreci kusursuzdu. Brief'i tek seferde yakaladı, sonuç beklentimizin çok üstündeydi."
  }, {
    name: "Mert Çelik",
    role: "Karakter Tasarımı",
    text: "Karakterin yüz ifadeleri tam istediğimiz gibiydi. Pipeline'ı kendi kuruyor olması süreci inanılmaz hızlandırdı."
  }, {
    name: "Selin Yıldız",
    role: "Animasyon Projesi",
    text: "Konsepten teslimat videosuna kadar her şeyi tek elden çözdü. İletişim net, sonuç sinematik."
  }],
  tools: ["ComfyUI", "LTX Video 2.3", "Flux 2", "Qwen Image Edit", "Z-Image Turbo", "ZBrush", "Custom Node Dev", "Lip-Sync Pipeline"],
  filters: [["reklam", "Reklam Filmleri+A.İ"], ["karakter", "Figür Oyuncak Sektörü"], ["diger", "Diğer İşler"], ["all", "Tümü"]]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/data.js", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/data.standalone.js
try { (() => {
/* Portfolio UI-kit content. Sets window.TS_DATA. */
window.TS_DATA = {
  works: [{
    id: "benzin",
    cat: "reklam",
    image: window.__resources["r0"],
    fit: "scale-down",
    meta: "Klip · LTX 2.3 · 24fps",
    title: "Benzin İstasyonu — Animasyon Kısa Film",
    desc: "İki karakterli, kilitli kamera sinematik kısa. Karakter tasarımından lip-sync'e tam pipeline."
  }, {
    id: "kidrobot",
    cat: "reklam",
    image: window.__resources["r1"],
    fit: "contain",
    meta: "Reklam · LTX 2.3 · 24fps",
    title: "Dog — Karakter Reklamı",
    desc: "Köpek karakterli kısa reklam filmi. Lip-sync ve animasyon tam pipeline."
  }, {
    id: "donald",
    cat: "reklam",
    image: window.__resources["r2"],
    meta: "Reklam · LTX 2.3 · 24fps",
    title: "BunnySkate — Reklam Filmi",
    desc: "Kaykaylı karakter reklam filmi. Hareket ve sahne ışığı uçtan uca AI pipeline ile."
  }, {
    id: "keyblade",
    cat: "reklam",
    image: window.__resources["r3"],
    fit: "contain",
    meta: "Reklam · LTX 2.3 · 24fps",
    title: "Nesquik — Ürün Reklamı",
    desc: "Marka ürün reklamı için sinematik kısa. Karakter ve ürün kurgusu tek elden."
  }, {
    id: "toys",
    cat: "reklam",
    image: window.__resources["r4"],
    meta: "Reklam · LTX 2.3 · 24fps",
    title: "ToyS — Koleksiyon Figür Reklamı",
    desc: "Premium koleksiyon figürü için sinematik ürün filmi. Sahne ışığı ve materyal çalışması AI pipeline ile."
  }, {
    id: "wolverine",
    cat: "karakter",
    image: window.__resources["r5"],
    meta: "Karakter · Figür",
    title: "Wolverine",
    desc: "Sinematik anahtar ışıkla render edilmiş karakter figürü."
  }, {
    id: "transistor",
    cat: "karakter",
    image: window.__resources["r6"],
    meta: "Karakter · Vinyl Figür",
    title: "Transistor — Red",
    desc: "Kutulu koleksiyon figürü ve ambalaj görseli."
  }, {
    id: "mlp",
    cat: "karakter",
    image: window.__resources["r7"],
    meta: "Karakter · Chibi Serisi",
    title: "My Little Pony Chibis",
    desc: "Stilize chibi serisi, tutarlı palet ve poz dili."
  }, {
    id: "mondoid",
    cat: "karakter",
    image: window.__resources["r8"],
    gallery: [window.__resources["r8"], window.__resources["r9"], window.__resources["r10"], window.__resources["r11"], window.__resources["r12"], window.__resources["r13"], window.__resources["r14"], window.__resources["r15"]],
    meta: "Karakter · Vinyl Figür",
    title: "Mondoids",
    desc: "Materyal ve yüzey çalışması ön planda vinyl figür."
  }, {
    id: "abe",
    cat: "diger",
    image: window.__resources["r16"],
    gallery: [window.__resources["r16"], window.__resources["r17"], window.__resources["r18"], window.__resources["r19"]],
    meta: "Konsept · Karakter",
    title: "Abe Sapien",
    desc: "Konsept render, soğuk film-grade tamamlayıcı tonlar."
  }, {
    id: "gen1",
    cat: "karakter",
    image: window.__resources["r20"],
    meta: "Karakter · Detay",
    title: "Karakter Etüdü I",
    desc: "Yüz ifadesi ve kostüm detay çalışması."
  }, {
    id: "gen2",
    cat: "karakter",
    image: window.__resources["r21"],
    meta: "Karakter · Detay",
    title: "Karakter Etüdü II",
    desc: "Poz ve siluet denemeleri."
  }, {
    id: "gen3",
    cat: "karakter",
    image: window.__resources["r22"],
    meta: "Karakter · Detay",
    title: "Karakter Etüdü III",
    desc: "Renk ve ışık varyasyonları."
  }, {
    id: "breezly",
    cat: "karakter",
    image: window.__resources["r23"],
    gallery: [window.__resources["r24"], window.__resources["r25"], window.__resources["r26"], window.__resources["r27"], window.__resources["r28"], window.__resources["r29"], window.__resources["r30"], window.__resources["r31"], window.__resources["r32"], window.__resources["r33"], window.__resources["r34"], window.__resources["r35"], window.__resources["r36"], window.__resources["r37"], window.__resources["r38"], window.__resources["r39"], window.__resources["r40"], window.__resources["r41"]],
    meta: "Funko · Vinyl Figür",
    title: "Pop!",
    desc: "Kutulu vinyl figür ve ambalaj görseli; stüdyo ışığıyla ürün çekimi. Seri galerisi."
  }, {
    id: "thundercats-diorama",
    cat: "karakter",
    image: window.__resources["r42"],
    gallery: [window.__resources["r42"], window.__resources["r43"], window.__resources["r44"], window.__resources["r45"], window.__resources["r46"], window.__resources["r47"], window.__resources["r48"], window.__resources["r49"], window.__resources["r50"], window.__resources["r51"]],
    meta: "Figür · Diorama",
    title: "ThunderCats — Diorama",
    desc: "Seri lansman görseli, sahne dioraması ve kompozisyon."
  }, {
    id: "nbc",
    cat: "karakter",
    image: window.__resources["r52"],
    meta: "Figür · Seri",
    title: "Dotakin",
    desc: "Karakter seti detay görseli; tutarlı palet ve yüzey çalışması."
  }, {
    id: "chibi-villain",
    cat: "karakter",
    image: window.__resources["r53"],
    gallery: [window.__resources["r54"], window.__resources["r55"], window.__resources["r56"], window.__resources["r57"]],
    meta: "Figür · Seri",
    title: "Nightmare Before Christmas",
    desc: "Tim Burton evreninden karakter seti; tutarlı palet ve yüzey çalışması."
  }, {
    id: "dragon",
    cat: "karakter",
    image: window.__resources["r58"],
    gallery: [window.__resources["r59"], window.__resources["r60"], window.__resources["r61"], window.__resources["r62"], window.__resources["r63"], window.__resources["r64"], window.__resources["r65"], window.__resources["r66"], window.__resources["r67"], window.__resources["r68"]],
    meta: "Figür · Heykel",
    title: "Ice Dragon — Dark Horse",
    desc: "Game of Thrones buz ejderhası heykeli; çok açılı detay galerisi."
  }, {
    id: "harley",
    cat: "karakter",
    image: window.__resources["r69"],
    gallery: [window.__resources["r69"], window.__resources["r70"], window.__resources["r71"], window.__resources["r72"]],
    meta: "Figür · Art Figür",
    title: "Harley Quinn — Art Figür",
    desc: "Kidrobot art figürü; renk ve poz detay galerisi."
  }, {
    id: "r3",
    cat: "diger",
    image: window.__resources["r73"],
    meta: "Ürün · Görsel",
    title: "Ürün Çekimi",
    desc: "Stüdyo zemininde ürün görseli."
  }, {
    id: "w8",
    cat: "diger",
    image: window.__resources["r74"],
    meta: "Kategori · Detay",
    title: "Seri Çalışma",
    desc: "Koleksiyon serisi görseli."
  }, {
    id: "img2411",
    cat: "karakter",
    image: window.__resources["r75"],
    gallery: [window.__resources["r75"], window.__resources["r76"], window.__resources["r77"], window.__resources["r78"]],
    meta: "Cartoon Network · Vinyl Figür",
    title: "Rick&Morti",
    desc: "Arşivden seçki."
  }],
  quotes: [{
    name: "Deniz Aksoy",
    role: "Reklam Filmi Projesi",
    text: "Teslim hızı ve revizyon süreci kusursuzdu. Brief'i tek seferde yakaladı, sonuç beklentimizin çok üstündeydi."
  }, {
    name: "Mert Çelik",
    role: "Karakter Tasarımı",
    text: "Karakterin yüz ifadeleri tam istediğimiz gibiydi. Pipeline'ı kendi kuruyor olması süreci inanılmaz hızlandırdı."
  }, {
    name: "Selin Yıldız",
    role: "Animasyon Projesi",
    text: "Konsepten teslimat videosuna kadar her şeyi tek elden çözdü. İletişim net, sonuç sinematik."
  }],
  tools: ["ComfyUI", "LTX Video 2.3", "Flux 2", "Qwen Image Edit", "Z-Image Turbo", "ZBrush", "Custom Node Dev", "Lip-Sync Pipeline"],
  filters: [["reklam", "Reklam Filmleri+A.İ"], ["karakter", "Figür Oyuncak Sektörü"], ["diger", "Diğer İşler"], ["all", "Tümü"]]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/data.standalone.js", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Slate = __ds_scope.Slate;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.FilterTab = __ds_scope.FilterTab;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.ReelFrame = __ds_scope.ReelFrame;

__ds_ns.WorkCard = __ds_scope.WorkCard;

})();
