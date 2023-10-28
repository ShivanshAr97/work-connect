import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    try {
        const resp = NextResponse.json({message:"Logout success"},
            {success:true})
        resp.cookies.set("token", "", {
            httpOnly:true, expires:new Date(0)
        })
        return resp
        
    } catch (err) {
        return NextResponse.json({error:err.message},
            {status:500}
        )
    }
}