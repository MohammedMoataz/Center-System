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
 *           type: integer
 *           description: The cost of the hall
 *         capacity:
 *           type: integer
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
 * /hall:
 *   post:
 *     summary: Create a hall
 *     security:
 *       - bearerAuth: []
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
 *   put:
 *     summary: Update an hall by ID
 *     security:
 *       - bearerAuth: []
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
 *   get:
 *     summary: Get an hall by ID
 *     security:
 *       - bearerAuth: []
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
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Hall'
 *       '401':
 *         $ref: '#/components/responses/Unauthorized'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       '500':
 *         description: Some server error
 * 
 *   delete:
 *     summary: Delete an hall by ID
 *     security:
 *       - bearerAuth: []
 *     tags: [Hall Routes]
 *     operationId: deleteHallById
 *     parameters:
 *       - name: id
 *         in: query
 *         required: true
 *         type: integer
 *     responses:
 *       '204':
 *         description: Hall deleted successfully
 *       '401':
 *         $ref: '#/components/responses/Unauthorized'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       '500':
 *         description: Some server error
 * 
 * /hall/all:
 *   get:
 *     summary: Get all halls
 *     security:
 *       - bearerAuth: []
 *     tags: [Hall Routes]
 *     operationId: getAllHalls
 *     responses:
 *       '200':
 *         description: Halls retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Hall'
 *       '401':
 *         $ref: '#/components/responses/Unauthorized'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       '500':
 *         description: Some server error
 */

import { Router } from "express"

import {
    create,
    deleteById,
    getById,
    getAll,
    updateById
} from "../controllers/hall.controller.js"
import AdminMiddleware from "../middlewares/admin.middleware.js"

const router = Router()

router.route("/")
    .post(AdminMiddleware, create)
    .put(AdminMiddleware, updateById)
    .get(AdminMiddleware, getById)
    .delete(AdminMiddleware, deleteById)

router.route("/all")
    .get(AdminMiddleware, getAll)

export default router