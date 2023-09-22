import { prisma } from "@/services/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const task = await prisma.task.findUnique({
        where: {
            id: params.id
        }
    });
    return NextResponse.json(task);
}

export async function PUT(request, { params }) {
    const data = await request.json();
    const updatedTask = await prisma.task.update({
        where: {
            id: params.id
        },
        data: data
    });
    return NextResponse.json(updatedTask);
}

export async function DELETE(request, { params }) {
    try {
        const deletedTask = await prisma.task.delete({
            where: {
                id: params.id
            }
        })
        return NextResponse.json("Deleted: " + deletedTask.id);
    } catch (error) {
        return NextResponse.json(error.message)
    }
}