"use client";

import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import { OrderStatus } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { changeOrderStatus } from "@/app/dashboard/actions";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LABEL_MAP: Record<keyof typeof OrderStatus, string> = {
  awaiting_shipment: "Awaiting Shipment",
  fulfilled: "Fulfilled",
  shipped: "Shipped",
};

type Props = { id: string; orderStatus: OrderStatus };

export default function DashboardStatusDropdown({ id, orderStatus }: Props) {
  const router = useRouter();

  const { mutate } = useMutation({
    mutationKey: ["change-order-status"],
    mutationFn: changeOrderStatus,
    onSuccess: () => router.refresh(),
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex w-52 items-center justify-between"
        >
          {LABEL_MAP[orderStatus]}
          <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-0">
        {Object.keys(OrderStatus).map((status) => (
          <DropdownMenuItem
            key={status}
            className={cn(
              "flex cursor-default items-center gap-1 p-2.5 text-sm hover:bg-zinc-100",
              {
                "bg-zinc-100": orderStatus === status,
              },
            )}
            onClick={() => mutate({ id, newStatus: status as OrderStatus })}
          >
            <CheckIcon
              className={cn(
                "mr-2 h-4 w-4 text-primary",
                orderStatus === status ? "opacity-100" : "opacity-0",
              )}
            />
            {LABEL_MAP[status as OrderStatus]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
