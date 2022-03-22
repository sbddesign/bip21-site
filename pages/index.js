import Head from "next/head";
import {
  AlertIcon,
  BitcoinCircleIcon,
  LightningIcon,
  QrCodeIcon,
  ScanIcon,
  WalletIcon,
  MenuIcon
} from "@bitcoin-design/bitcoin-icons-react/filled";
import { BitcoinCircleIcon as BitcoinCircleIconOutline } from "@bitcoin-design/bitcoin-icons-react/outline";
import Example from "../components/example";
import Table from "../components/table";
import React from "react";
import HardwareTable from "../components/hardware-table";

function toggleMenu() {
  let header = document.getElementById('header-container');
  if(header.classList.contains('deactivated')) header.classList.remove('deactivated');
  else header.classList.add('deactivated');
}

function scrollTo(e){
  e.preventDefault();
  let element = document.getElementById( e.target.hash.substring(1) );
  element.scrollIntoView({behavior: 'smooth', block: 'center'});
  toggleMenu();
}

function changeMenuStyle(transparent = 'true') {
  let header = document.getElementById('header-container');
  if(transparent) header.classList.add('transparent');
  else header.classList.remove('transparent');
}

function checkScrollPosition(e) {
  if(window.scrollY > 100) changeMenuStyle(false);
  else changeMenuStyle();
   
}

