import Head from 'next/head'
import Image from 'next/image'
import { BitcoinCircleIcon } from '@bitcoin-design/bitcoin-icons-react/filled'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Bitcoin Payment Request</title>
        <meta name="description" content="No more on-chain and lightning UI tabs. No more wallet interoperability issues. A simple, backwards-compatible way to request bitcoin for on-chain and lightning." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <BitcoinCircleIcon style={{width: '100px', height: '100px'}} />
        <h1>The Bitcoin Payment Request</h1>
        <p>
            No more on-chain and lightning UI tabs. No more wallet interoperability issues. A simple,
            backwards-compatible way to request bitcoin for on-chain and lightning.
        </p>
          
          <h2>The Problem</h2>
          
          <h3>
            Asking users to choose between on-chain and lightning payments can be confusing. However, this has been a
            necessity to maintain interoperability between wallets.
          </h3>
          
          <p>
              As it stands currently, most wallets will either take a lightning-only or on-chain-only approach, or there
              will be a separate tab or toggle for switching between generating on-chain addresses and lightning
              invoices.
          </p>
          <p>
              What if we could simplify this so the user doesn’t have to make these choices? And how might we do this in
              a way that’s maintains interoperability between wallets?
          </p>

          <h2>A Solution</h2>

          <h3>BIP21 Payment URIs with an optional lightning parameter</h3>

          <p>
            BIP-21 defines a URI scheme for creating a “payment link”. By default, it includes an on-chain address to
            send funds to.
          </p>

          <p>
            BIP-21 was designed to be extensible, however. The spec allows for optional parameters to the URI. Why
            can’t one of these optional parameters be used to include a BOLT 11 invoice, or even a BOLT 12 offer in
            the future?
          </p>
          
          <h2>Examples</h2>
          
          <h3>Bitcoin Payment Request</h3>
          
          <p>Examples will go here.</p>
          
          <h3>Standard QR Codes</h3>

          <p>Examples will go here.</p>
          
          <h2>Why this technique?</h2>
          
          <p>
            BIP21 is an existing and agreed-upon standard. Most existing on-chain bitcoin wallets likely already
            support BIP21. When these wallets scan the QR code on the right, they will retrieve an on-chain address,
            making this QR code backwards compatible.
          </p>
          
          <p>For lightning wallets, adding support should be relatively simple.</p>

          <h2>Drawbacks</h2>

          <h3>QR code size is very large</h3>
          
          <p>
            The QR becomes large enough to where their could be scanning difficulties with some devices. This is a valid
            concern. Arguably, BOLT 11 invoices alone also have scannability issues on some devices.
          </p>
          
          <p>
            BOLT12 offers can significantly reduce the size of the QR code. Additionally, techniques like animated QR
            codes or NFC could be used to avoid scanning problems.
          </p>

          <h3>Some other problems</h3>
          <p>
            Bitcoin ipsum dolor sit amet. Genesis block UTXO satoshis private key key pair blockchain private key.
            Hashrate SHA-256 private key wallet decentralized hash difficulty blocksize. Block reward satoshis genesis
            block SHA-256 full node hashrate peer-to-peer blockchain. Proof-of-work Merkle Tree inputs mempool bitcoin
            hash stacking sats? Private key hash hard fork?
          </p>
      </main>
    </div>
  )
}
