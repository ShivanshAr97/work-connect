import {connect} from '@/db/dbConfig'
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel.js";

connect()

export async function GET(request: NextRequest){
    try {
        const users = await User.find({}, '_id name role profilePhoto');
        const data = users.map(user => ({
            _id: user._id,
            name: user.name,
            role:user.role,
            photo:user.profilePhoto
          }));
        return NextResponse.json({status:200, data})
      } catch (error) {
        return NextResponse.json({message:"Error fetching data"})
      }
}