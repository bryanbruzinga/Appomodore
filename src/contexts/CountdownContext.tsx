import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ActivityIndicator } from "react-native";
import usePersistentState from "../hooks/usePersistentState";
import { UserModel } from "../models/UserModel";
import { theme } from "../theme";

interface CountdownContextData {
  minutes: number;
  seconds: number;
  isActive: boolean;
  name: string;
  level: number;
  currentExperience: number;
  experienceToNextLevel: number;
  isLevelUpModalOpen: boolean;
  setName: (arg: string) => void;
  setIsLevelUpModalOpen: (arg: boolean) => void;
  startCountdown: () => void;
  stopCountdown: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

export const useCountdown = () => {
  const auth = useContext(CountdownContext);
  return auth;
};

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps) {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [name, setName] = useState("");
  const [level, setLevel] = useState(1);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [user, setUser, clearUser, loading] =
    usePersistentState<UserModel>("userInfo");
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  const userToSave = {
    name,
    level,
    currentExperience,
    experienceToNextLevel,
  };

  useEffect(() => {
    if (!!user?.name) {
      setName(user.name);
      setLevel(user?.level as number);
      setCurrentExperience(user?.currentExperience as number);
    }
  }, [user?.name]);

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
    setUser(userToSave);
  }

  function gainXp() {
    let finalExperience =
      currentExperience + Math.ceil(experienceToNextLevel * 0.4);
    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }
    setCurrentExperience(finalExperience);
    resetCountdown();
    setUser(userToSave);
  }

  function loseXp() {
    let finalExperience = currentExperience - 100;
    if (finalExperience <= 0) finalExperience = 0;
    setCurrentExperience(finalExperience);
    setUser(userToSave);
  }

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(25 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      gainXp();
      setIsActive(false);
    }
  }, [isActive, time]);

  function stopCountdown() {
    loseXp();
    resetCountdown();
  }

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        isActive,
        isLevelUpModalOpen,
        name,
        level,
        currentExperience,
        experienceToNextLevel,
        setName,
        setIsLevelUpModalOpen,
        startCountdown,
        stopCountdown,
      }}
    >
      {loading ? (
        <ActivityIndicator size="large" color={theme.colors.green} />
      ) : (
        children
      )}
    </CountdownContext.Provider>
  );
}
