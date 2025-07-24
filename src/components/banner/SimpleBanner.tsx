const Banner: React.FC<BannerProps> = ({ title, description }) => {
  return (
    <div
      className="relative py-6 md:py-11 overflow-hidden rounded-2xl"
      style={{
        background: `
          linear-gradient(135deg, #7F3FFF 0%, #00FFD0 40%, #00B2FF 70%, #FF61D2 100%),
          linear-gradient(90deg, rgba(33,150,243,0.08) 1px, transparent 1px),
          linear-gradient(180deg, rgba(255,235,59,0.08) 1px, transparent 1px)
        `,
        backgroundBlendMode: 'screen',
        backgroundSize: '100% 100%, 40px 40px, 40px 40px',
        filter: 'brightness(0.8) saturate(1.1)' // assombrit et rend les couleurs plus vives
      }}
    >
      {/* Étoiles décoratives */}
      <svg
        className="absolute top-8 left-10 opacity-20"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <circle cx="16" cy="16" r="2" fill="#fff" />
      </svg>
      <svg
        className="absolute bottom-8 right-16 opacity-10"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle cx="12" cy="12" r="1.5" fill="#fff" />
      </svg>
      <svg
        className="absolute top-1/2 left-1/3 opacity-10"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <circle cx="8" cy="8" r="1" fill="#fff" />
      </svg>
      {/* Contenu */}
      <div className="mx-auto max-w-3xl px-3 text-center relative z-10">
        <h1 className="text-3xl font-semibold leading-tight text-white md:text-[40px]">
          {title}
        </h1>
        {description && (
          <h2 className="mt-5 text-lg text-white/90 md:font-normal">{description}</h2>
        )}
        {/* Exemple de bouton adapté au dégradé */}
        <button
  className="mt-8 px-6 py-2 rounded-full font-semibold text-white transition bg-[#7F3FFF] hover:bg-[#5e2bbf] shadow-lg"
>
  Discover More
</button>
      </div>
    </div>
  )
}

export default Banner