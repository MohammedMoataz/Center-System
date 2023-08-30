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
 *           minimum: 1
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
 * /subject:
 *   post:
 *     summary: Create an subject
 *     security:
 *       - bearerAuth: []
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
 *       '401':
 *         $ref: '#/components/responses/Unauthorized'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       '500':
 *         description: Some server error
 *
 *   put:
 *     summary: Update an subject by ID
 *     security:
 *       - bearerAuth: []
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
 *               type: integer
 *               minimum: 1
 *               required: true
 *     responses:
 *       '201':
 *         description: Subject updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subject'
 *       '401':
 *         $ref: '#/components/responses/Unauthorized'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       '500':
 *         description: Some server error
 * 
 *   get:
 *     summary: Get an subject by ID
 *     security:
 *       - bearerAuth: []
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
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subject'
 *       '401':
 *         $ref: '#/components/responses/Unauthorized'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       '500':
 *         description: Some server error
 * 
 *   delete:
 *     summary: Delete an subject by ID
 *     security:
 *       - bearerAuth: []
 *     tags: [Subject Routes]
 *     operationId: deleteSubjectById
 *     parameters:
 *       - name: id
 *         in: query
 *         required: true
 *         type: int
 *     responses:
 *       '204':
 *         description: Subject deleted successfully
 *       '401':
 *         $ref: '#/components/responses/Unauthorized'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       '500':
 *         description: Some server error
 * 
 * /subject/all:
 *   get:
 *     summary: Get all subject
 *     security:
 *       - bearerAuth: []
 *     tags: [Subject Routes]
 *     operationId: getAllSubject
 *     responses:
 *       '200':
 *         description: Subjects retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Subject'
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
} from "../controllers/subject.controller.js"
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