import { connect, model, models, Schema } from "mongoose"
const connectionString = 'mongodb+srv://user1:vEYX2H4M81MIpLnA@cluster0.cktll0s.mongodb.net/blogs'

export default async function handler(req, res) {
    await connect(connectionString);
    console.log("req.method: ", req.method)
    console.log("req.query.id",req.query.id)

    const id = req.query.id
    if (req.method === 'GET') {
        const docs = await Article.findOne({ _id: id })
        res.status(200).json(docs)
    } else if (req.method === 'DELETE') {
        const deletedDoc = await Article.deleteOne({ _id: id })
        res.status(200).json(deletedDoc)
    } else if(req.method === 'PUT'){
        console.log('id',req.query.id)
        console.log(req.body)
        const updatedDoc = await Article.updateOne({_id: id}, req.body)
        res.status(200).json(updatedDoc)
    } else {
        res.setHeader('Allow', ['GET', 'DELETE', 'PUT'])
        res.status(405).end(`Method ${req.method} Not Allowed`)

    }
}



const articleSchema = new Schema({
    title: String,
    content: String,
});

console.log("Mongoose Models", models)
const Article = models?.article || model('article', articleSchema);