import { clinic } from '../data/clinic'
import { useReveal } from '../hooks/useReveal'

function About() {
  const { about } = clinic
  const titleRef = useReveal<HTMLDivElement>()
  const imageRef = useReveal<HTMLDivElement>()
  const bodyRef = useReveal<HTMLDivElement>()

  return (
    <section id="sobre" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[5fr_6fr] md:gap-16 lg:gap-20">
          <div className="flex flex-col">
            <div ref={titleRef} className="reveal">
              <p className="flex items-center gap-3 text-sm font-medium uppercase tracking-wide text-teal">
                <span className="h-px w-8 bg-teal" aria-hidden="true" />
                {about.label}
              </p>
              <h2 className="mt-6 max-w-md text-4xl leading-[1.05] md:text-5xl">
                {about.title}
              </h2>
            </div>

            <div
              ref={imageRef}
              className="reveal mt-10 md:mt-14"
              style={{ transitionDelay: '100ms' }}
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-beige">
                <img
                  src={clinic.images.about}
                  alt="Consultório odontológico da Sorriso Prime"
                  loading="lazy"
                  className="image-zoom h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div ref={bodyRef} className="reveal flex flex-col justify-center">
            <div className="space-y-5 text-lg leading-relaxed text-text-muted">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <dl className="mt-10 divide-y divide-black/10 md:mt-12">
              {about.differentials.map((item, index) => (
                <div key={item.title} className="flex gap-6 py-5 first:pt-0 last:pb-0">
                  <span className="text-sm font-semibold text-primary/40">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <dt className="text-lg font-semibold text-text">
                      {item.title}
                    </dt>
                    <dd className="mt-1 text-text-muted">{item.description}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
