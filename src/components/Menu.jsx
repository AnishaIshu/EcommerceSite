

const Menu = (props) => {

  return (
  
    <section>
      <div className='menuImg px-2 py-2 rounded-lg shadow-lg hover:bg-slate-100 cursor-pointer'>
        <img className='w-[6.7rem]' src={props.Data.img} alt='' />
      </div>
      <p className='text-xs text-center pt-3 mb-5 cursor-pointer hover:underline'>
        {props.Data.p}
      </p>
</section>
  );
};

export default Menu;
