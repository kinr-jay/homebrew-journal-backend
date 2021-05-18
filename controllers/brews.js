const router = require("express").Router()
const mongoose = require("../db/connection.js")
const Brew = require("../models/brew.js")

router.get("/", async (req, res) => {
  try {
    res.json(await Brew.find({}))
  } catch (error) {
    res.status(400).json(error)
  }
})

router.post("/", async (req, res) => {
  try {
    res.json(await Brew.create(req.body))
  } catch (error) {
    res.status(400).json(error)
  }
})

router.put("/:id", async (req, res) => {
  try {
    res.json(
      await Brew.findByIdAndUpdate(req.params.id, req.body, { new: true })
    )
  } catch (error) {
    res.status(400).json(error)
  }
})

router.delete("/:id", async (req, res) => {
  try {
    res.json(await Brew.findByIdAndDelete(req.params.id))
  } catch (error) {
    res.status(400).json(error)
  }
})

module.exports = router
