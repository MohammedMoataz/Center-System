import { Router } from "express"

import { create, deleteById, getAll, getById, updateById } from "../controllers/admin.controller.js"

const router = Router()

router.route("/create")
    .post(create)

router.route("/update")
    .post(updateById)

router.route("/get")
    .get(getById)

router.route("/all")
    .get(getAll)

router.route("/delete")
    .delete(deleteById)

export default router