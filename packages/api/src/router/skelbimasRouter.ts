import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const skelbimasRouter = createTRPCRouter({
  list: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.skelbimai.findMany();
  }),

  create: publicProcedure
    .input(
      z.object({
        id: z.string(),
        title: z.string(),
        description: z.string(),
        number: z.string(),
        email: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      // TODO: save something to db
      const skel = await ctx.prisma.skelbimai.create({
        data: input,
      });
    }),
});
