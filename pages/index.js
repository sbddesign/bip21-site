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
          content="No more on-chain and lightning UI tabs. No more wallet interoperability issues. A simple, backwards-compatible way to request bitcoin for on-chain and lightning."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-left">
        <div className="hero text-center text-white p-36 h-screen flex items-center flex-col w-full">
          <div className="min-w-[156px] min-h-[156px]">
            <BitcoinCircleIcon
              style={{ width: "156px", height: "156px" }}
              className="mb-12"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-12">
            The Bitcoin Payment Request
          </h1>

          <h3 className="text-3xl md:text-4xl font-medium">
            No more on-chain and lightning UI tabs. No more wallet
            interoperability issues. A simple, backwards-compatible way to
            request bitcoin for on-chain and lightning.
          </h3>
        </div>

        <div className="mx-auto px-12">
          <section>
            <div className="basis-6/12 space-y-4">
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
            <div class="basis-6/12 bg-gray-200">Image here</div>
          </section>

          {/* <div className="flex flex-col pt-12 pb-12 md:flex-row"> */}
          <section>
            <div className="basis-6/12 space-y-4">
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
            <div class="basis-6/12 bg-gray-200">Image here</div>
          </section>
          {/* </div> */}

          <div className="pt-12 pb-12 text-center space-y-4">
            <h2 className="text-bpr-pink">Examples</h2>

            <h3>Bitcoin Payment Request</h3>
            <div className="flex flex-col space-y-8 md:flex-row md:space-x-4 md:space-y-0 pb-12">
              <div className="basis-6/12">
                <Example
                  title="BIP21 URI with BOLT 11 invoice"
                  caption="This includes an on-chain address and a BOLT 11 invoice. It is easily backwards compatible, but is quite large."
                  raw="bitcoin:bc1qylh3u67j673h6y6alv70m0pl2yz53tzhvxgg7u?amount=0.00001&label=sbddesign%3A%20For%20lunch%20Tuesday&message=For%20lunch%20Tuesday&lightning=lnbc10u1p3pj257pp5yztkwjcz5ftl5laxkav23zmzekaw37zk6kmv80pk4xaev5qhtz7qdpdwd3xger9wd5kwm36yprx7u3qd36kucmgyp282etnv3shjcqzpgxqyz5vqsp5usyc4lk9chsfp53kvcnvq456ganh60d89reykdngsmtj6yw3nhvq9qyyssqjcewm5cjwz4a6rfjx77c490yced6pemk0upkxhy89cmm7sct66k8gneanwykzgdrwrfje69h9u5u0w57rrcsysas7gadwmzxc8c6t0spjazup6"
                />
              </div>
              <div className="basis-6/12">
                <Example
                  title="BIP21 URI with BOLT 12 offere"
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
                  caption="A standard BIP 21 URI, for reference. This has the smallest QR code, but will not work with lightning."
                  raw="bitcoin:bc1qylh3u67j673h6y6alv70m0pl2yz53tzhvxgg7u?amount=0.00001&label=sbddesign%3A%20For%20lunch%20Tuesday&message=For%20lunch%20Tuesday"
                />
              </div>
              <div className="basis-6/12">
                <Example
                  title="BOLT 11 Invoice"
                  caption="BOLT 11 invoice QR codes are already significantly large, even without the additional data of the BIP21 URI."
                  raw="lnbc10u1p3pj257pp5yztkwjcz5ftl5laxkav23zmzekaw37zk6kmv80pk4xaev5qhtz7qdpdwd3xger9wd5kwm36yprx7u3qd36kucmgyp282etnv3shjcqzpgxqyz5vqsp5usyc4lk9chsfp53kvcnvq456ganh60d89reykdngsmtj6yw3nhvq9qyyssqjcewm5cjwz4a6rfjx77c490yced6pemk0upkxhy89cmm7sct66k8gneanwykzgdrwrfje69h9u5u0w57rrcsysas7gadwmzxc8c6t0spjazup6"
                />
              </div>
            </div>
          </div>

          <section>
            <div className="basis-6/12 space-y-4">
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
            <div class="basis-6/12 bg-gray-200">Image here</div>
          </section>

          <div class="h-[60rem] bg-bpr-blue">FLOW CHART</div>

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
          <div className="pt-12 pb-12 flex flex-col items-center space-y-4">
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
