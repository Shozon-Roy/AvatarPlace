"use server";

import { ai } from "@/ai/genkit";
import { z } from "zod";

const SvgToPngInputSchema = z.object({
    svg: z.string().describe("The SVG string to convert to PNG."),
});
type SvgToPngInput = z.infer<typeof SvgToPngInputSchema>;

const SvgToPngOutputSchema = z.object({
    pngDataUri: z.string().describe("The converted PNG image as a data URI."),
});
type SvgToPngOutput = z.infer<typeof SvgToPngOutputSchema>;

export async function convertSvgToPng(input: SvgToPngInput): Promise<SvgToPngOutput> {
    const { svg } = input;

    const { media } = await ai.generate({
        model: 'googleai/gemini-2.5-flash-image-preview',
        prompt: [
            { media: { url: `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}` } },
            { text: 'Convert this SVG to a PNG. Do not change the content or colors. The output should be a PNG image.' },
        ],
        config: {
            responseModalities: ['IMAGE'],
        },
    });

    if (!media?.url) {
        throw new Error('Image generation failed.');
    }

    return {
        pngDataUri: media.url,
    };
}
