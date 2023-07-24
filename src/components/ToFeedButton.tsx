"use client";

import { ChevronLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import { buttonVariants } from "./ui/Button";

const ToFeedButton = () => {
  const pathname = usePathname();

  const subredditPath = getSubredditPath(pathname);

  return (
    <a href={subredditPath} className={buttonVariants({ variant: "ghost" })}>
      <ChevronLeft className="h-4 w-4 mr-1" />
      {subredditPath === "/" ? "Home" : "Back to community"}
    </a>
  );
};

const getSubredditPath = (pathname: string) => {
  const splitPath = pathname.split("/");

  if (splitPath.length === 3) return "/";
  else if (splitPath.length > 3) return `/${splitPath[1]}/${splitPath[2]}`;
  else return "/";
};

export default ToFeedButton;
