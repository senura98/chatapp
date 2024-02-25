import { z } from "zod";

//retrieves an object and compare it with validation rules
export const adddFriendValidator = z.object({
  email: z.string().email(),
});
