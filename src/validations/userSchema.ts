import z from "zod";

export const useSchema = z.object({
  username: z.string()
      .trim()
    .min(1, "El campo es requerido")
      .min(3,"El usuario debe tener al menos 3 caracteres")
    .regex(/^[a-z0-9_]*$/, "El campo solo debe contener letras y numeros"),
  password: z.string()
      .trim()
      .min(1,'El campo es requerido')
      .min(6, "La clave debe tener al menos 6 caracteres")
      .max(12, "La clave no debe exceder los 12 caracteres"),
});
