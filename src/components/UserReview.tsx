import { CheckIcon, StarIcon } from "lucide-react";

export interface UserReviewProps {
  Content: string;
  UserName: string;
  UserImage: string;
  Verified: boolean;
}

export default function UserReview(review: UserReviewProps) {
  return (
    <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
      <div className="mb-2 flex gap-0.5">
        <StarIcon className="h-5 w-5 fill-green-600 text-green-600" />
        <StarIcon className="h-5 w-5 fill-green-600 text-green-600" />
        <StarIcon className="h-5 w-5 fill-green-600 text-green-600" />
        <StarIcon className="h-5 w-5 fill-green-600 text-green-600" />
        <StarIcon className="h-5 w-5 fill-green-600 text-green-600" />
      </div>
      <div className="text-lg leading-8">
        <p>{review.Content}</p>
      </div>
      <div className="mt-2 flex gap-4">
        <img
          className="h-12 w-12 rounded-full object-cover"
          src={review.UserImage}
          alt="user"
        />
        <div className="flex flex-col">
          <p className="font-semibold">{review.UserName}</p>
          <div className="flex items-center gap-1.5 text-zinc-600">
            <CheckIcon className="h-4 w-4 stroke-[3px] text-green-600" />
            {review.Verified && <p className="text-sm">Verified Purchase</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
