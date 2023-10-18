import { NextResponse } from "next/server";

export async function GET(request: any) {
  const { searchParams } = new URL(request.url);

  const searchText = searchParams.get("q");

  return NextResponse.json({ data: "Test" });
}
