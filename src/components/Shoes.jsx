const Shoes = (props) => {
    return(
        <div className="w-[94%] m-auto grid max-w-7xl md:grid-cols-4 grid-cols-2 gap-10 max-sm:gap-3">
             <img className="cursor-pointer hover:shadow-2xl" src="/images/shoeOne.png" alt="" />
             <img className="cursor-pointer hover:shadow-2xl" src="/images/shoeTwo.png" alt="" />
             <img className="cursor-pointer hover:shadow-2xl" src="/images/shoeThree.png" alt="" />
             <img className="cursor-pointer hover:shadow-2xl" src="/images/shoeFour.png" alt="" />
        </div>
    )
}

export default Shoes;