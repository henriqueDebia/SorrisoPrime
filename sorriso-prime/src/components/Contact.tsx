import { clinic } from '../data/clinic'
import { getWhatsappUrl } from '../utils/whatsapp'

function Contact() {
  const { contact } = clinic
  const whatsappUrl = getWhatsappUrl(clinic.phone, clinic.whatsapp.message)

  return (
    <section id="contato" className="bg-primary">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-36">
        <span
          className="mx-auto block h-px w-16 bg-teal"
          aria-hidden="true"
        />
        <h2 className="mx-auto mt-10 max-w-2xl text-center text-4xl font-semibold leading-tight text-white md:text-5xl">
          {contact.title}
        </h2>
        <p className="mx-auto mt-7 max-w-lg text-xl leading-relaxed text-white/75">
          {contact.text}
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="cta mt-12 inline-flex min-h-14 w-full items-center justify-center rounded-lg bg-teal px-12 py-4 text-lg font-semibold text-white hover:bg-teal-hover sm:w-auto"
        >
          {contact.cta}
        </a>
      </div>
    </section>
  )
}

export default Contact
