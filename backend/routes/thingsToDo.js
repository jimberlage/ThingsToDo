const router = require("express").Router();
const expressAsyncHandler = require("express-async-handler");
const db = require("../db/models");
const { Op } = require("sequelize");
const { requireAuth, requireAdmin } = require("../utils/auth");

// Search by name
// Get by id
// get all

router.get(
	"/",
	expressAsyncHandler(async (req, res) => {
		if (Object.keys(req.body).length > 0) {
			let queryObj;

			if (req.body.exact) {
				if ((req.body.and && req.body.or) || (!req.body.and && !req.body.or)) {
					throw new Error(
						"Malformed body. Either and or or can be set to true, not both"
					);
				} else if (req.body.and) {
					queryObj = {
						where: {
							[Op.and]: {
								thingName: req.body.thingName,
								thingDescription: req.body.thingDescription,
							},
						},
					};
				} else if (req.body.or) {
					queryObj = {
						where: {
							[Op.or]: {
								thingName: req.body.thingName,
								thingDescription: req.body.thingDescription,
							},
						},
					};
				}
			} else {
				if ((req.body.and && req.body.or) || (!req.body.and && !req.body.or)) {
					throw new Error(
						"Malformed body. Either and or or can be set to true, not both"
					);
				} else if (req.body.and) {
					queryObj = {
						where: {
							[Op.and]: {
								thingName: {
									[Op.substring]: req.body.thingName,
								},
								thingDescription: {
									[Op.substring]: req.body.thingDescription,
								},
							},
						},
					};
				} else if (req.body.or) {
					queryObj = {
						where: {
							[Op.or]: {
								thingName: {
									[Op.substring]: req.body.thingName,
								},
								thingDescription: {
									[Op.substring]: req.body.thingDescription,
								},
							},
						},
					};
				}
			}
			queryObj.include = [
				db.ThingRating,
				db.Experience,
				db.CustomDescription,
				db.Business,
			];
			queryObj.limit = 10
			const allThings = await db.ThingsToDo.findAll(queryObj);

			if (allThings) {
				res.json(allThings);
			} else {
				throw new Error("Cannot grab thingsToDo");
			}
		} else {
			const allThings = await db.ThingsToDo.findAll({
				include: [
					db.ThingRating,
					db.Experience,
					db.CustomDescription,
					db.Business,
				],
			});
			if (allThings) {
				res.json(allThings);
			} else {
				throw new Error("Cannot grab thingsToDo");
			}
		}
	})
);

router.get(
	"/:id",
	expressAsyncHandler(async (req, res) => {
		console.log("Attempting Request")
		const thingToDo = await db.ThingsToDo.findByPk(req.params.id, {
			include: [
				{
					model: db.ThingRating,
					limit: 15,
					seporate: true
				},
				{
					model: db.Experience,
					limit: 15,
					seporate: true
				},
				{
					model: db.CustomDescription,
					limit: 15,
					seporate: true
				},
				{
					model: db.Business,
				},
			],
			limit: 1
		});
		if (thingToDo) {
			res.json(thingToDo);
		} else {
			throw new Error("Cannot find a thing with the id given");
		}
	})
);

router.post(
	"/",
	// requireAuth,
	// expressAsyncHandler(requireAdmin),
	expressAsyncHandler(async (req, res, next) => {
		try {
			const { thingName, thingDescription } = req.body;
			if (
				!thingName ||
				!thingDescription ||
				!(typeof thingName === "string" && typeof thingDescription === "string")
			) {
				throw new Error(
					`The parameters were not valid:\n\tthingName: ${thingName}\n\tthingDescription: ${thingDescription} `
				);
			}

			const [newThingToDo, created] = await db.ThingsToDo.findOrCreate({
				where: {
					thingName,
				},
				default: {
					thingName,
					thingDescription,
				},
				include: [db.Experience, db.Business, db.CustomDescription],
			});
			if (created === true) {
				res.status(201).json(newThingToDo);
			} else {
				throw new Error("Error creating ThingToDo. Please try again");
			}
		} catch (e) {
			next(e);
		}
	})
);

router.patch(
	"/:id",
	requireAuth,
	expressAsyncHandler(async (req, res) => {
		const { thingName, thingDescription } = req.body;
		if (thingName && thingDescription) {
			const thingsToDo = await db.ThingsToDo.findByPk(req.params.id);
			if (thingsToDo) {
				await thingsToDo.update({
					thingName,
					thingDescription,
				});
				res.json(thingsToDo);
			} else {
				throw new Error("Thing not found");
			}
		} else {
			throw new Error(
				"Updated thing name and description are missing. Include this in the body"
			);
		}
	})
);

router.delete(
	"/:id",
	requireAuth,
	expressAsyncHandler(async (req, res) => {
		const thingToDelete = await db.ThingsToDo.findByPk(req.params.id);
		if (thingToDelete) {
			await thingToDelete.destroy();
			res.json({ status: "deleted" });
		} else {
			throw new Error("Cannot find thing to do to delete");
		}
	})
);

module.exports = router;
