import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// The schema is entirely optional.
// You can delete this file (schema.ts) and the
// app will continue to work.
// The schema provides more precise TypeScript types.
export default defineSchema({
  messages: defineTable({
    author: v.string(),
    body: v.string(),
  }),
  images: defineTable({
    name: v.string(),
    data: v.string(), // Base64 image data or URL to the image
    category: v.string(),
    type: v.string(),
    createdAt: v.number(),
  }),
});
