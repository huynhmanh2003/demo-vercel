const express = require("express");
const { getBoards, createBoard } = require("../controllers/boardController");
const router = express.Router();

router.get("/", getBoards);
router.post("/", createBoard);

module.exports = router;
