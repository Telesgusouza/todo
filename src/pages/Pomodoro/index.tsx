import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import * as Styled from "./style";

export default function Pomodoro() {
  const [toggleTitle, setToggleTitle] = useState<boolean>(false);

  const [pomodoroState, setPomodoroState] = useState<boolean | null>(false);
  const [contentBtnPomodoro, setContentBtnPomodoro] =
    useState<string>("Começar");

  const [restPomodoro, setRestPomodoro] = useState<boolean>(false);

  const [initialMinuts, setInitialMinuts] = useState(25);
  const [initialSeconds, setInitialSeconds] = useState(0);

  useEffect(() => {
    let minuts = initialMinuts;
    let seconds = initialSeconds;

    const count = setInterval(() => {
      if (pomodoroState) {
        if (seconds === 0) {
          seconds = 59;
          minuts--;
        } else {
          seconds--;
        }

        if ((seconds === 0 && minuts === 0) || (seconds === 0 && minuts <= 0)) {
          clearInterval(count);
          setRestPomodoro((p) => !p);
          togglePomodoro();

          if (!restPomodoro) {
            setTimeout(() => {
              minuts = 5;
              setInitialMinuts(minuts);
            }, 1500);
          } else {
            setTimeout(() => {
              minuts = 25;
              setInitialMinuts(minuts);
            }, 1500);
          }
        }

        setInitialMinuts(minuts);
        setInitialSeconds(seconds);
      } else {
        clearInterval(count);
      }

      if (!pomodoroState) {
        setContentBtnPomodoro("Começar");
      }

      if (restPomodoro && !pomodoroState) {
        setContentBtnPomodoro("Descansar");
        clearInterval(count);
      }

      if (pomodoroState) {
        setContentBtnPomodoro("Pausar");
      }
    }, 1000);

    return () => clearInterval(count);
  }, [pomodoroState]);

  function togglePomodoro() {
    if (initialMinuts > 0 || initialSeconds > 0) {
      setPomodoroState((p) => !p);
    }
  }

  function handleTitle() {
    setToggleTitle(p=>!p);
  }

  return (
    <Styled.Container className="center">
      <Styled.ContainerTitle width={toggleTitle} height={toggleTitle}>
        <h1 onClick={handleTitle} >#pomodoro</h1>

        <Link to="/">
          <h1>#todo</h1>
        </Link>
      </Styled.ContainerTitle>

      <h2>
        {initialMinuts}:
        {initialSeconds < 10 ? "0" + initialSeconds : initialSeconds}
      </h2>

      <Styled.ButtonStart>
        <button onClick={togglePomodoro}>{contentBtnPomodoro}</button>
      </Styled.ButtonStart>
    </Styled.Container>
  );
}
