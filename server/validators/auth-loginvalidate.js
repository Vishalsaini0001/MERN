const { z } = require("zod");

const loginSchema = z.object({

  email: z
    .string({ required_error: "email required!" })
    .trim()
    .min(3, { message: "email must be more than 3 characters!" })
    .max(35, { message: "email must be less than 15 characters!" }),
 
  password: z
    .string({ required_error: "password required!" })
    .trim()
    .min(3, { message: "password must be more than 3 characters!" })
    .max(15, { message: "password must be less than 15 characters!" }),
});

module.exports = loginSchema;
