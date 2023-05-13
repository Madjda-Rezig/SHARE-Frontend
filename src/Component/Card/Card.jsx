import React from "react";
import imagehero from "../../Assets/mm.jpg";
const Card = () => {
  return (
    <div className="card w-2/6 bg-base-100 shadow-xl left-96 mt-10">
      <div className="card-body">
        <h2 className="card-title">Contenu de votre Article</h2>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <div className="card-actions justify-end">
          <input
            type="file"
            className="file-input file-input-bordered file-input-primary w-full max-w-xs"
          />
          <button className="btn btn-primary ">Poster</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
