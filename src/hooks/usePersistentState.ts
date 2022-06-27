import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function usePersistentState<T extends unknown>(
  key: string,
  initialState: T | undefined = undefined
): [T | undefined, (value: T) => void, () => void, boolean] {
  const [state, setState] = useState<T | undefined>(initialState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    AsyncStorage.getItem(key)
      .then((v) => {
        if (v) setState(JSON.parse(v));
      })
      .finally(() => setLoading(false));
  }, []);

  const clear = () => {
    AsyncStorage.removeItem(key).then();
    setState(undefined);
  };

  const setValue = async (value: T) => {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    setState(value);
  };

  return [state, setValue, clear, loading];
}
