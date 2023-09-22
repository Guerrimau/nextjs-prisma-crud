"use client";

import { useEffect, useState } from "react";

export const TaskForm = ({
    initialValues = {},
    buttonText = "Create",
    saveChanges = () => {},
    extraActions
}) => {
    const [formValues, setFormValues] = useState({});

    const onChange = (e) => {
        setFormValues(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }

    const onSaveChanges = () => {
        saveChanges(formValues)
    }

    useEffect(() => {
        setFormValues({
            title: initialValues.title,
            description: initialValues.description
        });
    }, [initialValues])

    return (
        <form
            onSubmit={e => e.preventDefault()}
            className='bg-slate-800 p-10 lg:1/4 md:w-1/2'>
            <label htmlFor="title" className='font-bold text-sm'>
                Title of your task
            </label>
            <input
                id="title"
                type="text"
                value={formValues?.title}
                onChange={onChange}
                placeholder="Title"
                className='border border-gray-400 p-2 mb-4 w-full text-black' />

            <label htmlFor="description" className="font-bold text-sm">
                Description of your task
            </label>
            <textarea
                id="description"
                rows={3}
                value={formValues?.description}
                onChange={onChange}
                placeholder="Describe your task"
                className='border border-gray-400 p-2 mb-4 w-full text-black' />
            <button
                onClick={onSaveChanges}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                {buttonText}
            </button>
            {extraActions}
        </form>
    )
}