export default function Home() {
  React.useEffect(()=>{
    window.addEventListener('scroll', checkScrollPosition);
  });
  
  return (
    <div className="w-full max-w-80ch" onScroll={checkScrollPosition}>
      <Head>
        <title>Unified QRs for Bitcoin</title>
        <meta
          name="description"
          content="Let's talk about using BIP21 payment URIs to combine on-chain and lightning payments into a single QR code, simplifying the user experience."
        />
        <meta property="og:image" content="https://bitcoinqr.dev/bitcoin-unified-qr-poster.jpg" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:image:alt" content="Logo of the Unified QR for Bitcoin" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@bitcoin_design" />
        <meta name="twitter:creator" content="@bitcoin_design" />
        <meta name="twitter:title" content="Unified QRs for Bitcoin" />
        <meta name="twitter:description" content="Let's talk about using BIP21 payment URIs to combine on-chain and lightning payments into a single QR code, simplifying the user experience." />
        <meta name="twitter:image" content="https://bitcoinqr.dev/bitcoin-unified-qr-poster.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div id="header-container" className="deactivated transparent">
        <div id="nav-overlay" className="fixed w-full h-full bg-white z-[47] lg:hidden deactivated" onClick={toggleMenu}></div>

        <header className="fixed top-0 w-full left-0 z-[48] lg:flex lg:flex-row lg:bg-white lg:justify-center lg:items-center">
          <div className="controls flex flex-row justify-between p-4 bg-white z-[50] relative">
            <a href="/">
              <BitcoinCircleIconOutline className="logo text-black w-12 h-12 lg:w-8 lg:h-8" />
              <span className="sr-only">Unified QRs for Bitcoin</span>
            </a>
            <MenuIcon className="menu-toggle text-black w-12 h-12 lg:hidden" onClick={toggleMenu} />
          </div>

          <nav id="nav" className="deactivated p-4 bg-white z-[49]">
            <ul className="space-y-4 lg:flex lg:flex-row lg:space-x-4 lg:space-y-0 items-center lg:mb-0 lg:text-sm">
              <li><a href="#problem" onClick={scrollTo}>Problem</a></li>
              <li><a href="#solution" onClick={scrollTo}>Solution</a></li>
              <li><a href="#examples" onClick={scrollTo}>Examples</a></li>
              <li><a href="#why" onClick={scrollTo}>Why this technique?</a></li>
              <li><a href="#plan" onClick={scrollTo}>The Plan</a></li>
              <li><a href="#contribute" onClick={scrollTo}>How to contribute</a></li>
              <li><a href="#faq" onClick={scrollTo}>Common Questions &amp; Concerns</a></li>
              <li><a href="#follow" onClick={scrollTo}>Follow</a></li>
            </ul>
          </nav>
        </header>
      </div>

      <main className="text-left">
        <div className="hero text-center text-white flex items-center justify-center flex-col w-full p-12 pt-16 h-screen lg:p-36">
          <div className="min-w-[156px] min-h-[156px]">
            <BitcoinCircleIcon
              style={{ width: "156px", height: "156px" }}
              className="mb-12 drop-shadow-md"
            />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-12 drop-shadow-md">
            Unified QRs for Bitcoin
          </h1>

          <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium drop-shadow-md mb-24 max-w-5xl">
            No more on-chain and lightning UI tabs.
            No more wallet interoperability issues.
            A simple, backwards-compatible way to
            request bitcoin for on-chain and lightning.
          </h3>
          
          <svg width="78" height="126" viewBox="0 0 78 126" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md hero-scroll min-w-[96px] min-h-[126px]">
            <path d="M42 14C42 12.3431 40.6569 11 39 11C37.3431 11 36 12.3431 36 14H42ZM36.8787 101.121C38.0503 102.293 39.9497 102.293 41.1213 101.121L60.2132 82.0294C61.3848 80.8579 61.3848 78.9584 60.2132 77.7868C59.0416 76.6152 57.1421 76.6152 55.9706 77.7868L39 94.7574L22.0294 77.7868C20.8579 76.6152 18.9584 76.6152 17.7868 77.7868C16.6152 78.9584 16.6152 80.8579 17.7868 82.0294L36.8787 101.121ZM36 14V99H42V14H36Z" fill="white"/>
          </svg>
        </div>

        <div className="container mx-auto px-12 max-w-screen-xl">
          <section>
            <div className="basis-6/12 space-y-4 flex justify-center flex-col">
              <h2 className="text-bpr-pink" id="problem">The Problem</h2>

              <h3>
                Asking users to choose between on-chain and lightning payments can be confusing &mdash; but it's been
                necessary to maintain interoperability between wallets.
              </h3>
              
              <p>
                Most wallets either take a lightning-only or on-chain-only approach. Wallets that support both use a
                tab or toggle for switching between the two formats.
              </p>

              <p>
                What if we could simplify this so the user doesn't have to make these choices? And how might we do this
                in a way that maintains interoperability between wallets?
              </p>
            </div>
            
            <div className="basis-6/12 pt-6 md:p-6 flex justify-center">
              <img src="problem-ui.svg" alt="Problematic UI" className="xl:w-8/12" />
            </div>
          </section>

          <section>
            <div className="basis-6/12 space-y-4 flex justify-center flex-col">
              <h2 className="text-bpr-orange" id="solution">A Solution</h2>

              <h3>BIP21 Payment URIs with an optional lightning parameter</h3>

              <p>
                <a href="https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki" className="text-bpr-cyan font-medium">BIP-21</a> defines a URI scheme for creating a “payment link”. By
                default, it includes an on-chain address to send funds to.
              </p>

              <p>
                BIP-21 was designed to be extensible. The spec allows
                for <a href="https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki#examples" className="text-bpr-cyan font-medium">optional parameters</a> in the URI. Why can’t one of these
                parameters be used to include a BOLT 11 invoice, or
                even a BOLT 12 offer in the future?
              </p>
            </div>
            
            <div className="basis-6/12 pt-6 md:p-6 flex justify-center items-center">
              <img src="single-qr.svg" alt="Graphic representing a single, unified BIP-21 QR code" className="xl:w-8/12" />
            </div>
          </section>

          <div className="pt-12 pb-12 text-center space-y-8">
            <h2 className="text-bpr-pink" id="examples">Examples</h2>

            <h3>Unified QRs for Bitcoin</h3>
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
            <div className="flex flex-col space-y-8 md:flex-row md:space-x-4 md:space-y-0 pb-12 lg:justify-around">
              <div className="basis-6/12 lg:basis-5/12 xl:basis-4/12">
                <Example
                  title="BIP21 URI with On-chain address"
                  src="qr-bip21-on-chain.png"
                  caption="A standard BIP 21 URI, for reference. This has the smallest QR code, but will not work with lightning."
                  raw="bitcoin:bc1qylh3u67j673h6y6alv70m0pl2yz53tzhvxgg7u?amount=0.00001&label=sbddesign%3A%20For%20lunch%20Tuesday&message=For%20lunch%20Tuesday"
                />
              </div>
              <div className="basis-6/12 lg:basis-5/12 xl:basis-4/12">
                <Example
                  title="BOLT 11 Invoice"
                  src="qr-bolt11.png"
                  caption="BOLT 11 invoice QR codes are already significantly large, even without the additional data of the BIP21 URI."
                  raw="lnbc10u1p3pj257pp5yztkwjcz5ftl5laxkav23zmzekaw37zk6kmv80pk4xaev5qhtz7qdpdwd3xger9wd5kwm36yprx7u3qd36kucmgyp282etnv3shjcqzpgxqyz5vqsp5usyc4lk9chsfp53kvcnvq456ganh60d89reykdngsmtj6yw3nhvq9qyyssqjcewm5cjwz4a6rfjx77c490yced6pemk0upkxhy89cmm7sct66k8gneanwykzgdrwrfje69h9u5u0w57rrcsysas7gadwmzxc8c6t0spjazup6"
                />
              </div>
            </div>
          </div>

          <section>
            <div className="basis-6/12 space-y-4 flex flex-col justify-center">
              <h2 className="text-bpr-blue" id="why">Why this technique?</h2>
              <p>
                BIP21 is an existing and agreed-upon standard. Most existing
                on-chain bitcoin wallets already support BIP21. When
                these wallets scan the QR code on the right, they will retrieve
                an on-chain address and ignore the Lightning invoice.
              </p>

              <p>
                For Lightning wallets, adding support should be simple. They just need to know where to look for the
                Lightning invoice in the BIP21 URI. Wallets can also give a choice of on-chain and Lightning, if the
                wallet supports both.
              </p>
              
              <p>
                This technique is even <a href="https://github.com/lightning/bolts/blob/master/11-payment-encoding.md#encoding-overview" className="text-bpr-cyan font-medium">mentioned in the BOLT 11 spec</a>!
              </p>
            </div>
            <div className="basis-6/12 flex justify-center p-6">
              <div className="bg-bpr-orange w-[240px] h-[240px] md:w-[340px] md:h-[340px]">
                <img src="qr-bip21-bolt11.png" alt="Sample of a BIP21 and BOLT11 QR code" className="drop-shadow-xl rotate-[-12deg]" />
              </div>
            </div>
          </section>

          <div className="flex justify-center p-12 mb-8">
            <picture>
              <source srcSet="flowchart.png 1x, flowchart@2x.png 2x" media="(min-width: 768px)" />
              <source srcSet="flowchart-mobile.png, flowchart-mobile@2x.png 2x" />
              <img src="flowchart.png" alt="Flowchart of a decision tree for how a BIP21 QR should be interpreted" />
            </picture>
          </div>
        </div>

        <div className="md:p-12 flex flex-col md:items-center space-y-8 p-4 mx-auto mb-8">
          <h2 className="text-bpr-orange" id="plan">The Plan</h2>

          <p className="max-w-screen-sm md:text-center">
            Adoption of the a unified BIP21 QR code for bitcoin is as simple as getting
            more Lightning wallets, exchanges, and other bitcoin services to
            support it. See below for the current list of support.
            You can help by testing your favorite wallets and services for support, or by implementing this BIP21
            support in a wallet or service that does not have support.
          </p>

          <p className="max-w-screen-sm md:text-center font-medium">
            The most important next step is getting wallets and services to support scanning BIP21 QR codes.
          </p>

          <p className="max-w-screen-sm md:text-center">
            Once there
            is wide support for <em>scanning</em> in place, wallets projects can decide if they want to roll out
            support for <em>generating</em> BIP 21 QR codes. Likely, most projects will not default to generating
            BIP21 QR codes if there is not wide support for scanning BIP21 QR codes first.
          </p>
          
          <div className="max-w-screen-lg pt-8">
            <h2 className="text-bpr-blue mb-8" id="contribute">How to contribute</h2>
            <h3 className="mb-4">How to test a wallet</h3>
            <div className="flex flex-col md:flex-row m-0 gap-8 md:gap-16">
              <div className="basis-6/12 space-y-4">
                <p>
                  Testing a wallet or service is easy. Choose a bitcoin app from the <a href="#support">list below</a> that has
                  not been tested yet, or choose one that is not on the list. Then, open the app, scan the QR code below,
                  and see what happens.
                </p>

                <img src="qr-bip21-bolt11.png" alt="BIP21 QR code with a BOLT 11 Lightning invoice" />
              </div>
              <div className="basis-6/12 space-y-4">
                <h4>Interpreting what you see</h4>

                <ul className="list-disc space-y-4 ml-4">
                  <li>
                    If the app is an on-chain only wallet:
                    <ul className="list-disc space-y-4 ml-8 mt-4">
                      <li>
                        If the app fails to scan the QR code, then it <strong >can NOT scan BIP21 QR codes</strong>.
                        Lightning is <strong>not applicable</strong> in this case.
                      </li>
                      <li>
                        If the app successfully scans the QR code and recognizes the "bc1q..." address,
                        then it <strong>CAN scan BIP21 QR codes</strong>.
                        Lightning is <strong>not applicable</strong> in this case.
                      </li>
                    </ul>
                  </li>
                  <li>
                    If the app supports Lightning:
                    <ul className="list-disc space-y-4 ml-8 mt-4">
                      <li>
                        If the app scans the QR code but tries to initiate an on-chain payment using the "bc1q..."
                        address, then it <strong>CAN scan the BIP21 QR code</strong> but <strong>can NOT recognize lightning</strong>.
                      </li>
                      <li>
                        If the app scans the QR code and tries to initiate a Lightning payment,
                        then it <strong>CAN scan the BIP21 QR code</strong> and <strong>CAN recognize Lightning</strong>.
                      </li>
                    </ul>
                  </li>
                </ul>
                
                <p>
                  <strong>Optional:</strong> you may also document if the app is capable of creating a BIP21 payment URI when you request a payment. The way to determine if a QR code is a BIP21 URI is to decode the QR and see if it begins with <pre className="inline">bitcoin:</pre>. If this is too advanced for you or you are otherwise unsure, you can simply say "I'm not sure" for this detail; this will most commonly be a <strong>no</strong> for most wallets today. 
                </p>

                <p>
                  Once you have your results, submit a PR to update the <a href="https://github.com/sbddesign/bip21-site/blob/main/wallet_support.json">wallet_support.json</a> file
                  on GitHub. If you are not comfortable working with the code, then simply <a href="https://github.com/sbddesign/bip21-site/issues/new">file an issue</a> in
                  our GitHub repo or message us in <strong>#unified-qr-code</strong> on <a href="https://join.slack.com/t/bitcoindesign/shared_invite/zt-10sxfovaq-isViijl4RThKRs_TsAQnuA">Slack</a>.
                </p>
              </div>
            </div>
          </div>
          
          <h3>How to implement support</h3>

          <p className="text-lg">
            Here's a list of references to help with implementation and testing.
          </p>

          <ul className="md:text-center">
            <li>
              <a href="https://github.com/peakshift/bitcoin-ux/tree/master/packages/payment-requests">
                Peakshift Bitcoin UX Payment Requests Package
              </a>
            </li>
            <li>
              <a href="https://github.com/sbddesign/bip21-lightning">
                QR Code Generator for Testing
              </a>
            </li>
          </ul>

          <h3 className="pt-8" id="support">Software and services supporting BIP21</h3>
          
          <div className="bg-slate-200 p-4 font-light space-y-4 rounded">
            <h4 className="font-medium">Defining support</h4>
            <div className="flex">
              <ScanIcon className="w-8 h-8 text-black inline mr-2"/>
              Can the wallet or service scan a BIP21 QR code?
            </div>
            <div className="flex">
              <LightningIcon className="w-8 h-8 text-black inline mr-2"/>
              Can the wallet or service recognize the lightning parameter in the BIP21 URI?
            </div>
            <div className="flex">
              <QrCodeIcon className="w-8 h-8 text-black inline mr-2"/>
              Can the wallet generate it's own BIP21 QR code?
            </div>
            <div className="flex">
              <AlertIcon className="w-8 h-8 text-black inline mr-2"/>
              Is there an open issue or discussion about adding this feature?
            </div>
          </div>
          
          <Table/>

          <h3 className="pt-8" id="support">Hardware Support</h3>
          
          <p>BIP21 QR codes that contain Lightning invoices can get very large. Here is documentation on how different mobile devices fare when attempting to scan these large QR codes.</p>
          
          <p>These results differ from the results above. Here, we are simply checking if an app is capable of reading the very large QR code, and <strong>disregarding</strong> whether or not it notices the Lightning invoice.</p>
          
          <HardwareTable />
        </div>

        <div className="container mx-auto px-12 max-w-screen-xl">
          <h2 className="text-bpr-purple mb-4" id="faq">Common Questions &amp; Concerns</h2>
          <div className="flex flex-col md:flex-row m-0 gap-8 md:gap-16">
            <div className="basis-6/12">
              <h3>QR code size is very large</h3>

              <p>
                The QR becomes large enough to cause scanning difficulties with some devices. This is a valid concern.
                In fact, BOLT 11 invoices alone also have scan-ability issues on some devices.
              </p>

              <p>
                BOLT12 offers can significantly reduce the size of the QR code. Additionally, techniques like
                animated QR codes or NFC could help avoid scanning problems.
              </p>
            </div>
            <div className="basis-6/12 space-y-4">
              <h3>Does this take away choice from the user?</h3>

              <p>In many situations, the user already lacks a choice in the matter. For example:</p>

              <ul className="list-disc">
                <li>If the sending user has an on-chain-only wallet, then they have no choice: they can only pay on-chain.</li>
                <li>If the sending user has a Lightning-only wallet, then they have no choice: they can only pay via Lightning.</li>
              </ul>

              <p>
                For wallets that support both on-chain and Lightning, it would be helpful to the user to default to
                the option that offers the lowest fees, which in most cases is going to be Lightning.
              </p>

              <p>
                In edge cases
                where the on-chain fees are actually lower than Lightning, then the wallet could opt to send on-chain
                or even present the user which a choice: "You can save X amount on fees, but this transaction will
                take longer to confirm. Is this OK?"
              </p>
            </div>
          </div>
        </div>
          
        <div className="pt-24 pb-24 pl-12 pr-12 max-w-4xl text-center space-y-4 flex flex-col items-center container mx-auto max-w-screen-lg">
          <h2 className="text-bpr-pink" id="follow">Follow along</h2>
          <p className="text-xl">
            Leave feedback and participate in the conversation on GitHub or in the Bitcoin Design slack workspace in
            the #unified-qr-code channel.
          </p>
          <div className="flex space-x-4">
            <a href="https://github.com/sbddesign/bip21-site">
              <div className="border-4 border-bpr-orange p-4 text-xl text-bpr-orange">
                GitHub
              </div>
            </a>
            <a href="https://join.slack.com/t/bitcoindesign/shared_invite/zt-10sxfovaq-isViijl4RThKRs_TsAQnuA">
              <div className="border-4 border-bpr-orange p-4 text-xl text-bpr-orange">
                Slack
              </div>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
