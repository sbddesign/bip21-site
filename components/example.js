export default function Example({ title, caption, raw, src }) {
  return (
    <div className="flex flex-col items-center space-y-4 px-4">
      <h4>{title}</h4>
      <div className="bg-white drop-shadow-lg w-full max-w-[340px]">
          <img src={src} alt={title} className="w-full" />
      </div>
      <p className="text-left">{caption}</p>
      <h4>Raw Data</h4>
      <pre className="bg-bpr-code-gray break-all p-4 rounded whitespace-pre-wrap">
        {raw}
        {/* <code className="break-all">{raw}</code> */}
      </pre>
    </div>
  );
}
