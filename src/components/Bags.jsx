const Bags = (props) => {
    return (
        <div className="px-2 h-[15rem] mb-10 rounded-lg shadow-lg shadow-gray-400 cursor-pointer hover:shadow-2xl hover:shadow-gray-500 max-lg:ml-0 max-lg:w-[9rem]">
        <img className="w-36 pl-4" src={props.Data.IMG} alt="" />
        <h5 className="text-[14.6px] font-[450] mb-3 w-40 pl-1 text-left max-lg:text-[13.8px] max-lg:w-[8rem] max-lg:mt-2  max-md:text-center max-md:font-[400]">{props.Data.h5}</h5>
        <h6 className="pt-3 text-[14.5px] font-semibold pl-1  max-md:text-center max-md:font-[600] max-md:text-[18px]">{props.Data.h6}</h6>
    </div>
    )
}

export default Bags;


