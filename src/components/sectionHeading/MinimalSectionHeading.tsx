import { FC } from 'react'

interface SectionHeadingProps {
  title: string
  subtitle?: string
}

const SectionHeading: FC<SectionHeadingProps> = ({ title, subtitle }) => (
  <div className="my-7">
    <h2 className="text-2xl font-bold text-stone-900">{title}</h2>
    {subtitle && <p className="text-slate-500">{subtitle}</p>}
  </div>
)

export default SectionHeading
