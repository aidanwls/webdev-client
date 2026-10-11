import Link from "next/link";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="max-w-sm">
      <h3 className="mb-3 text-2xl font-semibold">Sign up</h3>
      <input
        placeholder="username"
        className="wd-username mb-2 w-full rounded border border-neutral-300 px-3 py-2"
        defaultValue="ada"
      />
      <input
        placeholder="password"
        type="password"
        className="wd-password mb-2 w-full rounded border border-neutral-300 px-3 py-2"
        defaultValue="123"
      />
      <input
        placeholder="verify password"
        type="password"
        className="wd-password-verify mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <Link
        id="wd-signin-btn"
        href="/dashboard"
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white no-underline"
      >
        Sign Up
      </Link>
      <Link href="/account/signin">Sign in</Link>
    </div>
  );
}
