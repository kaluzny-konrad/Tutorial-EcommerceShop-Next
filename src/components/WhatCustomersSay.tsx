import { CheckIcon, StarIcon } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Icons } from "./Icons";
import { cn } from "@/lib/utils";

export default function WhatCustomersSay() {
  const reviews: ReviewProps[] = [
    {
      Content: `I usually keep my phone together with my keys in my pocket and
              that led to some pretty heavy scratchmarks on all of my last phone
              cases. This one, besides a barely noticeable scratch on the
              corner, looks brand new after about half a year. I dig it.`,
      UserName: "Josh",
      UserImage: "/users/user-4.jpg",
      Verified: true,
    },
    {
      Content: `I've had this case for a couple of months now and it's still
                looking great. The design is super clear and the case itself is
                very durable. I've dropped my phone a few times and it's still
                holding up. I would definitely recommend this case.`,
      UserName: "Emily",
      UserImage: "/users/user-2.png",
      Verified: true,
    },
  ];

  return (
    <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
      <div className="flex flex-col items-center gap-4 lg:flex-row-reverse lg:gap-6">
        <img src="/snake-2.png" className="w-24" />
        <h2 className="def-header text-center">
          What our <UnderlinedHeader>customers</UnderlinedHeader> say
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-y-16 px-4 lg:grid-cols-2">
        {reviews.map((review, index) => (
          <UserReview key={index} {...review} />
        ))}
      </div>
    </MaxWidthWrapper>
  );
}

function UnderlinedHeader({ children }: { children: string }) {
  return (
    <span className="relative px-2">
      {children}
      <Icons.underline className="absolute inset-x-0 -bottom-6 text-green-500" />
    </span>
  );
}

interface ReviewProps {
  Content: string;
  UserName: string;
  UserImage: string;
  Verified: boolean;
}

function UserReview(review: ReviewProps) {
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
