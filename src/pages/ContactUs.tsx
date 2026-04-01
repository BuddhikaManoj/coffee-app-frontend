import { useState } from 'react';
import { Mail, MapPin, Phone, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ContactUs = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({ title: 'Message Sent!', description: 'We\'ll get back to you within 24 hours.' });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="container py-12">
      <h1 className="font-display text-4xl font-bold text-foreground mb-2">Contact Us</h1>
      <p className="text-muted-foreground mb-8">Have a question or feedback? We'd love to hear from you.</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle className="font-display text-xl">Send us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Name</label>
                  <Input placeholder="Your name" required />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
                  <Input type="email" placeholder="you@example.com" required />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Subject</label>
                <Input placeholder="What's this about?" required />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Message</label>
                <Textarea placeholder="Tell us more..." rows={5} required />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : (
                  <span className="flex items-center gap-2"><Send className="h-4 w-4" /> Send Message</span>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Address</p>
                  <p className="text-sm text-muted-foreground">123 Coffee Street, Roast City, RC 12345</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <p className="text-sm text-muted-foreground">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">hello@brewandbean.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Business Hours</p>
                  <p className="text-sm text-muted-foreground">Mon–Fri: 9 AM – 6 PM EST</p>
                  <p className="text-sm text-muted-foreground">Sat–Sun: 10 AM – 4 PM EST</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-secondary">
            <CardContent className="pt-6">
              <h3 className="font-display font-semibold text-foreground mb-2">Quick Tip</h3>
              <p className="text-sm text-muted-foreground">
                For order-related inquiries, please include your order number in the message. This helps us assist you faster!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
