import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const EMAIL = 'rnmaglatangjr@gmail.com'
const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`

export default function EmailButton({ children }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <>
      <button type="button" className="email-trigger" onClick={() => setOpen(true)}>
        {children ?? EMAIL}
      </button>

      {open &&
        createPortal(
          <div className="modal-backdrop" onClick={() => setOpen(false)}>
            <div
              className="modal"
              role="dialog"
              aria-modal="true"
              aria-label="Email Rodrigo"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="modal__close"
                onClick={() => setOpen(false)}
                aria-label="Close"
              >
                &times;
              </button>
              <p className="modal__label">email</p>
              <p className="modal__email">{EMAIL}</p>
              <a
                className="modal__cta"
                href={GMAIL_COMPOSE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Gmail &#8599;
              </a>
            </div>
          </div>,
          document.body,
        )}
    </>
  )
}
