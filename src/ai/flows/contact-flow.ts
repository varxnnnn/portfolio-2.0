'use server';
/**
 * @fileOverview A flow for handling contact form submissions.
 *
 * - handleContactForm - A function that handles the contact form submission.
 * - ContactFormInput - The input type for the handleContactForm function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const ContactFormInputSchema = z.object({
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().email().describe('The email of the person sending the message.'),
  message: z.string().describe('The message content.'),
});

export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

export async function handleContactForm(input: ContactFormInput) {
  const contactFlow = ai.defineFlow(
    {
      name: 'contactFlow',
      inputSchema: ContactFormInputSchema,
      outputSchema: z.void(),
    },
    async (input) => {
      // In a real application, you would integrate with an email service
      // like SendGrid, Resend, or AWS SES here.
      // For now, we'll just log the message to the server console.
      console.log('New contact form submission:');
      console.log('Name:', input.name);
      console.log('Email:', input.email);
      console.log('Message:', input.message);
    }
  );

  return contactFlow(input);
}
