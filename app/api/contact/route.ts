import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function isEmailValid(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const resend = new Resend(process.env.RESEND_API_KEY)
export async function GET(req:NextRequest){
    return NextResponse.json({message:"Method not allowed"})
}
export async function POST(req:NextRequest){
    let formData = new FormData()
    try{
       formData = await req.formData() 
    }catch(e){
        return NextResponse.json({error:"Form data not found"})
    }
    if([...formData].length === 0){
        return NextResponse.json({error:"Empty form data"})
    }
    for(const [key,value] of formData){
        if(!value){
            return NextResponse.json({error:`${key} est requis`},{status:422})
        }
    }
    const name = formData.get('nom') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string
    if(!isEmailValid(email)){
        return NextResponse.json({error:"Invalid email"},{status:422})
    }
    const receiver = process.env.EMAIL as string
    if(!receiver){
        return NextResponse.json({error:"Email not found"},{status:500})
    }
    if(!process.env.RESEND_API_KEY){
        return NextResponse.json({error:"Resend API key not found"},{status:500})
    }
     try{
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: process.env.EMAIL as string,
            subject: 'EBHC Contact Form',
            html: '<p>Name: ' + name + '</p><p>Email: ' + email + '</p><p>Message: ' + message + '</p>'
        })
        return NextResponse.json({ message: 'Envoi effectué'});
    }catch(e){
        console.log(e)
        return NextResponse.json({ error: 'Une erreur est survenue' }, { status: 500 });
    }
}