import mongoose from 'mongoose'

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection
        connection.on('connected',()=>{
            console.log("connected");
        })
        connection.on('error', ()=>{
            console.log("some error occured");
            process.exit()
            
        })
    } catch (err) {
        console.log(err);
        
    }
}