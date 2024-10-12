import Hero from "./_components/Hero";
import JobLists from "./_components/joblist";

export default function Home() {
  return (
   <div className="w-full">
      <Hero/>
      <JobLists />
   </div>
  );
}
