import { useState } from "react";

function Home() {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => setOpen(prev => !prev);

  return (
    <div>
      <div className="max-w-7xl mx-auto py-7 px-5 flex justify-between items-center">
  {/* Logo */}
  <img 
    src="./Zeenath1.svg" 
    alt="Zeenath Logo" 
    className="w-[220px] lg:w-[300px]" 
  />

  {/* Desktop Menu */}
  <div className="hidden lg:flex items-center gap-6 rounded-xl bg-stone-50/10 shadow-lg p-2 px-7">
    <a href="#about" className="font-semibold text-stone-300 hover:text-red-400 transition">About</a>
    <a href="#menu" className="font-semibold text-stone-300 hover:text-red-400 transition">Menu</a>
    <a href="#contact" className="font-semibold text-stone-300 hover:text-red-400 transition">Contact us</a>
  </div>

  {/* Mobile Menu Icon */}
  <button 
    onClick={toggleMenu} 
    className="lg:hidden text-stone-300 material-symbols-outlined"
  >
    <span className="lg:hidden">menu</span>
    
  </button>
</div>

        {open  && 
         <div className="-mt-5 rounded-xl bg-stone-50/10 shadow-lg flex flex-col w-fit float-right backdrop-blur-2xl mx-5 items-center p-3 px-10 gap-4">
                <a href="#about" className="font-semibold text-stone-300">About</a>
                <a href="#menu" className="font-semibold text-stone-300">Menu</a>
                <a href="#contact" className="font-semibold text-stone-300">Contact us</a>
         </div>
         }
        

        <div className="max-w-7xl mx-auto mt-30 lg:mt-40 gap-2 flex  items-center justify-center flex-col">
            <h1 className="text-3xl text-center px-10 lg:text-6xl font-semibold font-inter lg:text-center justify-center items-center  bg-gradient-to-r from-white to-stone-500 text-transparent bg-clip-text">Welcome to Zeenath Restaurant</h1>
            <div className="flex text-red-700/80 gap-3 text-xs font-light  lg:text-2xl">
                <p>Zestful </p>
                <p className="text-stone-400">Exotic </p>
                <p>Elegant </p>
                <p className="text-stone-400">Nourishing </p>
                <p>Authentic </p>
                <p className="text-stone-400">Tasty </p>
                <p>Homely </p>
            </div>
        </div>

        <div className="flex justify-center mt-10 ">
            <img src="./logo.svg" alt=""  className="opacity-30"/>
        </div>

        <div id="about" className="flex max-w-7xl mx-auto flex-col p-10 lg:items-center justify-center mt-40">
            <h1 className="text-5xl font-semibold text-stone-400">About</h1>
            <p className="text-2xl pt-5 lg:p-3 text-justify text-stone-500 lg:text-center">With over 50 years of experience, our restaurant has become a trusted name in Gudiyatham, serving generations of families with authentic flavors and warm service. What began as a small family-run eatery has now grown into multiple restaurants, each carrying forward the same tradition of taste, quality, and hospitality that has defined us for half a century. </p>

        </div>

        <div id="menu" className="max-w-7xl mx-auto p-10">
            <h1 className="font-semibold text-5xl text-stone-400 text-center p-10">Our Menu</h1>
            <div className="grid grid-cols-1 gap-7 lg:grid-cols-3 lg:gap-4">
                <div className="rounded-xl    gap-5 border border-stone-700  p-3 shadow">
                    <img src="./biryani.jpg" className="rounded-xl w-full h-[200px]" alt="" />
                    <p className="font-semibold text-xl text-center p-2 text-stone-400">Biryani</p>
                </div>
                <div className="rounded-xl    gap-5 border border-stone-700  p-3 shadow">
                    <img src="./curry.jpg" className="rounded-xl w-full h-[200px]" alt="" />
                    <p className="font-semibold text-xl text-center p-2 text-stone-400">Curry</p>
                </div>
                  <div className="rounded-xl    gap-5 border border-stone-700  p-3 shadow">
                    <img src="./bc.jpg" className="rounded-xl w-full h-[200px]" alt="" />
                    <p className="font-semibold text-xl text-center p-2 text-stone-400">Butter Chicken</p>
                </div>
            </div>
            
        </div>

        <div id="contact" className="max-w-7xl mx-auto mt-40 p-10">
            <h1 className="text-5xl p-10 text-stone-500 text-center font-semibold">Contact us</h1>
            <form action="" className="">
                <label htmlFor="" className="block py-2 text-xl text-stone-200 ">Name</label>
                <input type="text" className="bg-stone-500/30 w-full rounded-lg p-1"/>
                <label htmlFor="" className="block py-2 text-xl text-stone-200 ">Email</label>
                <input type="text" className="bg-stone-500/30 w-full rounded-lg p-1" />
                <label htmlFor="" className="block py-2 text-xl text-stone-200 ">Message</label>
                <input type="text" className="bg-stone-500/30 w-full rounded-lg p-1" />
                <div className="flex justify-end mt-10">
                    <input type="submit" className="bg-lime-700/50 text-stone-300 px-20 py-2 rounded-lg" />
                </div>
            </form>
        </div>

        <footer className=" mt-50 border-t border-red-700/30 flex flex-col items-center justify-center  bg-stone-950 ">
            <img src="./Zeenath1.svg" className="w-[400px] p-10 " alt="" />
            <div className="flex justify-end w-full">
                <div className="p-1 m-4 px-4 bg-stone-600/20 rounded-2xl flex items-center gap-3">
                    <img src="./greatxt.png" className="w-[30px]" alt="" />
                    <p className="text-stone-400  font-inter">Made by GreatXt</p>
                </div>
            </div>
            <p className="p-2 font-light text-stone-500 text-sm text-center border-t border-stone-500/10 w-full">Zeenath Restaurant 2025, All rights reserved </p>
        </footer>
    </div>
  );
}

export default Home;