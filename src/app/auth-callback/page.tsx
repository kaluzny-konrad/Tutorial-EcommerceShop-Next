"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getUser } from "./actions";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { LS_CASE_CONFIGURATION_ID } from "@/config/localstorageNames";
import { ROUTE_CONFIGURE_PREVIEW } from "@/config/routes";

export default function AuthCallbackPage() {
  const [caseConfigurationId, setCaseConfigurationId] = useState<string | null>(
    null,
  );

  const router = useRouter();

  useEffect(() => {
    const caseConfigurationId = localStorage.getItem(LS_CASE_CONFIGURATION_ID);
    if (caseConfigurationId) setCaseConfigurationId(caseConfigurationId);
  }, []);

  const { data: user } = useQuery({
    queryKey: ["get-user"],
    queryFn: async () => await getUser(),
    retry: true,
    retryDelay: 500,
  });

  if (user?.user) {
    if (caseConfigurationId) {
      localStorage.removeItem(LS_CASE_CONFIGURATION_ID);
      setTimeout(() => router.push(ROUTE_CONFIGURE_PREVIEW(caseConfigurationId)), 0);
    } else {
      setTimeout(() => router.push("/"), 0);
    }
  }

  return (
    <div className="mt-24 flex w-full justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-500" />
        <h3 className="text-xl font-semibold">Logging you in...</h3>
        <p>You will be redirected automatically.</p>
      </div>
    </div>
  );
}
