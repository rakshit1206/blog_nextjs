"use client";

import { PostType } from "@/lib/types";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"; // Assuming you have Card components in "./ui/card"
import { Button } from "./ui/button";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { deletePost } from "@/lib/action";

const PostCard = ({ post }: { post: PostType }) => {
  const { data: session } = useSession();

  return (
    <Card className="bg-blue-50 border border-blue-300 rounded-xl p-6 shadow-2xl hover:shadow-md transition-shadow duration-300">
      <CardHeader>
        <CardTitle>
          <Link
            href={`./blog/${post.id}`}
            className="text-2xl font-extrabold text-blue-900 hover:text-blue-700"
          >
            {post.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-800 mb-4 line-clamp-3">{post.content}</p>
        <p className="text-gray-500 text-sm">
          {new Date(post.createdAt).toLocaleDateString()}
        </p>
      </CardContent>
      {session && (
        <CardFooter className="flex justify-end gap-4">
          <Link href={`./blog/update/${post.id}`}>
            <Button
              variant="default"
              className="bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              Update
            </Button>
          </Link>
          <Button
            variant="destructive"
            className="bg-red-500 hover:bg-red-600 text-white"
            onClick={async () => {
              await deletePost(post.id);
            }}
          >
            Delete
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default PostCard;
