import wallets from "../wallet_support.json";
import { CrossIcon } from '@bitcoin-design/bitcoin-icons-react/filled';
import { CheckIcon } from '@bitcoin-design/bitcoin-icons-react/filled';
import { QuestionIcon } from '@bitcoin-design/bitcoin-icons-react/filled';

export default function Table() {
  function ynm(status) {
    return status === "yes" ? <CheckIcon className="w-8 h-8 text-bpr-blue" /> : status === "no" ? <CrossIcon className="w-8 h-8 text-bpr-pink" /> : status === "n/a" ? "N/A" : <QuestionIcon className="w-8 h-8 text-bpr-purple" />;
  }

  return (
    <div className="flex flex-col items-center space-y-4 px-4">
      <div class="flex w-full px-2 md:w-[50ch]">
        <div class="basis-2/6">Wallet</div>
        <div class="basis-2/6">Scans BIP21 QR</div>
        <div class="basis-2/6">Recognizes Lightning</div>
      </div>
      <ul className="w-full">
        {wallets.map((w) => (
          <li class="border-b border-black p-1 last:border-b-0">
            <div class="flex rounded-xl p-2">
              <div class="font-light basis-2/6">{w.wallet}</div>
              <div class="font-light basis-2/6">{ynm(w.scans_bip21)}</div>
              <div class="font-light basis-2/6">
                {ynm(w.recognizes_lightning)}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
