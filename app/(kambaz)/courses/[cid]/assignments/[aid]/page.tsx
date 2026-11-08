"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  emptyAssignment,
  useAssignmentsStore,
  type Assignment,
} from "../../../../store/assignmentsStore";

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const router = useRouter();
  const isNew = aid === "new";
  const getAssignment = useAssignmentsStore((state) => state.getAssignment);
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore((state) => state.updateAssignment);
  const [assignment, setAssignment] = useState<Assignment | undefined>(() => {
    if (isNew) return { ...emptyAssignment, course: cid };
    const existing = getAssignment(aid);
    return existing?.course === cid ? existing : undefined;
  });
  const save = () => {
    if (!assignment) return;
    const toSave = { ...assignment, course: cid };
    if (isNew) {
      addAssignment(toSave);
    } else {
      updateAssignment(toSave);
    }
    router.push(`/courses/${cid}/assignments`);
  };
  const labelClass = "mb-1 block text-sm font-medium text-neutral-700";
  const inputClass =
    "w-full rounded border border-neutral-300 px-3 py-2 text-sm focus:border-red-500 focus:outline-none";
  const checkboxRowClass = "flex items-center gap-2";
  const hasEntryOption = (option: string) =>
    assignment?.onlineEntryOptions.includes(option) ?? false;

  if (!assignment) {
    return <p id="wd-assignment-not-found" className="p-4">Assignment not found.</p>;
  }

  return (
    <div id="wd-assignments-editor" className="max-w-3xl p-4">
      <div className="mb-4">
        <label htmlFor="wd-name" className={labelClass}>
          Assignment Name
        </label>
        <input
          id="wd-name"
          value={assignment?.title ?? ""}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
          className={inputClass}
        />
      </div>
      {!isNew && (
        <p id="wd-assignment-id" className="mb-4 text-sm text-neutral-600">
          Assignment id: {aid}
        </p>
      )}

      <div className="mb-4">
        <label htmlFor="wd-description" className={labelClass}>
          Description
        </label>
        <textarea
          id="wd-description"
          rows={5}
          className={`${inputClass} resize-y`}
          value={assignment?.description ?? ""}
          onChange={(e) =>
            setAssignment({ ...assignment, description: e.target.value })
          }
        />
      </div>

      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="wd-points" className={labelClass}>
            Points
          </label>
          <input
            id="wd-points"
            type="number"
            value={assignment?.points ?? 0}
            onChange={(e) =>
              setAssignment({ ...assignment, points: Number(e.target.value) || 0 })
            }
            className={inputClass}
          />
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
          value={assignment?.due ?? ""}
          onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
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
            value={assignment?.available ?? ""}
            onChange={(e) =>
              setAssignment({ ...assignment, available: e.target.value })
            }
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
            value={assignment?.until ?? ""}
            onChange={(e) => setAssignment({ ...assignment, until: e.target.value })}
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
        <button
          id="wd-save"
          type="button"
          onClick={save}
          className="rounded bg-red-600 px-4 py-1.5 text-sm font-medium text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
}
