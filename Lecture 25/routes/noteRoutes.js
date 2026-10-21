const express = require("express")

const {getNotes,createNote, getNoteById, updateNote, deleteNote} = require("../controllers/notesController")
const { isAuthorized, isloggedIn } = require("../middlewares/isAuthorized")
const router = express.Router()

router.get("/notes",isAuthorized,isloggedIn,getNotes)
router.post("/notes",createNote)

router.get("/notes/:id",isAuthorized,isloggedIn,getNoteById)


router.put("/update-note/:id",updateNote)

router.delete("/delete-note/:id",deleteNote)



module.exports = router
