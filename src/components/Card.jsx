import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";

const Card = ( {id, name, image, price, type}) => {
  return (
    <div key={id} className="w-70 h-100 bg-white p-4 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-300 cursor-poi">
      <div className="w-full h-[60%] overflow-hidden rounded-lg">
        <img src={image} alt={image} className="object-cover" />
      </div>
      <div className="text-2xl font-semibold my-3">{name}</div>
      <div className="w-full flex justify-between items-center my-2">
        <div className="text-lg font-bold text-green-500">Rs {price}</div>
        <div className="text-lg font-semibold text-green-500 flex justify-center items-center gap-2">
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}<span>{type}</span>
        </div>
      </div>
      <button className="w-full p-3 rounded-lg my-2 text-white bg-green-500 hover:bg-green-400 cursor-pointer transition-all duration-200">Add to Dish</button>
    </div>
  )
}

export default Card;
