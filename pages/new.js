import Head from 'next/head'
import SnippetForm from '../components/SnippetForm'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create New Snippet | Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-lg mx-auto">
        <h1 className="text-red-100 text-3xl mb-4">New Snippet</h1>
        <SnippetForm />
      </main>
    </div>
  )
}
