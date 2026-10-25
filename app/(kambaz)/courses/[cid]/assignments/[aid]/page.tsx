import Link from "next/link";
import * as db from "../../../../database";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid, aid } = await params;
  const assignment = db.assignments.find((a) => a._id === aid);
  const labelClass = "mb-1 block text-sm font-medium text-neutral-700";
  const inputClass =
    "w-full rounded border border-neutral-300 px-3 py-2 text-sm focus:border-red-500 focus:outline-none";
  const checkboxRowClass = "flex items-center gap-2";
  const hasEntryOption = (option: string) =>
    assignment?.onlineEntryOptions.includes(option) ?? false;

  return (
    <div id="wd-assignments-editor" className="max-w-3xl p-4">
      <div className="mb-4">
        <label htmlFor="wd-name" className={labelClass}>
          Assignment Name
        </label>
        <input id="wd-name" defaultValue={assignment?.title ?? ""} className={inputClass} />
      </div>
      <p id="wd-assignment-id" className="mb-4 text-sm text-neutral-600">
        Assignment id: {aid}
      </p>

      <div className="mb-4">
        <label htmlFor="wd-description" className={labelClass}>
          Description
        </label>
        <textarea
          id="wd-description"
          rows={5}
          className={`${inputClass} resize-y`}
          defaultValue={assignment?.description ?? ""}
        />
      </div>

      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="wd-points" className={labelClass}>
            Points
          </label>
          <input id="wd-points" defaultValue={assignment?.points ?? ""} className={inputClass} />
        </div>
        <div>
          <label htmlFor="wd-group" className={labelClass}>
            Assignment Group
          </label>
          <select
            id="wd-group"
            defaultValue={assignment?.group ?? "ASSIGNMENTS"}
            className={inputClass}
          >
            <option value="ASSIGNMENTS">Assignments</option>
            <option value="QUIZZES">Quizzes</option>
            <option value="EXAMS">Exams</option>
            <option value="PROJECT">Project</option>
          </select>
        </div>
      </div>

      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="wd-display-grade-as" className={labelClass}>
            Display Grade as
          </label>
          <select
            id="wd-display-grade-as"
            defaultValue={assignment?.displayGradeAs ?? "PERCENTAGE"}
            className={inputClass}
          >
            <option value="PERCENTAGE">Percentage</option>
            <option value="COMPLETE">Complete</option>
            <option value="LETTER">Letter</option>
          </select>
        </div>
        <div>
          <label htmlFor="wd-submission-type" className={labelClass}>
            Submission Type
          </label>
          <select
            id="wd-submission-type"
            defaultValue={assignment?.submissionType ?? "ONLINE"}
            className={inputClass}
          >
            <option value="ONLINE" defaultValue="Online">
              Online
            </option>
          </select>
        </div>
      </div>

      <div className="mb-4">
        <label className={labelClass}>Online Entry Options</label>
        <div className="flex flex-col gap-2 rounded border border-neutral-300 p-3">
          <div className={checkboxRowClass}>
            <input
              type="checkbox"
              id="wd-text-entry"
              defaultChecked={hasEntryOption("TEXT_ENTRY")}
            />
            <label htmlFor="wd-text-entry" className="text-sm">
              Text Entry
            </label>
          </div>
          <div className={checkboxRowClass}>
            <input
              type="checkbox"
              id="wd-website-url"
              defaultChecked={hasEntryOption("WEBSITE_URL")}
            />
            <label htmlFor="wd-website-url" className="text-sm">
              Website URL
            </label>
          </div>
          <div className={checkboxRowClass}>
            <input
              type="checkbox"
              id="wd-media-recordings"
              defaultChecked={hasEntryOption("MEDIA_RECORDINGS")}
            />
            <label htmlFor="wd-media-recordings" className="text-sm">
              Media Recordings
            </label>
          </div>
          <div className={checkboxRowClass}>
            <input
              type="checkbox"
              id="wd-student-annotation"
              defaultChecked={hasEntryOption("STUDENT_ANNOTATION")}
            />
            <label htmlFor="wd-student-annotation" className="text-sm">
              Student Annotation
            </label>
          </div>
          <div className={checkboxRowClass}>
            <input
              type="checkbox"
              id="wd-file-upload"
              defaultChecked={hasEntryOption("FILE_UPLOAD")}
            />
            <label htmlFor="wd-file-upload" className="text-sm">
              File Upload
            </label>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="wd-assign-to" className={labelClass}>
          Assign to
        </label>
        <select
          multiple
          id="wd-assign-to"
          defaultValue={assignment?.assignTo ?? ["EVERYONE"]}
          className={inputClass}
        >
          <option value="EVERYONE">Everyone</option>
          <option value="SOMEONE">Someone</option>
          <option value="SECTION">Section</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="wd-due-date" className={labelClass}>
          Due Date
        </label>
        <input
          type="date"
          defaultValue={assignment?.due ?? ""}
          min="2026-09-01"
          max="2026-12-31"
          id="wd-due-date"
          className={inputClass}
        />
      </div>

      <div className="mb-6 grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="wd-available-from" className={labelClass}>
            Available From
          </label>
          <input
            type="date"
            defaultValue={assignment?.available ?? ""}
            min="2026-09-01"
            max="2026-12-31"
            id="wd-available-from"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="wd-available-until" className={labelClass}>
            Until
          </label>
          <input
            type="date"
            defaultValue={assignment?.until ?? ""}
            min="2026-09-01"
            max="2026-12-31"
            id="wd-available-until"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mb-4" id="wd-ai-editor-notes">
        <label htmlFor="wd-ai-notes" className={labelClass}>
          Sample notes
        </label>
        <textarea id="wd-ai-notes" rows={5} className={`${inputClass} resize-y`} />
      </div>

      <hr className="mb-4 border-neutral-300" />

      <div className="flex justify-end gap-2">
        <Link href={`/courses/${cid}/assignments`}>
          <button
            id="wd-cancel"
            type="button"
            className="rounded border border-neutral-300 bg-white px-4 py-1.5 text-sm"
          >
            Cancel
          </button>
        </Link>
        <Link href={`/courses/${cid}/assignments`}>
          <button
            id="wd-save"
            type="submit"
            className="rounded bg-red-600 px-4 py-1.5 text-sm font-medium text-white"
          >
            Save
          </button>
        </Link>
      </div>
    </div>
  );
}
