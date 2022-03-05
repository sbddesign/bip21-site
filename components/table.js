import wallets from "../wallet_support.json";
import { CrossIcon } from '@bitcoin-design/bitcoin-icons-react/filled';
import { CheckIcon } from '@bitcoin-design/bitcoin-icons-react/filled';
import { QuestionIcon } from '@bitcoin-design/bitcoin-icons-react/filled';

export default function Table() {
  function ynm(status) {
    return status === "yes" ? <CheckIcon className="w-8 h-8 text-bpr-blue" /> : status === "no" ? <CrossIcon className="w-8 h-8 text-bpr-pink" /> : status === "n/a" ? "N/A" : <QuestionIcon className="w-8 h-8 text-bpr-purple" />;
  }

  return (
    <div className="flex flex-col items-center px-4 w-full text-center">
      <div class="flex w-full px-2 bb-solid border-b border-b-black mb-0 pb-4">
        <div class="basis-2/6 text-left">Wallet</div>
        <div class="basis-2/6">Scans BIP21 QR</div>
        <div class="basis-2/6">Recognizes Lightning</div>
        <div className="basis-2/6">Creates BIP21 QR</div>
          <div className="basis-2/6">Issue</div>
      </div>
      <ul className="w-full m-0">
        {wallets.map((w) => (
          <li class="border-b border-black p-1 last:border-b-0">
            <div class="flex rounded-xl p-2 items-center">
              <div class="font-light basis-2/6 text-left">{w.wallet}</div>
              <div class="font-light basis-2/6 flex justify-center">{ynm(w.scans_bip21)}</div>
              <div class="font-light basis-2/6 flex justify-center">
                {ynm(w.recognizes_lightning)}
              </div>
              <div className="font-light basis-2/6 flex justify-center">{ynm(w.creates_bip21)}</div>
            <div className="font-light basis-2/6 flex justify-center">
              { w.issue_link ? <a href={w.issue_link}>Issue</a> : '' }
            </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
