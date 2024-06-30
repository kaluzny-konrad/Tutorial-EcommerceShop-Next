"use client";

import {
  ImageIcon,
  Loader2Icon,
  MousePointerSquareDashedIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import Dropzone, { FileRejection } from "react-dropzone";

import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";

import { useUploadThing, IMAGE_UPLOADER_ENDPOINT } from "@/lib/uploadthing";
import { cn } from "@/lib/utils";
import { ROUTE_CONFIGURE_DESIGN } from "@/app/configure/design/page";

export default function UploadArea() {
  const { toast } = useToast();
  const router = useRouter();

  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [isPending, startTransition] = useTransition();

  const { startUpload, isUploading } = useUploadThing(IMAGE_UPLOADER_ENDPOINT, {
    onClientUploadComplete: ([data]) => {
      const caseConfigurationId = data.serverData.caseConfigurationId;
      startTransition(() => {
        router.push(ROUTE_CONFIGURE_DESIGN(caseConfigurationId));
      });
    },
    onUploadProgress(p) {
      setUploadProgress(p);
    },
  });

  const onDropRejected = (rejectedFiles: FileRejection[]) => {
    const [file] = rejectedFiles;

    setIsDragOver(false);

    toast({
      title: `${file.file.type} type is not supported.`,
      description: "Please choose a PNG, JPG, or JPEG image instead.",
      variant: "destructive",
    });
  };

  const onDropAccepted = (acceptedFiles: File[]) => {
    startUpload(acceptedFiles, { caseConfigurationId: undefined });

    setIsDragOver(false);
  };

  return (
    <div
      className={cn(
        "my-16 flex flex-1 rounded-xl border border-gray-900/10 bg-gray-900/5",
        {
          "border-blue-900/25 bg-blue-900/10": isDragOver,
        },
      )}
    >
      <div className="flex flex-1">
        <Dropzone
          onDropRejected={onDropRejected}
          onDropAccepted={onDropAccepted}
          accept={{
            "image/png": [".png"],
            "image/jpeg": [".jpeg"],
            "image/jpg": [".jpg"],
          }}
          onDragEnter={() => setIsDragOver(true)}
          onDragLeave={() => setIsDragOver(false)}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              className="flex flex-1 flex-col items-center justify-center"
              {...getRootProps()}
            >
              <input {...getInputProps()} />

              {isDragOver ? (
                <MousePointerSquareDashedIcon className="mb-2 h-6 w-6 text-zinc-500" />
              ) : isUploading || isPending ? (
                <Loader2Icon className="mb-2 h-6 w-6 animate-spin text-zinc-500" />
              ) : (
                <ImageIcon className="mb-2 h-6 w-6 text-zinc-500" />
              )}

              <div className="mb-2 flex flex-col justify-center text-sm text-zinc-700">
                {isUploading ? (
                  <div className="flex flex-col items-center">
                    <p>Uploading...</p>
                    <Progress
                      value={uploadProgress}
                      className="mt-2 h-2 w-40 bg-gray-300"
                    />
                  </div>
                ) : isPending ? (
                  <div className="flex flex-col items-center">
                    <p>Redirecting, please wait...</p>
                  </div>
                ) : isDragOver ? (
                  <p>
                    <span className="font-semibold">Drop file</span> to upload
                  </p>
                ) : (
                  <p>
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                )}
              </div>

              {isPending ? null : (
                <p className="text-xs text-zinc-500">PNG, JPG, JPEG</p>
              )}
            </div>
          )}
        </Dropzone>
      </div>
    </div>
  );
}
