const Loading = () => {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-12 md:px-8">
      {/* Header */}
      <header className="mb-10 max-w-2xl">
        {/* Small label */}
        <div className="mb-4 h-5 w-24 animate-pulse rounded-full bg-muted" />

        {/* Title */}
        <div className="space-y-3">
          <div className="h-10 w-3/4 animate-pulse rounded-lg bg-muted md:h-14" />
          <div className="h-10 w-1/2 animate-pulse rounded-lg bg-muted md:h-14" />
        </div>

        {/* Description */}
        <div className="mt-5 space-y-2">
          <div className="h-4 w-full animate-pulse rounded bg-muted" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-muted" />
          <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
        </div>
      </header>

      {/* Cards */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="
              overflow-hidden
              rounded-2xl
              border
              border-border/60
              bg-card
              shadow-sm
            "
          >
            {/* Image */}
            <div
              className="
                aspect-4/3
                w-full
                animate-pulse
                bg-muted
              "
            />

            {/* Card content */}
            <div className="space-y-4 p-5">
              {/* Category */}
              <div className="h-4 w-20 animate-pulse rounded-full bg-muted" />

              {/* Title */}
              <div className="h-6 w-3/4 animate-pulse rounded bg-muted" />

              {/* Description */}
              <div className="space-y-2">
                <div className="h-3.5 w-full animate-pulse rounded bg-muted" />
                <div className="h-3.5 w-5/6 animate-pulse rounded bg-muted" />
              </div>

              {/* Tags */}
              <div className="flex gap-2 pt-2">
                <div className="h-6 w-16 animate-pulse rounded-md bg-muted" />
                <div className="h-6 w-20 animate-pulse rounded-md bg-muted" />
                <div className="h-6 w-14 animate-pulse rounded-md bg-muted" />
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Loading;