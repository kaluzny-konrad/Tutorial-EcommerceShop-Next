import DesignConfigurator from "@/components/DesignConfigurator";
import { db } from "@/db";
import { notFound } from "next/navigation";

export function ROUTE_CONFIGURE_DESIGN(caseConfigurationId: string) {
  return `/configure/design?id=${caseConfigurationId}`;
}

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export default async function ConfigureDesignPage({ searchParams }: PageProps) {
  const { id } = searchParams;

  if (!id || typeof id !== "string") {
    return notFound();
  }

  const configuration = await db.caseConfiguration.findUnique({
    where: { id },
  });

  if (!configuration) {
    return notFound();
  }

  return (
    <DesignConfigurator
      caseConfigurationId={id}
      imageUrl={configuration.imageUrl}
      imageDimensions={{
        width: configuration.width,
        height: configuration.height,
      }}
    />
  );
}
