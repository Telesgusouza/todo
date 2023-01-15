import * as Styled from "./style";
import imgTrash from "../../assets/trash.svg";
import imgTrashWhite from "../../assets/trashWhite.svg";
import { useEffect, useState } from "react";

type PropsTask = {
  content: string;
  concluded: boolean;
  index: number;
};

export default function ActionTasks() {
  const [listTask, setListTask] = useState<[] | PropsTask[]>([]);
  const [counterTask, setCounterTask] = useState(0);

  useEffect(() => {
    const data: any = localStorage.getItem("data");
    const convertData: any = JSON.parse(data);
    setListTask(convertData);
    toTasks();
  }, []);

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
    toTasks();
  }

  function handleTrash(index: number) {
    const getData: any = localStorage.getItem("data");
    const data = JSON.parse(getData);
    data.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(data));
    setListTask(data);
  }

  function toTasks() {
    const getData: any = localStorage.getItem("data");
    const data = JSON.parse(getData);
    const newData = [];
    data.forEach((element:any) => {
      if (element.concluded) {
        newData.push(element);
      }
    });
    setCounterTask(newData.length);
  }

  function deleteAll() {
    const getData: any = localStorage.getItem("data");
    const data = JSON.parse(getData);
    data.forEach((element: any, index: number) => {
      if (element.concluded) {
        data.splice(index, 1);
      }
    });
    localStorage.setItem("data", JSON.stringify(data));
    setListTask(data);
  }

  return (
    <Styled.Container>
      <Styled.ListTask>
        {listTask !== null &&
          listTask.length > 0 &&
          listTask.map(
            (task, index) =>
              task.concluded && (
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

        {counterTask === 0 ? (
          <div>
            <strong>Não a tarefas completadas....</strong>
          </div>
        ) : (
          <div>
            <Styled.BtnDeleteAll onClick={deleteAll}>
              <img src={imgTrashWhite} alt="imagem de lixeira" />
              Deletar tudo
            </Styled.BtnDeleteAll>
          </div>
        )}
      </Styled.ListTask>
    </Styled.Container>
  );
}
