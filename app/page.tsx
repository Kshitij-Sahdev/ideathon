import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PawPrint, Heart, Shield, Calendar, Star, MapPin, Clock } from "lucide-react";
import { SplashScreen } from "@/components/splash-screen";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SplashScreen />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-red-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 fade-in">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-primary">
              Your Pets Deserve the Best Care
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with trusted pet sitters in your area who will treat your furry friends like family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="text-lg bg-primary hover:bg-primary/90 transition-colors slide-up">
                Find a Pet Sitter
              </Button>
              <Button size="lg" variant="outline" className="text-lg hover:border-primary hover:text-primary transition-colors slide-up">
                Become a Sitter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Verified Sitters",
                description: "All our sitters go through a comprehensive verification process."
              },
              {
                icon: Heart,
                title: "Pet Insurance",
                description: "Every booking includes premium insurance coverage."
              },
              {
                icon: Calendar,
                title: "Easy Booking",
                description: "Book and manage appointments with just a few clicks."
              }
            ].map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 space-y-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 slide-up service-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: PawPrint,
                title: "Pet Sitting",
                description: "In-home pet care while you're away"
              },
              {
                icon: Clock,
                title: "Dog Walking",
                description: "Regular walks and exercise"
              },
              {
                icon: Star,
                title: "Training",
                description: "Professional pet training services"
              },
              {
                icon: MapPin,
                title: "Pet Boarding",
                description: "Overnight care in sitter's home"
              }
            ].map((service, index) => (
              <Card 
                key={index}
                className="p-6 text-center service-card"
              >
                <service.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Perfect Pet Sitter?</h2>
          <p className="text-lg mb-8 opacity-90">Join thousands of happy pet owners who trust PawCare</p>
          <Button size="lg" variant="secondary" className="text-primary hover:bg-white/90">
            Get Started Today
          </Button>
        </div>
      </section>
    </main>
  );
}