export default function Header() {
  return (
    <div className="flex flex-col items-center">
      <img src="/snake-1.png" className="w-28 lg:w-24 lg:self-start" />
      <h1 className="def-header text-center lg:text-left">
        Your Image on a{" "}
        <span className="bg-green-600 px-2 text-white">Custom</span> Phone Case
      </h1>
    </div>
  );
}
