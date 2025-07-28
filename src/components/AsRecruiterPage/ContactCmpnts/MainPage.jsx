import React from "react";
import Heading from "./Heading";
import ContactWay from "./ContactWay";
import Credits from "./Credits";
import RecruiterFrom from "./RecruiterFrom";

const MainPage = () => {
  return (
    <>
      <main className="max-w-[1300px] px-4 sm:px-6 lg:px-12 mx-auto pt-8 lg:space-y-36">
        <section>
          <Heading />
        </section>
        <section>
          <ContactWay />
        </section>
        <section>
          <RecruiterFrom />
        </section>
      </main>
    </>
  );
};

export default MainPage;
