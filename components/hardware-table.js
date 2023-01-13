import hardware from "../hardware_support.json";
import {
  AlertIcon, CheckIcon, ContactsIcon, CrossIcon,
  DevicesIcon,
  InfoIcon,
  QuestionIcon,
  ScanIcon, WalletIcon
} from "@bitcoin-design/bitcoin-icons-react/filled";

export default function HardwareTable() {
  function ynm(status) {
    return status === "yes" ? <CheckIcon className="w-8 h-8 text-bpr-blue" /> : status === "no" ? <CrossIcon className="w-8 h-8 text-bpr-pink" /> : status === "mixed" ? <AlertIcon className="w-8 h-8 text-bpr-pink" /> : status === "n/a" ? "N/A" : <QuestionIcon className="w-8 h-8 text-bpr-purple" />;
  }

  return(
    <div className="flex flex-col items-center px-4 w-full text-center max-w-[2000px] space-y-16">
      
      {hardware.map((h, key)=>(
        <div className="w-full" key={key}>
          <h4 className="text-left flex flex-row items-start items-center pl-3 pb-4">
            <DevicesIcon className="w-8 h-8" />
            {h.hardware.uri ? <a href={h.hardware.uri}>{h.hardware.name}</a> : <span>{h.hardware.name}</span>}
          </h4>
          <div className="hidden lg:flex flex w-full px-4 bb-solid border-b border-b-black mb-0 pb-4 text-xs xl:text-base">
            <div className="basis-3/12 text-left flex items-center justify-start">
              <WalletIcon className="w-8 h-8 text-black inline" />
              Software
            </div>
            <div className="basis-2/12 flex items-center justify-center">
              <ScanIcon className="w-8 h-8 text-black inline" />
              <span>Scans QR</span>
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
            {h.software.map((s, key) => (
              <li className="border-b border-black p-8 lg:p-4 last:border-b-0" key={key}>
                <div className="flex flex-wrap space-y-4 lg:space-y-0 lg:flex-nowrap rounded-xl items-center font-light">
                  <div className="basis-full lg:basis-3/12 text-left font-medium lg:font-light">
                    {s.wallet.uri ? <a href={s.wallet.uri}>{s.wallet.name}</a> : <span>{s.wallet.name}</span>}
                  </div>
                  <div className="lg:basis-2/12 text-center flex items-center lg:justify-center">
                    <div>
                      {ynm(s.scans)}
                    </div>
                    <div className="lg:hidden">
                      {s.scans === "yes" ? "Scans the QR" : s.scans === "no" ? "Does not scan the QR" : s.scans === "mixed" ? "Mixed scan results" : ""}
                    </div>
                  </div>
                  <div className="basis-full lg:basis-3/12 text-left font-medium lg:font-light">
                    <div>
                      <p className="flex flex-row justify-start items-center mb-0 lg:hidden">
                        <InfoIcon className="w-8 h-8 text-black inline" /> <span>Description</span>
                      </p>
                      <p className="ml-3">
                        {s.description}
                      </p>
                    </div>
                  </div>
                  <div className="lg:basis-2/12 font-medium text-center lg:font-light">
                    { s.issue_link ?
                      <span className="mr-4 flex items-center justify-center">
                        <AlertIcon className="w-8 h-8 text-bpr-cyan inline lg:hidden" />
                        <a href={s.issue_link} className="text-bpr-cyan">Issue</a>
                      </span>
                      : '' }
                  </div>
                  <div className="lg:basis-2/12 flex justify-center items-center">
                    <ContactsIcon className="w-8 h-8 text-bpr-black inline lg:hidden" />
                    <div className="lg:hidden">Tested by&nbsp;</div>
                    {s.credit.uri ? <a href={s.credit.uri}>{s.credit.name}</a> : <span>s.credit</span>}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
      
    </div>
  )
}
