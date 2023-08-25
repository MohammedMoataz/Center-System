/**
 * @swagger
 * 
 * components:
 *   schemas:
 *     Lecture:
 *       type: object
 *       required:
 *         - code
 *         - timestamp
 *         - cost
 *         - subject_id
 *         - teacher_id
 *         - hall_id
 *         - admin_id
 *       properties:
 *         id:
 *           type: integer
 *           description: The id of the lecture
 *         code:
 *           type: string
 *           description: The QR code string of the lecture
 *         timestamp:
 *           type: string
 *           format: date-time
 *           description: The date and time of the lecture
 *         cost:
 *           type: integer
 *           minimum: 1
 *           description: The cost of the lecture
 *         subject_id:
 *           type: integer
 *           description: The subject id of the lecture
 *         teacher_id:
 *           type: integer
 *           description: The teacher id of the lecture
 *         hall_id:
 *           type: integer
 *           description: The hall id of the lecture
 *         admin_id:
 *           type: integer
 *           description: The admin id who added the lecture
 *         _created_at:
 *           type: string
 *           format: date-time
 *           readOnly: true
 *           description: Timestamp when the lecture was created
 *         _updated_at:
 *           type: string
 *           format: date-time
 *           readOnly: true
 *           description: Timestamp when the lecture was last updated
 */
/** 
 * @swagger
 * 
 * /lecture/create:
 *   post:
 *     summary: Create an lecture
 *     tags: [Lecture Routes]
 *     operationId: createLecture
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Lecture'
 *     responses:
 *       '201':
 *         description: Lecture created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Lecture'
 *       '500':
 *         description: Some server error
 *
 * /lecture/update:
 *   put:
 *     summary: Update an lecture by ID
 *     tags: [Lecture Routes]
 *     operationId: updateLectureById
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Lecture'
 *             id:
 *               type: int
 *               required: true
 *     responses:
 *       '200':
 *         description: Lecture updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Lecture'
 *       '500':
 *         description: Some server error
 * 
 * /lecture/get:
 *   get:
 *     summary: Get an lecture by ID
 *     tags: [Lecture Routes]
 *     operationId: getLectureById
 *     parameters:
 *       - name: id
 *         in: query
 *         required: true
 *         type: int
 *     responses:
 *       '200':
 *         description: Lecture retrieved successfully
 *       '500':
 *         description: Some server error
 * 
 * /lecture/all:
 *   get:
 *     summary: Get all lectures
 *     tags: [Lecture Routes]
 *     operationId: getAllLectures
 *     responses:
 *       '200':
 *         description: Lectures retrieved successfully
 *       '500':
 *         description: Some server error
 * 
 * /lecture/delete:
 *   delete:
 *     summary: Delete an lecture by ID
 *     tags: [Lecture Routes]
 *     operationId: deleteLectureById
 *     parameters:
 *       - name: id
 *         in: query
 *         required: true
 *         type: int
 *     responses:
 *       '200':
 *         description: Lecture deleted successfully
 *       '500':
 *         description: Some server error
 */

import { Router } from "express"

import { create, deleteById, getById, getAll, updateById } from "../controllers/lecture.controller.js"

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