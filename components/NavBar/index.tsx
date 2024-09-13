import "tailwindcss/tailwind.css";
import Image from "next/image";

function NavBar() {
  return (
    <header className="w-full h-[50px] sm:h-20 bg-darkBlue top-0 z-20 flex">
      <h1 className="b-red m-auto text-white text-30px">WOKI CHALLENGE</h1>
      <button>
        <Image
          className={
            "absolute right-10px top-5px w-40px bg-white rounded-full sm:top-20px sm:right-20px"
          }
          src={"/images/user-icon.png"}
          width={50}
          height={70}
          alt="user icon"
        />
      </button>
    </header>
  );
}

export default NavBar;
