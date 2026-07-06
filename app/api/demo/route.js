import users from "@/app/clientData/client";

export async function GET() {
  return Response.json(users);
}
 