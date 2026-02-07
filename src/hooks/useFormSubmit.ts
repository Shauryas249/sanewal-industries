import { useState } from 'react';
import { UseFormReturn, FieldValues } from 'react-hook-form';
import { useToast } from '@/components/ui/use-toast';

interface UseFormSubmitOptions<T> {
  onSubmit: (data: T) => Promise<void>;
  successMessage?: string;
  errorMessage?: string;
  resetOnSuccess?: boolean;
}

/**
 * Custom hook for handling form submission with loading state and toast notifications
 */
export function useFormSubmit<T extends FieldValues>(
  form: UseFormReturn<T>,
  options: UseFormSubmitOptions<T>
) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    onSubmit,
    successMessage = 'Form submitted successfully',
    errorMessage = 'There was an error submitting the form',
    resetOnSuccess = true
  } = options;

  const handleSubmit = async (data: T) => {
    setIsSubmitting(true);
    
    try {
      await onSubmit(data);
      
      toast({
        title: 'Success',
        description: successMessage,
        variant: 'default',
      });
      
      if (resetOnSuccess) {
        form.reset();
      }
    } catch (error) {
      console.error('Form submission error:', error);
      
      toast({
        title: 'Error',
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    handleSubmit: form.handleSubmit(handleSubmit),
  };
}

export default useFormSubmit;