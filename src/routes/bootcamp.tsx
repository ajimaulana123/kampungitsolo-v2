import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/bootcamp")({
  beforeLoad: () => {
    throw redirect({
      to: "/program/$slug",
      params: { slug: "bootcamp-ai-vibe-coding" },
    });
  },
});
