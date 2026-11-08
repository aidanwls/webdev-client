"use client";

import { create } from "zustand";
import assignmentsJson from "../database/assignments.json";

export type Assignment = (typeof assignmentsJson)[number];

const emptyAssignment: Assignment = {
  _id: "0",
  title: "New Assignment",
  course: "",
  description: "New Description",
  points: 100,
  due: "2026-09-01",
  available: "2026-09-01",
  until: "2026-09-01",
  group: "ASSIGNMENTS",
  displayGradeAs: "PERCENTAGE",
  submissionType: "ONLINE",
  onlineEntryOptions: ["TEXT_ENTRY"],
  assignTo: ["EVERYONE"],
};

type AssignmentsStore = {
  assignments: Assignment[];
  addAssignment: (
    assignment: Partial<Assignment> & Pick<Assignment, "course">,
  ) => void;
  deleteAssignment: (assignmentId: string) => void;
  updateAssignment: (assignment: Assignment) => void;
  getAssignment: (assignmentId: string) => Assignment | undefined;
};

export const useAssignmentsStore = create<AssignmentsStore>((set, get) => ({
  assignments: assignmentsJson,
  addAssignment: (assignment) =>
    set((state) => ({
      assignments: [
        ...state.assignments,
        { ...emptyAssignment, ...assignment, _id: crypto.randomUUID() },
      ],
    })),
  deleteAssignment: (assignmentId) =>
    set((state) => ({
      assignments: state.assignments.filter((a) => a._id !== assignmentId),
    })),
  updateAssignment: (assignment) =>
    set((state) => ({
      assignments: state.assignments.map((a) =>
        a._id === assignment._id ? assignment : a,
      ),
    })),
  getAssignment: (assignmentId) =>
    get().assignments.find((a) => a._id === assignmentId),
}));

export { emptyAssignment };
