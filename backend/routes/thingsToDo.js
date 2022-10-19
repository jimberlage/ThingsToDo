const router = require("express").Router();
const expressAsyncHandler = require("express-async-handler")
const db = require("../db/models")
const {Op} = require("sequelize")

// Search by name
// Get by id
// get all

router.get("/", expressAsyncHandler(async (req, res) => {
    console.log(req.body)
    if (Object.keys(req.body).length > 0) {

        let queryObj;

        if (req.body.exact) {
            if ((req.body.and && req.body.or) || (!req.body.and && !req.body.or)) {
                throw new Error("Malformed body. Either and or or can be set to true, not both")
            } else if (req.body.and) {
                queryObj = {
                    where: {
                        [Op.and]: {
                            thingName: req.body.thingName,
                            thingDescription: req.body.thingDescription
                            }
                        }
                    }
            } else if (req.body.or) {
                queryObj = {
                    where: {
                        [Op.or]: {
                            thingName: req.body.thingName,
                            thingDescription: req.body.thingDescription
                        }
                    }
                }
            }
        } else {
            if ((req.body.and && req.body.or) || (!req.body.and && !req.body.or)) {
                throw new Error("Malformed body. Either and or or can be set to true, not both")
            } else if (req.body.and) {
                queryObj = {
                    where: {
                        [Op.and]: {
                            thingName: {
                                [Op.substring]: req.body.thingName
                            },
                            thingDescription: {
                                [Op.substring]: req.body.thingDescription
                            }
                        }
                    }
                }
            } else if (req.body.or) {
                queryObj = {
                    where: {
                        [Op.or]: {
                            thingName: {
                                [Op.substring]: req.body.thingName
                            },
                            thingDescription: {
                                [Op.substring]: req.body.thingDescription
                            }
                        }
                    }
                }
            }
        }
        queryObj.include = [db.ThingRating]
        const allThings = await db.ThingsToDo.findAll(queryObj);

        if (allThings) {
            res.json(allThings)
        } else {
            throw new Error("Cannot grab thingsToDo")
        }
    } else {
        const allThings = await db.ThingsToDo.findAll();
        if (allThings) {
            res.json(allThings)
        } else {
            throw new Error("Cannot grab thingsToDo")
        }
    }
}))


router.get("/:id", expressAsyncHandler(async (req, res) => {
    const thingToDo = await db.ThingsToDo.findByPk(req.params.id,
        {
            include: [
                db.ThingRating
            ]
        }
    )
    if (thingToDo) {
        res.json(thingToDo)
    } else {
        throw new Error("Cannot find a thing with the id given")
    }
}))

router.post("/", expressAsyncHandler(async (req, res) => {
    
    const {thingName, thingDescription} = req.body

    const newThingToDo = await db.ThingsToDo.create({
        thingName,
        thingDescription
    })

    if (newThingToDo) {
        res.json(newThingToDo)
    } else {
        throw new Error("Error creating ThingToDo. Please try again")
    }
}))

router.patch("/:id", expressAsyncHandler(async (req, res) => {
    const {thingName, thingDescription} = req.body

    if (thingName && thingDescription) {
        const thingsToDo = await db.ThingsToDo.findByPk(req.params.id)
        if (thingsToDo) {
            await thingsToDo.update({
                thingName, thingDescription
            })
            res.json(thingsToDo)
        } else {
            throw new Error("Thing not found")
        }

    } else {
        throw new Error("Updated thing name and description are missing. Include this in the body")
    }
}))

module.exports = router
