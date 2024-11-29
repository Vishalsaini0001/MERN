const { z } = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "Username required!" })
    .trim()
    .min(3, { message: "Username must be more than 3 characters!" })
    .max(15, { message: "Username must be less than 15 characters!" }),
    email: z
    .string({ required_error: "email required!" })
    .trim()
    .min(3, { message: "email must be more than 3 characters" })
    .max(35, { message: "email must be less than 35 characters!" }),

});

module.exports = signupSchema;
