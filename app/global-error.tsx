'use client'
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="max-w-7xl mx-auto my-4">
          <h1 className="text-2xl font-bold">Something went wrong!</h1>
          <button onClick={() => reset()}>Try again</button>
        </div>
      </body>
    </html>
  )
}