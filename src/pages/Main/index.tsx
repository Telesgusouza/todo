import { Link } from "react-router-dom";

import * as Styled from "./style";
import { useState } from "react";
import AllTask from "../../components/AllTasks";
import ActiveTask from "../../components/ActiveTask";
import ActionTasks from "../../components/ActionsTasks";

export default function Main() {
  const [pagination, setPagination] = useState<string>("all");
  const [toggleTitle, setToggleTitle] = useState<boolean>(false);

  function handlePagination(pag: string) {
    setPagination(pag);
  }

  function handleTitle() {
    setToggleTitle(p=>!p);
  }

  return (
    <Styled.Container className="center">
      <Styled.ContainerTitle
      width={toggleTitle}
      height={toggleTitle}
      >
        <h1 onClick={handleTitle} >#todo</h1>

        <Link to="/pomodoro">
          <h1>#Pomodoro</h1>
        </Link>
      </Styled.ContainerTitle>

      <Styled.Navigate>
        <ul>
          <li onClick={() => handlePagination("all")}>Todos</li>
          <li onClick={() => handlePagination("actions")}>Ativos</li>
          <li onClick={() => handlePagination("completed")}>Completados</li>
        </ul>
      </Styled.Navigate>

      {pagination === "all" && <AllTask />}
      {pagination === "actions" && <ActiveTask />}
      {pagination === "completed" && <ActionTasks />}
    </Styled.Container>
  );
}
