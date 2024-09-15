import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    // Grab the most recent messages.
    const messages = await ctx.db.query("messages").order("desc").take(100);
    return messages;
  },
});

// upload images

export const upload = mutation(async ({ db }, { imageName, imageData }) => {
  const imageRecord = {
    name: imageName,
    data: imageData, // This should be Base64 or Blob
    createdAt: new Date(),
  };

  const id = await db.insert("images", imageRecord);
  return id;
});
