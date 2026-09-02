import { clinic } from '../data/clinic'
import { useReveal } from '../hooks/useReveal'

function Testimonials() {
  const { testimonials } = clinic
  const headerRef = useReveal<HTMLDivElement>()
  const listRef = useReveal<HTMLDivElement>()

  return (
    <section id="depoimentos" className="border-y border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div ref={headerRef} className="reveal max-w-3xl">
          <p className="flex items-center gap-3 text-sm font-medium uppercase tracking-wide text-teal">
            <span className="h-px w-8 bg-teal" aria-hidden="true" />
            Depoimentos
          </p>
          <h2 className="mt-6 text-4xl leading-[1.1] md:text-5xl">
            {testimonials.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-text-muted">
            {testimonials.introduction}
          </p>
        </div>

        <div
          ref={listRef}
          className="reveal-group mt-16 grid gap-y-14 md:grid-cols-3 md:gap-12"
        >
          {testimonials.items.map((item, index) => (
            <figure
              key={item.author}
              className={`reveal-child ${
                index > 0 ? 'md:border-l md:border-primary/10 md:pl-12' : ''
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <span
                className="block text-5xl leading-none text-primary/20"
                aria-hidden="true"
              >
                “
              </span>
              <blockquote className="mt-4 text-xl leading-relaxed text-text-muted">
                {item.text}
              </blockquote>
              <figcaption className="mt-6 font-medium text-primary">
                {item.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
