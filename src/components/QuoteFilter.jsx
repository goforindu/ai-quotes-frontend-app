import { useState, useEffect, useRef } from "react";
import axios from "axios";

// const quotes = [
//   {
//     text: "Set your heart upon your work but never its reward.",
//     mood: "Wisdom",
//   },
//   {
//     text: "Do everything you have to do, but not with greed, ego, lust, or envy but with love and devotion.",
//     mood: "Spiritual",
//   },
//   {
//     text: "A man is made by his beliefs. As he believes, so he becomes.",
//     mood: "Motivational",
//   },
//   { text: "The soul is neither born, and nor does it die.", mood: "Spiritual" },
//   {
//     text: "There is neither this world, nor the world beyond, nor happiness for the one who doubts.",
//     mood: "Wisdom",
//   },
//   {
//     text: "Whatever happened, happened for the good. Whatever is happening, is happening for the good.",
//     mood: "Peaceful",
//   },
//   {
//     text: "Change is the law of the universe. You can be a millionaire or a pauper in an instant.",
//     mood: "Wisdom",
//   },
//   {
//     text: "You have the right to work, but never to the fruit of the work.",
//     mood: "Spiritual",
//   },
//   {
//     text: "A person can rise through the efforts of his own mind; or draw himself down, in the same manner.",
//     mood: "Motivational",
//   },
//   {
//     text: "Calmness, gentleness, silence, self-restraint, and purity are the disciplines of the mind.",
//     mood: "Peaceful",
//   },
//   { text: "There is nothing lost or wasted in this life.", mood: "Peaceful" },
//   {
//     text: "Perform your duty with a calm mind and leave the rest to Me.",
//     mood: "Spiritual",
//   },
//   { text: "He who has no attachments can really love others.", mood: "Wisdom" },
//   {
//     text: "When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place.",
//     mood: "Peaceful",
//   },
//   {
//     text: "Detachment from material things is the way to inner peace.",
//     mood: "Peaceful",
//   },
//   {
//     text: "Among all kinds of killers, time is the ultimate because time kills everything.",
//     mood: "Wisdom",
//   },
//   { text: "Even the wise act according to their nature.", mood: "Spiritual" },
//   {
//     text: "No one who does good work will ever come to a bad end, either here or in the world to come.",
//     mood: "Motivational",
//   },
//   {
//     text: "Just as a reservoir is of little use when the whole countryside is flooded, scriptures are of little use to the illumined man.",
//     mood: "Wisdom",
//   },
//   {
//     text: "The mind acts like an enemy for those who do not control it.",
//     mood: "Spiritual",
//   },
//   {
//     text: "He who has faith and is devoted and has control over his senses obtains knowledge.",
//     mood: "Motivational",
//   },
//   {
//     text: "Neither in this world nor elsewhere is there any happiness in store for him who always doubts.",
//     mood: "Wisdom",
//   },
//   {
//     text: "Whatever action is performed by a great man, common men follow.",
//     mood: "Motivational",
//   },
//   {
//     text: "Man is made by his belief. As he believes, so he is.",
//     mood: "Motivational",
//   },
//   {
//     text: "One who sees inaction in action, and action in inaction, is intelligent among men.",
//     mood: "Wisdom",
//   },
//   {
//     text: "I am the source of all spiritual and material worlds.",
//     mood: "Spiritual",
//   },
//   {
//     text: "I am seated in everyone's heart, and from Me come remembrance, knowledge, and forgetfulness.",
//     mood: "Spiritual",
//   },
//   { text: "Whatever you do, make it an offering to Me.", mood: "Spiritual" },
//   {
//     text: "The senses are superior to the body, mind is superior to the senses, and intellect is superior to the mind.",
//     mood: "Wisdom",
//   },
//   {
//     text: "The key to happiness is the reduction of desires.",
//     mood: "Peaceful",
//   },
//   {
//     text: "The non-permanent appearance of happiness and distress is like the appearance and disappearance of winter and summer seasons.",
//     mood: "Peaceful",
//   },
//   {
//     text: "Even if you are considered the most sinful of all sinners, when you are situated in the boat of transcendental knowledge, you will be able to cross over the ocean of miseries.",
//     mood: "Motivational",
//   },
//   {
//     text: "From passion comes anger, from anger comes delusion.",
//     mood: "Wisdom",
//   },
//   {
//     text: "Abandon all varieties of religion and just surrender unto Me.",
//     mood: "Spiritual",
//   },
//   {
//     text: "When a man dwells on the pleasures of sense, attraction for them arises in him.",
//     mood: "Wisdom",
//   },
//   {
//     text: "There is more happiness in doing one's own (imperfect) duty than in doing another’s (perfectly).",
//     mood: "Motivational",
//   },
//   {
//     text: "He who is able to withdraw his senses from sense objects is firmly fixed in perfect consciousness.",
//     mood: "Spiritual",
//   },
//   {
//     text: "One who has control over the mind is tranquil in heat and cold, in pleasure and pain, and in honor and dishonor.",
//     mood: "Peaceful",
//   },
//   {
//     text: "Yoga is the journey of the self, through the self, to the self.",
//     mood: "Spiritual",
//   },
//   {
//     text: "He who is full of faith and has subdued the senses obtains knowledge.",
//     mood: "Wisdom",
//   },
//   {
//     text: "The self-controlled soul, who moves amongst sense objects, free from either attachment or repulsion, he wins eternal peace.",
//     mood: "Peaceful",
//   },
//   {
//     text: "Those who are motivated only by desire for the fruits of action are miserable, for they are constantly anxious about the results of what they do.",
//     mood: "Wisdom",
//   },
//   { text: "By devotion, he comes to know Me.", mood: "Spiritual" },
//   {
//     text: "Even kings and rulers are destroyed by anger. Control your mind and conquer the world.",
//     mood: "Motivational",
//   },
//   {
//     text: "As the blazing fire reduces wood to ashes, so does the fire of knowledge burn all reactions to material activities.",
//     mood: "Wisdom",
//   },
//   {
//     text: "The humble sage sees with equal vision a learned scholar, a cow, an elephant, a dog, and a dog-eater.",
//     mood: "Spiritual",
//   },
//   {
//     text: "Act without expectation and receive peace as a reward.",
//     mood: "Peaceful",
//   },
//   {
//     text: "For one who has conquered the mind, the mind is the best of friends.",
//     mood: "Wisdom",
//   },
//   {
//     text: "Through selfless service, you will always be fruitful and find the fulfillment of your desires.",
//     mood: "Spiritual",
//   },
// ];

