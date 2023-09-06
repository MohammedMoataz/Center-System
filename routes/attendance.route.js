/**
 * @swagger
 *
 * components:
 *   schemas:
 *     Attendance:
 *       type: object
 *       required:
 *         - id
 *         - student
 *         - lecture 
 *         - attended
 *       properties:
 *         id:
 *           type: integer
 *           minimum: 1
 *           description: The ID of the attendance record.
 *         student:
 *           description: The student who attended the lecture.
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *               minimum: 1
 *               description: The ID of the student.
 *             username:
 *               type: string
 *               description: The username of the student.
 *             phone_number:
 *               type: string
 *               pattern: '^\d{4}-\d{3}-\d{4}$'
 *               description: The phone number of the student.
 *             level:
 *               type: integer
 *               minimum: 1
 *               description: The level of the student.
 *         lecture:
 *           description: The lecture that the student attended.
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *               minimum: 1
 *               description: The ID of the lecture.
 *             code:
 *               type: string
 *               description: The code of the lecture.
 *             timestamp:
 *               type: string
 *               format: date-time
 *               description: The date and time of the lecture.
 *               example: '2012-12-12 22:30:09'
 *         attended:
 *           type: boolean
 *           description: Whether or not the student attended the lecture.
 *         _created_at:
 *           type: string
 *           format: date-time
 *           description: The date and time the attendance record was created.
 *         _updated_at:
 *           type: string
 *           format: date-time
 *           description: The date and time the attendance record was updated.
 */
/**
 * @swagger
 * 
 * /attendance:  
 *   post:
 *     summary: Create a new attendance record
 *     security:
 *       - bearerAuth: []
 *     operationId: createAttendance
 *     tags: [Attendance Routes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               lecture_id:
 *                 type: integer
 *                 minimum: 1
 *                 description: The ID of the lecture.
 *               student_id:
 *                 type: integer
 *                 minimum: 1
 *                 description: The ID of the student.
 *               attended:
 *                 type: boolean
 *                 description: Whether or not the student attended the lecture.
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Attendance'
 *       '401':
 *         $ref: '#/components/responses/Unauthorized'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       '500':
 *         description: Some server error
 * 
 *   put:
 *     summary: Update an attendance record
 *     security:
 *       - bearerAuth: []
 *     operationId: updateAttendance
 *     tags: [Attendance Routes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               lecture_id:
 *                 type: integer
 *                 minimum: 1
 *                 description: The ID of the lecture.
 *               student_id:
 *                 type: integer
 *                 minimum: 1
 *                 description: The ID of the student.
 *               attended:
 *                 type: boolean
 *                 description: Whether or not the student attended the lecture.
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Attendance'
 *       '401':
 *         $ref: '#/components/responses/Unauthorized'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       '500':
 *         description: Some server error
 * 
 *   get:
 *     summary: Get all attendees records
 *     security:
 *       - bearerAuth: []
 *     operationId: getAllAttendees
 *     tags: [Attendance Routes]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Attendance'
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
  updateById,
  getAll,
} from "../controllers/attendance.controller.js"
import AdminMiddleware from "../middlewares/admin.middleware.js"

const router = Router()

router.route("/")
  .post(AdminMiddleware, create)
  .put(AdminMiddleware, updateById)
  .get(AdminMiddleware, getAll)

export default router
