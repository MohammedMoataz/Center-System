/**
 * @swagger
 * 
 * components:
 *   schemas:
 *     Admin:
 *       type: object
 *       required:
 *         - first_name
 *         - last_name
 *         - email
 *         - password
 *         - phone_number
 *         - super_password
 *         - start_shift
 *         - end_shift
 *         - access_token
 *       properties:
 *         id:
 *           type: integer
 *           minimum: 1
 *           description: First name of the admin
 *         first_name:
 *           type: string
 *           description: First name of the admin
 *         last_name:
 *           type: string
 *           description: Last name of the admin
 *         email:
 *           type: string
 *           format: email
 *           description: Email address of the admin
 *         password:
 *           type: string
 *           format: password
 *           description: Password of the admin
 *         phone_number:
 *           type: string
 *           description: Phone number of the admin
 *         super_password:
 *           type: string
 *           format: password
 *           description: Super password of the admin
 *         start_shift:
 *           type: string
 *           format: date-time
 *           description: Start time of the admin's shift
 *           example: '12:30:09'
 *         end_shift:
 *           type: string
 *           format: date-time
 *           description: End time of the admin's shift
 *           example: '22:30:09'
 *         access_token:
 *           type: string
 *           description: Access token of the admin
 *           example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
 *         _created_at:
 *           type: string
 *           format: date-time
 *           readOnly: true
 *           description: Timestamp when the admin was created
 *         _updated_at:
 *           type: string
 *           format: date-time
 *           readOnly: true
 *           description: Timestamp when the admin was last updated
 */
/** 
 * @swagger
 * 
 * /admin:
 *   post:
 *     summary: Create an admin and returns the admin ID
 *     security:
 *       - bearerAuth: []
 *     tags: [Admin Routes]
 *     operationId: createAdmin
 *     parameters:
 *       - name: token
 *         in: header
 *         description: token to be passed in the header
 *         schema:
 *           type: http
 *           scheme: bearer
 *           bearerFormat: JWT
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Admin'
 *     responses:
 *       '201':
 *         description: Admin created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Admin'
 *       '401':
 *         $ref: '#/components/responses/Unauthorized'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       '500':
 *         description: Some server error
 *
 *   put:
 *     summary: Update an admin by ID
 *     security:
 *       - bearerAuth: []
 *     tags: [Admin Routes]
 *     operationId: updateAdminById
 *     parameters:
 *       - name: token
 *         in: header
 *         description: token to be passed in the header
 *         schema:
 *           type: http
 *           scheme: bearer
 *           bearerFormat: JWT
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Admin'
 *     responses:
 *       '201':
 *         description: Admin updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Admin'
 *       '401':
 *         $ref: '#/components/responses/Unauthorized'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       '500':
 *         description: Some server error
 * 
 *   get:
 *     summary: Get an admin by ID
 *     security:
 *       - bearerAuth: []
 *     tags: [Admin Routes]
 *     operationId: getAdminById
 *     parameters:
 *       - name: id
 *         in: query
 *         required: true
 *         type: integer
 *     responses:
 *       '200':
 *         description: Admin retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Admin'
 *       '401':
 *         $ref: '#/components/responses/Unauthorized'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       '500':
 *         description: Some server error
 * 
 *   delete:
 *     summary: Delete an admin by ID
 *     security:
 *       - bearerAuth: []
 *     tags: [Admin Routes]
 *     operationId: deleteAdminById
 *     parameters:
 *       - name: token
 *         in: header
 *         description: token to be passed in the header
 *         schema:
 *           type: http
 *           scheme: bearer
 *           bearerFormat: JWT
 *       - name: id
 *         in: query
 *         required: true
 *         type: integer
 *     responses:
 *       '204':
 *         description: Admin deleted successfully
 *       '401':
 *         $ref: '#/components/responses/Unauthorized'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       '500':
 *         description: Some server error
 * 
 * /admin/all:
 *   get:
 *     summary: Get all admins
 *     security:
 *       - bearerAuth: []
 *     tags: [Admin Routes]
 *     operationId: getAllAdmins
 *     responses:
 *       '200':
 *         description: Admins retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Admin'
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
    getAll,
    getById,
    updateById
} from "../controllers/admin.controller.js"
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