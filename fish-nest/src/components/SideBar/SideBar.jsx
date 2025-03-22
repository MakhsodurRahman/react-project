import { NavLink } from "react-router-dom";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  const categories = [
    "All-Fish",
    "Goldfish",
    "Betta-Fish",
    "Cichlids",
    "Tetras",
    "Guppies",
    "Angelfish",
    "Discus",
    "Koi-Fish",
  ];

  return (
    <div>
      <ul className="bg-white p-3 rounded-md">
        {categories.map((fishCategory) => (
          <li className="p-1 text-center" key={fishCategory}>
            <NavLink
              to={`/fish/${fishCategory}`}
              className={`block w-full bg-gray-400 text-black text-center px-4 py-2 hover:bg-red-300 rounded-2xl`}
              activeClassName="bg-purple-500 text-white"
              exact
            >
              {fishCategory}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
