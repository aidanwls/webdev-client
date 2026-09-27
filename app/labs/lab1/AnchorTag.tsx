export default function AnchorTag() {
  return (
    <>
      <h4>Anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text
      <br />
      <a href="https://github.com/jannunzi" id="wd-github">
        GitHub
      </a>
      <br />
      <a href="https://www.nytimes.com/" id="wd-your-link">
        new york times
      </a>{" "}
      <br />
      <a href="https://github.com/aidanwls" target="_blank" rel="noreferrer" id="wd-your-github">
        my github
      </a>
    </>
  );
}
