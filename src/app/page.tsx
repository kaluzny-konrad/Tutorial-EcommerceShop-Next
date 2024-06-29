import WhatPeopleBuying from "@/components/WhatPeopleBuying";
import UserReviews from "@/components/UserReviews";
import Header from "@/components/Header";
import CreateCase from "@/components/CreateCase";

export default function Home() {
  return (
    <div className="grainy-light bg-slate-50">
      <section>
        <Header />
      </section>

      <section className="grainy-dark bg-slate-100 pb-12">
        <UserReviews />
        <WhatPeopleBuying />
      </section>

      <section>
        <CreateCase />
      </section>
    </div>
  );
}
