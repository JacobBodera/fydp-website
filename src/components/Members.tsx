import { memberInfoList } from "../constants";
import { linkedin } from "../assets";

interface MemberInformation {
  name: string;
  profile: string;
  description: string;
  linkedinUrl: string;
}

export const Members = () => {
  return (
    <div className="mx-4">
      <div className="text-4xl pl-2 mb-3 font-medium">TEAM MEMBERS</div>
      <div className="flex flex-col gap-8 p-2 bg-transparent rounded-2xl border-black border-2">
        {memberInfoList.map((memberInfo) => {
          return <Member memberInfo={memberInfo} />;
        })}
      </div>
    </div>
  );
};

const Member = ({ memberInfo }: { memberInfo: MemberInformation }) => {
  return (
    <div className="w-full flex align-middle text-black justify-between rounded-xl border-black border-2 p-3">
      <img
        className="rounded-full w-full h-full max-w-48 max-h-48 mr-8"
        src={memberInfo.profile}
        alt="member picture"
      />
      <div className="flex flex-col">
        <div className="flex justify-between mb-3">
          <div className="text-3xl underline">{memberInfo.name}</div>
          <a href={memberInfo.linkedinUrl}>
            <img
              className="w-full h-full max-w-12 max-h-12"
              src={linkedin}
              alt="linkedin icon"
            />
          </a>
        </div>
        <div className="text-xl mb-2">{memberInfo.description}</div>
      </div>
    </div>
  );
};
