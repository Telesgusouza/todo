import * as Styled from "./style";

import imgTrash from "../../assets/trash.svg";
import { useEffect, useState } from "react";

type PropsTask = {
  content: string;
  concluded: boolean;
};

export default function ActiveTask() {
  const [search, setSearch] = useState("");
  const [listTask, setListTask] = useState<[] | PropsTask[]>([]);

  useEffect(() => {
    const data: any = localStorage.getItem("data");
    const convertData: any = JSON.parse(data);
    setListTask(convertData);
  }, []);

  function handleAddTask(e: any) {
    e.preventDefault();

    if (search !== "") {
      if (localStorage.getItem("data") === null) {
        localStorage.setItem(
          "data",
          JSON.stringify([{ content: search, concluded: false }])
        );
        const getData: any = localStorage.getItem("data");
        setListTask(JSON.parse(getData));
      } else {
        const getData: any = localStorage.getItem("data");
        const data: PropsTask[] = JSON.parse(getData);

        data.push({ content: search, concluded: false });
        localStorage.setItem("data", JSON.stringify(data));
        setListTask(data);
      }

      setSearch("");
    }
  }

  function handleChecked(e: any, indexTask: number) {
    const getData: any = localStorage.getItem("data");
    const data = JSON.parse(getData);

    data.forEach((element: any, index: number) => {
      if (index === indexTask) {
        element.concluded = e.target.checked;
      }
    });

    localStorage.setItem("data", JSON.stringify(data));
    setListTask(data);
  }

  function handleTrash(index: number) {
    const getData: any = localStorage.getItem("data");
    const data = JSON.parse(getData);
    data.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(data));
    setListTask(data);
  }

  return (
    <Styled.Container>
      <Styled.Form onSubmit={(e) => handleAddTask(e)}>
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          placeholder="Adicionar tarefa"
        />
        <button type="submit">Adicionar</button>
      </Styled.Form>

      <Styled.ListTask>
        {listTask !== null &&
          listTask.map(
            (task, index) =>
              !task.concluded && (
                <Styled.Task key={index}>
                  <input
                    type="checkbox"
                    onChange={(e) => handleChecked(e, index)}
                    checked={task.concluded}
                  />
                  <p>{task.content}</p>

                  <img
                    src={imgTrash}
                    alt="imagem de lixeira"
                    onClick={() => handleTrash(index)}
                  />
                </Styled.Task>
              )
          )}
      </Styled.ListTask>
    </Styled.Container>
  );
}
