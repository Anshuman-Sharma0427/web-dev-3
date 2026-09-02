const { notes } = require("../models/data")

const getNotes = (req, res) => {
    res.status(200).send(notes)
}

const createNote = (req, res) => {
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
}

module.exports = { getNotes, createNote }
