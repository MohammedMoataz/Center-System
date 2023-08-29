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
 *         subject:
 *           description: The subject of the lecture.
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *               minimum: 1
 *               description: The ID of the subject.
 *             code:
 *               type: string
 *               description: The code of the subject.
 *         teacher:
 *           description: The teacher of the lecture.
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *               minimum: 1
 *               description: The ID of the subject.
 *             first_name:
 *               type: string
 *               description: The first name of the teacher.
 *             last_name:
 *               type: string
 *               description: The second name of the teacher.
 *             image:
 *               type: string
 *               description: The teacher's image.
 *         hall:
 *           description: The hall of the lecture.
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *               minimum: 1
 *               description: The ID of the hall.
 *             code:
 *               type: string
 *               description: The code of the hall.
 *         admin:
 *           description: The admin who added the lecture.
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *               minimum: 1
 *               description: The ID of the admin.
 *             first_name:
 *               type: string
 *               description: The first name of the admin.
 *             last_name:
 *               type: string
 *               description: The second name of the admin.
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
 * /lecture:
 *   post:
 *     summary: Create an lecture
 *     security:
 *       - bearerAuth: []
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
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 description: The id of the lecture
 *               code:
 *                 type: string
 *                 description: The QR code string of the lecture
 *               timestamp:
 *                 type: string
 *                 format: date - time
 *                 description: The date and time of the lecture
 *               cost:
 *                 type: integer
 *                 minimum: 1
 *                 description: The cost of the lecture
 *               subject_id:
 *                 type: integer
 *                 description: The subject id of the lecture
 *               teacher_id:
 *                 type: integer
 *                 description: The teacher id of the lecture
 *               hall_id:
 *                 type: integer
 *                 description: The hall id of the lecture
 *               admin_id:
 *                 type: integer
 *                 description: The admin id who added the lecture
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
 *   put:
 *     summary: Update an lecture by ID
 *     security:
 *       - bearerAuth: []
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
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 description: The id of the lecture
 *               code:
 *                 type: string
 *                 description: The QR code string of the lecture
 *               timestamp:
 *                 type: string
 *                 format: date - time
 *                 description: The date and time of the lecture
 *               cost:
 *                 type: integer
 *                 minimum: 1
 *                 description: The cost of the lecture
 *               subject_id:
 *                 type: integer
 *                 description: The subject id of the lecture
 *               teacher_id:
 *                 type: integer
 *                 description: The teacher id of the lecture
 *               hall_id:
 *                 type: integer
 *                 description: The hall id of the lecture
 *               admin_id:
 *                 type: integer
 *                 description: The admin id who added the lecture
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
 *   get:
 *     summary: Get an lecture by ID
 *     security:
 *       - bearerAuth: []
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
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Lecture'
 *       '500':
 *         description: Some server error
 * 
 *   delete:
 *     summary: Delete an lecture by ID
 *     security:
 *       - bearerAuth: []
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
 * 
 * /lecture/all:
 *   get:
 *     summary: Get all lectures
 *     security:
 *       - bearerAuth: []
 *     tags: [Lecture Routes]
 *     operationId: getAllLectures
 *     responses:
 *       '200':
 *         description: Lectures retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Lecture'
 *       '500':
 *         description: Some server error
 * 
 * /lecture/attendees:
 *   get:
 *     summary: Get the lecture attendees (number of students)
 *     security:
 *       - bearerAuth: []
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
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Attendance'
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
} from "../controllers/lecture.controller.js"
import { getStudentAttendees } from "../controllers/attendance.controller.js"
import AdminMiddleware from "../middlewares/admin.middleware.js"

const router = Router()

router.route("/")
    .post(AdminMiddleware, create)
    .put(AdminMiddleware, updateById)
    .get(AdminMiddleware, getById)
    .delete(AdminMiddleware, deleteById)

router.route("/all")
    .get(AdminMiddleware, getAll)

router.route("/attendees")
    .get(AdminMiddleware, getStudentAttendees)

export default router
