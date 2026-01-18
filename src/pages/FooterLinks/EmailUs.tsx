import BaseFooterPage from "./BaseFooterPage";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const EmailUs = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We will get back to you soon.");
  };

  return (
    <BaseFooterPage title="Email Us">
      <p className="text-muted-foreground mb-8">
        Need help, have a question, or want to collaborate? Fill out the form below and our team will get back to you
        within 24-48 hours.
      </p>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label className="text-sm font-medium">Your Name</label>
          <Input placeholder="Enter your name" required />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Email Address</label>
          <Input type="email" placeholder="you@example.com" required />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Subject</label>
          <Input placeholder="How can we help?" required />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Message</label>
          <Textarea 
            rows={6} 
            placeholder="Write your message here..." 
            className="resize-none"
            required 
          />
        </div>

        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </BaseFooterPage>
  );
};

export default EmailUs;
