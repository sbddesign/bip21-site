import { CrossIcon } from '@bitcoin-design/bitcoin-icons-react/filled';
import { CheckIcon } from '@bitcoin-design/bitcoin-icons-react/filled';

function Item({ status, text, title, children }) {
  return (
    <div className="flex space-x-4">
      <div>{status ? <CheckIcon className="w-8 h-8 text-bpr-blue" /> : <CrossIcon className="w-8 h-8 text-bpr-pink" />}</div>
      <div>{title} </div>
      <div>{text}</div>
    </div>
  );
}

export default function Table({ title, caption, raw }) {
  return (
    <div className="flex flex-col items-center space-y-4 px-4">
      <Item
        status={true}
        title="Placeholder wallet title"
        text="Full support"
      />
      <Item status={false} title="Placeholder wallet title" text="No support" />
    </div>
  );
}
