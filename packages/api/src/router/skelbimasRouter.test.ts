import { createTRPCRouter } from "../trpc";
import { z } from "zod";

describe("skelbimasRouter", () => {
  test("list returns array", () => {
    const router = createTRPCRouter({
      list: () => [{ id: 1, title: "Test" }],
      create: () => {},
    });

    const result = router.list();
    expect(Array.isArray(result)).toBe(true);
  });

  test("create saves to database", async () => {
    const skelbimas = {
      id: "1",
      title: "Test",
      description: "Test description",
      number: "1234567",
      email: "test@example.com",
    };

    const createMock = jest.fn();

    const router = createTRPCRouter({
      list: () => [],
      create: createMock,
    });

    await router.create({ input: skelbimas, ctx: {} });

    expect(createMock).toHaveBeenCalledWith({
      data: skelbimas,
    });
  });
});