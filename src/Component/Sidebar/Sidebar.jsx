import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cardarticle from "../Cardarticle/Cardarticle";
import axios from "axios";
import { toast } from "react-toastify";

const Sidebar = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fecthData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/articles");
        if (response.data) {
          setData(response.data);
        }
      } catch (error) {
        toast.error(error);
      }
    };
    fecthData();
  }, []);

  return (
    <div className="drawer drawer-mobile overflow-hidden">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">
        {/* <!-- Page content here --> */}
        {/* <!-- LA  CARTE PUBLICATION --> */}
        <Card />
        {/* <!-- LA  CARTE POSTE --> */}
        {data.map((merde) => (
          <Cardarticle merde={merde} />
        ))}

        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          Toutes Les Catégories
          {/* <!-- Sidebar content here --> */}
          {data.map((category) => (
            <li>
              <a>{category.categorie}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
