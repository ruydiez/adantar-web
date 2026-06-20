'use client'

import { useState } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

interface ContactFormProps {
  subject?: string
}

export default function ContactForm({ subject }: ContactFormProps) {
  const [state, setState] = useState<FormState>('idle')
  const [form, setForm]   = useState({
    name:    '',
    email:   '',
    company: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('loading')

    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ ...form, subject }),
      })
      setState(res.ok ? 'success' : 'error')
      if (res.ok) setForm({ name: '', email: '', company: '', message: '' })
    } catch {
      setState('error')
    }
  }

  const input =
    'w-full bg-transparent border-b border-white/20 text-white placeholder-white/30 py-3 text-sm focus:outline-none focus:border-arena transition-colors duration-200'

  if (state === 'success') {
    return (
      <div className="py-16">
        <p className="font-serif text-4xl mb-3">Recibido.</p>
        <p className="text-white/50 text-sm">Nos pondremos en contacto contigo en breve.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Nombre *"
          required
          className={input}
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email *"
          required
          className={input}
        />
      </div>

      <input
        type="text"
        name="company"
        value={form.company}
        onChange={handleChange}
        placeholder="Empresa / organización"
        className={input}
      />

      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Cuéntanos qué tienes en mente *"
        required
        rows={5}
        className={`${input} resize-none`}
      />

      {state === 'error' && (
        <p className="text-[13px] text-tierra/90">
          Ha ocurrido un error. Escríbenos directamente a{' '}
          <a href="mailto:info@adantar.com" className="underline text-arena">
            info@adantar.com
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={state === 'loading'}
        className="self-start text-[11px] tracking-widest uppercase border border-arena text-arena px-8 py-4 hover:bg-arena hover:text-basalto transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {state === 'loading' ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  )
}
