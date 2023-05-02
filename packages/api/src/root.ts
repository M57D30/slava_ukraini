import { authRouter } from "./router/auth";
import { postRouter } from "./router/post";
import { skelbimasRouter } from "./router/skelbimasRouter";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  post: postRouter,
  auth: authRouter,
  skelbimas: skelbimasRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
