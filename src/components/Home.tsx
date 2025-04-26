import { useState, useEffect } from "react";
import Header from "./Header";
import Paper from "./paper/Paper";
import Rock from "./rock/Rock";
import Scissors from "./scissors/Scissors";
import Rules from "./Rules";
import Picked from "./picked/Picked";
import Spock from "./spock/Spock";

const Home = () => {
  const [showRules, setShowRules] = useState(false);
  const [userChoice, setUserChoice] = useState<string | null>(null);
  const [houseChoice, setHouseChoice] = useState<string | null>(null);
  // Initialize score state with localStorage value or 0
  const [score, setScore] = useState(() => {
    if (typeof window !== "undefined") {
      const savedScore = localStorage.getItem("rps-score");
      return savedScore ? parseInt(savedScore, 10) : 0;
    }
    return 0;
  });
  const [winner, setWinner] = useState<"user" | "house" | "draw" | null>(null);

  const choices = ["paper", "rock", "scissors"];

  // Update localStorage when score changes
  useEffect(() => {
    localStorage.setItem("rps-score", score.toString());
  }, [score]);

  const determineWinner = (
    user: string,
    house: string
  ): "user" | "house" | "draw" => {
    if (user === house) return "draw";
    if (
      (user === "rock" && house === "scissors") ||
      (user === "paper" && house === "rock") ||
      (user === "scissors" && house === "paper")
    ) {
      return "user";
    }
    return "house";
  };

  const handleChoice = (choice: string) => {
    setUserChoice(choice);
    setWinner(null);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * 3);
      const housePick = choices[randomIndex];
      setHouseChoice(housePick);

      const result = determineWinner(choice, housePick);
      setWinner(result);

      // Update score based on result
      setScore((prev) => {
        let newScore = prev;
        if (result === "user") {
          newScore = prev + 1;
        } else if (result === "house") {
          newScore = Math.max(0, prev - 1);
        }
        return newScore;
      });
    }, 1000);
  };

  const resetGame = () => {
    setUserChoice(null);
    setHouseChoice(null);
    setWinner(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className=" flex flex-col items-center justify-center mt-4">
        <Header score={score} />
      </div>

      {!userChoice ? (
        <div className="flex flex-col items-center justify-center relative flex-grow">
          <div
            style={{
              backgroundImage: "url('/images/bg-pentagon.svg')",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              width: "250px",
            }}
            // className="flex flex-col items-center justify-center w-[220px]"
          >
            <div className="flex items-center justify-center -mb-10">
              <Scissors onClick={() => handleChoice("scissors")} />
            </div>
            <div className="flex items-center justify-center gap-10 md:gap-40">
              <Spock onClick={() => handleChoice("spock")} />
              <Paper onClick={() => handleChoice("paper")} />
            </div>
            <div className="flex items-center justify-center gap-10 md:gap-10 mt-8">
              <Rock onClick={() => handleChoice("rock")} />
              <Rock onClick={() => handleChoice("rock")} />
            </div>
          </div>
        </div>
      ) : (
        <Picked
          userChoice={userChoice}
          houseChoice={houseChoice}
          onPlayAgain={resetGame}
          winner={winner}
        />
      )}

      <div className=" flex items-center justify-center mt-6 md:mt-0 md:justify-end md:items-end">
        <button
          onClick={() => setShowRules(true)}
          className="border border-white text-white tracking-widest uppercase py-1 px-8 rounded-lg cursor-pointer mb-10"
        >
          Rules
        </button>
      </div>

      {showRules && (
        <div className="fixed inset-0 bg-gray-900/10 bg-opacity-50 flex items-end justify-end z-50">
          <Rules onClose={() => setShowRules(false)} />
        </div>
      )}
    </div>
  );
};

export default Home;
