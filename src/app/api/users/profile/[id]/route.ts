import { getData } from "@/helpers/getData";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/db/dbConfig";

connect();

export async function POST(request: NextRequest) {
  try {
    console.log("fghp");
    const reqBody = await request.json()
    console.log(reqBody);
    
    const {userId} = reqBody
    console.log(userId);
    const user = await User.findOne({_id: userId});
    
    console.log(user);
    
    if (user) {
      return NextResponse.json({
        message: "User found",
        data: user,
      });
    } else {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
  } catch (error:any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
