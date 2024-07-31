
import React from "react";
import PostCard from "@/components/postCard";
import { PostType } from "@/lib/types";
import { getAllPosts } from "@/lib/action";

const Blog = async () => {
  const posts: PostType[] = (await getAllPosts()) as PostType[];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-800">Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts?.map((post) => (
            <div key={post.id} className="w-full">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
