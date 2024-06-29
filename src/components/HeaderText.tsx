import H1Backgrounded from "./H1Backgrounded";

export default function HeaderText() {
  return (
    <div className="flex flex-col items-center">
      <img src="/snake-1.png" className="w-28 lg:w-24 lg:self-start" />
      <h1 className="def-header text-center lg:text-left">
        Your Image on a <H1Backgrounded>Custom</H1Backgrounded> Phone Case
      </h1>
    </div>
  );
}
