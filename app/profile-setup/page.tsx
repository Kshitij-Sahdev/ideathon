"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";
import { PawPrint, User } from "lucide-react";

export default function ProfileSetup() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [userType, setUserType] = useState<"owner" | "caretaker">("owner");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      return;
    }
    setIsLoading(true);
    // In a real app, we would save the profile data here
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <PawPrint className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900">Complete Your Profile</h1>
          <p className="mt-2 text-gray-600">Let's get to know you better</p>
        </div>

        <Card className="p-6 bg-white shadow-lg rounded-lg">
          <div className="mb-8">
            <div className="flex justify-between items-center">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`flex items-center ${
                    step < currentStep
                      ? "text-primary"
                      : step === currentStep
                      ? "text-primary"
                      : "text-gray-300"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                      step <= currentStep ? "border-primary" : "border-gray-300"
                    }`}
                  >
                    {step}
                  </div>
                  {step < 3 && (
                    <div
                      className={`w-full h-1 mx-2 ${
                        step < currentStep ? "bg-primary" : "bg-gray-300"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {currentStep === 1 && (
              <div className="space-y-4 fade-in">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="Your phone number" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="Your address" required />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6 fade-in">
                <Label>I am a...</Label>
                <RadioGroup
                  defaultValue="owner"
                  className="grid grid-cols-2 gap-4"
                  onValueChange={(value) => setUserType(value as "owner" | "caretaker")}
                >
                  <div className="relative">
                    <RadioGroupItem
                      value="owner"
                      id="owner"
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor="owner"
                      className="flex flex-col items-center justify-between rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                    >
                      <User className="mb-3 h-6 w-6" />
                      <div className="space-y-1 text-center">
                        <p className="text-sm font-medium leading-none">Pet Owner</p>
                        <p className="text-sm text-muted-foreground">
                          I'm looking for pet care services
                        </p>
                      </div>
                    </Label>
                  </div>
                  <div className="relative">
                    <RadioGroupItem
                      value="caretaker"
                      id="caretaker"
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor="caretaker"
                      className="flex flex-col items-center justify-between rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                    >
                      <PawPrint className="mb-3 h-6 w-6" />
                      <div className="space-y-1 text-center">
                        <p className="text-sm font-medium leading-none">Pet Caretaker</p>
                        <p className="text-sm text-muted-foreground">
                          I want to offer pet care services
                        </p>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-4 fade-in">
                {userType === "owner" ? (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="petName">Pet's Name</Label>
                      <Input id="petName" placeholder="Pet's name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="petType">Pet Type</Label>
                      <Input id="petType" placeholder="Dog, Cat, etc." required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="petAge">Pet's Age</Label>
                      <Input id="petAge" type="number" placeholder="Age in years" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="specialNeeds">Special Requirements</Label>
                      <Input
                        id="specialNeeds"
                        placeholder="Any special care requirements"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Years of Experience</Label>
                      <Input
                        id="experience"
                        type="number"
                        placeholder="Years of experience"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="services">Services Offered</Label>
                      <Input
                        id="services"
                        placeholder="Pet sitting, dog walking, etc."
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="availability">Availability</Label>
                      <Input
                        id="availability"
                        placeholder="Your general availability"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="certifications">Certifications</Label>
                      <Input id="certifications" placeholder="Any relevant certifications" />
                    </div>
                  </>
                )}
              </div>
            )}

            <div className="flex justify-between pt-6">
              {currentStep > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
                  Back
                </Button>
              )}
              <Button
                type="submit"
                className={currentStep === 1 ? "w-full" : "ml-auto"}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <span className="animate-spin mr-2">⏳</span>
                    Processing...
                  </div>
                ) : currentStep < 3 ? (
                  "Continue"
                ) : (
                  "Complete Profile"
                )}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}