import { progressDataList } from "../constants";

interface ProgressData {
  title: string;
  date: string;
  content: string;
}

export const Timeline = () => {
  return (
    <div className="mx-4">
      <div className="text-4xl pl-2 mb-3 font-medium">DESIGN PROGRESS</div>
      <div className="flex flex-col gap-8 p-2 bg-transparent rounded-2xl border-black border-2">
        {progressDataList.map((progressData) => {
          return <ProgressItem progressData={progressData} />;
        })}
      </div>
    </div>
  );
};

const ProgressItem = ({ progressData }: { progressData: ProgressData }) => {
  return (
    <div className="w-full flex flex-col text-black gap-4 rounded-xl border-black border-2 p-3">
      <div className="w-full flex flex-row justify-between">
        <div className="text-2xl underline">{progressData.title}</div>
        <div className="text-xl underline">{progressData.date}</div>
      </div>
      <div className="whitespace-pre-line text-lg">{progressData.content}</div>
    </div>
  );
};
