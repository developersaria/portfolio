"use client";

import Link from "next/link";
import Nav from "./Nav";
import Note from "../Note";

export default function Header() {
  return (
    <header
      id="page-top"
      className="mx-auto w-full max-w-[1440px] px-6 md:px-14 lg:px-20 flex items-center justify-between gap-5 py-7"
    >
      <Link
        href="/"
        className="flex items-end gap-1 text-lg font-semibold tracking-tight"
      >
        <div className="leading-tight">DevelopersAria</div>
        <Note />
      </Link>
      <Nav />
    </header>
  );
}
