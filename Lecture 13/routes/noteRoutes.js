const express = require("express")
const {getNotes,createNote, getNoteById, updateNote, deleteNote} = require("../controllers/notesController")
const router = express.Router()

router.get("/notes",getNotes)
router.post("/notes",createNote)

router.get("/notes/:id",getNoteById)


router.put("/update-note/:id",updateNote)

router.delete("/delete-note/:id",deleteNote)
module.exports = router
