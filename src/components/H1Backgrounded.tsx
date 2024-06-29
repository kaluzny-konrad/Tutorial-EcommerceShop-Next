export default function H1Backgrounded({
  children,
}: {
  children: string;
}) {
  return <span className="bg-green-600 px-2 text-white">{children}</span>;
}
