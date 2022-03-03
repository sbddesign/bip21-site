import Head from 'next/head'
import { BitcoinCircleIcon } from '@bitcoin-design/bitcoin-icons-react/filled'
import H2 from '../components/h2'
import H3 from '../components/h3'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Bitcoin Payment Request</title>
        <meta name="description" content="No more on-chain and lightning UI tabs. No more wallet interoperability issues. A simple, backwards-compatible way to request bitcoin for on-chain and lightning." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-left">
        <div className="hero text-center text-white p-36 h-screen flex items-center flex-col w-full">
          <BitcoinCircleIcon style={{width: '156px', height: '156px'}} className="mb-12" />
          
          <h1 className="text-7xl font-extrabold mb-12">The Bitcoin Payment Request</h1>

          <H3 className="text-4xl font-medium">
            No more on-chain and lightning UI tabs. No more wallet interoperability issues. A simple,
            backwards-compatible way to request bitcoin for on-chain and lightning.
          </H3>
        </div>
        
        <div className="container mx-auto">
          <div className="flex flex-row mt-12 mb-12">
            <div className="basis-6/12">
              <H2>The Problem</H2>

              <H3>
                Asking users to choose between on-chain and lightning payments can be confusing. However, this has been a
                necessity to maintain interoperability between wallets.
              </H3>

              <p>
                As it stands currently, most wallets will either take a lightning-only or on-chain-only approach, or there
                will be a separate tab or toggle for switching between generating on-chain addresses and lightning
                invoices.
              </p>
              <p>
                What if we could simplify this so the user doesn’t have to make these choices? And how might we do this in
                a way that’s maintains interoperability between wallets?
              </p>
            </div>
            <div>
              Images goes here
            </div>
            
          </div>

          <div className="flex flex-row mt-12 mb-12">
            <div className="basis-6/12">
              <H2>A Solution</H2>
    
              <H3>BIP21 Payment URIs with an optional lightning parameter</H3>
    
              <p>
                BIP-21 defines a URI scheme for creating a “payment link”. By default, it includes an on-chain address to
                send funds to.
              </p>
    
              <p>
                BIP-21 was designed to be extensible, however. The spec allows for optional parameters to the URI. Why
                can’t one of these optional parameters be used to include a BOLT 11 invoice, or even a BOLT 12 offer in
                the future?
              </p>
            </div>
            <div>
              Images goes here
            </div>
          </div>

          <div className=" mt-12 mb-12">
            <H2>Examples</H2>
  
            <H3>Bitcoin Payment Request</H3>
  
            <p>Examples will go here.</p>
  
            <H3>Standard QR Codes</H3>
  
            <p>Examples will go here.</p>
          </div>

          <div className="mt-12 mb-12 text-center">
            <H2>Why this technique?</H2>
  
            <p>
              BIP21 is an existing and agreed-upon standard. Most existing on-chain bitcoin wallets likely already
              support BIP21. When these wallets scan the QR code on the right, they will retrieve an on-chain address,
              making this QR code backwards compatible.
            </p>
  
            <p>For lightning wallets, adding support should be relatively simple.</p>
          </div>

          <div className="mt-12 mb-12">
            <H2>Drawbacks</H2>
            <div className="flex flex-row mt-12 mb-12">
              <div className="basis-6/12">
                <H3>QR code size is very large</H3>
      
                <p>
                  The QR becomes large enough to where their could be scanning difficulties with some devices. This is a valid
                  concern. Arguably, BOLT 11 invoices alone also have scannability issues on some devices.
                </p>
      
                <p>
                  BOLT12 offers can significantly reduce the size of the QR code. Additionally, techniques like animated QR
                  codes or NFC could be used to avoid scanning problems.
                </p>
              </div>
              <div className="basis-6/12">
                <H3>Some other problems</H3>
                
                <p>
                  Bitcoin ipsum dolor sit amet. Genesis block UTXO satoshis private key key pair blockchain private key.
                  Hashrate SHA-256 private key wallet decentralized hash difficulty blocksize. Block reward satoshis genesis
                  block SHA-256 full node hashrate peer-to-peer blockchain. Proof-of-work Merkle Tree inputs mempool bitcoin
                  hash stacking sats? Private key hash hard fork?
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
