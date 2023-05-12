import imagehero from "../../Assets/3.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${imagehero})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">BIENVENU</h1>
          <p className="mb-5">
            Notre site est un espace où vous pouvez vous connecter avec des
            personnes du monde entier pour échanger des idées inspirantes et
            innovantes. Rejoignez notre communauté dynamique et commencez à
            explorer, discuter et co-créer des idées qui pourraient changer
            votre vie et celle des autres.
          </p>
          <Link to={"Login"}>
            <button className="btn btn-primary">Commencer</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
