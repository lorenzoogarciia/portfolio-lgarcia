'use server'

import mailjet from 'node-mailjet'

export async function SendEmail({name, email, phone, message}: {name: string, email: string, phone: string, message: string}) {

    const mailjetClient = mailjet.apiConnect(process.env.MAILJET_KEY as string, process.env.MAILJET_SECRET_KEY as string)

    try {
        const response = await mailjetClient.post('send', {'version': 'v3.1'}).request({
            Messages: [
                {
                    From: {
                        Email: "lgarciadev2024@gmail.com",
                        Name: "Lorenzo Garcia"
                    },
                    To: [
                        {
                            Email: "lgarciadev2024@gmail.com",
                            Name: "Lorenzo Garcia"
                        }
                    ],
                    Subject: `Nuevo mensaje de ${name}`,
                    TextPart: `Nombre: ${name}\nCorreo: ${email}\nTeléfono: ${phone}\nMensaje: ${message}`,
                    HTMLPart: `<h1>Nombre: ${name}</h3><br/><h2>Correo: ${email}</h3><br/><h3>Teléfono: ${phone}</h3><br/><p>Mensaje: ${message}</h3>`
                }
            ]
        })

        return response
    } catch (error) {
        console.error(`Error al enviar el correo: ${error}`)
        throw new Error(`Error al enviar el correo: ${error}`)
    }
}