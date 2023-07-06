export default function handler(req, res){
  console.log(req.query);
  res.send(200);
}