const { notes } = require("../models/data")

const getNotes = (req, res) => {
    try {
        res.status(200).send(notes)
    } catch {
        console.log(err, "Bhai error aa gya , tughse naa ho paaega")
        res.status(500).send(err)
    }
}

const getNoteById = (req, res) => {
    try {
        let { id } = req.params;

        let element = notes.find(note => note.id === Number(id))
        if (!element) {
            return res.status(404).send("Data Not Found")
        }
        res.status(200).send(element)
    } catch {
        res.status(500).send(err)
    }
}


const createNote = (req, res) => {
    try{
            // detsrtucture
    let { id, title, description, link, author, createdOn, note } = req.body

    let newData = {
        // id:id,
        // title:title,
        // description:description, when the value of key and value are same then if we write ony key then it can work

        id: notes.length + 1,
        title: title,
        description: description,
        link: link,
        author: author,
        createdOn: createdOn,
        note: note

    }

    notes.push(newData);
    res.status(201).send("Note Added Successfully")
    }catch{
        res.status(500).send(err)
    }
}

const updateNote = (req, res) => {
    try{
            let { id } = req.params;

    const note = notes.find(note => note.id === Number(id))
    if (!note) {
        return res.status(404).send("Data Not Found")
    }

    Object.assign(note, req.body)
    res.status(200).send("Note Updated")
    }catch{
        res.status(500).send(err)
    }
}

const deleteNote = (req, res) => {
    try{    let { id } = req.params;
    const note = notes.find(note => note.id === Number(id))
    if (!note) {
        return res.status(404).send("Data Not Found")
    }

    let index = notes.indexOf(note)
    notes.splice(index, 1)

    res.status(200).send("Deleted")
}catch{
    res.status(500).send(err)
}
}
module.exports = { getNotes, getNoteById, createNote, updateNote, deleteNote }

// 🛠️ What a Controller Does:
// • Reads data sent by the user (like forms, IDs, or search words).
// • Asks the database to find, save, or delete that data.
// • Sends back a response with the correct status code (like 200 OK for success or 404 Not Found).