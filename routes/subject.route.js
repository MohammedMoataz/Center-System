/**
 * @swagger
 * 
 * components:
 *   schemas:
 *     Subject:
 *       type: object
 *       required:
 *         - id
 *         - code
 *         - name
 *         - level
 *       properties:
 *         id:
 *           type: integer
 *           description: The id of the subject
 *         code:
 *           type: string
 *           description: The unique name string of the subject
 *         name:
 *           type: string
 *           description: The name of the subject
 *         level:
 *           type: integer
 *           minimum: 1
 *           description: The level of the subject
 *         _created_at:
 *           type: string
 *           format: date-time
 *           readOnly: true
 *           description: Timestamp when the subject was created
 *         _updated_at:
 *           type: string
 *           format: date-time
 *           readOnly: true
 *           description: Timestamp when the subject was last updated
 */
/** 
 * @swagger
 * 
 * /subject/create:
 *   post:
 *     summary: Create an subject
 *     tags: [Subject Routes]
 *     operationId: createSubject
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Subject'
 *     responses:
 *       '201':
 *         description: Subject created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subject'
 *       '500':
 *         description: Some server error
 *
 * /subject/update:
 *   put:
 *     summary: Update an subject by ID
 *     tags: [Subject Routes]
 *     operationId: updateSubjectById
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Subject'
 *             id:
 *               type: int
 *               required: true
 *     responses:
 *       '200':
 *         description: Subject updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subject'
 *       '500':
 *         description: Some server error
 * 
 * /subject/get:
 *   get:
 *     summary: Get an subject by ID
 *     tags: [Subject Routes]
 *     operationId: getSubjectById
 *     parameters:
 *       - name: id
 *         in: query
 *         required: true
 *         type: int
 *     responses:
 *       '200':
 *         description: Subject retrieved successfully
 *       '500':
 *         description: Some server error
 * 
 * /subject/all:
 *   get:
 *     summary: Get all subject
 *     tags: [Subject Routes]
 *     operationId: getAllSubject
 *     responses:
 *       '200':
 *         description: Subjects retrieved successfully
 *       '500':
 *         description: Some server error
 * 
 * /subject/delete:
 *   delete:
 *     summary: Delete an subject by ID
 *     tags: [Subject Routes]
 *     operationId: deleteSubjectById
 *     parameters:
 *       - name: id
 *         in: query
 *         required: true
 *         type: int
 *     responses:
 *       '200':
 *         description: Subject deleted successfully
 *       '500':
 *         description: Some server error
 */

import { Router } from "express"

import { create, deleteById, getById, getAll, updateById } from "../controllers/subject.controller.js"

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