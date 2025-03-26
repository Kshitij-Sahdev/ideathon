"use client";

import { Button } from "@/components/ui/button";
import { PawPrint, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { AuthButton } from "./auth-button";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <PawPrint className="h-6 w-6 text-primary animate-pulse" />
          <span className="text-xl font-bold">PawCare</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Button variant="ghost" className="hover:bg-primary/10 transition-colors">
            Find a Sitter
          </Button>
          <Button variant="ghost" className="hover:bg-primary/10 transition-colors">
            Become a Sitter
          </Button>
          <Button variant="ghost" className="hover:bg-primary/10 transition-colors">
            How it Works
          </Button>
          <AuthButton />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                <Button variant="ghost" className="w-full justify-start">
                  Find a Sitter
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Become a Sitter
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  How it Works
                </Button>
                <div className="pt-4">
                  <AuthButton />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}