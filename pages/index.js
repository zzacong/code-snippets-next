import Head from 'next/head'
import Snippet from '../components/Snippet'
import useSWR from 'swr'
import Link from 'next/link'

export default function Home() {
  //TODO: use swr to retrieve snippets
  const { data: snippets, mutate } = useSWR('/api/snippets')

  return (
    <div>
      <Head>
        <title>Code Snippets | Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="my-12">
          <h1 className="text-red-100 font-bold text-3xl">
            Errday Code Snippets
          </h1>
          <p className="text-blue-900">
            Create and browse snippets you use every day in Web Development!
          </p>
          <Link href="/new">
            <a className="mt-3 inline-block bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Create a Snippet!
            </a>
          </Link>
        </div>
        {snippets &&
          snippets.map(snippet => (
            <Snippet
              key={snippet.id}
              snippet={snippet}
              snippetDeleted={mutate}
            />
          ))}
      </main>
    </div>
  )
}
