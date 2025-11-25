// This file is machine-generated - edit at your own risk!

'use server';
/**
 * @fileOverview Avatar image generation flow.
 *
 * - generateAvatarOnDemand - A function that handles the avatar image generation process.
 * - GenerateAvatarOnDemandInput - The input type for the generateAvatarOnDemand function.
 * - GenerateAvatarOnDemandOutput - The return type for the generateAvatarOnDemand function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAvatarOnDemandInputSchema = z.object({
  prompt: z.string().describe('A prompt describing the desired avatar image.'),
});
export type GenerateAvatarOnDemandInput = z.infer<typeof GenerateAvatarOnDemandInputSchema>;

const GenerateAvatarOnDemandOutputSchema = z.object({
  avatarDataUri: z
    .string()
    .describe(
      'The generated avatar image as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' 
    ),
});
export type GenerateAvatarOnDemandOutput = z.infer<typeof GenerateAvatarOnDemandOutputSchema>;

export async function generateAvatarOnDemand(input: GenerateAvatarOnDemandInput): Promise<GenerateAvatarOnDemandOutput> {
  return generateAvatarOnDemandFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAvatarOnDemandPrompt',
  input: {schema: GenerateAvatarOnDemandInputSchema},
  output: {schema: GenerateAvatarOnDemandOutputSchema},
  prompt: `Generate an avatar image based on the following description: {{{prompt}}}. The image should be a square with a white background.`,
});

const generateAvatarOnDemandFlow = ai.defineFlow(
  {
    name: 'generateAvatarOnDemandFlow',
    inputSchema: GenerateAvatarOnDemandInputSchema,
    outputSchema: GenerateAvatarOnDemandOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: input.prompt,
    });
    if (!media) {
      throw new Error('No image was generated.');
    }
    return {avatarDataUri: media.url!};
  }
);
