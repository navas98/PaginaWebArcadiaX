// components/layout/Section.tsx
type SectionProps = {
  id: string
  children: React.ReactNode
  className?: string
}

export const Section = ({ id, children, className = "" }: SectionProps) => {
  return (
    <section
      id={id}
       className={`scroll-mt-16 min-h-screen w-full flex items-center justify-center ${className}`}
    >
      {children}
    </section>
  )
}
