import MaxWidthWrapper from "./MaxWidthWrapper";
import H1Underlined from "./H1Underlined";
import UserReview, { UserReviewProps } from "./UserReview";

const REVIEWS: UserReviewProps[] = [
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

export default function UserReviews() {
  return (
    <MaxWidthWrapper className="flex flex-col items-center gap-16 pt-24 sm:gap-32">
      <div className="flex flex-col items-center gap-4 lg:flex-row-reverse lg:gap-6">
        <img src="/snake-2.png" className="w-24" />
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
