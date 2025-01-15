'use server'

import { z } from "zod";
import { revalidatePath } from "next/cache";

//Esquema de validación del formulario
const FormSchema = z.object({
    name: z.string().nonempty( {
        message: "Por favor, ingrese su nombre"
    }),
    email: z.string({}).email({
        message: "Por favor, ingrese un correo válido"
    }),
    phone: z.string().nonempty({
        message: "Por favor, ingrese su número de teléfono"
    }),
    message: z.string().nonempty({
        message: "Por favor, ingrese un mensaje"
    }),
})

export type State = {
    errors?: {
        name?: string[];
        email?: string[];
        phone?: string[];
        message?: string[];
    },
    message?: string | null;
}

const SendMail = FormSchema

export async function sendMail(prevState: State, formData: FormData) {
    const validateFields = SendMail.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
    });

    if (!validateFields.success) {
        return {
            errors: validateFields.error.flatten().fieldErrors,
            message: "Error al enviar el formulario",
        }
    }

    const { name, email, phone, message } = validateFields.data;
    console.log(`Enviando formulario: ${name}, ${email}, ${phone} , ${message}`)

    revalidatePath("/contacto")
    return {message: "Formulario enviado correctamente"}

    
}