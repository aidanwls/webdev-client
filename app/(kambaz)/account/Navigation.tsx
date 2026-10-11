"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../kambaz.css";

export default function AccountNavigation() {
  const pathname = usePathname() ?? "";
  const signin = `/account/signin`;
  const signup = `/account/signup`;
  const profile = `/account/profile`;

  return (
    <div id="wd-courses-navigation" className="wd list-group rounded-none text-lg">
      <Link
        href={signin}
        id="wd-account-signin-link"
        className={
          pathname === signin
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Sign In
      </Link>
      <Link
        href={signup}
        id="wd-account-signup-link"
        className={
          pathname === signup
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Sign Up
      </Link>
      <Link
        href={profile}
        id="wd-account-profile-link"
        className={
          pathname === profile
            ? "list-group-item active border-0"
            : "list-group-item border-0 text-red-600"
        }
      >
        Profile
      </Link>
    </div>
  );
}
