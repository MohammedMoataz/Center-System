/**
 * @swagger
 * 
 * components:
 *   schemas:
 *     Teacher:
 *       type: object
 *       required:
 *         - id
 *         - first_name
 *         - last_name
 *         - bio
 *       properties:
 *         id:
 *           type: integer
 *           description: The id of the teacher
 *         first_name:
 *           type: string
 *           description: The first name of the teacher
 *         last_name:
 *           type: string
 *           description: The last name of the teacher
 *         phones_numbers:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Phone'
 *         bio:
 *           type: string
 *           description: The bio of the teacher
 *         image:
 *           type: string
 *           description: The image of the teacher
 *         _created_at:
 *           type: string
 *           format: date-time
 *           readOnly: true
 *           description: Timestamp when the teacher was created
 *         _updated_at:
 *           type: string
 *           format: date-time
 *           readOnly: true
 *           description: Timestamp when the teacher was last updated
 * 
 *     Phone:
 *       type: object
 *       required:
 *         - phone_number
 *       properties:
 *         id:
 *           type: integer
 *           minimum: 1
 *           description: The ID of the teacher's phone
 *         phone_number:
 *           type: string
 *           pattern: '^\d{4}-\d{3}-\d{4}$'
 *           description: The phone number of the teacher
 */
/** 
 * @swagger
 * 
 * /teacher:
 *   post:
 *     summary: Create an teacher
 *     security:
 *       - bearerAuth: []
 *     tags: [Teacher Routes]
 *     operationId: createTeacher
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Teacher'
 *     responses:
 *       '201':
 *         description: Teacher created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Teacher'
 *       '500':
 *         description: Some server error
 *
 *   put:
 *     summary: Update an teacher by ID
 *     security:
 *       - bearerAuth: []
 *     tags: [Teacher Routes]
 *     operationId: updateTeacherById
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Teacher'
 *             id:
 *               type: int
 *               required: true
 *     responses:
 *       '200':
 *         description: Teacher updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Teacher'
 *       '500':
 *         description: Some server error
 * 
 *   get:
 *     summary: Get an teacher by ID
 *     security:
 *       - bearerAuth: []
 *     tags: [Teacher Routes]
 *     operationId: getTeacherById
 *     parameters:
 *       - name: id
 *         in: query
 *         required: true
 *         type: int
 *     responses:
 *       '200':
 *         description: Teacher retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Teacher'
 *       '500':
 *         description: Some server error
 * 
 *   delete:
 *     summary: Delete an teacher by ID
 *     security:
 *       - bearerAuth: []
 *     tags: [Teacher Routes]
 *     operationId: deleteTeacherById
 *     parameters:
 *       - name: id
 *         in: query
 *         required: true
 *         type: int
 *     responses:
 *       '200':
 *         description: Teacher deleted successfully
 *       '500':
 *         description: Some server error
 * 
 * /teacher/all:
 *   get:
 *     summary: Get all teachers
 *     security:
 *       - bearerAuth: []
 *     tags: [Teacher Routes]
 *     operationId: getAllTeacher
 *     responses:
 *       '200':
 *         description: Teachers retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Teacher'
 *       '500':
 *         description: Some server error
 * 
 * 
 * /teacher/phone:
 *   post:
 *     summary: Add phone to a teacher
 *     security:
 *       - bearerAuth: []
 *     tags: [Teacher Routes]
 *     operationId: addPhone
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Phone'
 *     responses:
 *       '201':
 *         description: Teacher's phone added successfully
 *         schema:
 *           $ref: '#/components/schemas/Phone'
 * 
 *   put:
 *     summary: Update a phone's phone number
 *     security:
 *       - bearerAuth: []
 *     tags: [Teacher Routes]
 *     operationId: updatePhoneById
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Phone'
 *     parameters:
 *       - name: phone_id
 *         in: query
 *         required: true
 *         type: integer
 *     responses:
 *       '200':
 *         description: Teacher's phone updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Phone'
 *       '500':
 *         description: Some server error
 * 
 *   delete:
 *     summary: Delete a teacher's phone number by phone's ID
 *     security:
 *       - bearerAuth: []
 *     tags: [Teacher Routes]
 *     operationId: deletePhoneById
 *     parameters:
 *       - name: phone_id
 *         in: query
 *         required: true
 *         type: integer
 *     responses:
 *       '200':
 *         description: Teacher's phone deleted successfully
 *       '500':
 *         description: Some server error
 * 
 * 
 * /teacher/phone/all:
 *   get:
 *     summary: Get all teacher's phones
 *     security:
 *       - bearerAuth: []
 *     tags: [Teacher Routes]
 *     operationId: getAllTeachersPhones
 *     responses:
 *       '200':
 *         description: Teachers phones retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ParPhoneent'
 *       '500':
 *         description: Some server error
 */

import { Router } from "express"

import {
    create,
    deleteById,
    getById,
    getAll,
    updateById,
    addPhone,
    updatePhone,
    getPhones,
    deletePhone
} from "../controllers/teacher.controller.js"
import AdminMiddleware from "../middlewares/admin.middleware.js"

const router = Router()

router.route("/")
    .post(AdminMiddleware, create)
    .put(AdminMiddleware, updateById)
    .get(AdminMiddleware, getById)
    .delete(AdminMiddleware, deleteById)

router.route("/all")
    .get(AdminMiddleware, getAll)

router.route("/phone")
    .post(AdminMiddleware, addPhone)
    .put(AdminMiddleware, updatePhone)
    .delete(AdminMiddleware, deletePhone)

router.route("/phone/all")
    .get(AdminMiddleware, getPhones)


export default router
