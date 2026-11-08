"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import {
  emptyUser,
  useAccountContext,
  type User,
} from "../../../../account/AccountContext";
import { isEnrolled, useEnrollmentsStore } from "../../../../store/enrollmentsStore";

const inputClass =
  "rounded border border-neutral-300 px-3 py-1.5 text-sm";

export default function PeopleTable() {
  const { cid } = useParams<{ cid: string }>();
  const { users, addUser } = useAccountContext();
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const enroll = useEnrollmentsStore((state) => state.enroll);
  const [user, setUser] = useState<User>(emptyUser);
  const enrolled = users.filter((usr) => isEnrolled(enrollments, usr._id, cid));
  const addPerson = () => {
    if (!user.firstName.trim() && !user.lastName.trim()) return;
    const newUser = { ...user, _id: crypto.randomUUID() };
    addUser(newUser);
    enroll(newUser._id, cid);
    setUser(emptyUser);
  };
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <input
          id="wd-person-first-name"
          placeholder="First name"
          className={inputClass}
          value={user.firstName}
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        />
        <input
          id="wd-person-last-name"
          placeholder="Last name"
          className={inputClass}
          value={user.lastName}
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        />
        <input
          id="wd-person-username"
          placeholder="Username"
          className={inputClass}
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <select
          id="wd-person-role"
          className={inputClass}
          value={user.role}
          onChange={(e) => setUser({ ...user, role: e.target.value })}
        >
          <option value="STUDENT">Student</option>
          <option value="TA">TA</option>
          <option value="FACULTY">Faculty</option>
          <option value="ADMIN">Admin</option>
        </select>
        <button
          type="button"
          id="wd-add-person-click"
          className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
          onClick={addPerson}
        >
          Add Person
        </button>
      </div>
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {enrolled.map((usr) => (
            <tr key={usr._id} className="odd:bg-neutral-50">
              <td className="wd-full-name p-2 text-nowrap">
                <FaUserCircle className="me-2 inline align-middle text-3xl text-neutral-500" />
                <span className="wd-first-name">{usr.firstName}</span>{" "}
                <span className="wd-last-name">{usr.lastName}</span>
              </td>
              <td className="wd-login-id p-2">{usr.loginId}</td>
              <td className="wd-section p-2">{usr.section}</td>
              <td className="wd-role p-2">{usr.role}</td>
              <td className="wd-last-activity p-2">{usr.lastActivity}</td>
              <td className="wd-total-activity p-2">{usr.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
