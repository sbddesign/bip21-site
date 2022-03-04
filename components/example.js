export default function Example({ title, caption, raw }) {
  return (
    <div className="flex flex-col items-center space-y-4 px-4">
      <h4>{title}</h4>
      <div className="w-[340px] h-[340px] bg-white drop-shadow-md">qr!</div>
      <p>{caption}</p>
      <h4>Raw Data</h4>
      <pre className="bg-bpr-code-gray break-all p-4 rounded whitespace-pre-wrap">
        {raw}
        {/* <code className="break-all">{raw}</code> */}
      </pre>
    </div>
  );
}
