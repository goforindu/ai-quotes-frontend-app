import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[url('/assets/krishna_bg.png')] bg-center bg-cover bg-no-repeat text-white px-4">
      <div className="backdrop-blur-md bg-white/10 p-8 rounded-2xl shadow-2xl text-center max-w-xl border border-white/30">
        <h1 className="text-4xl font-bold mb-4 font-serif text-white drop-shadow-lg">
          🌸{" "}
          <span className="text-yellow-300">
            Welcome to Shree Krishna Quotes
          </span>
        </h1>

        <p className="text-lg mb-6 leading-relaxed text-white/90 font-light drop-shadow-sm">
          <span className="font-semibold">
            Find peace, purpose, and divine guidance
          </span>{" "}
          through the timeless words of{" "}
          <span className="font-semibold text-yellow-200">Shree Krishna</span>.
        </p>

        {/* Background music (optional) */}
        <audio autoPlay loop controls className="mx-auto mb-4">
          <source src="/assets/hare-krishna-meditation.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        {/* Explore Button */}
        <Link
          to="/quotes"
          className="bg-yellow-300 text-black font-semibold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300 shadow-md"
        >
          🌼 Explore Divine Quotes
        </Link>
      </div>
    </div>
  );
};

export default Home;
