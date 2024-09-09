import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { userId } = auth();
    const { title } = await req.json();
  } catch (error) {
    console.log(`[JOB_POST] : ${error}`);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
