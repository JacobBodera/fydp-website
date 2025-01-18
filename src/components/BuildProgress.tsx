import { buildProgressDataList } from "../constants";

interface BuildProgressData {
  title: string;
  date: string;
  content: string;
}

export const BuildProgress = () => {
  return (
    <div className="mx-4">
      <div className="text-4xl pl-2 mb-3 font-medium">BUILD PROGRESS</div>
      <div className="flex flex-col gap-8 p-2 bg-transparent rounded-2xl border-black border-2">
        {buildProgressDataList.map((buildProgressData) => {
          return <ProgressItem buildProgressData={buildProgressData} />;
        })}
      </div>
    </div>
  );
};

const ProgressItem = ({
  buildProgressData,
}: {
  buildProgressData: BuildProgressData;
}) => {
  return (
    <div className="w-full flex flex-col text-black gap-4 rounded-xl border-black border-2 p-3">
      <div className="w-full flex flex-row justify-between">
        <div className="text-2xl underline">{buildProgressData.title}</div>
        <div className="text-xl underline">{buildProgressData.date}</div>
      </div>
      <div className="whitespace-pre-line text-lg">
        {buildProgressData.content}
      </div>
    </div>
  );
};
