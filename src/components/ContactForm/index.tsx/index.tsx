// src/components/ContactForm/index.tsx
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-hot-toast';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  resize: vertical;
`;

const SubmitButton = styled.button<{ disabled?: boolean }>`
  padding: 0.75rem;
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#0077ff')};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#ccc' : '#005fcc')};
  }
`;

const ErrorText = styled.span`
  color: red;
  font-size: 0.85rem;
`;

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await emailjs.send('service_id', 'template_id', data, 'user_id');
      toast.success('Email sent!');
      reset(); // Clear form after success
    } catch {
      toast.error('Email failed to send.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        placeholder="Your Name"
        {...register('name', { required: 'Name is required' })}
      />
      {errors.name?.message && <ErrorText>{errors.name.message}</ErrorText>}

      <Input
        type="email"
        placeholder="Your Email"
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^\S+@\S+$/i,
            message: 'Invalid email format',
          },
        })}
      />
      {errors.email?.message && <ErrorText>{errors.email.message}</ErrorText>}

      <TextArea
        rows={5}
        placeholder="Your Message"
        {...register('message', { required: 'Message is required' })}
      />
      {errors.message?.message && <ErrorText>{errors.message.message}</ErrorText>}

      <SubmitButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </SubmitButton>
    </FormContainer>
  );
};

export default ContactForm;
