import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Cardarticle = ({ merde }) => {
  return (
    <div className="card  bg-base-100 shadow-xl mt-6 mb-6 w-3/4">
      <div className="card-body items-center text-center">
        <form>
          <h1 className="card-title">{merde.titre}</h1>
          <h3 className="card-title font-normal ">{merde.categorie}</h3>
          <p>{merde.contenu}</p>
          <div className="card-actions">
            <button type="submit" className="btn btn-primary mt-4 justify-end">
              Afficher
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cardarticle;
