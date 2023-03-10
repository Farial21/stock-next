import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home({ products }) {

  function deleteProduct(id) {
    // fetch(`http://localhost:3000/api/stock/products/${id}`,
    fetch(`https://stock-next-beta.vercel.app/api/stock/products/${id}`,
      {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        // alert("Deleting " + id)
        window.location.reload(false);
      })

  }

  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <h1>Products</h1>
      <table><tbody>
        {
          products.map(product => {
            return (
              <tr key={product._id}>
                <td>
                  <Link href={`/stock/${product._id}`}>
                    {product.name}
                  </Link>
                </td>
                <td>
                  <button onClick={() => deleteProduct(product._id)}>Delete</button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
      </table>
      <p>
      </p>

    </>
  )
}
export async function getServerSideProps() {
  // const res = await fetch(`http://localhost:3000/api/stock/products/`)
  const res = await fetch(`https://stock-next-beta.vercel.app/api/stock/products/`)
  const products = await res.json()

  return { props: { products } }
}