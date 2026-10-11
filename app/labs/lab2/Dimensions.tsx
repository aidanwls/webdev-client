export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div id="wd-ai-dimension" className="wd-ai-dimension wd-bg-color-yellow">
          This box is declared with a fixed width of 120 pixels and a height of 60 pixels, so its
          size should stay constant even though this sentence is long enough to otherwise wrap and
          grow a box that had no explicit dimensions.
        </div>
        <div className="wd-dimensions-landscape-long wd-bg-color-blue">Landscape Long</div>
      </div>
    </div>
  );
}