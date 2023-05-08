const Shoes = (props) => {
    return(
        <div>
             <img className="w-[17rem] cursor-pointer hover:shadow-2xl" src={props.Data.img} alt="" />
        </div>
    )
}

export default Shoes;