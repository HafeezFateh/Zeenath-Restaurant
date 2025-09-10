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

  {/* Desktop Menu (hidden on mobile, visible on lg+) */}
  <div className="hidden lg:flex items-center gap-6 rounded-xl bg-stone-900/30 shadow-lg p-2 px-7">
    <a href="#about" className="font-semibold text-stone-900 hover:text-white transition">About</a>
    <a href="#menu" className="font-semibold text-stone-900 hover:text-white transition">Menu</a>
    <a href="#contact" className="font-semibold text-stone-900 hover:text-white transition">Contact us</a>
  </div>

  {/* Mobile Menu Icon (visible on mobile, hidden on lg+) */}
  <button onClick={toggleMenu} className="lg:hidden text-stone-900">
    <span className="material-symbols-outlined">menu</span>
  </button>
</div>


        {open  && 
         <div className="-mt-5 rounded-xl bg-stone-800/70 shadow-lg flex flex-col w-fit float-right backdrop-blur-2xl mx-5 items-center p-3 px-10 gap-4">
                <a href="#about" className="font-semibold text-stone-300">About</a>
                <a href="#menu" className="font-semibold text-stone-300">Menu</a>
                <a href="#contact" className="font-semibold text-stone-300">Contact us</a>
         </div>
         }
        

        <div className="max-w-7xl mx-auto mt-30 lg:mt-25 gap-2 flex  items-center justify-center flex-col ">
            <h1 className="text-3xl text-center px-10 lg:text-6xl  font-semibold font-inter lg:text-center justify-center items-center  bg-gradient-to-t from-stone-600 to-stone-900 text-transparent bg-clip-text">Welcome to Zeenath Restaurant</h1>
           
            <div className="flex text-red-700/80 gap-3 text-[10px] font-light  lg:text-2xl ">
                <p>Zestful </p>
                <p className="text-stone-800">Exotic </p>
                <p>Elegant </p>
                <p className="text-stone-800">Nourishing </p>
                <p>Authentic </p>
                <p className="text-stone-800">Tasty </p>
                <p>Homely </p>
            </div>
            
        </div>

        <div className="px-7 py-5 flex gap-5 justify-center">
            <a href="https://share.google/k6hbx9RhxwXiiqZg9" className="flex gap-2 text-stone-200 font-inter rounded-xl p-2 px-5 w-fit bg-stone-800">
                Rate us
                <span class="material-symbols-outlined ">star</span>
            </a>
             <a className="flex gap-2 text-stone-200 font-inter  rounded-xl p-2 px-5 w-fit bg-stone-800">
                Offers
                <span class="material-symbols-outlined">percent_discount</span>
            </a>
        </div>

        <div className="flex justify-center mt-10 ">
            <img src="./logo.svg" alt=""  className="opacity-90"/>
        </div>

        <div id="about" className="flex max-w-7xl mx-auto flex-col p-7 lg:items-center justify-center mt-40">
            <h1 className="text-3xl lg:text-5xl font-semibold text-stone-900">About</h1>
            <p className="text-2xl pt-5 lg:p-3 text-justify text-stone-700 lg:text-center">With over 50 years of experience, our restaurant has become a trusted name in Gudiyatham, serving generations of families with authentic flavors and warm service. What began as a small family-run eatery has now grown into multiple restaurants, each carrying forward the same tradition of taste, quality, and hospitality that has defined us for half a century. </p>

        </div>

        <div id="menu" className="max-w-7xl mx-auto p-7">
            <h1 className="font-semibold text-3xl lg:text-5xl text-stone-900 text-center p-10">Our Menu</h1>
            <div className="grid grid-cols-1 gap-7 lg:grid-cols-3 lg:gap-4">
                <div className="rounded-xl    gap-5 border border-stone-400  p-3 shadow">
                    <img src="./biryani.jpg" className="rounded-xl w-full h-[200px]" alt="" />
                    <p className="font-semibold text-xl text-center p-2 text-stone-800">Biryani</p>
                </div>
                <div className="rounded-xl    gap-5 border border-stone-400  p-3 shadow">
                    <img src="./tandoori.jpg" className="rounded-xl w-full h-[200px]" alt="" />
                    <p className="font-semibold text-xl text-center p-2 text-stone-800">Tandoori Chicken</p>
                </div>
                  <div className="rounded-xl    gap-5 border border-stone-400  p-3 shadow">
                    <img src="./bc.jpeg" className="rounded-xl w-full h-[200px]" alt="" />
                    <p className="font-semibold text-xl text-center p-2 text-stone-800">Butter Chicken</p>
                </div>
                   <div className="rounded-xl    gap-5 border border-stone-400  p-3 shadow">
                    <img src="./paneer.jpg" className="rounded-xl w-full h-[200px]" alt="" />
                    <p className="font-semibold text-xl text-center p-2 text-stone-800">Butter Paneer</p>
                </div>
                <div className="rounded-xl    gap-5 border border-stone-400  p-3 shadow">
                    <img src="./fish.jpg" className="rounded-xl w-full h-[200px]" alt="" />
                    <p className="font-semibold text-xl text-center p-2 text-stone-800">Wanjiram Fish</p>
                </div>
                <div className="rounded-xl    gap-5 border border-stone-400  p-3 shadow">
                    <img src="./prawn.jpg" className="rounded-xl w-full h-[200px]" alt="" />
                    <p className="font-semibold text-xl text-center p-2 text-stone-800">Prawns</p>
                </div>
                 <div className="rounded-xl    gap-5 border border-stone-400  p-3 shadow">
                    <img src="./paya.jpg" className="rounded-xl w-full h-[200px]" alt="" />
                    <p className="font-semibold text-xl text-center p-2 text-stone-800">Gobi manchurian</p>
                </div>
                <div className="rounded-xl    gap-5 border border-stone-400  p-3 shadow">
                    <img src="./gobim.jpg" className="rounded-xl w-full h-[200px]" alt="" />
                    <p className="font-semibold text-xl text-center p-2 text-stone-800">Gobi manchurian</p>
                </div>
                <div className="rounded-xl    gap-5 border border-stone-400  p-3 shadow">
                    <img src="./paratha.jpg" className="rounded-xl w-full h-[200px]" alt="" />
                    <p className="font-semibold text-xl text-center p-2 text-stone-800">Puff parota</p>
                </div>
                <div className="rounded-xl    gap-5 border border-stone-400  p-3 shadow">
                    <img src="./roti.jpg" className="rounded-xl w-full h-[200px]" alt="" />
                    <p className="font-semibold text-xl text-center p-2 text-stone-800">Butter/plain Naan</p>
                </div>
                <div className="rounded-xl    gap-5 border border-stone-400  p-3 shadow">
                    <img src="./fr.jpg" className="rounded-xl w-full h-[200px]" alt="" />
                    <p className="font-semibold text-xl text-center p-2 text-stone-800">Fried Rice</p>
                </div>
                  <div className="rounded-xl    gap-5 border border-stone-400  p-3 shadow">
                    <img src="./noodles.jpeg" className="rounded-xl w-full h-[200px]" alt="" />
                    <p className="font-semibold text-xl text-center p-2 text-stone-800">Fried Noodles</p>
                </div>
            </div>
            
        </div>

        <div id="contact" className="max-w-7xl mx-auto mt-40 p-10">
            <h1 className="text-3xl lg:text-5xl p-10 text-stone-900 text-center font-semibold">Contact us</h1>
            <a href="https://wa.me/919789706557?text=Hello,%20I%20have%20a%20suggestion!" target="_blank" className="block text-center bg-red-700 p-2 rounded-xl text-white  font-inter">Drop a message</a>
            {/* <form action="" className="">
                <label htmlFor="" className="block py-2 text-xl text-stone-800 ">Name</label>
                <input type="text" className="bg-stone-500/30 w-full rounded-lg p-1"/>
                <label htmlFor="" className="block py-2 text-xl text-stone-800 ">Email</label>
                <input type="text" className="bg-stone-500/30 w-full rounded-lg p-1" />
                <label htmlFor="" className="block py-2 text-xl text-stone-800 ">Message</label>
                <input type="text" className="bg-stone-500/30 w-full rounded-lg p-1" />
                <div className="flex justify-end mt-10">
                    <input type="submit" className="bg-lime-700/90 text-stone-900 font-semibold px-20 py-2 rounded-lg" />
                </div>
            </form> */}
        </div>

        <footer className=" mt-50 border-t border-red-700/30 flex flex-col items-center justify-center  bg-stone-300/10 ">
            <img src="./Zeenath1.svg" className="w-[400px] p-10 " alt="" />
            <div className="flex justify-end w-full">
                <div className="p-1 m-4 px-4 bg-stone-600/20 rounded-2xl flex items-center gap-3">
                    <img src="./greatxt.png" className="w-[30px]" alt="" />
                    <p className="text-stone-900  font-inter">Made by GreatXt</p>
                </div>
            </div>
            <p className="p-2 font-light text-stone-500 text-sm text-center border-t border-stone-500/10 w-full">Zeenath Restaurant 2025, All rights reserved </p>
        </footer>
    </div>
  );
}

export default Home;