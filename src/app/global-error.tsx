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
        <header className="sticky top-0 w-full z-50 bg-bg-page/80 backdrop-blur-md border-b border-primary/10 py-4">
            <h1>Something went wrong!</h1>
        </header>
        <main>
          <p>{error.message}</p>
          <button onClick={() => reset()}>Try again</button>
        </main>
      </body>
    </html>
  )
}

export default Error