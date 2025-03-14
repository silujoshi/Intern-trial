function Card({ data }) {
  let completePercent = "w-[" + (data?.count && data?.total ? (data?.count / data?.total) * 100 : 100) + "%]";
  return (
    <div
      style={{ boxShadow: "0px 4px 15px 0px #0000001A" }}
      className="w-full flex flex-col p-[19px] font-semibold rounded-[6px]"
    >
      <h2 className="text-[16px] mb-[4px]">
        <span className="border h-[20px] w-[20px] mr-[2px]">Icon</span> {data?.title}
      </h2>
      <div className="w-full h-[2px] mb-[3px] bg-[#E4E4E4]">
        <div className={`${completePercent} h-full bg-[#672C91]`}></div>
      </div>
      <span className="text-[#666666] text-[10px] mb-[11px]">2 out of 6 sections completed</span>
      <span className="text-[#666666] text-[10px]  mb-[21px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
      </span>
      <button className="bg-[#672C91] text-[#FFFFFF] text-[10px] w-full rounded-[6px] h-[26px] flex justify-center items-center">
        Continue
      </button>
    </div>
  );
}

export default Card;