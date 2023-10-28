import {connect} from '@/db/dbConfig'
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from "@/models/userModel.js";
import { sendEmail } from "@/helpers/mails";

connect()

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {name,email,password} = reqBody
        console.log(reqBody);
        const user = await User.findOne({email})
        if(user) {
            return NextResponse.json({error:"User already exists"}, {status:400})
        }
        const salt = await bcryptjs.genSalt(10)
        const hashedPass = await bcryptjs.hash(password, salt)
        const newUser = new User({
            name, email, password:hashedPass
        })
        const savedUser = await newUser.save()
        console.log(savedUser);

        await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})

        return NextResponse.json({message:"Added successfully", success:true, savedUser}
        )

    } catch (err:any) {
        return NextResponse.json({error:err.message},
            {status:500}
        )
    }
}