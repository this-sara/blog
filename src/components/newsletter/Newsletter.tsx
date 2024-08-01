const Newsletter = () => {
  return (
    <>
      <hr />
      <section className="flex flex-col items-center justify-center py-16">
        <h3 className="font-heading text-primary text-center text-2xl font-semibold uppercase tracking-wider">
          Flexy UI <span className="text-theme mt-2 inline-block md:mt-3">Newsletter</span>
        </h3>
        <p className="text-primary mb-8 mt-2 max-w-[550px] text-center text-base">
          Build better and faster UIs.
          <span className="block">
            Get the latest components and hooks directly in your inbox. No spam!
          </span>
        </p>
        <form className="gap-4 md:flex">
          <input
            type="email"
            id="email"
            className="text-dark block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="yourname@email.com"
            required
          />
          <button className="bg-theme hover:bg-theme-hover mt-4 w-full rounded px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400 md:mt-auto md:w-auto">
            Submit
          </button>
        </form>
      </section>
    </>
  )
}

export default Newsletter
