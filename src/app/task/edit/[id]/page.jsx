"use client";

import { TaskDeleteButton } from "@/components/task-delete-button";
import { TaskForm } from "@/components/task-form";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const TaskEditPage = ({ params }) => {
  const router = useRouter();
  const [task, setTask] = useState({});

  const getData = async () => {
    const response = await fetch("/api/tasks/" + params.id);
    const data = await response.json();
    setTask(data);
  }

  const onUpdateTask = async (formValues) => {
    const response = await fetch("/api/tasks/" + params.id, {
      method: "PUT",
      body: JSON.stringify(formValues),
      headers: {
        "Content-Type": "application/json"
      }
    });
    router.push("/");
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='h-screen flex justify-center items-center'>
      <TaskForm
        initialValues={task}
        buttonText="Actualizar"
        saveChanges={onUpdateTask}
        extraActions={<TaskDeleteButton taskId={task.id} />}/>
    </div>
  )
}

export default TaskEditPage;