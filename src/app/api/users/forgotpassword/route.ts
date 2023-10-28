import { connect } from "@/db/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs'

connect()

export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json()
        const {token, password} = reqBody
        console.log({token,password});
        const user = await User.findOne({ forgetPasswordToken: token, forgetPasswordTokenExpiry: {$gt: Date.now()}});

        if (!user) {
            console.log("fgrg");
            return NextResponse.json({error: "Invalid token"}, {status: 400})
        }
        console.log(user);

        user.verifyToken = undefined;
        user.verifyTokenExpiry = undefined;
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        user.password = hashedPassword;
        await user.save();
        
        return NextResponse.json({
            message: "Password changed successfully",
            success: true
        })

    } catch (error:any) {
        return NextResponse.json({error:error.message}, {status:500})
    }
}