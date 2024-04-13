import { useEffect, useState } from "react";
const WeightGain = () => {
  const [resp, setresp] = useState(false);
  // let index = 0;
  const [menuData, setMenuData] = useState();
  const [err, setErr] = useState("");
  const [errbool, setErrbool] = useState(false);
  // console.log(menuData.Monday)
  const getWeightDainDiet = async () => {
    const response = await fetch("http://localhost:2000/services/weightgain", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const result = await response.json();
    if (response.ok) {
      const x = await JSON.parse(
        result.data.choices[0].message.function_call.arguments
      );
      setMenuData(x);
      setresp(true);
      console.log(menuData);
      return;
    }
    if (!response.ok) {
      setErr("Error in Network");
      setErrbool(true);
      return;
    }
  };
  useEffect(() => {
    getWeightDainDiet();
  }, []);
  const [selectedDay, setSelectedDay] = useState(null);

  const handleClick = (day) => {
    setSelectedDay(day);
  };
  const DayCard = ({ day }) => (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg bg-blue-100"
      onClick={() => handleClick(day)}
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{day}</div>
      </div>
    </div>
  );

  const NumberCard = ({ number }) => (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg bg-green-100 transform rotate-180"
      onClick={() => handleClick(null)}
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2  transform rotate-180">
          Calories:
          {menuData.days[number - 1].totalNutrients.calories}
          <br />
          Carbohydrates:
          {menuData.days[number - 1].totalNutrients.carbohydrates}
          <br />
          Fats:
          {menuData.days[number - 1].totalNutrients.fats}
          <br />
          Protien:
          {menuData.days[number - 1].totalNutrients.protiens}
          <br />
          Fiber:
          {menuData.days[number - 1].totalNutrients.fibers}
        </div>
        <div className="font-bold text-xl mb-2  transform rotate-180">
          <div>
            Dinner
            <br />
          </div>
          {menuData.days[number - 1].dinner}
        </div>
        <div className="font-bold text-xl mb-2  transform rotate-180">
          Lunch
          <br />
          {menuData.days[number - 1].lunch}
        </div>
        <div className="font-bold text-xl mb-2  transform rotate-180">
          Breakfast
          <br />
          {menuData.days[number - 1].breakfast}
        </div>
      </div>
    </div>
  );
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div>
      {/* {console.log(menuData.Monday.Breakfast.Item)} */}
      {resp ? (
        <div>
          {errbool ? (
            <h1>{err}</h1>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              {days.map((day, index) => (
                <div key={index} className="relative">
                  {selectedDay === day ? (
                    <NumberCard number={index + 1} menuData={menuData} />
                  ) : (
                    <DayCard day={day} />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center z-[-1]">
          {/* <h1 className="">Loading...</h1> */}
          <div> <img class="w-20 h-20 animate-spin" src="https://www.svgrepo.com/show/474682/loading.svg" alt="Loading icon"></img></div>
        </div>
      )}
      weight gain
    </div>
  );
};
export default WeightGain;
