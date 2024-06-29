import HeaderText from "@/components/HeaderText";
import HeaderHighlights from "@/components/HeaderHighlights";
import HeaderPhoneCaseImage from "@/components/HeaderPhoneCaseImage";
import HeaderDescription from "@/components/HeaderDescription";
import HeaderUsersAndStars from "@/components/HeaderUsersAndStars";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Header() {
  return (
    <MaxWidthWrapper className="pb-24 pt-24 sm:pb-32 lg:grid lg:grid-cols-3 lg:pt-24 xl:pt-32">
      <div className="col-span-2">
        <HeaderText />
        <HeaderDescription />
        <HeaderHighlights />
        <HeaderUsersAndStars />
      </div>
      <div className="col-span-1">
        <HeaderPhoneCaseImage />
      </div>
    </MaxWidthWrapper>
  );
}
