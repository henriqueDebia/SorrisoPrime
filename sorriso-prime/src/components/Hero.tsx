import { clinic } from '../data/clinic'
import { getWhatsappUrl } from '../utils/whatsapp'

function Hero() {
  const whatsappUrl = getWhatsappUrl(clinic.phone, clinic.whatsapp.message)

  return (
    <section id="topo" className="relative overflow-hidden bg-white">
      <div
        className="absolute inset-y-0 right-0 hidden w-[42%] bg-surface-blue lg:block"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 lg:grid-cols-[5fr_6fr] lg:gap-16 lg:py-28">
        <div>
          <p
            className="hero-rise flex items-center gap-3 text-sm font-medium uppercase tracking-wide text-teal"
            style={{ animationDelay: '0ms' }}
          >
            <span className="h-px w-8 bg-teal" aria-hidden="true" />
            Clínica odontológica em São Paulo
          </p>
          <h1
            className="hero-rise mt-7 max-w-2xl text-5xl leading-[1.05] lg:text-[3.5rem] lg:leading-[1.03]"
            style={{ animationDelay: '80ms' }}
          >
            {clinic.hero.title}
          </h1>
          <p
            className="hero-rise mt-7 max-w-md text-xl leading-relaxed text-text-muted"
            style={{ animationDelay: '160ms' }}
          >
            {clinic.hero.subtitle}
          </p>
          <div
            className="hero-rise mt-10 flex flex-col gap-6 lg:flex-row lg:items-center"
            style={{ animationDelay: '240ms' }}
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="cta inline-flex min-h-12 items-center justify-center rounded-lg bg-teal px-10 py-4 text-base font-medium text-white hover:bg-teal-hover"
            >
              {clinic.hero.cta}
            </a>
            <p className="flex items-center gap-3 text-sm text-text-muted">
              <span className="h-px w-8 bg-primary/20" aria-hidden="true" />
              {clinic.location}
            </p>
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute -left-6 -top-6 hidden h-28 w-28 bg-beige lg:block"
            aria-hidden="true"
          />
          <div
            className="hero-fade relative aspect-[4/5] overflow-hidden rounded-lg bg-beige"
            style={{ animationDelay: '120ms' }}
          >
            <img
              src={clinic.images.hero}
              alt="Dentista conversando com paciente durante consulta na Sorriso Prime"
              className="image-zoom h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
