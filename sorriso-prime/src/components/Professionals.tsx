import { clinic } from '../data/clinic'
import { useReveal } from '../hooks/useReveal'

function Professionals() {
  const { professionals } = clinic
  const headerRef = useReveal<HTMLDivElement>()
  const listRef = useReveal<HTMLDivElement>()

  return (
    <section id="equipe" className="border-y border-black/5 bg-beige">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div
          ref={headerRef}
          className="reveal grid gap-8 md:grid-cols-[2fr_3fr] md:items-end"
        >
          <div>
            <p className="flex items-center gap-3 text-sm font-medium uppercase tracking-wide text-teal">
              <span className="h-px w-8 bg-teal" aria-hidden="true" />
              {professionals.label}
            </p>
            <h2 className="mt-6 text-4xl leading-[1.1] md:text-5xl">
              {professionals.title}
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-text-muted md:max-w-xl md:justify-self-end md:text-left">
            {professionals.introduction}
          </p>
        </div>

        <div ref={listRef} className="reveal-group mt-16 md:mt-24">
          {professionals.items.map((item, index) => {
            const imageFirst = index % 2 === 0

            return (
              <article
                key={item.name}
                className="reveal-child grid items-center gap-10 border-t border-primary/10 py-16 first:border-t-0 md:grid-cols-[5fr_6fr] md:gap-24 md:py-24"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div
                  className={`aspect-[3/4] overflow-hidden rounded-lg bg-white ${
                    imageFirst ? '' : 'md:order-2'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="image-zoom h-full w-full object-cover object-top"
                  />
                </div>

                <div className={imageFirst ? '' : 'md:order-1'}>
                  <p className="flex items-center gap-3 text-sm font-medium tracking-widest text-teal">
                    <span className="h-px w-8 bg-teal" aria-hidden="true" />
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-5 text-4xl leading-tight text-primary">
                    {item.name}
                  </h3>
                  <p className="mt-6 max-w-md text-lg leading-relaxed text-text-muted">
                    {item.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Professionals
