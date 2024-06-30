import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ConfigureSteps from "@/components/ConfigureSteps";

export default function ConfigureLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MaxWidthWrapper className="flex flex-1 flex-col">
      <ConfigureSteps />
      {children}
    </MaxWidthWrapper>
  );
}
