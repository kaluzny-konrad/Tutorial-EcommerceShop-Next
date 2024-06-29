import MaxWidthWrapper from "./MaxWidthWrapper";
import CreateCaseInfoHighlights from "./CreateCaseInfoHighlights";
import CreateCaseRedirectButton from "./CreateCaseRedirectButton";
import CreateCaseExample from "./CreateCaseExample";
import CreateCaseText from "./CreateCaseText";

const PHOTO = "/horse.jpg";

export default function CreateCase() {
  return (
    <MaxWidthWrapper className="py-24">
      <CreateCaseText />
      <CreateCaseExample imgSrc={PHOTO} />
      <CreateCaseInfoHighlights />
      <CreateCaseRedirectButton />
    </MaxWidthWrapper>
  );
}
