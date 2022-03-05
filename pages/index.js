import Head from "next/head";
import { BitcoinCircleIcon } from "@bitcoin-design/bitcoin-icons-react/filled";
import Example from "../components/example";
import Table from "../components/table";

export default function Home() {
  return (
    <div className="w-full max-w-80ch">
      <Head>
        <title>The Bitcoin Payment Request</title>
        <meta
          name="description"
          content="Let's talk about using BIP21 payment URIs to combine on-chain and lightning payments into a single QR code, simplifying the user experience."
        />
        <meta property="og:image" content="bitcoin-payment-request-poster.jpg" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:image:alt" content="Logo of the Bitcoin Payment Request" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@bitcoin_design" />
        <meta name="twitter:creator" content="@bitcoin_design" />
        <meta name="twitter:title" content="The Bitcoin Payment Request" />
        <meta name="twitter:description" content="Let's talk about using BIP21 payment URIs to combine on-chain and lightning payments into a single QR code, simplifying the user experience." />
        <meta name="twitter:image" content="bitcoin-payment-request-poster.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-left">
        <div className="hero text-center text-white flex items-center justify-center flex-col w-full p-12 h-screen lg:p-36">
          <div className="min-w-[156px] min-h-[156px]">
            <BitcoinCircleIcon
              style={{ width: "156px", height: "156px" }}
              className="mb-12 drop-shadow-md"
            />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-12 drop-shadow-md">
            The Bitcoin Payment Request
          </h1>

          <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium drop-shadow-md mb-24">
            No more on-chain and lightning UI tabs.
            No more wallet interoperability issues.
            A simple, backwards-compatible way to
            request bitcoin for on-chain and lightning.
          </h3>
          
          <svg width="78" height="126" viewBox="0 0 78 126" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md hero-scroll min-w-[96px] min-h-[126px]">
            <path d="M42 14C42 12.3431 40.6569 11 39 11C37.3431 11 36 12.3431 36 14H42ZM36.8787 101.121C38.0503 102.293 39.9497 102.293 41.1213 101.121L60.2132 82.0294C61.3848 80.8579 61.3848 78.9584 60.2132 77.7868C59.0416 76.6152 57.1421 76.6152 55.9706 77.7868L39 94.7574L22.0294 77.7868C20.8579 76.6152 18.9584 76.6152 17.7868 77.7868C16.6152 78.9584 16.6152 80.8579 17.7868 82.0294L36.8787 101.121ZM36 14V99H42V14H36Z" fill="white"/>
          </svg>
        </div>


          <div className="mx-auto px-12">
            <section className="container mx-auto">
              <div className="basis-6/12 space-y-4 flex justify-center flex-col">
                <h2 className="text-bpr-purple">The Problem</h2>
  
                <h3>
                  Asking users to choose between on-chain and lightning payments
                  can be confusing. However, this has been a necessity to maintain
                  interoperability between wallets.
                </h3>
  
                <p>
                  As it stands currently, most wallets will either take a
                  lightning-only or on-chain-only approach, or there will be a
                  separate tab or toggle for switching between generating on-chain
                  addresses and lightning invoices.
                </p>
                <p>
                  What if we could simplify this so the user doesn’t have to make
                  these choices? And how might we do this in a way that’s
                  maintains interoperability between wallets?
                </p>
              </div>
              
              <div className="basis-6/12 pt-6 md:p-6">
                <img src="problem-ui.svg" alt="Problematic UI" />
              </div>
            </section>

            <section className="container mx-auto">
              <div className="basis-6/12 space-y-4 flex justify-center flex-col">
                <h2 className="text-bpr-orange">A Solution</h2>
  
                <h3>BIP21 Payment URIs with an optional lightning parameter</h3>

                <p>
                  BIP-21 defines a URI scheme for creating a “payment link”. By
                  default, it includes an on-chain address to send funds to.
                </p>
  
                <p>
                  BIP-21 was designed to be extensible, however. The spec allows
                  for optional parameters to the URI. Why can’t one of these
                  optional parameters be used to include a BOLT 11 invoice, or
                  even a BOLT 12 offer in the future?
                </p>
              </div>
              
              <div className="basis-6/12 pt-6 md:p-6 flex justify-center items-center">
                <img src="single-qr.svg" alt="Graphic representing a single, unified BIP-21 QR code" />
              </div>
            </section>

            <div className="pt-12 pb-12 text-center space-y-4 container mx-auto">
              <h2 className="text-bpr-pink">Examples</h2>
  
              <h3>Bitcoin Payment Request</h3>
              <div className="flex flex-col space-y-8 md:flex-row md:space-x-4 md:space-y-0 pb-12 lg:justify-around">
                <div className="basis-6/12 lg:basis-5/12 xl:basis-4/12">
                  <Example
                    title="BIP21 URI with BOLT 11 invoice"
                    src="qr-bip21-bolt11.png"
                    caption="This includes an on-chain address and a BOLT 11 invoice. It is easily backwards compatible, but is quite large."
                    raw="bitcoin:bc1qylh3u67j673h6y6alv70m0pl2yz53tzhvxgg7u?amount=0.00001&label=sbddesign%3A%20For%20lunch%20Tuesday&message=For%20lunch%20Tuesday&lightning=lnbc10u1p3pj257pp5yztkwjcz5ftl5laxkav23zmzekaw37zk6kmv80pk4xaev5qhtz7qdpdwd3xger9wd5kwm36yprx7u3qd36kucmgyp282etnv3shjcqzpgxqyz5vqsp5usyc4lk9chsfp53kvcnvq456ganh60d89reykdngsmtj6yw3nhvq9qyyssqjcewm5cjwz4a6rfjx77c490yced6pemk0upkxhy89cmm7sct66k8gneanwykzgdrwrfje69h9u5u0w57rrcsysas7gadwmzxc8c6t0spjazup6"
                  />
                </div>
                <div className="basis-6/12 lg:basis-5/12 xl:basis-4/12">
                  <Example
                    title="BIP21 URI with BOLT 12 offer"
                    src="qr-bip21-bolt12.png"
                    caption="While BOLT 12 is not widely implemented yet, we can see that using an offer instead of an invoice reduces the QR code size significantly."
                    raw="bitcoin:bc1qylh3u67j673h6y6alv70m0pl2yz53tzhvxgg7u?amount=0.00001&label=sbddesign%3A%20For%20lunch%20Tuesday&message=For%20lunch%20Tuesday&lightning=lno1pg257enxv4ezqcneype82um50ynhxgrwdajx283qfwdpl28qqmc78ymlvhmxcsywdk5wrjnj36jryg488qwlrnzyjczs"
                  />
                </div>
              </div>
  
              <h3>Standard QR Codes</h3>
              <div className="flex flex-col space-y-8 md:flex-row md:space-x-4 md:space-y-0">
                <div className="basis-6/12">
                  <Example
                    title="BIP21 URI with On-chain address"
                    src="qr-bip21-on-chain.png"
                    caption="A standard BIP 21 URI, for reference. This has the smallest QR code, but will not work with lightning."
                    raw="bitcoin:bc1qylh3u67j673h6y6alv70m0pl2yz53tzhvxgg7u?amount=0.00001&label=sbddesign%3A%20For%20lunch%20Tuesday&message=For%20lunch%20Tuesday"
                  />
                </div>
                <div className="basis-6/12">
                  <Example
                    title="BOLT 11 Invoice"
                    src="qr-bolt11.png"
                    caption="BOLT 11 invoice QR codes are already significantly large, even without the additional data of the BIP21 URI."
                    raw="lnbc10u1p3pj257pp5yztkwjcz5ftl5laxkav23zmzekaw37zk6kmv80pk4xaev5qhtz7qdpdwd3xger9wd5kwm36yprx7u3qd36kucmgyp282etnv3shjcqzpgxqyz5vqsp5usyc4lk9chsfp53kvcnvq456ganh60d89reykdngsmtj6yw3nhvq9qyyssqjcewm5cjwz4a6rfjx77c490yced6pemk0upkxhy89cmm7sct66k8gneanwykzgdrwrfje69h9u5u0w57rrcsysas7gadwmzxc8c6t0spjazup6"
                  />
                </div>
              </div>
            </div>

          <section className="container mx-auto">
            <div className="basis-6/12 space-y-4 flex flex-col justify-center">
              <h2 className="text-bpr-blue">Why this technique?</h2>
              <p>
                BIP21 is an existing and agreed-upon standard. Most existing
                on-chain bitcoin wallets likely already support BIP21. When
                these wallets scan the QR code on the right, they will retrieve
                an on-chain address, making this QR code backwards compatible.
              </p>

              <p>
                For lightning wallets, adding support should be relatively
                simple.
              </p>
            </div>
            <div class="basis-6/12 flex justify-center p-6">
              <div className="bg-bpr-orange w-[240px] h-[240px] md:w-[340px] md:h-[340px]">
                <img src="qr-bip21-bolt11.png" alt="Sample of a BIP21 and BOLT11 QR code" className="drop-shadow-xl rotate-[-12deg]" />
              </div>
            </div>
          </section>

          <div className="container mx-auto flex justify-center p-12">
            
            <picture>
              <source srcset="flowchart.png 1x, flowchart@2x.png 2x" media="(min-width: 768px)" />
              <source srcset="flowchart-mobile.png, flowchart-mobile@2x.png 2x" />
              <img src="flowchart.png" alt="Flowchart of a decision tree for how a BIP21 QR should be interpreted" />
            </picture>
          </div>

          <section>
            <div className="basis-6/12 space-y-4">
              <h2 class="text-bpr-purple">Drawbacks</h2>
              <h3>QR code size is very large</h3>
              <p>
                The QR becomes large enough to where their could be scanning
                difficulties with some devices. This is a valid concern.
                Arguably, BOLT 11 invoices alone also have scannability issues
                on some devices.
              </p>
              <p>
                BOLT12 offers can significantly reduce the size of the QR code.
                Additionally, techniques like animated QR codes or NFC could be
                used to avoid scanning problems.
              </p>
            </div>
            <div className="basis-6/12 space-y-4">
              <h2>&nbsp;</h2>
              <h3>Some other problems</h3>
              <p>
                Bitcoin ipsum dolor sit amet. Genesis block UTXO satoshis
                private key key pair blockchain private key. Hashrate SHA-256
                private key wallet decentralized hash difficulty blocksize.
                Block reward satoshis genesis block SHA-256 full node hashrate
                peer-to-peer blockchain. Proof-of-work Merkle Tree inputs
                mempool bitcoin hash stacking sats? Private key hash hard fork?
              </p>
            </div>
          </section>
          
          <div className="pt-12 pb-12 flex flex-col items-center space-y-4 container mx-auto">
            <h2 className="text-bpr-orange">What's next?</h2>
            <p className="max-w-screen-sm text-center">
              Adoption of the Bitcoin Payment Request is as simple as getting
              more Lightning wallets, exchanges, and other bitcoin services to
              support it. Here is the current list of support.
            </p>
            <p class="text-xl">Software and services supporting BIP21</p>
            <Table />
          </div>
        </div>
        <div className="pt-12 pb-12 text-center space-y-4 flex flex-col items-center">
          <h2 className="text-bpr-pink">Follow along</h2>
          <p class="text-xl">
            Leave feedback and participate in the conversation here
          </p>
          <a href="#">
            <div class="border-4 border-bpr-orange p-4 text-xl text-bpr-orange">
              Link to GH issue
            </div>
          </a>
        </div>
      </main>
    </div>
  );
}
