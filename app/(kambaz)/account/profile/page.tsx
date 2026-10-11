import Link from "next/link";

export default function Profile() {
  const inputClass = "mb-2 w-full rounded border border-neutral-300 px-3 py-2"

  return (
    <div id="wd-profile-screen" className="max-w-sm">
      <h3 className="mb-3 text-2xl font-semibold">Profile</h3>
      <input
        defaultValue="alice"
        placeholder="username"
        className={inputClass}
      />
      <br />
      <input
        defaultValue="123"
        placeholder="password"
        type="password"
        className={inputClass}
      />
      <br />
      <input
        defaultValue="Alice"
        placeholder="First Name"
        id="wd-firstname"
        className={inputClass}
      />
      <br />
      <input
        defaultValue="Wonderland"
        placeholder="Last Name"
        id="wd-lastname"
        className={inputClass}
      />
      <br />
      <input
        defaultValue="2000-01-01"
        type="date"
        id="wd-dob"
        className={inputClass}
      />
      <br />
      <input
        defaultValue="alice@wonderland"
        type="email"
        id="wd-email"
        className={inputClass}
      />
      <br />
      <select defaultValue="FACULTY" id="wd-role" className={inputClass}>
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <br />
      <Link href="/account/signin">Sign out</Link>
    </div>
  );
}
