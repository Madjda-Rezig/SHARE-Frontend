import React from "react";
import imagehero from "../../Assets/mm.jpg";
export default function Artbord() {
  return (
    <div
      className="hero min-h-screen bg-base-200"
      style={{
        backgroundImage: `url(${imagehero})`,
      }}
    >
      <div className="bg-slate-100 pt-10 pb-14 w-2/5 rounded-lg mt-4 mb-10 grid place-items-center opacity-80 ">
        <h1 className="text-2xl text-center">INSCRIPTION</h1>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Nom :</span>
          </label>
          <input
            type="text"
            placeholder="Votre Nom"
            className="input input-bordered w-full max-w-xs "
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Prénom :</span>
          </label>
          <input
            type="text"
            placeholder="Votre Prénom"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email :</span>
          </label>
          <input
            type="text"
            placeholder="Votre Email"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Numéro :</span>
          </label>
          <input
            type="text"
            placeholder="Votre Numéro"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Date De Naissance :</span>
          </label>
          <input
            type="text"
            placeholder="Exemple:1998-09-08"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Mot De Passe :</span>
          </label>
          <input
            type="text"
            placeholder="Votre Mot De Passe"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Genre :</span>
          </label>
          <select className="input input-bordered w-full max-w-xs">
            <option disabled selected></option>
            <option>Femme</option>
            <option>Homme</option>
          </select>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Role :</span>
          </label>
          <select className="input input-bordered w-full max-w-xs">
            <option disabled selected></option>
            <option>admin</option>
            <option>utilisateur</option>
          </select>
        </div>
        <button className="btn btn-wide mt-14">Inscription</button>
      </div>
    </div>
  );
}
