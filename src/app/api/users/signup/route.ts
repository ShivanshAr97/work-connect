import {connect} from '@/db/dbConfig'
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from "@/models/userModel.js";

connect()

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {email,password} = reqBody
        console.log(reqBody);
        const user = await User.findOne({email})
        if(!user) {
            return NextResponse.json({error:"User does not exists"}, {status:400})
        }
        const checkPass = await bcryptjs.compare(password, user.password)
        if(!checkPass){
            return NextResponse.json({error:"Incorrect passwords"}, {status:400})
        }
        const tokenData = {
            id:user._id,
            name:user.name,
            email:user.email
        }
        const token = await jwt.sign(tokenData, process.env.SECRET_TOKEN!, {expiresIn:"1d"})
        const resp = NextResponse.json({
            message:"Sign in successful",
            success:true
        })
        resp.cookies.set("token", token,{
            httpOnly:true
        })
        return resp;
        
    } catch (err:any) {
        return NextResponse.json({error:err.message},
            {status:500}
        )
    }
}