import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Send, Mail, Github, Linkedin } from 'lucide-react'
import WindowChrome from '../components/WindowChrome'
import { showToast } from '../store/uiSlice'
import profile from '../data/profile'

const initialForm = { name: '', email: '', message: '' }

// This form is front-end only — it does not send anything anywhere yet.
// Wire it up to something like Formspree, EmailJS, or your own API route,
// then replace the handleSubmit body with a real request.
export default function Contact() {
  const dispatch = useDispatch()
  const [form, setForm] = useState(initialForm)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setForm(initialForm)
      dispatch(
        showToast(
          "Message queued! Connect this form to a backend (e.g. Formspree) to actually deliver it."
        )
      )
    }, 600)
  }

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold sm:text-4xl">Let&apos;s talk</h1>
      <p className="mt-3 max-w-xl text-ink-light/70 dark:text-ink-dark/70">
        Hiring, collaborating, or just want to talk shop — my inbox is open.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <WindowChrome path="~/contact.jsx">
          <form onSubmit={handleSubmit} className="space-y-5 p-6">
            <div>
              <label htmlFor="name" className="mb-1.5 block font-mono text-xs text-ink-light/60 dark:text-ink-dark/60">
                name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Ada Lovelace"
                className="w-full rounded-lg border-2 border-ink-light/10 bg-app-light px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-violet dark:border-ink-dark/10 dark:bg-app-dark dark:focus:border-violet-light"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block font-mono text-xs text-ink-light/60 dark:text-ink-dark/60">
                email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-lg border-2 border-ink-light/10 bg-app-light px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-violet dark:border-ink-dark/10 dark:bg-app-dark dark:focus:border-violet-light"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block font-mono text-xs text-ink-light/60 dark:text-ink-dark/60">
                message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about the role or project..."
                className="w-full resize-none rounded-lg border-2 border-ink-light/10 bg-app-light px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-violet dark:border-ink-dark/10 dark:bg-app-dark dark:focus:border-violet-light"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet to-coral px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
            >
              <Send className="h-4 w-4" />
              {submitting ? 'Sending...' : 'Send message'}
            </button>
          </form>
        </WindowChrome>

        <div className="flex flex-col gap-4">
          <WindowChrome path="~/reach-me.txt">
            <div className="space-y-4 p-6">
              <a
                href={profile.social.email}
                className="flex items-center gap-3 text-sm font-medium transition-colors hover:text-violet dark:hover:text-violet-light"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-violet/10 text-violet">
                  <Mail className="h-4 w-4" />
                </span>
                {profile.email}
              </a>
              <a
                href={profile.social.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm font-medium transition-colors hover:text-coral dark:hover:text-coral-light"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-coral/10 text-coral">
                  <Github className="h-4 w-4" />
                </span>
                GitHub
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm font-medium transition-colors hover:text-mint-dark dark:hover:text-mint-light"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-mint/10 text-mint-dark dark:text-mint">
                  <Linkedin className="h-4 w-4" />
                </span>
                LinkedIn
              </a>
            </div>
          </WindowChrome>

          <div className="rounded-2xl border-2 border-dashed border-ink-light/15 p-5 font-mono text-xs leading-relaxed text-ink-light/50 dark:border-ink-dark/15 dark:text-ink-dark/50">
            {'// TODO: connect this form to a real backend'}
            <br />
            {'// e.g. Formspree, EmailJS, or your own /api/contact route'}
          </div>
        </div>
      </div>
    </section>
  )
}
