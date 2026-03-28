import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    abstract: z.string().optional(),
    pubDate: z.coerce.date(),
    venue: z.string().optional(),
    doi: z.string().optional(),
    arxiv: z.string().optional(),
    tags: z.array(z.string()).default([]),
    links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
    draft: z.boolean().default(false)
  })
});

export const collections = { blog, research };