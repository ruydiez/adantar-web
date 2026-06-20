import { defineField, defineType } from 'sanity'

export const experienceSchema = defineType({
  name:  'experience',
  title: 'Experiencia',
  type:  'document',
  fields: [
    defineField({
      name:       'title',
      title:      'Título',
      type:       'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name:       'slug',
      title:      'Slug (URL)',
      type:       'slug',
      options:    { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name:        'shortDescription',
      title:       'Descripción corta',
      description: 'Máximo 200 caracteres. Aparece en las tarjetas del catálogo.',
      type:        'text',
      rows:        3,
      validation:  (Rule) => Rule.required().max(200),
    }),
    defineField({
      name:        'longDescription',
      title:       'Descripción larga',
      description: 'Texto completo visible en la página de la experiencia.',
      type:        'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2',     value: 'h2' },
            { title: 'H3',     value: 'h3' },
          ],
          marks: {
            decorators: [
              { title: 'Negrita', value: 'strong' },
              { title: 'Cursiva', value: 'em' },
            ],
          },
        },
      ],
    }),
    defineField({
      name:    'mainImage',
      title:   'Imagen principal',
      type:    'image',
      options: { hotspot: true },
      fields: [
        {
          name:  'alt',
          type:  'string',
          title: 'Texto alternativo',
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name:        'vertical',
      title:       'Vertical',
      description: 'Categoría libre. Ej: SportRetreats, CorporateRetreats, MindRetreats',
      type:        'string',
      validation:  (Rule) => Rule.required(),
    }),
    defineField({
      name:         'status',
      title:        'Estado',
      type:         'string',
      options: {
        list: [
          { title: 'Activo',        value: 'active' },
          { title: 'Próximamente',  value: 'coming_soon' },
        ],
        layout: 'radio',
      },
      initialValue: 'active',
      validation:   (Rule) => Rule.required(),
    }),
    defineField({
      name:        'duration',
      title:       'Duración',
      description: 'Ej: 5 días, 1 semana, Intensivo 3 días',
      type:        'string',
    }),
    defineField({
      name:        'capacity',
      title:       'Capacidad',
      description: 'Ej: 8–12 personas, Hasta 20 personas',
      type:        'string',
    }),
    defineField({
      name:         'destination',
      title:        'Destino',
      description:  'Ej: Lanzarote, Tenerife',
      type:         'string',
      initialValue: 'Lanzarote',
    }),
    defineField({
      name:        'order',
      title:       'Orden en el catálogo',
      description: 'Número menor aparece primero.',
      type:        'number',
    }),
  ],
  preview: {
    select: {
      title:    'title',
      subtitle: 'vertical',
      media:    'mainImage',
    },
    prepare({ title, subtitle, media }: { title: string; subtitle: string; media: any }) {
      return {
        title,
        subtitle: subtitle ? `↳ ${subtitle}` : 'Sin vertical',
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Orden de catálogo',
      name:  'catalogOrder',
      by:    [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Estado (activos primero)',
      name:  'statusFirst',
      by: [
        { field: 'status', direction: 'asc' },
        { field: 'order',  direction: 'asc' },
      ],
    },
  ],
})
