import LeftDash from "./LeftDash";
import Rightdash from "./Rightdash";

export default function Home() {
  return (
    <div className="flex flex-col  md:flex-row w-screen justify-center items-center bg-blue-100 md:space-x-10">
      <LeftDash />
      <Rightdash />
    </div>
  );
}
