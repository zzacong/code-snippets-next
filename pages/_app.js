/**
 * James Q Quick
 * Nextjs Crash Course with Fauna, Tailwind CSS, React Hook Form, and SWR
 * YouTube: https://youtu.be/1GpbdX8aJCU
 */
import '../styles/app.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-blue-400 w-full p-10 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
