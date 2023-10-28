import { Books } from "@/app/model/book"
import { NextResponse } from "next/server"


// find Single book 
export const GET = async (req, {params}) =>{
    const response = await Books.findOne({_id:params.id});
    return NextResponse.json(response);
}

//update book

export const PUT = async (req, {params}) =>{
    const updatedbook = await req.json();
    await Books.findByIdAndUpdate(params.id, updatedbook);
    const response = await Books.findOne({_id:params.id});

    return NextResponse.json(response);
}

export const DELETE = async (req, {params}) =>{
    await Books.findByIdAndRemove(params.id);

    return NextResponse.json({message: "deleted"});
}