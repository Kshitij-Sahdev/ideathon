"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AuthDialog } from "./auth-dialog";

export function AuthButton() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [authType, setAuthType] = useState<"signin" | "signup">("signin");

  return (
    <>
      <Button
        className="bg-primary hover:bg-primary/90 transition-colors"
        onClick={() => {
          setAuthType("signin");
          setIsDialogOpen(true);
        }}
      >
        Log In
      </Button>

      <AuthDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        type={authType}
        onTypeChange={setAuthType}
      />
    </>
  );
}