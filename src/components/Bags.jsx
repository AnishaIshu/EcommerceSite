const Bags = (props) => {
    return (
        <div className="px-2 h-[15rem] mb-10 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl">
        <img className="w-36 pl-4" src={props.Data.IMG} alt="" />
        <h5 className="text-xs font-normal w-40 pl-1 text-left">{props.Data.h5}</h5>
        <h6 className="pt-3 text-sm font-semibold pl-1">{props.Data.h6}</h6>
    </div>
    )
}

export default Bags;