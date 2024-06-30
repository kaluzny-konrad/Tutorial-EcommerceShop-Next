"use server";

import { db } from "@/db";
import {
  CaseColor,
  CaseFinish,
  CaseMaterial,
  PhoneModel,
} from "@prisma/client";

export type SaveOptionsArgs = {
  CaseColor: CaseColor;
  CaseFinish: CaseFinish;
  CaseMaterial: CaseMaterial;
  PhoneModel: PhoneModel;
  caseConfigurationId: string;
};

export async function saveOptions({
  CaseColor,
  CaseFinish,
  CaseMaterial,
  PhoneModel,
  caseConfigurationId,
}: SaveOptionsArgs) {
  await db.caseConfiguration.update({
    where: { id: caseConfigurationId },
    data: { CaseColor, CaseFinish, CaseMaterial, PhoneModel },
  });
}
