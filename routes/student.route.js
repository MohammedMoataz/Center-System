/**
 * @swagger
 * 
 * components:
 *   schemas:
 *     Student:
 *       type: object
 *       required:
 *         - first_name
 *         - last_name
 *         - email
 *         - password
 *         - phone_number
 *         - address
 *         - level
 *         - access_token
 *       properties:
 *         id:
 *           type: integer
 *           minimum: 1
 *           description: The ID of the student
 *         first_name:
 *           type: string
 *           description: First name of the student
 *         last_name:
 *           type: string
 *           description: Last name of the student
 *         email:
 *           type: string
 *           format: email
 *           description: Email address of the student
 *         username:
 *           type: string
 *           description: Username of the student
 *         password:
 *           type: string
 *           format: password
 *           description: Password of the student
 *         phone_number:
 *           type: string
 *           pattern: '^\d{4}-\d{3}-\d{4}$'
 *           description: Phone number of the student
 *         parents:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Parent'
 *         address:
 *           type: string
 *           description: Address of the student
 *         level:
 *           type: integer
 *           minimum: 0
 *           exclusiveMinimum: true
 *           description: Level of the student
 *         access_token:
 *           type: string
 *           description: Access token of the admin
 *           example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTW9oYW1tZWQgTW9hdGF6Iiwicm9sZSI6IlN0dWRlbnQifQ.Mq9rxukQeBZoyCbMH6TfA8vhTzUPauQvBLy0JQNfbCQ'
 *         _created_at:
 *           type: string
 *           format: date-time
 *           readOnly: true
 *           description: Timestamp when the student was created
 *         _updated_at:
 *           type: string
 *           format: date-time
 *           readOnly: true
 *           description: Timestamp when the student was last updated
 * 
 *     Parent:
 *       type: object
 *       required:
 *         - student_id
 *         - parent_number
 *         - label
 *       properties:
 *         id:
 *           type: integer
 *           minimum: 1
 *           description: The ID of the student's parent
 *         student_id:
 *           type: integer
 *           description: The parent's student id
 *         parent_number:
 *           type: string
 *           pattern: '^\d{4}-\d{3}-\d{4}$'
 *           description: The phone number of the parent
 *         label:
 *           type: string
 *           description: Who is the parent be (Mather, Father, etc.)
 */
/** 
 * @swagger
 * 
 * /student:
 *   post:
 *     summary: Create a student
 *     security:
 *       - bearerAuth: []
 *     tags: [Student Routes]
 *     operationId: createStudent
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     responses:
 *       '201':
 *         description: Student created successfully
 *         schema:
 *           $ref: '#/components/schemas/Student'
 * 
 *   put:
 *     summary: Update a student by ID
 *     security:
 *       - bearerAuth: []
 *     tags: [Student Routes]
 *     operationId: updateStudentById
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     parameters:
 *       - name: id
 *         in: query
 *         required: true
 *         type: integer
 *     responses:
 *       '200':
 *         description: Student updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       '500':
 *         description: Some server error
 * 
 *   get:
 *     summary: Get a student by ID
 *     security:
 *       - bearerAuth: []
 *     tags: [Student Routes]
 *     operationId: getStudentById
 *     parameters:
 *       - name: id
 *         in: query
 *         required: true
 *         type: integer
 *     responses:
 *       '200':
 *         description: Student retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       '500':
 *         description: Some server error
 * 
 *   delete:
 *     summary: Delete a student by ID
 *     security:
 *       - bearerAuth: []
 *     tags: [Student Routes]
 *     operationId: deleteStudentById
 *     parameters:
 *       - name: id
 *         in: query
 *         required: true
 *         type: integer
 *     responses:
 *       '200':
 *         description: Student deleted successfully
 *       '500':
 *         description: Some server error
 * 
 * /student/all:
 *   get:
 *     summary: Get all students
 *     security:
 *       - bearerAuth: []
 *     tags: [Student Routes]
 *     operationId: getAllStudents
 *     responses:
 *       '200':
 *         description: Students retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Student'
 *       '500':
 *         description: Some server error
 * 
 * /student/attendees:
 *   get:
 *     summary: Get all student attendees
 *     security:
 *       - bearerAuth: []
 *     tags: [Student Routes]
 *     operationId: getAllStudentsAttendees
 *     parameters:
 *       - name: student_id
 *         in: query
 *         required: true
 *         type: integer
 *     responses:
 *       '200':
 *         description: Students attendees retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Attendance'
 *       '500':
 *         description: Some server error
 * 
 * /student/parent:
 *   post:
 *     summary: Add parent to a student
 *     security:
 *       - bearerAuth: []
 *     tags: [Student Routes]
 *     operationId: addParent
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Parent'
 *     responses:
 *       '201':
 *         description: Student's parent added successfully
 *         schema:
 *           $ref: '#/components/schemas/Parent'
 * 
 *   put:
 *     summary: Update a parent's phone number
 *     security:
 *       - bearerAuth: []
 *     tags: [Student Routes]
 *     operationId: updateParentById
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Parent'
 *     responses:
 *       '200':
 *         description: Student updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Parent'
 *       '500':
 *         description: Some server error
 * 
 *   delete:
 *     summary: Delete a student's parent number by parent's ID
 *     security:
 *       - bearerAuth: []
 *     tags: [Student Routes]
 *     operationId: deleteParentById
 *     parameters:
 *       - name: parent_id
 *         in: query
 *         required: true
 *         type: integer
 *     responses:
 *       '200':
 *         description: Student's parent deleted successfully
 *       '500':
 *         description: Some server error
 * 
 * 
 * /student/parent/all:
 *   get:
 *     summary: Get all student's parents
 *     security:
 *       - bearerAuth: []
 *     tags: [Student Routes]
 *     operationId: getAllStudentsParents
 *     parameters:
 *       - name: student_id
 *         in: query
 *         required: true
 *         type: integer
 *     responses:
 *       '200':
 *         description: Students parents retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Parent'
 *       '500':
 *         description: Some server error
 */

import { Router } from "express"

import StudentMiddleware from "../middlewares/student.middleware.js"
import {
    create,
    deleteById,
    getById,
    getAll,
    updateById,
    addParent,
    updateParent,
    getParents,
    deleteParent,
} from "../controllers/student.controller.js"
import { getStudentAttendees } from "../controllers/attendance.controller.js"

const router = Router()

router.route("/")
    .post(StudentMiddleware, create)
    .put(StudentMiddleware, updateById)
    .get(StudentMiddleware, getById)
    .delete(StudentMiddleware, deleteById)

router.route("/all")
    .get(StudentMiddleware, getAll)

router.route("/attendees")
    .get(StudentMiddleware, getStudentAttendees)

router.route("/parent")
    .post(StudentMiddleware, addParent)
    .put(StudentMiddleware, updateParent)
    .delete(StudentMiddleware, deleteParent)

router.route("/parent/all")
    .get(StudentMiddleware, getParents)


export default router
