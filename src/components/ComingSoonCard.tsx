import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ComingSoonCard = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thank you for your interest!",
        description: "We'll notify you as soon as we launch.",
      });
      setEmail("");
    }
  };

  return (
    <Card className="gradient-card border-border/50 shadow-elegant backdrop-blur-sm animate-slide-up">
      <div className="p-6 md:p-8 text-center">
        {/* Logo */}
        <div className="mb-8 animate-float">
          <img 
            src="/lovable-uploads/a29507ef-a24a-4c4c-a14a-5f3ccfaf30f9.png" 
            alt="Mr. Discount Logistics"
            className="mx-auto h-16 md:h-20 object-contain"
          />
        </div>

        {/* Main Heading */}
        <div className="mb-6 space-y-3">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Website Under Construction
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We're building something amazing for you. Our new website will be launching soon 
            with premium logistics solutions at unbeatable prices.
          </p>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="space-y-2">
            <div className="w-12 h-12 mx-auto bg-primary/20 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold">Fast Delivery</h3>
            <p className="text-sm text-muted-foreground">Express shipping nationwide</p>
          </div>
          <div className="space-y-2">
            <div className="w-12 h-12 mx-auto bg-primary/20 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold">Wide Coverage</h3>
            <p className="text-sm text-muted-foreground">Coast-to-coast logistics</p>
          </div>
          <div className="space-y-2">
            <div className="w-12 h-12 mx-auto bg-primary/20 rounded-lg flex items-center justify-center">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold">24/7 Support</h3>
            <p className="text-sm text-muted-foreground">Always here to help</p>
          </div>
        </div>

        {/* Email Signup */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">
            Be the first to know when we launch
          </h3>
          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-input/50 border-border/50 transition-smooth focus:glow-primary"
                required
              />
              <Button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground transition-bounce hover:glow-primary"
              >
                <Mail className="w-4 h-4 mr-2" />
                Notify Me
              </Button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="pt-8 border-t border-border/30">
          <h4 className="font-semibold mb-4">Need immediate assistance?</h4>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-muted-foreground">
            <a href="mailto:info@mrdiscountlogistics.com" className="flex items-center gap-2 hover:text-foreground transition-smooth">
              <Mail className="w-4 h-4" />
              info@mrdiscountlogistics.com
            </a>
            <a href="tel:+1-800-LOGISTICS" className="flex items-center gap-2 hover:text-foreground transition-smooth">
              <Phone className="w-4 h-4" />
              1-800-LOGISTICS
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ComingSoonCard;