import hh from "../../Assets/mm.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Logcard = () => {
  const user = localStorage.getItem("User") || null;
  const navigate = useNavigate();
  useEffect(() => {
    if (user) navigate("/Account");
  }, []);
  const [loginInput, setLoginInput] = useState({
    mail: "",
    mot_de_passe: "",
  });
  const handleOnChange = (e) => {
    setLoginInput((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/authentification/login",
        loginInput
      );
      if (response.data) {
        localStorage.setItem("User", JSON.stringify(response.data));
        navigate("/Account");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div
      className="hero min-h-screen bg-base-200"
      style={{
        backgroundImage: `url(${hh})`,
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Connect toi !</h1>
          <p className="py-10 text-2xl font-semibold ">
            Rejoignez notre communauté dynamique et commencez à explorer,
            discuter et co-créer des idées qui pourraient changer votre vie et
            celle des autres.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleOnSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email : </span>
                </label>
                <input
                  type="text"
                  value={loginInput.mail}
                  name="mail"
                  className="input input-bordered"
                  onChange={handleOnChange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Mot de passe : </span>
                </label>
                <input
                  type="password"
                  name="mot_de_passe"
                  className="input input-bordered"
                  value={loginInput.mot_de_passe}
                  onChange={handleOnChange}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Mot de passe oublié?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Connexion
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logcard;
