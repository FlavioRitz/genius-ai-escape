import React, { useState, useEffect } from 'react';
import { Wheel } from 'react-custom-roulette';
import { ArrowRight } from 'lucide-react';

const excuses = [
  { option: "My cat just set the kitchen on fire" },
  { option: "I think I left my oven on... in another country" },
  { option: "My neighbor's peacock is screaming again" },
  { option: "I need to alphabetize my spice rack urgently" },
  { option: "My imaginary friend needs emotional support" },
  { option: "I just remembered I don't know how to read" },
  { option: "My pet rock is having an existential crisis" },
  { option: "I need to practice my yodeling" },
  { option: "My plants are gossiping about me" },
  { option: "I have to attend my goldfish's wedding" },
  { option: "My shadow and I are having a disagreement" },
  { option: "I'm teaching my dog to speak Portuguese" },
  { option: "My toaster is plotting world domination" },
  { option: "I need to finish my time machine before yesterday" },
  { option: "My floor is becoming lava as we speak" },
  { option: "I have an urgent appointment with my mattress" },
  { option: "My socks are revolting against folding" },
  { option: "I need to count the dots on my ceiling" },
  { option: "My butler's butler called in sick" },
  { option: "I'm expecting a call from Mars any minute now" }
];

const backgroundColors = [
  '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC'
];

const textColors = [
  '#FFFFFF', '#000000', '#FFFFFF', '#000000', '#FFFFFF',
  '#000000', '#FFFFFF', '#FFFFFF', '#000000', '#FFFFFF',
  '#000000', '#000000', '#000000', '#FFFFFF', '#000000',
  '#000000', '#000000', '#FFFFFF', '#FFFFFF', '#000000'
];

export default function App() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [selectedExcuse, setSelectedExcuse] = useState('');

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * excuses.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  useEffect(() => {
    if (!mustSpin) {
      setSelectedExcuse(excuses[prizeNumber].option);
    }
  }, [mustSpin, prizeNumber]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <nav className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">Genius AI Escape</h1>
      </nav>
      <div className="container mx-auto mt-8 text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">Spin for an Excuse and break free from your online meeting!</h2>
        <div className="flex justify-center mb-8">
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={excuses}
            onStopSpinning={() => {
              setMustSpin(false);
            }}
            backgroundColors={backgroundColors}
            textColors={textColors}
            fontSize={14}
            outerBorderColor="#ccc"
            outerBorderWidth={5}
            innerRadius={0}
            innerBorderColor="#ccc"
            innerBorderWidth={20}
            radiusLineColor="#ccc"
            radiusLineWidth={2}
            perpendicularText={true}
            textDistance={60}
          />
        </div>
        <button
          onClick={handleSpinClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center mx-auto"
        >
          Release me <ArrowRight className="ml-2" />
        </button>
        {selectedExcuse && (
          <p className="mt-8 text-2xl font-semibold text-white bg-opacity-50 bg-gray-800 p-4 rounded-lg inline-block">
            Your excuse: {selectedExcuse}
          </p>
        )}
      </div>
    </div>
  );
}