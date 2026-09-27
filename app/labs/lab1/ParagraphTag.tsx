export default function ParagraphTag() {
  return (
    <div id="wd-p-tag">
      <h4>Paragraph Tag</h4>
      <p id="wd-p-1">
        This is a paragraph. We often separate a long set of sentences with
        vertical spaces to make the text easier to read. Browsers ignore
        vertical white spaces and render all the text as one single set of
        sentences. To force the browser to add vertical spacing, wrap the
        paragraphs you want to separate with the paragraph tag
      </p>
      <p id="wd-p-2">
        This is the first paragraph. The paragraph tag is used to format
        vertical gaps between long pieces of text like this one.
      </p>
      <p id="wd-p-3">
        This is the second paragraph. Even though there is a deliberate white
        gap between the paragraph above and this paragraph, by default
        browsers render them as one contiguous piece of text as shown here on
        the right.
      </p>
      <p id="wd-p-4">
        This is the third paragraph. Wrap each paragraph with the paragraph
        tag to tell browsers to render the gaps.
      </p>
      <p id="wd-ai-p">
        Browsers automatically insert vertical space before and after each
        paragraph element because the default stylesheet applies a top and
        bottom margin to the p tag. This visually separates blocks of text
        even when the underlying HTML has no extra line breaks between them.
      </p>
      <p id="wd-p-your-1">
        I am from Hong Kong and came to the US for college. I started my 
        undergraduate degree in California, but transferred to Northeastern
        in my junior year.
      </p>
      <p id="wd-p-your-2">
        In this class, I hope to develop a fundamental understanding of web 
        apps, and be able to build any app I want by the end of the semester.
      </p>
    </div>
  );
}