import Nav from "../components/Nav";
import Categories from "../Category";
import Card from "../components/Card";
import { food_items } from "../food";
import { useContext } from "react";
import { dataContext } from "../context/UserContext";
import { RxCross2 } from "react-icons/rx";

function Home() {
  let { cate, setCate, input } = useContext(dataContext);
  const filter = (category) => {
    if (category === "All") {
      setCate(food_items);
    } else {
      let newList = food_items.filter(
        (item) => item.food_category === category,
      );
      setCate(newList);
    }
  };
  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav />
      {!input ? (
        <div className="w-full flex flex-wrap justify-center items-center gap-5 px-5">
          {Categories.map((item) => {
            return (
              <div
                className="flex flex-col justify-center items-center w-30 h-30 bg-white rounded-md shadow-lg hover:bg-green-100 cursor-pointer transition-all duration-200"
                onClick={() => filter(item.name)}
              >
                {item.icon}
                {item.name}
              </div>
            );
          })}
        </div>
      ) : null}

      <div className="w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8">
        {cate.map((item) => (
          <Card
            id={item.id}
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            type={item.food_type}
          />
        ))}
      </div>

      <div className="w-[40vw] h-full fixed top-0 right-0 bg-white shadow-xl p-6">
        <header className="w-full flex justify-between items-center">
          <span className="text-green-400 font-semibold text-[18px]">Order items</span>
          <RxCross2 className="text-green-400 hover:text-gray-500 w-5 h-5 text-[18px] font-semibold cursor-pointer" />
        </header>
      </div>
    </div>
  );
}

export default Home;
