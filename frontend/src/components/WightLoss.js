import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";

const WeightLoss = () => {
  const [menu1, setMenu1] = useState("");
  const [resgot, setResgot] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const handleClick = (day) => {
    setSelectedDay(day);
  };
  const weightLoss = async () => {
    const response = await fetch("http://localhost:2000/services/weightloss", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      // body: JSON.stringify(),
    });

    const result = await response.json();

    if (!response.ok) {
      toast.error(result.message,{
        position:"top-center"
      })
      // setResgot(true);
      return;
    }
    if (response.ok) {
      var x = await JSON.parse(result.data.function_call.arguments);
      setMenu1(x);
      setResgot(true);
      return;
    }
  };
  useEffect(() => {
    weightLoss();
  }, []);
  const DayCard = ({ day }) => (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg bg-[#4a5976]"
      onClick={() => handleClick(day)}
    >
      {console.log(menu1)}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{day}</div>
      </div>
    </div>
  );
  const NumberCard = ({ number }) => (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg bg-[#4a5976] transform rotate-180"
      onClick={() => handleClick(null)}
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-4  transform rotate-180">
          Calories: {menu1.days[number - 1].totalNutrients.calories}{" "}
          Carbohydrates: {menu1.days[number - 1].totalNutrients.carbohydrates}{" "}
          Fats: {menu1.days[number - 1].totalNutrients.fats} Protein:{" "}
          {menu1.days[number - 1].totalNutrients.proteins} Fiber:{" "}
          {menu1.days[number - 1].totalNutrients.fibers}
        </div>
        <div className="font-bold text-xl mb-4  transform rotate-180">
          Dinner: {menu1.days[number - 1].dinner}
        </div>
        <div className="font-bold text-xl mb-4  transform rotate-180">
          Lunch: {menu1.days[number - 1].lunch}
        </div>
        <div className="font-bold text-xl mb-4  transform rotate-180">
          Breakfast: {menu1.days[number - 1].breakfast}
        </div>
      </div>
    </div>
  );
  return (
    <div className="bg-[#233037] pt-28 px-4 min-h-screen text-white">
      Welcome to weight Loss
      
      {resgot ? (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {days.map((day, index) => (
            <div key={index} className="relative ">
              {/* {console.log(menu1)} */}
              {selectedDay === day ? (
                <NumberCard number={index + 1} />
              ) : (
                <DayCard day={day} />
              )}
            </div>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
export default WeightLoss;
