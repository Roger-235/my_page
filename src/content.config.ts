import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).default([]),
    category: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts, notes };
