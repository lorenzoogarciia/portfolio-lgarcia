'use server'

import { z } from "zod";
import { SendEmail } from "./services/mailjet";
import { v4 as uuidv4 } from "uuid";

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
    message: string,
    errors: {
        name?: string[];
        email?: string[];
        phone?: string[];
        message?: string[];
    },
    submissionId?: string,
}

const SendMail = FormSchema

export async function sendMail(state: State, payload: FormData): Promise<State> {
    const validateFields = SendMail.safeParse({
        name: payload.get("name"),
        email: payload.get("email"),
        phone: payload.get("phone"),
        message: payload.get("message"),
    });

    if (!validateFields.success) {
        return {
            errors: validateFields.error.flatten().fieldErrors,
            message: "Error al enviar el formulario",
        }
    }

    try {
        const { name, email, phone, message } = validateFields.data;
        const response = await SendEmail({name, email, phone, message})

        if (response) {
            return {message: "Formulario enviado correctamente", errors: {}, submissionId: uuidv4()}
        } else {
            return {
                errors: { message: ["Error al enviar el correo"] },
                message: "Hubo un error inesperado al enviar el correo",
                submissionId: uuidv4()
            }
        }
    } catch (error) {
        console.error("Error al enviar el correo: ", error)
        return ({
            errors: { message: ["Error al enviar el correo"] },
            message: "Hubo un error inesperado al enviar el correo",
            submissionId: uuidv4()
        })
    }
}