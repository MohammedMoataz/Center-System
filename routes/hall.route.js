/**
 * @swagger
 * 
 * components:
 *   schemas:
 *     Hall:
 *       type: object
 *       required:
 *         - id
 *         - code
 *         - cost 
 *         - capacity
 *       properties:
 *         id:
 *           type: integer
 *           description: The id of the hall
 *         code:
 *           type: string
 *           description: The name/number of the hall
 *         cost:
 *           type: string
 *           description: The cost of the hall
 *         capacity:
 *           type: string
 *           description: The number of people this hall can hold
 *         _created_at:
 *           type: string
 *           format: date-time
 *           readOnly: true
 *           description: Timestamp when the hall was created
 *         _updated_at:
 *           type: string
 *           format: date-time
 *           readOnly: true
 *           description: Timestamp when the hall was last updated
 */
/** 
 * @swagger
 * 
 * /hall/create:
 *   post:
 *     summary: Create a hall
 *     tags: [Hall Routes]
 *     operationId: createHall
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Hall'
 *     responses:
 *       '201':
 *         description: Hall created successfully
 *         schema:
 *           $ref: '#/components/schemas/Hall'
 * 
 * /hall/update:
 *   put:
 *     summary: Update an hall by ID
 *     tags: [Hall Routes]
 *     operationId: updateHallById
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Hall'
 *     parameters:
 *       - name: id
 *         in: query
 *         required: true
 *         type: integer
 *     responses:
 *       '200':
 *         description: Hall updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Hall'
 *       '500':
 *         description: Some server error
 * 
 * /hall/get:
 *   get:
 *     summary: Get an hall by ID
 *     tags: [Hall Routes]
 *     operationId: getHallById
 *     parameters:
 *       - name: id
 *         in: query
 *         required: true
 *         type: integer
 *     responses:
 *       '200':
 *         description: Hall retrieved successfully
 *       '500':
 *         description: Some server error
 * 
 * /hall/all:
 *   get:
 *     summary: Get all halls
 *     tags: [Hall Routes]
 *     operationId: getAllHalls
 *     responses:
 *       '200':
 *         description: Halls retrieved successfully
 *       '500':
 *         description: Some server error
 * 
 * /hall/delete:
 *   delete:
 *     summary: Delete an hall by ID
 *     tags: [Hall Routes]
 *     operationId: deleteHallById
 *     parameters:
 *       - name: id
 *         in: query
 *         required: true
 *         type: integer
 *     responses:
 *       '200':
 *         description: Hall deleted successfully
 *       '500':
 *         description: Some server error
 */

import { Router } from "express"

import { create, deleteById, getById, getAll, updateById } from "../controllers/hall.controller.js"

const router = Router()

router.route("/create")
    .post(create)

router.route("/update")
    .put(updateById)

router.route("/get")
    .get(getById)

router.route("/all")
    .get(getAll)

router.route("/delete")
    .delete(deleteById)

export default router