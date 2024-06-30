import { createUploadthing, type FileRouter } from "uploadthing/next";
import { z } from "zod";
import sharp from "sharp";
import { db } from "@/db";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .input(z.object({ caseConfigurationId: z.string().optional() }))
    .middleware(async ({ input }) => {
      return { input };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const { caseConfigurationId } = metadata.input;
      const res = await fetch(file.url);
      const buffer = await res.arrayBuffer();
      const imgMetadata = await sharp(buffer).metadata();
      const { width, height } = imgMetadata;

      if (!caseConfigurationId) {
        const caseConfiguration = await db.caseConfiguration.create({
          data: {
            imageUrl: file.url,
            height: height || 500,
            width: width || 500,
          },
        });

        return {
          caseConfigurationId: caseConfiguration.id,
        };
      } else {
        const caseConfiguration = await db.caseConfiguration.update({
          where: { id: caseConfigurationId },
          data: {
            croppedImageUrl: file.url,
          },
        });

        return {
          caseConfigurationId: caseConfiguration.id,
        };
      }
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
