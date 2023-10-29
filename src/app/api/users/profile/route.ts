import {connect} from '@/db/dbConfig'
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from "@/models/userModel.js";
import { sendEmail } from "@/helpers/mails";

connect()

export async function PUT(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {_id,name, email, video, about, achievements, role, links} = reqBody
        const user = await User.findById(_id)
        console.log(user);
        user.name = name;
        user.email = email;
        user.video = video;
        user.about = about;
        user.achievements = achievements;
        user.role = role;
        user.links = links;
        const savedUser = await user.save()
        console.log(savedUser);

        return NextResponse.json({message:"Profile updates successfully", success:true, savedUser}
        )

    } catch (err:any) {
        return NextResponse.json({error:err.message},
            {status:500}
        )
    }
}