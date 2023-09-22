import { TaskCard } from "@/components/task-card";

const loadTasks = async () => {
  const res = await fetch("http://localhost:3000/api/tasks");
  return await res.json();
}

const HomePage = async () => {
  const tasks = await loadTasks();
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-3">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </section>
  )
}

export default HomePage