import Head from 'next/head'
import { ReactElement } from 'react'
import Layout from '../components/common/Layout'
import Decimals from '../components/converter/Decimals'
import UnixTime from '../components/converter/UnixTime'
import Ipfs from '../components/converter/Ipfs'

export default function Converter() {
  return (
    <>
      <Head>
        <title>Converter</title>
        <meta
          name="description"
          content="Convert for various blockchain utilities"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Decimals />
      <UnixTime />
      <Ipfs />
    </>
  )
}

Converter.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
