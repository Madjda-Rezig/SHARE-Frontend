import Footer from "../Component/Footer/Footer.jsx";
import Sidebar from "../Component/Sidebar/Sidebar.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const navigate = useNavigate();
  const user = localStorage.getItem("User");
  useEffect(() => {
    if (!user) navigate("/Login");
  }, []);
  return (
    <div className="">
      <Sidebar />

      <Footer />
    </div>
  );
}
