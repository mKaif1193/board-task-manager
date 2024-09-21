"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useOrganization } from "@clerk/nextjs";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/useApiMutation";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const EmptyBoards = () => {
  const router = useRouter();
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    if (!organization) {
      return;
    }

    mutate({
      orgId: organization.id,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board created successfully");
        router.push(`/board/${id}`);
      })
      .catch(() => toast.error("Failed to create Board!"));
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/note.svg" alt="Empty Favorites" height={110} width={110} />
      <h2 className="text-2xl font-semibold mt-6">Create your first Board!</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start by creating a Board for your organization
      </p>
      <div className="mt-6">
        <Button onClick={onClick} size="lg" disabled={pending}>
          Create Board
        </Button>
      </div>
    </div>
  );
};

export default EmptyBoards;
