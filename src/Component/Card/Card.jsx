import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const [ArticleInput, setArticleInput] = useState({
    titre: "",
    contenu: "",
    // photo: "",
    categorie: "",
  });
  console.log(ArticleInput);
  const handleOnChange = (e) => {
    setArticleInput((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/articles/",
        ArticleInput
      );
      setArticleInput("");
      if (response.data) {
        toast.success("votre article est ajouter");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <div className="card w-3/4 bg-base-100 shadow-xl mb-12">
      <div className="card-body">
        <form onSubmit={handleOnSubmit}>
          <h2 className="card-title">Ajouter un Article!</h2>
          <input
            type="text"
            name="titre"
            value={ArticleInput.titre}
            placeholder="Le Titre"
            onChange={handleOnChange}
            className="input input-bordered w-full max-w-5xl mt-6"
          />
          <input
            type="text"
            name="categorie"
            value={ArticleInput.categorie}
            placeholder="Catégorie"
            onChange={handleOnChange}
            className="input input-bordered w-full max-w-5xl mt-6 mb-6"
          />
          <input
            type="text"
            name="contenu"
            value={ArticleInput.contenu}
            placeholder="Contenu de votre Article"
            onChange={handleOnChange}
            className="input input-bordered w-full max-w-5xl mt-6 mb-6"
          />

          <div className="card-actions justify-end">
            {/* <input
              type="file"
              name="photo"
              value={ArticleInput.photo}
              onChange={handleOnChange}
              className="file-input file-input-bordered file-input-primary w-full max-w-xs"
            /> */}
            <button type="submit" className="btn btn-primary ml-20">
              Publier
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Card;
