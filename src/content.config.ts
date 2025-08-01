// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `loader` and `schema` for each collection


const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/blog" }),
    schema: z.object({
        title: z.string(),
        'Published on': z.date(),
        description: z.string(),
        author: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }),
        tags: z.array(z.string()),
        series: z.string().optional(),
        part: z.number().optional(),
    })
});

const authors = defineCollection({
    schema: z.object({
        name: z.string(), // Full name (must match author field in blog)
        bio: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string(),
        }),
        social: z.object({
            twitter: z.string().optional(),
            github: z.string().optional(),
            website: z.string().optional(),
        }).optional(),
    })
});

export const collections = { blog, authors };