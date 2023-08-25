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
 *         - parents_numbers
 *         - address
 *         - level
 *       properties:
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
 *         password:
 *           type: string
 *           format: password
 *           description: Password of the student
 *         phone_number:
 *           type: string
 *           description: Phone number of the student
 *         parents_numbers:
 *           type: array
 *           items:
 *             type: string
 *             description: Phone numbers of the student's parents
 *         address:
 *           type: string
 *           description: Address of the student
 *         level:
 *           type: integer
 *           minimum: 0
 *           exclusiveMinimum: true
 *           description: Level of the student
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
 */
/** 
 * @swagger
 * 
 * /student/create:
 *   post:
 *     summary: Create a student
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
 * /student/update:
 *   put:
 *     summary: Update an student by ID
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
 * /student/get:
 *   get:
 *     summary: Get an student by ID
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
 *       '500':
 *         description: Some server error
 * 
 * /student/all:
 *   get:
 *     summary: Get all students
 *     tags: [Student Routes]
 *     operationId: getAllStudents
 *     responses:
 *       '200':
 *         description: Students retrieved successfully
 *       '500':
 *         description: Some server error
 * 
 * /student/delete:
 *   delete:
 *     summary: Delete an student by ID
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
 */

import { Router } from "express"

import { create, deleteById, getById, getAll, updateById } from "../controllers/student.controller.js"

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