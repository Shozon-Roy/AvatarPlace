"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import Image from "next/image"

import { generateAvatarOnDemand } from "@/ai/flows/generate-avatar-on-demand"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import Loader from "./Loader"
import { Wand2 } from "lucide-react"

const formSchema = z.object({
  prompt: z.string().min(10, {
    message: "Prompt must be at least 10 characters long.",
  }).max(200, {
    message: "Prompt cannot be more than 200 characters long.",
  }),
})

export default function AvatarGenerator() {
  const [isLoading, setIsLoading] = useState(false)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    setGeneratedImage(null)
    try {
      const result = await generateAvatarOnDemand({ prompt: values.prompt })
      if (result.avatarDataUri) {
        setGeneratedImage(result.avatarDataUri)
        toast({
          title: "Avatar Generated!",
          description: "Your unique avatar has been created.",
        })
      } else {
        throw new Error("AI did not return an image.")
      }
    } catch (error) {
      console.error("Failed to generate avatar:", error)
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: "There was a problem creating your avatar. Please try again.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start max-w-4xl mx-auto">
      <Card>
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="prompt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold">Avatar Prompt</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., a futuristic robot cat with glowing blue eyes, digital art style"
                        className="min-h-[120px] resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Describe your desired avatar in detail.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary/90">
                {isLoading ? (
                  <Loader />
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Generate Avatar
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <div className="flex items-center justify-center aspect-square bg-card rounded-lg border border-dashed">
        {isLoading && (
          <div className="flex flex-col items-center text-muted-foreground">
            <Loader />
            <p className="mt-2">Generating your masterpiece...</p>
          </div>
        )}
        {!isLoading && generatedImage && (
          <Image
            src={generatedImage}
            alt="Generated AI Avatar"
            width={512}
            height={512}
            className="rounded-lg object-contain animate-fade-in"
          />
        )}
        {!isLoading && !generatedImage && (
          <div className="text-center text-muted-foreground p-8">
            <Wand2 className="mx-auto h-12 w-12 mb-4" />
            <h3 className="font-semibold text-lg">Your generated avatar will appear here</h3>
            <p className="text-sm">Enter a prompt and click "Generate" to see the magic happen.</p>
          </div>
        )}
      </div>
    </div>
  )
}
