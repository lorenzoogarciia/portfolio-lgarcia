'use server'

import { z } from "zod";
import { revalidatePath } from "next/cache";

//Esquema de validación del formulario
const FormSchema = z.object({
    name: z.string().nonempty( {
        invalid_type_error: "Por favor, rellene su nombre",
    }),
    email: z.string({
        invalid_type_error: "Por favor, rellene su correo",
    }).email({
        invalid_type_error: "Por favor, introduzca un correo válido",
    }),
    message: z.string().nonempty({
        invalid_type_error: "Por favor, escriba un mensaje",
    }),
})