"use client";

import { useRouter } from 'next/navigation';
import { TaskForm } from '@/components/task-form';

const NewPage = () => {
  const router = useRouter();

  const onCreateTask = async (formValues) => {
    const response = await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-Type": "application/json"
      }
    });
    router.push("/")
  }

  return (
    <div className='h-screen flex justify-center items-center'>
      <TaskForm saveChanges={onCreateTask} />
    </div>
  )
}

export default NewPage