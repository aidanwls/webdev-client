export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      Loading a remote image:
      <br />
      <img
        id="wd-ai-image"
        width="200px"
        alt="Earth seen from space"
        src="https://images-assets.nasa.gov/image/a-sky-view-of-earth-from-suomi-npp_16611703184_o/a-sky-view-of-earth-from-suomi-npp_16611703184_o~medium.jpg"
      />
      <br />
      My Image:
      <br />
      <img
        id="wd-your-image"
        src="/images/nyan_cat.jpg"
        height="200px"
        alt="Nyan Cat (2011)"
      />
    </div>
  );
}
