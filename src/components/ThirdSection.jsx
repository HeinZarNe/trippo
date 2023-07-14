import { useEffect, useState } from "react";

export default function ThirdSection() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(1);
  useEffect(() => {
    const res = fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data.slice(0, 5)));
  }, []);

  return (
    <div className="flex flex-row justify-center items-center gap-10 px-36">
      <div className="w-[45%]">
        <img src="./assets/case-study-trip-pro-our-challenges.png" alt="" />
      </div>
      <div className="flex flex-col gap-8">
        <span className="font-bold text-3xl text-black">
          OUR <span className="text-[#2DC4EA]">CHALLENGES</span>
        </span>
        <div className="flex flex-col gap-5 flex-1">
          {Array.isArray(data) &&
            data.map((item) => (
              <div
                key={item.id}
                className={
                  selected !== item.id
                    ? "flex cursor-pointer flex-row items-center item-card"
                    : "flex cursor-pointer flex-row items-center item-card-buff"
                }
                onClick={(_) => setSelected(item.id)}
              >
                <span
                  className={
                    selected !== item.id
                      ? "text-4xl font-bold p-4 text-[#2DC4EA]"
                      : "text-4xl font-bold p-4 text-[#ffffff50]"
                  }
                >
                  0{item.id}
                </span>
                <span
                  className={
                    selected !== item.id
                      ? "text-base text-[#000]"
                      : "text-base text-[#fff]"
                  }
                >
                  {item.title}
                </span>
              </div>
            ))}
        </div>
        <button className="w-[180px] h-[50px] rounded-[50px] section-button text-lg font-bold text-white">
          VIEW MORE
        </button>
      </div>
    </div>
  );
}