const QuoteFilter = () => {
  const [quotes, setQuotes] = useState([]);

  const moods = ["All", "Peace", "Motivational", "Wisdom", "Spiritual"];
  const [selectedMood, setSelectedMood] = useState("All");
  const [visibleCount, setVisibleCount] = useState(10); // start with 10
  const loaderRef = useRef(null);
  const speakQuote = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-IN"; // Indian English
    utterance.pitch = 1;
    utterance.rate = 0.75;
    speechSynthesis.speak(utterance);
  };

  const filteredQuotes =
    selectedMood === "All"
      ? quotes
      : quotes.filter((q) => q.mood === selectedMood);

  const visibleQuotes = filteredQuotes.slice(0, visibleCount);
  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}`);
        setQuotes(response.data);
      } catch (error) {
        console.error("Error fetching quotes:", error);
      }
    };

    fetchQuotes();
  }, []);
  useEffect(() => {
    setVisibleCount(10); // reset when mood changes
  }, [selectedMood]);
  useEffect(() => {
    window.speechSynthesis.onvoiceschanged = () => {
      speechSynthesis.getVoices(); // preload voices
    };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && visibleCount < filteredQuotes.length) {
          setVisibleCount((prev) => prev + 10);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [visibleCount, filteredQuotes.length]);

  return (
    <>
      <audio autoPlay loop className="mx-auto mb-4">
        <source src="/assets/hare-krishna-meditation.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="flex flex-wrap justify-center gap-3 my-6">
        {moods.map((mood) => (
          <button
            key={mood}
            onClick={() => setSelectedMood(mood)}
            className={`px-4 py-2 rounded-full border shadow-md text-sm font-medium transition-all duration-300
              ${
                selectedMood === mood
                  ? "bg-gradient-to-r from-yellow-300 to-amber-200 text-black font-semibold border-yellow-400"
                  : "bg-white/70 text-gray-800 hover:bg-white/90 border-gray-300"
              }`}
          >
            {mood}
          </button>
        ))}
      </div>

      <div className="grid gap-6 max-w-2xl mx-auto">
        {visibleQuotes.map((quote, idx) => (
          <div
            key={idx}
            className="p-6 bg-gradient-to-br from-blue-100/80 via-indigo-100/80 to-purple-100/80 text-gray-800 rounded-xl shadow-xl border border-indigo-200 backdrop-blur-md"
          >
            <p className="text-lg italic font-medium mb-3">“{quote.text}” </p>
            <button
              className="cursor-pointer"
              onClick={() => speakQuote(quote.text)}
            >
              🔊{" "}
            </button>
            <span className="text-sm bg-indigo-200/80 px-3 py-1 rounded-full text-indigo-800 font-semibold">
              {quote.mood}
            </span>
          </div>
        ))}

        <div ref={loaderRef} className="text-center py-6 text-gray-500">
          {visibleCount < filteredQuotes.length
            ? "Loading more quotes..."
            : "No more quotes to show."}
        </div>
      </div>
    </>
  );
};

export default QuoteFilter;
