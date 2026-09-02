import { clinic } from '../data/clinic'
import { useReveal } from '../hooks/useReveal'

function Services() {
  const { services } = clinic
  const headerRef = useReveal<HTMLDivElement>()
  const listRef = useReveal<HTMLDivElement>()

  const variants = [
    { ratio: 'aspect-[4/3]', align: 'items-start', surface: false },
    { ratio: 'aspect-[3/4]', align: 'items-center', surface: false },
    { ratio: 'aspect-[4/3]', align: 'items-start', surface: true },
    { ratio: 'aspect-[3/4]', align: 'items-center', surface: false },
  ]

  const alts = [
    'Atendimento odontológico de limpeza e prevenção',
    'Planejamento de restauração e prótese dentária',
    'Avaliação para clareamento dentário',
    'Planejamento odontológico para implantes dentários',
  ]

  return (
    <section id="servicos" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div
          ref={headerRef}
          className="reveal grid gap-8 md:grid-cols-[2fr_3fr] md:items-end"
        >
          <div>
            <p className="flex items-center gap-3 text-sm font-medium uppercase tracking-wide text-teal">
              <span className="h-px w-8 bg-teal" aria-hidden="true" />
              {services.label}
            </p>
            <h2 className="mt-6 text-4xl leading-[1.1] md:text-5xl">
              {services.title}
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-text-muted md:max-w-xl md:justify-self-end md:text-left">
            {services.introduction}
          </p>
        </div>

        <div ref={listRef} className="reveal-group mt-12 md:mt-16">
          {services.items.map((item, index) => {
            const variant = variants[index]
            const imageFirst = index % 2 === 1

            return (
              <article
                key={item.name}
                className={`reveal-child grid items-center gap-8 border-t border-primary/10 py-12 first:border-t-0 md:grid-cols-[45%_55%] md:gap-12 md:py-16 ${
                  variant.surface ? '-mx-4 my-8 bg-beige px-4 md:-mx-8 md:px-8' : ''
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div
                  className={`flex flex-col ${
                    imageFirst ? 'md:order-2' : 'md:order-1'
                  } ${variant.align === 'items-center' ? 'justify-center' : ''}`}
                >
                  <span
                    className="text-sm font-medium tracking-widest text-teal"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 text-3xl leading-tight text-primary md:text-[2rem]">
                    {item.name}
                  </h3>
                  <p className="mt-4 max-w-md text-lg leading-relaxed text-text-muted">
                    {item.description}
                  </p>
                </div>

                <div
                  className={`${variant.ratio} overflow-hidden rounded-lg bg-surface-blue ${
                    imageFirst ? 'md:order-1' : 'md:order-2'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={alts[index]}
                    loading="lazy"
                    className="image-zoom h-full w-full object-cover"
                  />
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services