import { z } from "zod";
export const RegistrationSchema = z.object({
  name: z.string().max(10, { message: "Name length should be 10 or lesser" }).min(1,{message:'Name is required'}),
  email: z.string().email().min(1,{message:'Email required'}),
  gender: z.string({ message: "Please select a value" }).array().min(1,{message:'Please select a value'}),
});
type RegistrationSchemaProps = z.infer<typeof RegistrationSchema>;
export default RegistrationSchemaProps;
