import responsive from "../assets/responsive.svg";
import cart from "../assets/shopping-cart.svg";
import wordpress from "../assets/wordpress-development-logo-banner.svg";
export default function Hero() {
  return (
    <div className=" text-white hero-container w-full overflow-hidden">
      <div className="hero w-full">
        <div className="w-full h-full bg-[#00000070] flex flex-col px-[65px] pt-[70px]  items-center gap-5">
          <span className=" font-thin text-4xl ">
            TRIPPRO - AN ECOMMERCE SOLUTION
          </span>
          <span className="text-center text-base ">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </span>
          <div className="flex flex-row gap-6 items-center">
            <div className="flex flex-row justify-center items-center gap-3">
              <p className="text-xl font-semibold">Built for:</p>
              <div className="w-[55px] h-auto">
                <img className="w-full" src={responsive} alt="" />
              </div>
            </div>
            <div className="w-[2px] h-4/5 bg-white " />
            <div className="flex flex-row justify-center items-center gap-3">
              <div>
                <p className="text-xl font-normal">Technologies:</p>
                <p className="text-xl font-semibold">Wordpress</p>
              </div>
              <div className="w-[59px] h-auto">
                <img className="w-full" src={wordpress} alt="" />
              </div>
            </div>
            <div className="w-[2px] h-4/5 bg-white " />

            <div className="flex flex-row justify-center items-center gap-3">
              <div>
                <p className="text-xl font-normal">Industry:</p>
                <p className="text-xl font-semibold">Ecommerce</p>
              </div>
              <div className="w-[63px] h-auto">
                <img className="w-full" src={cart} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="laptop-container h-[50vh]  mt-[-100px] ">
        <div className="w-[500px] laptop py-[30px]  px-[68px]   relative my-0 mx-auto">
          <div>
            <img
              className="w-full"
              src="./assets/devwp.visibleone.net_tripprohk_.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
