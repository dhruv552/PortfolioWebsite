import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { initializeEmailJS, sendEmail } from "@/lib/emailService";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className = "" }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // Initialize EmailJS when component mounts
  useEffect(() => {
    initializeEmailJS();
  }, []);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await sendEmail({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      });

      setSubmitStatus("success");
      form.reset();
    } catch (error) {
      console.error("Email sending error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/dhruv552",
      tooltip: "Visit my GitHub profile",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/dhruvagrawal013",
      tooltip: "Connect on LinkedIn",
    },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:dhruvagrawal552@gmail.com",
      tooltip: "Send me an email",
    },
    {
      name: "Phone",
      icon: <Phone className="h-5 w-5" />,
      href: "tel:+919752476691",
      tooltip: "Call me",
    },
  ];

  return (
    <Card
      className={`w-full max-w-md mx-auto bg-dark-card border-2 border-gray-600 shadow-xl hover:shadow-2xl hover:shadow-accent-blue/20 hover:border-accent-blue/50 transition-all duration-300 rounded-xl ${className}`}
    >
      <CardHeader className="rounded-t-xl">
        <CardTitle className="text-2xl font-bold text-text-light">
          Get In Touch
        </CardTitle>
        <CardDescription className="text-text-muted">
          Fill out the form below to send me a message.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-text-light">Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your name"
                      className="rounded-xl border-2 border-gray-600 bg-dark-surface text-text-light placeholder:text-text-muted focus:border-accent-blue transition-all duration-200"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-text-light">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="your.email@example.com"
                      className="rounded-xl border-2 border-gray-600 bg-dark-surface text-text-light placeholder:text-text-muted focus:border-accent-blue transition-all duration-200"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-text-light">Subject</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="What is this regarding?"
                      className="rounded-xl border-2 border-gray-600 bg-dark-surface text-text-light placeholder:text-text-muted focus:border-accent-blue transition-all duration-200"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-text-light">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Your message here..."
                      className="min-h-[120px] rounded-xl border-2 border-gray-600 bg-dark-surface text-text-light placeholder:text-text-muted focus:border-accent-blue transition-all duration-200 resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {submitStatus === "success" && (
              <Alert className="bg-green-900/20 border-2 border-green-500/50 text-green-300 rounded-xl">
                <AlertDescription>
                  Thank you for your message! I'll get back to you soon.
                </AlertDescription>
              </Alert>
            )}

            {submitStatus === "error" && (
              <Alert className="bg-red-900/20 border-2 border-red-500/50 text-red-300 rounded-xl">
                <AlertDescription>
                  There was an error sending your message. Please try again.
                </AlertDescription>
              </Alert>
            )}

            <Button
              type="submit"
              className="w-full bg-accent-blue hover:bg-accent-blue/90 text-white rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent-blue/25 hover:scale-105 h-12 font-medium"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4 rounded-b-xl">
        <div className="flex justify-center space-x-4">
          <TooltipProvider>
            {socialLinks.map((link) => (
              <Tooltip key={link.name}>
                <TooltipTrigger asChild>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-110 border-2 border-gray-600 hover:border-accent-blue"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{link.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>

        <Button
          variant="outline"
          className="flex items-center gap-2 w-full border-2 border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-dark-bg rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent-cyan/25 hover:scale-105 h-12 font-medium"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1sLN8OqXc3MSPbohS8IUN0kD0lcXNa7nf/view?usp=drive_link",
              "_blank"
            )
          }
        >
          <Download className="h-5 w-5" />
          Download Resume
        </Button>
      </CardFooter>
    </Card>
  );
}
