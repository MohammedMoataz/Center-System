/**
 * @swagger
 * 
 * # 1) Define the security scheme type (HTTP bearer)
 * components:
 *   securitySchemes:
 *     bearerAuth:            # arbitrary name for the security scheme
 *       type: http
 *       name: Authorization
 *       scheme: bearer
 *       bearerFormat: JWT    # optional, arbitrary value for documentation purposes

* # 2) Apply the security globally to all operations
 * security:
 *   - bearerAuth: []         # use the same name as above
 */
/**
 * @swagger
 * 
 * # Descriptions of common components
 * components:
 *   responses:
 *     NotFound:
 *       description: The specified resource was not found
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Error'
 *     Unauthorized:
 *       description: Unauthorized
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Error' 
 * 
 *   schemas:
 *     SuccessResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           description: Whether the request was successful.
 *           example: "This is the response data."
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         error:
 *           type: stringF
 *           description: The error message.
 *     Error:
 *       type: object
 *       properties:
 *         code:
 *           type: string
 *         message:
 *           type: string
 *       required:
 *         - code
 *         - message
 * 
 * 
 * 200:
 *   description: OK
 *   schema:
 *     $ref: '#/definitions/SuccessResponse'
 * '401':
 *   description: Unauthorized
 *   schema:
 *     $ref: '#/definitions/ErrorResponse'
 *     properties:
 *       error:
 *         type: string
 *         description: The error message.
 *         example: "You are not authorized to access this resource."
 * '404':
 *   description: Not Found
 *   schema:
 *     $ref: '#/definitions/ErrorResponse'
 *     properties:
 *       error:
 *         type: string
 *         description: The error message.
 *         example: "The resource you are looking for could not be found."
 * '500':
 *   description: Internal Server Error
 *   schema:
 *     $ref: '#/definitions/ErrorResponse'
 *     properties:
 *       error:
 *         type: string
 *         description: The error message.
 *         example: "An internal server error occurred."
 */
/**
 * @swagger
 * 
 * components:
 *   schemas:
 *     AdminLogin:
 *       type: object
 *       required:
 *         - email 
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: The email address of the admin
 *         password:
 *           type: string
 *           format: password
 *           description: The password of the admin
 * 
 *     StudentLogin:
 *       type: object
 *       required:
 *         - username 
 *         - password
 *       properties:
 *         username:
 *           type: string
 *           description: The username of the student
 *         password:
 *           type: string
 *           format: password
 *           description: The password of the student
 */
/** 
 * @swagger
 * 
 * /admin/login:
 *   post:
 *     summary: Login of the admin
 *     tags: [Authentication Routes]
 *     operationId: loginAdmin
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AdminLogin'
 *     responses:
 *       '200':
 *         description: Admin logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AdminLogin'
 *       '500':
 *         description: Some server error
 * 
 * /admin/token:
 *   post:
 *     summary: Refresh the current session token
 *     tags: [Authentication Routes]
 *     operationId: refreshAdminToken
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
 *               token:
 *                 type: string
 *             required:
 *               - token
 *         required: true
 *         description: Student's access token
 *     responses:
 *       '200':
 *         description: Token refreshed successfully
 *       '500':
 *         description: Some server error
 * 
 * /admin/logout:
 *   delete:
 *     summary: Admin logout from server
 *     tags: [Authentication Routes]
 *     operationId: adminLogout
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
 *               token:
 *                 type: string
 *             required:
 *               - token
 *         required: true
 *     responses:
 *       '204':
 *         description: Logged out successfully
 *       '500':
 *         description: Some server error
 * 
 * /register:
 *   post:
 *     summary: Registration of the student
 *     tags: [Authentication Routes]
 *     operationId: studentRegistration
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
 *       '200':
 *         description: Student registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       '500':
 *         description: Some server error
 * 
 * /login:
 *   post:
 *     summary: Login of the student
 *     tags: [Authentication Routes]
 *     operationId: loginStudent
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/StudentLogin'
 *     responses:
 *       '201':
 *         description: Student Login successfully
 *         schema:
 *           $ref: '#/components/schemas/StudentLogin'
 *       '500':
 *         description: Server error
 * 
 * /token:
 *   post:
 *     summary: Refresh the current session token
 *     tags: [Authentication Routes]
 *     operationId: refreshStudentToken
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
 *               token:
 *                 type: string
 *             required:
 *               - token
 *         required: true
 *         description: Student's access token
 *     responses:
 *       '200':
 *         description: Token refreshed successfully
 *       '500':
 *         description: Some server error
 * 
 * /logout:
 *   delete:
 *     summary: Student logout from server
 *     tags: [Authentication Routes]
 *     operationId: studentLogout
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
 *               token:
 *                 type: string
 *             required:
 *               - token
 *         required: true
 *     responses:
 *       '204':
 *         description: Logged out successfully
 *       '500':
 *         description: Some server error
 */

import { Router } from 'express'

import {
    redirect,
    adminLogin,
    login,
    register,
    refreshAdminToken,
    refreshStudentToken,
    adminLogout,
    studentLogout,
} from '../controllers/auth.controller.js'

const router = Router()

router.route('/')
    .get(redirect)

router.route('/admin/login')
    .post(adminLogin)

router.route('/admin/token')
    .post(refreshAdminToken)

router.route('/admin/logout')
    .delete(adminLogout)

router.route('/register')
    .post(register)

router.route('/login')
    .post(login)

router.route('/token')
    .post(refreshStudentToken)

router.route('/logout')
    .delete(studentLogout)

export default router