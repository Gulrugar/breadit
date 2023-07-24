"use client";

import Link from "next/link";
import { FC } from "react";
import { Button, buttonVariants } from "./ui/Button";
import { usePathname } from "next/navigation";

interface CreatePostButtonProps {
  slug: string;
}

const CreatePostButton: FC<CreatePostButtonProps> = ({ slug }) => {
  const pathname = usePathname();
  const isInSubmit = pathname.split("/").pop() === "submit";

  return (
    <>
      {isInSubmit ? (
        <Button type="submit" className="w-full" form="subreddit-post-form">
          Post
        </Button>
      ) : (
        <Link
          className={buttonVariants({
            variant: "outline",
            className: "w-full mb-6",
          })}
          href={`r/${slug}/submit`}
        >
          Create Post
        </Link>
      )}
    </>
  );
};

export default CreatePostButton;
