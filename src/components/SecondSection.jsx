export default function SecondSection() {
  return (
    <div className="flex flex-row justify-center items-center p-10 gap-32 px-36">
      <div className="flex flex-col gap-3 flex-1">
        <span className="font-bold text-3xl text-black">
          ABOUT <span className="text-[#2DC4EA]">TRIPPRO</span>
        </span>
        <hr className="border-[#2DC4EA] border-[1px] w-[120px]" />
        <p className="text-black text-sm">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita
        </p>
        <button className="w-[230px] h-[50px] rounded-[50px] section-button text-lg font-bold text-white">
          TOUR TO WEBSITE
        </button>
      </div>

      <div className="w-[37%]">
        <img src="./assets/Tablet-with-red-circle.png" />
      </div>
    </div>
  );
}
