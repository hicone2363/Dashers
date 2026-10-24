import { defineCollection, z } from 'astro:content';

const faqItemSchema = z.union([
  z.object({
    question: z.string(),
    answer: z.string(),
  }),
  z.object({
    q: z.string(),
    a: z.string(),
  }).transform((val) => ({
    question: val.q,
    answer: val.a,
  }))
]);

const guidesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    mainKeyword: z.string(),
    secondaryKeywords: z.array(z.string()).default([]),
    updated: z.union([z.string(), z.date()]).transform((val) => {
      if (val instanceof Date) {
        return val.toISOString().split('T')[0];
      }
      return String(val);
    }),
    directAnswer: z.string().optional().default(''),
    faq: z.array(faqItemSchema).default([]),
    sources: z.array(
      z.object({
        name: z.string(),
        url: z.string(),
        note: z.string().optional()
      })
    ).default([]),
    embedCalculator: z.boolean().default(false),
    relatedSlugs: z.array(z.string()).default([])
  })
});

export const collections = {
  guides: guidesCollection
};
