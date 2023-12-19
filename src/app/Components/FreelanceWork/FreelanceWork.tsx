import Link from "next/link";

interface Props {
  jobData: {
    client: string;
    workType: string;
    description: string;
    link: string;
  };
}

export default function FreelanceWork({ jobData }: Props) {
  return (
    <article className="my-4 ">
      <h4 className="text-base font-bold sm:text-lg mdlg:text-xl">
        {jobData.client}
      </h4>
      <h5 className=" text-sm font-semibold mdlg:text-base">
        {jobData.workType}
      </h5>
      <p className="py-2 text-justify text-sm mdlg:text-base ">
        {jobData.description}
      </p>
      <Link
        href={jobData.link}
        target="no-opener"
        className=" text-base font-bold text-teal sm:text-lg mdlg:text-xl "
      >
        {`Visit the ${jobData.client} site`}
      </Link>
    </article>
  );
}
