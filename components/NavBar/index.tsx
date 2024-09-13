"use client";
import { useAppDispatch } from "@/redux/hooks";
import { setSearchQuery } from "@/redux/features/moviesDataBaseSlice";
import "tailwindcss/tailwind.css";
import Image from "next/image";

function NavBar() {
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <header className=" w-full h-[50px] sm:h-20 bg-darkBlue fixed top-0 z-20 flex fixed">
      <input
        className="b-red m-auto py-1 px-2 sm:w-[500px]"
        type="text"
        placeholder="Search"
        onChange={handleChange}
      />
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
