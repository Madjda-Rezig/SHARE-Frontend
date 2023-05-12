const Sidebar = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-10 w-80 bg-base-100 text-base-content text-lg">
          {" Catégorie "}

          <li className="pt-10">
            <a>Architechture</a>
          </li>
          <li>
            <a>Désign</a>
          </li>
          <li>
            <a>Cuisine</a>
          </li>
          <li>
            <a>Films</a>
          </li>
          <li>
            <a>Informatique</a>
          </li>
          <li>
            <a>Histoire</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
