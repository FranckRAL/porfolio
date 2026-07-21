"use client"

const Error = (
    {error, reset}: {error: Error; reset: () => void}
) => {
  return (
    <html lang="en">
      <head>
        <title>Error | Franck Andritina Web developper and Mobile</title>
      </head>
      <body>
        <header className="sticky top-0 w-full z-50 bg-bg-page/80 backdrop-blur-md border-b border-primary/10 p-4">
            <h1 className="text-2xl font-bold">Something went wrong!</h1>
        </header>
        <main className="flex flex-col justify-center items-center gap-6 h-screen">
          <p className="text-xl text-red-400 text-center bg-red-50 p-4 border border-red-300 rounded-lg">{error.message}</p>
          <button onClick={() => reset()} className="w-full md:w-auto bg-primary text-white px-10 py-4 rounded-full font-bold text-base hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 active:scale-95 text-center"
              >Try again</button>
        </main>
      </body>
    </html>
  )
}

export default Error