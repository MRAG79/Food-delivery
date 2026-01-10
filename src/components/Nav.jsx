import { useContext, useEffect } from "react";
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from "../context/UserContext";
import { food_items } from "../food";

function Nav() {
  let { input, setInput, cate, setCate } = useContext(dataContext);
  useEffect(() => {
    let newlist = food_items.filter(
      (item) =>
        item.food_name.includes(input) ||
        item.food_name.toLowerCase().includes(input)
    );
    setCate(newlist);
  }, [input]);
  return (
    <div className="w-full h-25 flex justify-between items-center px-5 md:px-8">
      <div className="h-15 w-15 bg-white flex justify-center items-center rounded-md shadow-lg">
        <MdFastfood className="w-7.5 h-7.5 text-green-500" />
      </div>
      <form
        action=""
        className="w-[45%] h-15 bg-white flex items-center px-5 gap-5 rounded-md shadow-lg md:w-[70%]"
        onSubmit={(e) => e.preventDefault()}
      >
        <IoSearch className="w-7.5 h-7.5 text-green-500" />
        <input
          type="text"
          placeholder="Search items..."
          className="w-full outline-none text-[16px] md:text-[20px]"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>
      <div className="h-15 w-15 bg-white flex justify-center items-center rounded-md shadow-lg relative">
        <span className="absolute top-0 right-2 text-green-500 font-bold text=[18px]">
          0
        </span>
        <LuShoppingBag className="w-7.5 h-7.5 text-green-500 " />
      </div>
    </div>
  );
}

export default Nav;
