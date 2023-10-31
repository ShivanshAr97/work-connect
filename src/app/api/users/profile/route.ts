import {connect} from '@/db/dbConfig'
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel.js";

connect()

export async function PUT(request: NextRequest){
    const photos:Record<number, string> = {
        0:"https://robohash.org/sintessequaerat.png?size=50x50&set=set1",
        1:"https://robohash.org/temporibusporrolaboriosam.png?size=50x50&set=set1",
        2:"https://robohash.org/laboriosamdolorepossimus.png?size=50x50&set=set1",
        3:"https://robohash.org/ullamsuntet.png?size=50x50&set=set1",
        4:"https://robohash.org/utquirepudiandae.png?size=50x50&set=set1",
        5:"https://robohash.org/maximequiomnis.png?size=50x50&set=set1",
        6:"https://robohash.org/occaecatinihilquos.png?size=50x50&set=set1",
        7:"https://robohash.org/nihilexcepturiomnis.png?size=50x50&set=set1",
        8:"https://robohash.org/commodiestvoluptatem.png?size=50x50&set=set1",
        9:"https://robohash.org/cupiditatemaioresaut.png?size=50x50&set=set1",
        10:"https://robohash.org/blanditiiscumqueimpedit.png?size=50x50&set=set1",
        11:"https://robohash.org/autarchitectotenetur.png?size=50x50&set=set1",
        12:"https://robohash.org/voluptatemfacilisodit.png?size=50x50&set=set1",
        13:"https://robohash.org/etvoluptatemoccaecati.png?size=50x50&set=set1",
        14:"https://robohash.org/rerumoptiorepudiandae.png?size=50x50&set=set1",
        15:"https://robohash.org/architectoomnisquia.png?size=50x50&set=set1",
        16:"https://robohash.org/dolorumvelitquam.png?size=50x50&set=set1",
        17:"https://robohash.org/cumquenoncommodi.png?size=50x50&set=set1",
        18:"https://robohash.org/delectusconsectetursed.png?size=50x50&set=set1"
    }
    const rand = ()=>{
        return Math.floor(Math.random() * (18 - 0 + 1)) + 0;
    }
    const cal = rand()
    console.log(cal);
    console.log(photos[cal]);
    
    
    try {
        const reqBody = await request.json()
        const {_id,name, email, video, about, achievements, role, links, profilePhoto} = reqBody
        const user = await User.findById(_id)
        console.log(user);
        user.name = name;
        user.profilePhoto=photos[cal]
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