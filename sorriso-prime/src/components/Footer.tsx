import { clinic } from '../data/clinic'

function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-12 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="text-lg font-semibold text-primary">{clinic.name}</p>
          <p className="mt-1 text-sm text-text-muted">{clinic.location}</p>
        </div>

        <p className="text-sm text-text-muted">{clinic.phoneFormatted}</p>

        <p className="text-sm text-text-muted">
          © 2026 {clinic.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
