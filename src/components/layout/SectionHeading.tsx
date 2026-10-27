interface SectionHeadingProps {
  title: string
  subtitle?: string
  /** Render the gradient accent bar above the title */
  accent?: boolean
  className?: string
}

export default function SectionHeading({ title, subtitle, accent = true, className = '' }: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      {accent && <div className="section-divider" />}
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base md:text-lg text-text-secondary max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}
