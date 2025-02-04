import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
    const body = await request.json()

    try{
        if(body.email === "mkb@gmail.com" && body.password === "mkb555"){
            return NextResponse.json({
                message: "You are Logged in",
                redirectUrl: "/Dashboard"
            })
        } 

        else{
            return NextResponse.json({
                message: "You are not logged in"
            })
        }

         } catch {
             return NextResponse.json({
         message: "Invalid User"
        })
          }
              }