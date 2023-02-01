import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Farial Page</title>
    </Head>
    <h1>Farial Page</h1>
    <p>This is a sample page</p>  
    <Link href= '/about'>About</Link>
     
    </>
  )
}
