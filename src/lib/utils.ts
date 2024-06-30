import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function splitArray<T>(array: Array<T>, numParts: number) {
  const result: Array<Array<T>> = [];

  for (let i = 0; i < array.length; i++) {
    const index = i % numParts;
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(array[i]);
  }

  return result;
}

export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return formatter.format(price);
};

export function canvasToFile(canvas: HTMLCanvasElement, fileName: string) {
  const base64 = canvas.toDataURL();
  const base64Data = base64.split(",")[1];
  const blob = base64ToBlob(base64Data, "image/png");
  console.log(fileName);
  const file = new File([blob], `${fileName}.png`, { type: "image/png" });
  return file;
}

function base64ToBlob(base64: string, mimeType: string) {
  const byteCharacters = atob(base64); // ToDo: refactor legacy code
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], { type: mimeType });
}

export async function getImage(imageUrl: string) {
  const image = new Image();
  image.crossOrigin = "anonymous";
  image.src = imageUrl;
  await new Promise((resolve) => (image.onload = resolve));
  return image;
}

export function constructMetadata({
  title = "CaseCobra - custom high-quality phone cases",
  description = "Create custom high-quality phone cases in seconds",
  image = "/thumbnail.png",
  icons = "/favicon.ico",
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@joshtriedcoding",
    },
    icons,
    metadataBase: new URL("https://casecobra.vercel.app/"),
  };
}
