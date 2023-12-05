const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const port = 3000
const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://root:root@cluster0.d9vutvj.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
const Quote = mongoose.model("quotes", {
    quote: { type: String, unique: true },
    author: { type: String },
    index: { type: String, unique: true }
})

app.get("/", async (req, res) => {
    const numeroSorteado = String(Math.round(Math.random() * 2))
    const selectedQuote = await Quote.findOne({ index: numeroSorteado })
    res.json(selectedQuote)
})

app.listen(port, () => console.log("O servidor está ouvindo na porta " + port))
