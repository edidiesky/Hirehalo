
"use client"

import Charts from "./_components/Charts";
import Candidates from "./_components/Candidates";
import Widget from "./_components/Widget";

export default function Home() {

  return (
    <div className="w-full bg-white min-h-[100vh] py-12 px-4 md:px-8">
      <div className="w-full max-w-custom mx-auto flex flex-col gap-8">
        <div className="w-full flex flex-col gap-1">
          <h3 className="text-2xl block lg:text-3xl text-dark family2 font-semibold">
            Current Openings
          </h3>
          <span className="block text-base font-normal">
            Overview of notes regarding HR management
          </span>
        </div>
        {/* widget */}
        <Widget />
        {/* candidates */}
        <Charts />
        {/* candidates */}
        <Candidates />
      </div>
    </div>
  );
}
