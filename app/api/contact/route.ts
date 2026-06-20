import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, company, message, subject } = body

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Faltan campos requeridos' },
      { status: 400 }
    )
  }

  const apiKey = process.env.RESEND_API_KEY

  // En desarrollo sin API key: loguea y devuelve éxito
  if (!apiKey) {
    if (process.env.NODE_ENV !== 'production') {
      console.log('\n📧 Formulario de contacto (RESEND_API_KEY no configurada):')
      console.log({ name, email, company, message, subject })
      console.log()
    }
    return NextResponse.json({ success: true })
  }

  const emailSubject = subject
    ? `AdAntar — ${subject}: ${name}`
    : `AdAntar — Nuevo contacto: ${name}`

  const text = [
    `Nombre:  ${name}`,
    `Email:   ${email}`,
    `Empresa: ${company || '—'}`,
    '',
    'Mensaje:',
    message,
  ].join('\n')

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method:  'POST',
      headers: {
        Authorization:  `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from:     'AdAntar Web <noreply@adantar.com>',
        to:       'info@adantar.com',
        reply_to: email,
        subject:  emailSubject,
        text,
      }),
    })

    if (!res.ok) {
      const err = await res.json().catch(() => null)
      console.error('Resend error:', err)
      return NextResponse.json(
        { error: 'Error al enviar el mensaje' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}
