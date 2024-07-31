"use client";
import { PostType } from "@/lib/types";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { deletePost, updatePost } from "@/lib/action";

const UpdateBlog = ({ post }: { post: PostType }) => {
  const [formData, setFormData] = useState({
    title: post.title,
    content: post.content,
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await updatePost({ ...post, ...formData });
  };

  return (
    <form onSubmit={handleFormSubmit} className="max-w-3xl mx-auto p-6 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md">
      <div className="mb-6">
        <label
          htmlFor="title"
          className="block text-gray-900 dark:text-gray-200 text-lg font-semibold mb-2"
        >
          Title
        </label>
        <Input
          id="title"
          type="text"
          name="title"
          placeholder="Enter title"
          value={formData.title}
          onChange={handleInputChange}
          required
          className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="content"
          className="block text-gray-900 dark:text-gray-200 text-lg font-semibold mb-2"
        >
          Content
        </label>
        <textarea
          id="content"
          name="content"
          className="shadow-sm border border-gray-300 rounded-md w-full p-3 text-gray-900 dark:text-gray-300 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter content"
          rows={8}
          value={formData.content ?? ""}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="flex justify-end gap-4">
        <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white">
          Update Post
        </Button>
        <Button
          variant="destructive"
          className="bg-red-600 hover:bg-red-700 text-white"
          onClick={async (e) => {
            e.preventDefault();
            await deletePost(post.id);
          }}
        >
          Delete Post
        </Button>
      </div>
    </form>
  );
};

export default UpdateBlog;
