interface BannerProps {
  title: string
  description?: string
}

const Banner: React.FC<BannerProps> = ({ title, description }) => {
  return (
    <div className="bg-zinc-100">
      <div className="mx-auto max-w-3xl px-3 py-6 text-center md:py-11">
        <h1 className="text-3xl font-semibold leading-tight text-stone-900 md:text-[40px]">
          {title}
        </h1>
        {description && (
          <h2 className="mt-5 text-lg text-stone-900 md:font-medium">{description}</h2>
        )}
      </div>
    </div>
  )
}

export default Banner
