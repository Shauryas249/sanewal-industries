import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import useFormSubmit from '@/hooks/useFormSubmit';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Phone number must be at least 10 digits.' }),
  company: z.string().optional(),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  // Initialize form with validation
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
    },
  });

  // Use our custom form submission hook
  const { isSubmitting, handleSubmit } = useFormSubmit(form, {
    onSubmit: async (data) => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', data);
    },
    successMessage: 'Thank you for your message! We\'ll get back to you as soon as possible.',
    errorMessage: 'There was an error submitting your message. Please try again later.',
    resetOnSuccess: true,
  });

  // Get form status from the form state
  const formStatus = form.formState.isSubmitSuccessful ? 'success' : 
                    form.formState.isSubmitted && !form.formState.isValid ? 'error' : 'idle';

  return (
    <div className={`space-y-6 ${className}`}>
      {formStatus === 'success' && (
        <Alert className="bg-green-500/10 border-green-500 text-green-500" role="alert">
          <CheckCircle2 className="h-4 w-4" />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>
            Thank you for your message! We'll get back to you as soon as possible.
          </AlertDescription>
        </Alert>
      )}
      
      <Form {...form}>
        <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="name">Name<span aria-hidden="true">*</span></FormLabel>
                  <FormControl>
                    <Input 
                      id="name"
                      placeholder="Your name" 
                      {...field} 
                      aria-required="true"
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
                  <FormLabel htmlFor="email">Email<span aria-hidden="true">*</span></FormLabel>
                  <FormControl>
                    <Input 
                      id="email"
                      placeholder="Your email address" 
                      type="email" 
                      {...field} 
                      aria-required="true"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="phone">Phone<span aria-hidden="true">*</span></FormLabel>
                  <FormControl>
                    <Input 
                      id="phone"
                      placeholder="Your phone number" 
                      type="tel"
                      {...field} 
                      aria-required="true"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="company">Company</FormLabel>
                  <FormControl>
                    <Input 
                      id="company"
                      placeholder="Your company name (optional)" 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>Optional</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="subject">Subject<span aria-hidden="true">*</span></FormLabel>
                <FormControl>
                  <Input 
                    id="subject"
                    placeholder="Subject of your message" 
                    {...field} 
                    aria-required="true"
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
                <FormLabel htmlFor="message">Message<span aria-hidden="true">*</span></FormLabel>
                <FormControl>
                  <Textarea 
                    id="message"
                    placeholder="Your message" 
                    className="min-h-[150px]" 
                    {...field} 
                    aria-required="true"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="flex items-center">
            <Button 
              type="submit" 
              className="w-full md:w-auto" 
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : 'Send Message'}
            </Button>
            
            <p className="ml-4 text-sm text-muted-foreground">
              <span aria-hidden="true">*</span> Required fields
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;