"use client";
import { useRouter } from 'next/navigation';

export const TaskDeleteButton = ({ taskId }) => {
    const router = useRouter();

    const onDelete = async () => {
        const response = await fetch("/api/tasks/" + taskId, {
            method: "DELETE"
        });
        router.refresh();
        router.push("/");
    }

    return (
        <button
            type="button"
            onClick={onDelete}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4">
            Delete
        </button>
    )
}
