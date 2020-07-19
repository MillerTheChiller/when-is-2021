import { useRef, useEffect } from "react";

//Shamelessly taken from Dan Abramov's Blog Post:
//https://overreacted.io/making-setinterval-declarative-with-react-hooks/

//Just added some strict typing & undefined checks.
export function useInterval(callback: Function) {
  const savedCallback = useRef<Function>();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current && savedCallback.current();
    }

    let id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
}
