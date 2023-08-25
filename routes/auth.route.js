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
 * /refreshToken:
 *   post:
 *     summary: Refresh the current session token
 *     tags: [Authentication Routes]
 *     operationId: RefreshAccessToken
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: token
 *         schema:
 *           type: string
 *         required: true
 *         description: Student's access token
 *     responses:
 *       '200':
 *         description: Token refreshed successfully
 *       '500':
 *         description: Some server error
 */

import { Router } from 'express'

import {
    redirect,
    adminLogin,
    login,
    register,
    refreshAccessToken
} from '../controllers/auth.controller.js'

const router = Router()

router.route('/')
    .get(redirect)

router.route('/admin/login')
    .post(adminLogin)

router.route('/login')
    .post(login)

router.route('/register')
    .post(register)

router.route('/refreshToken')
    .post(refreshAccessToken)

export default router