import express from "express";
import Model from "../model/model.js";

const router = express.Router();

// Testing post method
router.post('/post', async (req, res) =>{
  const data = new Model({
    name: req.body.name,
    age: req.body.age
  })
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
});

// Testing getAll method

router.get('/getAll', async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
})
// Testing post method
router.get('/getOne/:id', async (req, res) =>{
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
});

// Testing update method

router.patch('/update/:id', async (req, res) => {
  try {

    const { id } = req.params;

    const updatedData = req.body;

    const options = { new : true };

    const result = await Model.findByIdAndUpdate(id, updatedData, options);

    res.send(result);

  } catch (error) {
    res.status(400).json({message: error.message});
  }
})
router.delete('/delete/:id', async (req, res) => {
  try {
    const user = await Model.findByIdAndDelete(req.params.id);
    res.send(`The user with name ${user.name} has been deleted`);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
})

export default router;