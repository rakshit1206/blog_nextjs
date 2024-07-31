"use client";
import { useSession } from "next-auth/react";
import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";

const Header: React.FC = () => {
  const { data: session } = useSession();

  return (
    <header className="bg-gradient-to-r from-indigo-500 to-purple-500 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-3xl font-extrabold tracking-tight text-white">
          <Link
            href="/"
            className="hover:text-yellow-300 transition duration-300"
          >
            My Blog
          </Link>
        </h1>
        <nav className="flex items-center space-x-4">
          {!session ? (
            <Link
              href="/login"
              className="border border-yellow-300 text-yellow-300 py-2 px-4 rounded-md hover:bg-yellow-300 hover:text-indigo-500 transition duration-300"
            >
              Log In
            </Link>
          ) : (
            <>
              <Link
                href="/blog/create"
                className="border border-green-300 text-green-300 py-2 px-4 rounded-md hover:bg-green-300 hover:text-indigo-500 transition duration-300"
              >
                Create Post
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="border border-red-300 text-red-300 py-2 px-4 rounded-md hover:bg-red-300 hover:text-indigo-500 transition duration-300"
              >
                Log Out
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
