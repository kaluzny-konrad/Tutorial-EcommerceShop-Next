"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getUser } from "./actions";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export const CASE_CONFIGURATION_ID = "caseConfigurationId";

export default function AuthCallbackPage() {
  const [caseConfigurationId, setCaseConfigurationId] = useState<string | null>(
    null,
  );

  const router = useRouter();

  useEffect(() => {
    const caseConfigurationId = localStorage.getItem(CASE_CONFIGURATION_ID);
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
      localStorage.removeItem(CASE_CONFIGURATION_ID);
      router.push(`/configure/preview?id=${caseConfigurationId}`);
    } else {
      router.push("/");
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
