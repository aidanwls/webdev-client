"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../kambaz.css";

const LINKS = [
  { path: "home", id: "wd-course-home-link", label: "Home" },
  { path: "modules", id: "wd-course-modules-link", label: "Modules" },
  { path: "piazza", id: "wd-course-piazza-link", label: "Piazza" },
  { path: "zoom", id: "wd-course-zoom-link", label: "Zoom" },
  { path: "assignments", id: "wd-course-assignments-link", label: "Assignments" },
  { path: "quizzes", id: "wd-course-quizzes-link", label: "Quizzes" },
  { path: "grades", id: "wd-course-grades-link", label: "Grades" },
  { path: "people/table", id: "wd-course-people-link", label: "People" },
  { path: "announcements", id: "wd-course-announcements-link", label: "Announcements" },
] as const;

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname() ?? "";
  const inCourse = pathname.startsWith(`/courses/${cid}`);

  return (
    <div id="wd-courses-navigation" className="wd list-group rounded-none text-lg">
      {LINKS.map(({ path, id, label }) => {
        const href = `/courses/${cid}/${path}`;
        const active = inCourse
          ? pathname === href || (path !== "home" && pathname.startsWith(href))
          : path === "home";
        return (
          <Link
            key={id}
            href={href}
            id={id}
            className={
              active ? "list-group-item active border-0" : "list-group-item border-0 text-red-600"
            }
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
