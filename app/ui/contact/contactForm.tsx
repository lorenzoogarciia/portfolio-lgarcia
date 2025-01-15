export default function ContactForm() {
    return (
        <form action="POST">
            <div className="p-6 mb-4 flex flex-col">
                <label htmlFor="name" className=" text-lg font-bold text-accent px-4">Nombre</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Lorenzo Garcia"
                    className="text-lg block placeholder:text-gray-600 rounded-xl p-2 border-accent border-2"
                    required/>
            </div>
            <div className="p-6 flex flex-col mb-4">
                <label htmlFor="email" className="text-lg font-bold text-accent px-4">Correo</label>
                <input 
                    type="email"
                    name="email" 
                    id="email" 
                    placeholder="lgarciadev2024@gmail.com"
                    className="text-lg block placeholder:text-gray-600 rounded-xl p-2 border-accent border-2"
                    required/>
            </div>
            <div className="p-6 flex flex-col">
                <label htmlFor="message" className=" text-lg font-bold text-accent px-4">Mensaje</label>
                <textarea 
                    name="message" 
                    id="message" 
                    placeholder="¡Déjame aquí tu mensaje!"
                    className="text-lg block placeholder:text-gray-600 placeholder:text-lg rounded-xl p-4 border-accent border-2"
                    required/>
            </div>
            <div className="flex justify-center p-5">
                <button
                    type="submit"
                    className="rounded-full bg-accent text-secondary p-4 text-xl font-ubuntu transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-secondary hover:text-accent border-accent border-2"
                >
                    Enviar 
                </button>
            </div>
        </form>
    )
}