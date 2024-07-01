import DesignPreview from "@/components/DesignPreview";
import { db } from "@/db";
import { notFound } from "next/navigation";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export default async function ConfigurePreviewPage({
  searchParams,
}: PageProps) {
  const { id } = searchParams;

  if (!id || typeof id !== "string") {
    return notFound();
  }

  const caseConfiguration = await db.caseConfiguration.findUnique({
    where: { id },
  });

  if (!caseConfiguration) {
    return notFound();
  }

  return <DesignPreview caseConfiguration={caseConfiguration} />;
}
