/* Root mount — wires App + Tweaks panel, applies design tokens. Compiled into app.js. */
const App = window.TS_App;
const { useTweaks, TweaksPanel, TweakSection, TweakSlider, TweakToggle, TweakColor } = window;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": [
    "#ffb340",
    "#ffc468",
    "#c97f1a"
  ],
  "ground": [
    "#0c0b0a",
    "#161310",
    "#070605",
    "#241f19"
  ],
  "grain": true,
  "grainIntensity": 12,
  "letterbox": true,
  "cardColor": "#a5977e",
  "cardInk": "#ffffff",
  "cardKicker": "#000000",
  "cardShadow": 100,
  "cardGrain": 100
}/*EDITMODE-END*/;

function Root() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  React.useEffect(() => {
    const root = document.documentElement;
    root.classList.add("ts-no-trans");
    const r = root.style;
    const [a, ahi, adeep] = t.accent;
    r.setProperty("--ts-amber", a);
    r.setProperty("--ts-amber-hi", ahi);
    r.setProperty("--ts-amber-deep", adeep);
    const [bg, raise, sink, line] = t.ground;
    r.setProperty("--ts-bg", bg);
    r.setProperty("--ts-bg-raise", raise);
    r.setProperty("--ts-bg-sink", sink);
    r.setProperty("--ts-line", line);
    r.setProperty("--letterbox", t.letterbox ? "10px" : "0px");
    r.setProperty("--grain-op", (t.grainIntensity / 100).toString());
    document.body.setAttribute("data-grain", t.grain ? "on" : "off");
    // Card color + text colors (manual)
    const cc = t.cardColor || "#bbb3a5";
    r.setProperty("--card-bg", cc);
    const hx = cc.replace("#", "");
    const rr = parseInt(hx.substr(0,2),16), gg = parseInt(hx.substr(2,2),16), bb = parseInt(hx.substr(4,2),16);
    const lum = (0.299*rr + 0.587*gg + 0.114*bb) / 255;
    const light = lum > 0.5;
    r.setProperty("--card-ink", t.cardInk || (light ? "#16110a" : "#f6f1e8"));
    r.setProperty("--card-kicker", t.cardKicker || (light ? "#5a3a08" : "#ffc468"));
    r.setProperty("--card-line", light ? "rgba(0,0,0,.28)" : "rgba(255,255,255,.16)");
    // Card shadow strength (slider 0-100)
    const sv = (t.cardShadow ?? 85) / 100;
    r.setProperty("--card-shadow", `0 ${Math.round(14 + sv*40)}px ${Math.round(34 + sv*92)}px rgba(0,0,0,${(sv*0.9).toFixed(3)}), 0 ${Math.round(6 + sv*16)}px ${Math.round(14 + sv*30)}px rgba(0,0,0,${(sv*0.55).toFixed(3)})`);
    r.setProperty("--card-shadow-hover", `0 ${Math.round(22 + sv*48)}px ${Math.round(50 + sv*110)}px rgba(0,0,0,${(sv*0.95).toFixed(3)}), 0 ${Math.round(8 + sv*20)}px ${Math.round(18 + sv*38)}px rgba(0,0,0,${(sv*0.6).toFixed(3)})`);
    r.setProperty("--card-grain-op", ((t.cardGrain ?? 0) / 100 * 0.6).toFixed(3));
    requestAnimationFrame(() => requestAnimationFrame(() => root.classList.remove("ts-no-trans")));
  }, [t]);
  return (
    <>
      <App />
      <TweaksPanel title="Tweaks">
        <TweakSection label="Color grade" />
        <TweakColor label="Accent" value={t.accent}
          options={[["#ffb340","#ffc468","#c97f1a"],["#6fb8a8","#8fd0c1","#3f8e7e"],["#e85d4a","#ff7d6b","#b23e2f"]]}
          onChange={(v) => setTweak("accent", v)} />
        <TweakColor label="Ground" value={t.ground}
          options={[["#14110e","#1d1915","#0e0c0a","#2e2820"],["#0c0b0a","#161310","#070605","#241f19"],["#1a1410","#241c16","#120d09","#372e23"]]}
          onChange={(v) => setTweak("ground", v)} />
        <TweakSection label="Film" />
        <TweakToggle label="Film grain" value={t.grain} onChange={(v) => setTweak("grain", v)} />
        <TweakSlider label="Grain intensity" value={t.grainIntensity} min={0} max={12} step={1} unit="%" onChange={(v) => setTweak("grainIntensity", v)} />
        <TweakToggle label="Letterbox bands" value={t.letterbox} onChange={(v) => setTweak("letterbox", v)} />
        <TweakSection label="Kartlar" />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "6px 0" }}>
          <span style={{ fontSize: 12, letterSpacing: ".04em", color: "#cfc7bb" }}>Kart rengi</span>
          <input type="color" value={t.cardColor} onChange={(e) => setTweak("cardColor", e.target.value)}
            style={{ width: 48, height: 30, padding: 0, border: "1px solid #3a352e", borderRadius: 6, background: "transparent", cursor: "pointer" }} />
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "6px 0" }}>
          <span style={{ fontSize: 12, letterSpacing: ".04em", color: "#cfc7bb" }}>Başlık rengi</span>
          <input type="color" value={t.cardInk} onChange={(e) => setTweak("cardInk", e.target.value)}
            style={{ width: 48, height: 30, padding: 0, border: "1px solid #3a352e", borderRadius: 6, background: "transparent", cursor: "pointer" }} />
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "6px 0" }}>
          <span style={{ fontSize: 12, letterSpacing: ".04em", color: "#cfc7bb" }}>Etiket rengi</span>
          <input type="color" value={t.cardKicker} onChange={(e) => setTweak("cardKicker", e.target.value)}
            style={{ width: 48, height: 30, padding: 0, border: "1px solid #3a352e", borderRadius: 6, background: "transparent", cursor: "pointer" }} />
        </div>
        <TweakSlider label="Gölge gücü" value={t.cardShadow} min={0} max={100} step={1} unit="%" onChange={(v) => setTweak("cardShadow", v)} />
        <TweakSlider label="Kart grain" value={t.cardGrain} min={0} max={100} step={1} unit="%" onChange={(v) => setTweak("cardGrain", v)} />
      </TweaksPanel>
    </>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
