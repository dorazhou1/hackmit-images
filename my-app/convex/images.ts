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

export const upload = mutation(
  async (
    { db },
    {
      imageName,
      imageData,
      category,
      type,
    }: { imageName: string; imageData: string; category: string; type: string },
  ) => {
    const imageRecord = {
      name: imageName,
      data: imageData,
      category: category,
      type: type,
      createdAt: Date.now(),
    };

    const id = await db.insert("images", imageRecord);
    return id;
  },
);

export const get_by_name = query({
  args: { name: v.string() },
  handler: async (ctx, args) => {
    // Grab the most recent messages.
    const images = await ctx.db
      .query("images")
      .filter((q) => q.eq(q.field("name"), args.name))
      .collect();
    return images.length > 0 ? images[0] : null;
  },
});
