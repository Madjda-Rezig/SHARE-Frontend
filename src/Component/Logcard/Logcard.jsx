import hh from "../../Assets/mm.jpg";
const Logcard = () => {
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email : </span>
              </label>
              <input type="text" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Mot de passe : </span>
              </label>
              <input type="text" className="input input-bordered" />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Mot de passe oublié?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Connexion</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logcard;
