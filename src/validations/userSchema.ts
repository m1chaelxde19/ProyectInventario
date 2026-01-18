import z from "zod";

export const useSchema = z.object({
  username: z
    .string()
    .min(3, "El campo es requerido")
    .regex(/^[a-z0-9_]*$/, "El campo solo debe contener letras y numeros"),
  password: z.string().min(6, "Clave inválida").max(12, "Clave inválida"),
});
