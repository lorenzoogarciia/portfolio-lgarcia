import TransitionForm from "../ui/animations/contact/transition-form"
import TransitionWrapper from "../ui/animations/transition-wrapper"
import ContactForm from "../ui/contact/contactForm"

export default function Page() {
    return (
        <TransitionWrapper>
            <div className="mx-auto flex flex-col py-8 md:py-16">
                <main className="flex flex-col items-center gap-4">
                    <h1 className="text-secondary mb-8">¡No te cortes!😉</h1>
                    <TransitionForm>
                        <div className="md:min-w-[600px] bg-secondary rounded-xl">
                            <ContactForm/>
                        </div>
                    </TransitionForm>
                </main>
            </div>
        </TransitionWrapper>
    )
}