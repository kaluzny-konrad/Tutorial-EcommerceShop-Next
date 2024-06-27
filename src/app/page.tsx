import Header from "@/components/Header";
import HeaderHighlights from "@/components/HeaderHighlights";
import HeaderPhoneCaseImage from "@/components/HeaderPhoneCaseImage";
import HeaderText from "@/components/HeaderText";
import HeaderUsersAndStars from "@/components/HeaderUsersAndStars";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <MaxWidthWrapper className="pb-24 pt-24 sm:pb-32 lg:grid lg:grid-cols-3 lg:pt-24 xl:pt-32">
        <div className="col-span-2">
          <Header />
          <HeaderText />
          <HeaderHighlights />
          <HeaderUsersAndStars />
        </div>
        <div className="col-span-1">
          <HeaderPhoneCaseImage />
        </div>
      </MaxWidthWrapper>
    </div>
  );
}