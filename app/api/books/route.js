import { connect } from "@/app/database/db"
import { NextResponse } from "next/server"
import {Books} from '@/app/model/book'

export const GET = async (req, res)=>{
    const response = await Books.find({})
    return NextResponse.json(response)
}

export const POST = async (req, res)=>{
    connect()

    const bookInfo= await req.json();
    const book = await new Books(bookInfo);
    const response= await book.save();
    return NextResponse.json(response)
}
