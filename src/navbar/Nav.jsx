import Right from "./Right";
import Left from "./Left";
import Search from "./Search";
const Nav = () => {


  return (
    <>
      <div className="flex justify-between items-center gap-10 z-50 p-5 sticky top-0 bg-white">
        <Left />
        <Search />
        <Right />
      </div>
      <hr />
    </>
  );
};

export default Nav;
