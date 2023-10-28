import { connect } from "@/db/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/helpers/mails";

connect()

export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json()
        const {email} = reqBody
        console.log(reqBody);
        const user = await User.findOne({email})
        if(!user) {
            return NextResponse.json({error:"User does not exists"}, {status:400})
        }
        console.log(user);
        await sendEmail({email, emailType: "RESET", userId: user._id})
        return NextResponse.json({message:"Email for password reset sent successfully", success:true, user})

    } catch (error:any) {
        return NextResponse.json({error:error.message}, {status:500})
    }
}