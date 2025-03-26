"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AuthDialogProps {
  isOpen: boolean;
  onClose: () => void;
  type: "signin" | "signup";
  onTypeChange: (type: "signin" | "signup") => void;
}

export function AuthDialog({ isOpen, onClose, type, onTypeChange }: AuthDialogProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (type === "signup") {
      // In a real app, we would create the user account here
      await new Promise(resolve => setTimeout(resolve, 1000));
      onClose();
      router.push("/profile-setup");
    } else {
      // In a real app, we would authenticate the user here
      await new Promise(resolve => setTimeout(resolve, 1000));
      onClose();
    }
    
    setIsLoading(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] fade-in">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {type === "signin" ? "Welcome Back" : "Create Account"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 slide-up">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" required />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <div className="flex items-center justify-center">
                <span className="animate-spin mr-2">⏳</span>
                Processing...
              </div>
            ) : type === "signin" ? (
              "Log In"
            ) : (
              "Create Account"
            )}
          </Button>
          <div className="text-center text-sm">
            {type === "signin" ? (
              <button
                type="button"
                className="text-primary hover:underline"
                onClick={() => onTypeChange("signup")}
              >
                Don't have an account? Create one
              </button>
            ) : (
              <button
                type="button"
                className="text-primary hover:underline"
                onClick={() => onTypeChange("signin")}
              >
                Already have an account? Log in
              </button>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}