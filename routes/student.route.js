import { Router } from "express"

import { create, deleteById, getById, updateById } from "../controllers/student.controller.js"

const router = Router()

router.route("/create")
    .post(create)

router.route("/updateById")
    .post(updateById)

router.route("/get")
    .get(getById)

router.route("/delete")
    .delete(deleteById)

export default router