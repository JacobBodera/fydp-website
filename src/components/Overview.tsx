import { overviewData } from "../constants";

export const Overview = () => {
  return (
    <div className="mx-4">
      <div className="text-4xl pl-2 mb-3 font-medium">PROJECT OVERVIEW</div>
      <div className="w-full flex flex-col items-center gap-8 p-4 bg-transparent rounded-2xl border-black border-2 text-lg indent-8">
        <div className="flex">{overviewData.intro}</div>
        <img
          className="w-full flex max-w-[512px]"
          src={overviewData.image}
          alt="image of project"
        />
        <div className="flex">{overviewData.body}</div>
      </div>
    </div>
  );
};
