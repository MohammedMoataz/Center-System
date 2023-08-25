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
 */
/** 
 * @swagger
 * 
 * /teacher/create:
 *   post:
 *     summary: Create an teacher
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
 * /teacher/update:
 *   put:
 *     summary: Update an teacher by ID
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
 * /teacher/get:
 *   get:
 *     summary: Get an teacher by ID
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
 *       '500':
 *         description: Some server error
 * 
 * /teacher/all:
 *   get:
 *     summary: Get all teacher
 *     tags: [Teacher Routes]
 *     operationId: getAllTeacher
 *     responses:
 *       '200':
 *         description: Teachers retrieved successfully
 *       '500':
 *         description: Some server error
 * 
 * /teacher/delete:
 *   delete:
 *     summary: Delete an teacher by ID
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
 */

import { Router } from "express"

import { create, deleteById, getById, getAll, updateById } from "../controllers/teacher.controller.js"

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