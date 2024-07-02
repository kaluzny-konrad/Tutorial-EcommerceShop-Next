import { CheckIcon, StarIcon } from "lucide-react";
import Image from "next/image";

export interface Content {
  LeftSideContent: string;
  HighlightedContent: string;
  RightSideContent: string;
}

export interface UserReviewProps {
  Content: Content;
  UserName: string;
  UserImage: string;
  Verified: boolean;
}

export default function UserReview(review: UserReviewProps) {
  return (
    <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
      <div className="mb-2 flex gap-0.5">
        <StarIcon className="h-5 w-5 fill-green-700 text-green-700" />
        <StarIcon className="h-5 w-5 fill-green-700 text-green-700" />
        <StarIcon className="h-5 w-5 fill-green-700 text-green-700" />
        <StarIcon className="h-5 w-5 fill-green-700 text-green-700" />
        <StarIcon className="h-5 w-5 fill-green-700 text-green-700" />
      </div>
      <div className="text-lg leading-8">
        <p>
          {review.Content.LeftSideContent}
          <span className="bg-slate-800 p-0.5 text-white">
            {review.Content.HighlightedContent}
          </span>
          {review.Content.RightSideContent}
        </p>
      </div>
      <div className="mt-2 flex gap-4">
        <Image
          width={48}
          height={48}
          className="h-12 w-12 rounded-full object-cover aspect-square"
          src={review.UserImage}
          alt="user image"
        />
        <div className="flex flex-col">
          <p className="font-semibold">{review.UserName}</p>
          <div className="flex items-center gap-1.5 text-zinc-600">
            <CheckIcon className="h-4 w-4 stroke-[3px] text-green-700" />
            {review.Verified && <p className="text-sm">Verified Purchase</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
