"use client";
import { useAppDispatch } from "@/redux/hooks";
import { setSearchQuery } from "@/redux/features/moviesDataBaseSlice";
import "tailwindcss/tailwind.css";

function NavBar() {
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <div className="w-full h-[50px] sm:h-20 bg-darkBlue fixed top-0 z-20 flex">
      <input
        className="b-red m-auto py-1 px-2 sm:w-[500px]"
        type="text"
        placeholder="Search"
        onChange={handleChange}
      />
    </div>
  );
}

export default NavBar;
