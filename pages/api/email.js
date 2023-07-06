import clientPromise from "../../lib/mongodb";

export default async function handler(req, res){
  const client = await clientPromise;
  const db = client.db("messages");
  switch (req.method) {
    case "POST":
            let newMessage = await db.collection("messages").insertOne(req.query);
            res.send(200);
            break;
  }
}