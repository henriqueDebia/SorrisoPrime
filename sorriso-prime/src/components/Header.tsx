import { useState } from 'react'
import { clinic } from '../data/clinic'
import { getWhatsappUrl } from '../utils/whatsapp'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const whatsappUrl = getWhatsappUrl(clinic.phone, clinic.whatsapp.message)

  function handleLinkClick() {
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-10 border-b border-black/5 bg-white">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-8 px-6">
        <a href="#topo" className="text-xl font-semibold tracking-tight text-primary">
          Sorriso Prime
        </a>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Navegação principal">
          {clinic.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-[15px] font-medium text-text-muted hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="cta hidden h-12 items-center rounded-lg bg-teal px-7 text-[15px] font-medium text-white hover:bg-teal-hover md:inline-flex"
        >
          Agendar Avaliação
        </a>

        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center md:hidden"
          aria-label="Abrir menu de navegação"
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-primary"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav
          id="menu-mobile"
          className="border-t border-black/5 md:hidden"
          aria-label="Navegação móvel"
        >
          <ul className="mx-auto flex max-w-6xl flex-col px-6 py-2">
            {clinic.navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="flex h-12 items-center font-medium text-text-muted hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                onClick={handleLinkClick}
                className="mb-4 mt-3 inline-flex h-12 items-center justify-center rounded-lg bg-teal px-7 font-medium text-white hover:bg-teal-hover"
              >
                Agendar Avaliação
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
