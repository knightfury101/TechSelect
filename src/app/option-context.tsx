"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type OptionContextType = {
  selectedOptionA: string;
  selectedOptionB: string;
  selectedOptionC: string;
  setSelectedOptionA: (option: string) => void;
  setSelectedOptionB: (option: string) => void;
  setSelectedOptionC: (option: string) => void;
};

const OptionContext = createContext<OptionContextType>({
  selectedOptionA: "",
  selectedOptionB: "",
  selectedOptionC: "",
  setSelectedOptionA: () => {},
  setSelectedOptionB: () => {},
  setSelectedOptionC: () => {},
});

export const useOptionContext = () => useContext(OptionContext);

type OptionProviderProps = {
  children: ReactNode;
};

export const OptionProvider: React.FC<OptionProviderProps> = ({ children }) => {
  const [selectedOptionA, setSelectedOptionA] = useState("");
  const [selectedOptionB, setSelectedOptionB] = useState("");
  const [selectedOptionC, setSelectedOptionC] = useState("");

  const updateSelectedOptionA = (option: string) => {
    setSelectedOptionA(option);
  };

  const updateSelectedOptionB = (option: string) => {
    setSelectedOptionB(option);
  };

  const updateSelectedOptionC = (option: string) => {
    setSelectedOptionC(option);
  };

  return (
    <OptionContext.Provider
      value={{
        selectedOptionA,
        selectedOptionB,
        selectedOptionC,
        setSelectedOptionA: updateSelectedOptionA,
        setSelectedOptionB: updateSelectedOptionB,
        setSelectedOptionC: updateSelectedOptionC,
      }}
    >
      {children}
    </OptionContext.Provider>
  );
};
