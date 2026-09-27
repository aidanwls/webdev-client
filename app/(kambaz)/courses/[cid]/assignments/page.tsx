import AssignmentItem from "./AssignmentItem";

export default async function Assignments({ params }: { params: Promise<{ cid: string }> }) {
  const { cid } = await params;
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments" id="wd-search-assignment"></input>
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>

      <ul id="wd-assignment-list">
        <AssignmentItem
          title="A1 - ENV + HTML"
          cid={cid}
          aid="123"
          details="Multiple Modules | Not available until May 6 at 12:00am |
Due May 13 at 11:59pm | 100 pts"
        ></AssignmentItem>
        <AssignmentItem
          title="A2 - CSS + TAILWIND"
          cid={cid}
          aid="234"
          details="Multiple Modules | Not available until May 6 at 12:00am |
Due May 13 at 11:59pm | 100 pts"
        ></AssignmentItem>
        <AssignmentItem
          title="A3 - JAVASCRIPT + REACT"
          cid={cid}
          aid="345"
          details="Multiple Modules | Not available until May 6 at 12:00am |
Due May 13 at 11:59pm | 100 pts"
        ></AssignmentItem>
      </ul>
    </div>
  );
}
