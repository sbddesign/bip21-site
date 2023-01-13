import wallets from "../wallet_support.json";
import {
  CrossIcon,
  CheckIcon,
  QuestionIcon,
  ScanIcon,
  WalletIcon,
  LightningIcon,
  QrCodeIcon,
  AlertIcon,
  ContactsIcon,
  InfoIcon
} from '@bitcoin-design/bitcoin-icons-react/filled';
import React from "react";

export default function Table() {
  const [sortedWallets, setSortedWallets] = React.useState([])

  function ynm(status) {
    return status === "yes" ? <CheckIcon className="w-8 h-8 text-bpr-blue" /> : status === "no" ? <CrossIcon className="w-8 h-8 text-bpr-pink" /> : status === "n/a" ? "N/A" : <QuestionIcon className="w-8 h-8 text-bpr-purple" />;
  }

  function sortWallets(){
    let sorted = wallets.sort((a,b)=>{
      let a1 = a.wallet.name.toLowerCase().replace(/\s+/g, '')
      let b1 = b.wallet.name.toLowerCase().replace(/\s+/g, '')
      if(a1.startsWith('the')) a1 = a1.substring(3)
      if(b1.startsWith('the')) b1 = b1.substring(3)
      return a1 < b1 ? -1 : a1 > b1 ? 1 : 0
    })
    setSortedWallets(sorted)
    return sorted
  }

  React.useEffect(()=>{
    sortWallets()
  }, [])

  return (
    <div className="flex flex-col items-center px-4 w-full text-center max-w-[2000px]">
      <div className="hidden lg:flex flex w-full px-4 bb-solid border-b border-b-black mb-0 pb-4 text-xs xl:text-base">
        <div className="basis-2/12 text-left flex items-center justify-start">
          <WalletIcon className="w-8 h-8 text-black inline" />
          Wallet
        </div>
        <div className="basis-1/12 flex items-center justify-center">
          <ScanIcon className="w-8 h-8 text-black inline" />
          <span>Scans</span>
        </div>
        <div className="basis-1/12 flex items-center justify-center">
          <LightningIcon className="w-8 h-8 text-black inline" />
          <span>Lightning</span>
        </div>
        <div className="basis-1/12 flex items-center justify-center">
          <QrCodeIcon className="w-8 h-8 text-black inline" />
          <span>Creates</span>
        </div>
        <div className="basis-3/12 flex items-center justify-start">
          <InfoIcon className="w-8 h-8 text-black inline" />
          <span>Description</span>
        </div>
        <div className="basis-2/12 hidden lg:block flex items-center justify-center">
          <AlertIcon className="w-8 h-8 text-black inline" />
          Issue
        </div>
        <div className="basis-2/12 hidden lg:block flex items-center justify-center">
          <ContactsIcon className="w-8 h-8 text-black inline" />
          Tested by
        </div>
      </div>
      <ul className="w-full m-0">
        {sortedWallets.map((w, key) => (
          <li className="border-b border-black p-8 lg:p-4 last:border-b-0" key={key}>
            <div className="flex flex-wrap space-y-4 lg:space-y-0 lg:flex-nowrap rounded-xl items-center font-light">
              <div className="basis-full lg:basis-2/12 text-left font-medium lg:font-light">
                {typeof w.wallet === 'object' ?
                  <a href={w.wallet.uri}>{w.wallet.name}</a>
                : w.wallet}
              </div>
              <div className="lg:basis-1/12 flex items-center lg:justify-center">
                <span className="sr-only">
                  {w.scans_bip21 === "yes" ? "Scans BIP21 QR codes" : w.scans_bip21 === "no" ? "Does not scan BIP21 QR codes" : "Unknown BIP21 support"}
                </span>
                <span className="hidden lg:block">
                  {ynm(w.scans_bip21)}
                </span>
                {w.scans_bip21 === "yes" ?
                  <span className="flex lg:hidden items-center mr-4">
                    <CheckIcon className="w-8 h-8 text-bpr-blue inline" /> Scans BIP21
                  </span>
                : w.scans_bip21 === "no" ?
                  <span className="flex lg:hidden items-center mr-4">
                    <CrossIcon className="w-8 h-8 text-bpr-pink inline" /> Doesn't scan BIP21
                  </span> :
                ""}
              </div>
              <div className="lg:basis-1/12 flex justify-center">
                <span className="sr-only">
                  {w.recognizes_lightning === "yes" ? "Recognizes the lightning parameter" : w.recognizes_lightning === "no" ? "Does not scan BIP21 QR codes" : w.recognizes_lightning === "n/a" ? "Not Applicable" : "Unknown lightning support"}
                </span>
                <span className="hidden lg:block">
                  {ynm(w.recognizes_lightning)}
                </span>
                {w.recognizes_lightning === "yes" ?
                  <span className="flex lg:hidden items-center mr-4">
                    <CheckIcon className="w-8 h-8 text-bpr-blue inline" />
                    Lightning
                  </span>
                : w.recognizes_lightning === "no" ? 
                  <span className="flex lg:hidden items-center mr-4">
                    <CrossIcon className="w-8 h-8 text-bpr-pink inline" />
                    Doesn't recognize lightning
                  </span>
                : ""
                }
              </div>
              <div className="lg:basis-1/12 flex justify-center">
                {w.creates_bip21 === "yes" ?
                  <span className="flex lg:hidden items-center mr-4">
                    <CheckIcon className="w-8 h-8 text-bpr-blue inline" />
                    Creates BIP21 QR codes
                  </span>
                  : w.creates_bip21 === "no" ?
                    <span className="flex lg:hidden items-center mr-4">
                      <CrossIcon className="w-8 h-8 text-bpr-pink inline" />
                      Doesn't create BIP21 QR codes
                    </span>
                    : ""
                }
                <span className="hidden lg:block">
                  {ynm(w.creates_bip21)}
                </span>
                {w.creates_bip21 === "yes" ?
                  <span className="flex lg:hidden items-center mr-4">
                    <QrCodeIcon className="w-8 h-8 text-black inline" /> <span>Creates</span>
                  </span>
                : ""}
              </div>
              <div className="lg:basis-3/12 justify-start text-left">
                {w.description ?
                  <div>
                    <p className="flex flex-row justify-start items-center mb-0 lg:hidden">
                      <InfoIcon className="w-8 h-8 text-black inline" /> <span>Description</span>
                    </p>
                    <p className="ml-3">
                      {w.description}
                    </p>
                  </div>
                : ''}
              </div>
              <div className="lg:basis-2/12 flex justify-center">
                <span className="sr-only">Link to issue:</span>
                { w.issue_link ?
                  <span className="mr-4 flex items-center">
                    <AlertIcon className="w-8 h-8 text-bpr-cyan inline lg:hidden" />
                    <a href={w.issue_link} className="text-bpr-cyan">Issue</a>
                  </span>
                : '' }
              </div>
              <div className="lg:hidden flex justify-center">
                { w.scans_bip21 === "no" && w.recognizes_lightning == "no" && !w.issue_link ?
                  <div>No support. Open an issue!</div>
                : ""}
              </div>
              <div className="lg:basis-2/12 flex justify-center items-center">
                <ContactsIcon className="w-8 h-8 text-bpr-black inline lg:hidden" />
                { w.credit ? <span className="lg:sr-only">Tested by </span> : <span className="text-bpr-pink">Needs Testing</span>}
                {typeof w.credit === 'object' ?
                  <a href={w.credit.uri}>{w.credit.name}</a>
                : w.credit}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
