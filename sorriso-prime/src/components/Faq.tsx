import { useState } from 'react'
import { clinic } from '../data/clinic'
import { useReveal } from '../hooks/useReveal'

function Faq() {
  const { faq } = clinic
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const headerRef = useReveal<HTMLDivElement>()
  const listRef = useReveal<HTMLDivElement>()

  function toggle(index: number) {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section id="faq" className="bg-surface-blue">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <div ref={headerRef} className="reveal">
          <p className="flex items-center gap-3 text-sm font-medium uppercase tracking-wide text-teal">
            <span className="h-px w-8 bg-teal" aria-hidden="true" />
            Dúvidas
          </p>
          <h2 className="mt-6 text-4xl leading-[1.1] md:text-5xl">{faq.title}</h2>
          <p className="mt-5 text-lg text-text-muted">{faq.introduction}</p>
        </div>

        <div ref={listRef} className="reveal mt-12 divide-y divide-primary/10">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  className="flex w-full items-center justify-between gap-6 py-7 text-left"
                >
                  <span className="text-lg font-medium text-text">
                    {item.question}
                  </span>
                  <span
                    className="text-2xl font-medium text-primary"
                    aria-hidden="true"
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <div
                  id={`faq-panel-${index}`}
                  className={`faq-panel ${isOpen ? 'is-open' : ''}`}
                  aria-hidden={!isOpen}
                >
                  <div className="faq-panel-inner">
                    <p className="pb-7 text-lg leading-relaxed text-text-muted">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Faq
