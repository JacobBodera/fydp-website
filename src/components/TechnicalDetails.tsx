import { technicalDetailDataList } from "../constants";

interface TechnicalDetailData {
  title: string;
  content: string;
  link: string | null;
}

export const TechnicalDetails = () => {
  return (
    <div className="mx-4">
      <div className="text-4xl pl-2 mb-3 font-medium">TECHNICAL DETAILS</div>
      <div className="flex flex-col gap-8 p-2 bg-transparent rounded-2xl border-black border-2">
        {technicalDetailDataList.map((technicalDetailsData) => {
          return (
            <TechnicalDetail technicalDetailsData={technicalDetailsData} />
          );
        })}
      </div>
    </div>
  );
};

const TechnicalDetail = ({
  technicalDetailsData,
}: {
  technicalDetailsData: TechnicalDetailData;
}) => {
  return (
    <div className="w-full flex flex-col text-black gap-4 rounded-xl border-black border-2 p-3">
      <div className="text-2xl underline">{technicalDetailsData.title}</div>
      <div className="whitespace-pre-line text-lg">
        {technicalDetailsData.content}
      </div>
      {!technicalDetailsData.link ? (
        <div></div>
      ) : (
        <a className="text-lg" href={technicalDetailsData.link}>
          Link
        </a>
      )}
    </div>
  );
};
