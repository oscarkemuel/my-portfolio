import { z } from "zod";

const schema = z.object({
  name: z.string().min(3).max(150),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

export { schema }
