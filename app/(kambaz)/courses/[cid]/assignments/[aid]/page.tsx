import Link from "next/link";

export default async function AssignmentEditor({ params }: { params: Promise<{ cid: string }> }) {
  const { cid } = await params;
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">The assignment is available online</textarea>
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="ASSIGNMENTS">Assignments</option>
                <option value="QUIZZES">Quizzes</option>
                <option value="EXAMS">Exams</option>
                <option value="PROJECT">Project</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="PERCENTAGE">Percentage</option>
                <option value="COMPLETE">Complete</option>
                <option value="LETTER">Letter</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="ONLINE" defaultValue="Online">
                  Online
                </option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label>Online Entry Options:</label>
              <br />
              <input type="checkbox" id="wd-text-entry" />
              <label htmlFor="wd-text-entry">Text Entry</label>
              <br />
              <input type="checkbox" id="wd-website-url" />
              <label htmlFor="wd-website-url">Website URL</label>
              <br />
              <input type="checkbox" id="wd-media-recordings" />
              <label htmlFor="wd-media-recordings">Media Recordings</label>
              <br />
              <input type="checkbox" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
              <br />
              <input type="checkbox" id="wd-file-upload" />
              <label htmlFor="wd-file-upload">File Upload</label>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="wd-assign-to">Assign to</label>
              <br />
              <select multiple id="wd-assign-to" defaultValue={["EVERYONE"]}>
                <option value="EVERYONE">Everyone</option>
                <option value="SOMEONE">Someone</option>
                <option value="SECTION">Section</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="wd-due-date">Due</label>
              <br />
              <input
                type="date"
                defaultValue="2026-12-01"
                min="2026-09-01"
                max="2026-12-31"
                id="wd-due-date"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="wd-available-from">Available From</label>
              <br />
              <input
                type="date"
                defaultValue="2026-09-01"
                min="2026-09-01"
                max="2026-12-31"
                id="wd-available-from"
              />
            </td>
            <td>
              <label htmlFor="wd-available-until">Until</label>
              <br />
              <input
                type="date"
                defaultValue="2026-12-31"
                min="2026-09-01"
                max="2026-12-31"
                id="wd-available-until"
              />
            </td>
          </tr>
          <tr>
            <br />
            <br />
            <td>
              <Link href={`/courses/${cid}/assignments`}>
                <button id="wd-cancel" type="button">
                  Cancel
                </button>
              </Link>
              <Link href={`/courses/${cid}/assignments`}>
                <button id="wd-save" type="submit">
                  Save
                </button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
