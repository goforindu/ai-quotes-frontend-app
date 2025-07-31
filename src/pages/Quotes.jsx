import QuoteFilter from "../components/QuoteFilter";

const Quotes = () => {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center bg-center bg-no-repeat bg-cover bg-fixed px-4 py-10"
      style={{
        backgroundImage: "url('/assets/krishna_bg.png')",
      }}
    >
      <h1 className="text-white text-3xl font-bold mb-6 text-center bg-black/30 p-4 rounded-xl">
        श्रीकृष्ण उद्धरण संग्रह
      </h1>
      <QuoteFilter />
    </div>
  );
};

export default Quotes;
