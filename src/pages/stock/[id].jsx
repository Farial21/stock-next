import Head from "next/head"
import Link from "next/link"

// Step 2: This component is rendered from the server (Server-Side Rendering) SSR
export default function Product({ product }) {
  console.log('product 2', product)
  if (!product) return (
    <div>
      <p>product not found</p>
      <Link href="/stock">Back</Link>
      </div>
  );

  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>
      <h1>{product.name}</h1>
      <p>${product.price}</p>
      <Link href="/stock">Back</Link>
    </>
  )
}

// STEP 1: This function will be executed at the server before loading the page.
export async function getServerSideProps({ params }) {
  console.debug('params', params)
//   const res = await fetch(`http://localhost:3000/api/stock/products/${params.id}`)
  const res = await fetch(`https://stock-next-beta.vercel.app/api/stock/products/${params.id}`)

  const product = await res.json()
  console.debug('product 1', product)
  return { props: { product } }
}