import MaxWidthWrapper from "./MaxWidthWrapper";
import H1Underlined from "./H1Underlined";
import UserReview, { UserReviewProps } from "./UserReview";
import Image from "next/image";

const REVIEWS: UserReviewProps[] = [
  {
    Content: {
      LeftSideContent: `I've had this case for a couple of months now and it's still looking great. `,
      HighlightedContent: "The design is super clear",
      RightSideContent:
        " and the case itself is very durable. I've dropped my phone a few times and it's still holding up. I would definitely recommend this case.",
    },
    UserName: "Josh",
    UserImage: "/users/user-4.jpg",
    Verified: true,
  },
  {
    Content: {
      LeftSideContent: `This phone case has exceeded my expectations. `,
      HighlightedContent: "The color hasn't faded at all",
      RightSideContent:
        " and it fits my phone perfectly. I love how sleek and stylish it looks. Plus, it provides excellent protection. Highly recommend!",
    },
    UserName: "Emily",
    UserImage: "/users/user-2.png",
    Verified: true,
  },
];

export default function UserReviews() {
  return (
    <MaxWidthWrapper className="flex flex-col items-center gap-16 pt-24 sm:gap-32">
      <div className="flex flex-col items-center gap-4 lg:flex-row-reverse lg:gap-6">
        <Image
          src="/snake-2.png"
          width={96}
          height={85}
          className="w-24"
          aria-hidden="true"
          alt=""
          role="presentation"
        />
        <h2 className="def-header-2 text-center">
          What our <H1Underlined>customers</H1Underlined> say
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-y-16 px-4 lg:grid-cols-2">
        {REVIEWS.map((review, index) => (
          <UserReview key={index} {...review} />
        ))}
      </div>
    </MaxWidthWrapper>
  );
}
