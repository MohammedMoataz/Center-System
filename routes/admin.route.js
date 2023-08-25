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
 *       properties:
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
 *           example: '12:12:12'
 *         end_shift:
 *           type: string
 *           format: date-time
 *           description: End time of the admin's shift
 *           example: '12:12:12'
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
 * /admin/create:
 *   post:
 *     summary: Create an admin
 *     tags: [Admin Routes]
 *     operationId: createAdmin
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
 *       '500':
 *         description: Some server error
 *
 * /admin/update:
 *   put:
 *     summary: Update an admin by ID
 *     security:
 *       - BearerAuth: [Admin]
 *     tags: [Admin Routes]
 *     operationId: updateAdminById
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
 *             id:
 *               type: int
 *               required: true
 *     responses:
 *       '200':
 *         description: Admin updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Admin'
 *       '500':
 *         description: Some server error
 * 
 * /admin/get:
 *   get:
 *     summary: Get an admin by ID
 *     tags: [Admin Routes]
 *     operationId: getAdminById
 *     parameters:
 *       - name: id
 *         in: query
 *         required: true
 *         type: int
 *     responses:
 *       '200':
 *         description: Admin retrieved successfully
 *       '500':
 *         description: Some server error
 * 
 * /admin/all:
 *   get:
 *     summary: Get all admins
 *     tags: [Admin Routes]
 *     operationId: getAllAdmins
 *     responses:
 *       '200':
 *         description: Admins retrieved successfully
 *       '500':
 *         description: Some server error
 * 
 * /admin/delete:
 *   delete:
 *     summary: Delete an admin by ID
 *     tags: [Admin Routes]
 *     operationId: deleteAdminById
 *     parameters:
 *       - name: id
 *         in: query
 *         required: true
 *         type: int
 *     responses:
 *       '200':
 *         description: Admin deleted successfully
 *       '500':
 *         description: Some server error
 */

import { Router } from "express"

import AdminMiddleware from "../middlewares/admin.middleware.js"
import { create, deleteById, getAll, getById, updateById } from "../controllers/admin.controller.js"

const router = Router()

router.route("/create")
    .post(AdminMiddleware, create)

router.route("/update")
    .put(AdminMiddleware, updateById)

router.route("/get")
    .get(AdminMiddleware, getById)

router.route("/all")
    .get(AdminMiddleware, getAll)

router.route("/delete")
    .delete(AdminMiddleware, deleteById)

export default router