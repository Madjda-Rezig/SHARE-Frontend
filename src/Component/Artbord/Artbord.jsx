import React from "react";
import imagehero from "../../Assets/mm.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Artbord = () => {
  const navigate = useNavigate();

  const [RegisterInput, setRegisterInput] = useState({
    nom: "",
    prenom: "",
    mail: "",
    date_de_naissance: "",
    sexe: "",
    mot_de_passe: "",
    num_tel: "",
    role: "",
  });
  console.log(RegisterInput);
  const handleOnChange = (e) => {
    setRegisterInput((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/users/add",
        RegisterInput
      );
      if (response.data) {
        localStorage.setItem(
          "User",
          JSON.stringify({
            _id: response.data._id,
            token: response.data.token,
            refreshToken: response.data.refreshToken,
          })
        );
        navigate("/Account");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <div
      className="hero min-h-screen bg-base-200"
      style={{
        backgroundImage: `url(${imagehero})`,
      }}
    >
      <div className="bg-slate-100 pt-10 pb-14 w-2/5 rounded-lg mt-4 mb-10 grid place-items-center opacity-80 ">
        <h1 className="text-2xl text-center">INSCRIPTION</h1>
        <form onSubmit={handleOnSubmit}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Nom :</span>
            </label>
            <input
              type="text"
              value={RegisterInput.nom}
              name="nom"
              placeholder="Votre Nom"
              className="input input-bordered w-full max-w-xs "
              onChange={handleOnChange}
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Prénom :</span>
            </label>
            <input
              type="text"
              name="prenom"
              placeholder="Votre Prénom"
              value={RegisterInput.prenom}
              onChange={handleOnChange}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email :</span>
            </label>
            <input
              type="text"
              value={RegisterInput.mail}
              name="mail"
              placeholder="Votre Email"
              onChange={handleOnChange}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Numéro :</span>
            </label>
            <input
              type="number"
              name="num_tel"
              placeholder="Votre Numéro"
              className="input input-bordered w-full max-w-xs"
              value={RegisterInput.num_tel}
              onChange={handleOnChange}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Date De Naissance :</span>
            </label>
            <input
              type="date"
              name="date_de_naissance"
              placeholder="Exemple:1998-09-08"
              className="input input-bordered w-full max-w-xs"
              value={RegisterInput.date_de_naissance}
              onChange={handleOnChange}
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Mot De Passe :</span>
            </label>
            <input
              type="password"
              name="mot_de_passe"
              placeholder="Votre Mot De Passe"
              className="input input-bordered w-full max-w-xs"
              value={RegisterInput.mot_de_passe}
              onChange={handleOnChange}
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Genre :</span>
            </label>
            <select
              value={RegisterInput.sexe}
              name="sexe"
              onChange={handleOnChange}
              className="input input-bordered w-full max-w-xs"
            >
              <option disabled selected></option>
              <option>Femme</option>
              <option>Homme</option>
            </select>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Role :</span>
            </label>
            <select
              value={RegisterInput.role}
              name="role"
              onChange={handleOnChange}
              className="input input-bordered w-full max-w-xs"
            >
              <option disabled selected></option>
              <option>admin</option>
              <option>utilisateur</option>
            </select>
          </div>
          <button type="submit" className="btn btn-wide mt-14">
            Inscription
          </button>
        </form>
      </div>
    </div>
  );
};

export default Artbord;
