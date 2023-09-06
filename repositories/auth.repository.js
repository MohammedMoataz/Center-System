import { executeQuery } from "../config/db/db.js"

export default {
    loginAdmin: async (email, password) => await executeQuery(`
        call center_system.login_admin(
            '${email}'
        );
    `),

    loginStudent: async (email, password) => await executeQuery(`
        call center_system.login_student(
            '${email}'
        );
    `),

    updateAdminToken: async (id, refresh_token) => await executeQuery(`
        call center_system.update_admin_token(
            '${id}',
            '${refresh_token}'
        );
    `),

    updateStudentToken: async (id, refresh_token) => await executeQuery(`
        call center_system.update_student_token(
            '${id}',
            '${refresh_token}'
        );
    `),

    getAdminToken: async (refresh_token) => await executeQuery(`
        call center_system.get_admin_token(
            '${refresh_token}'
        );
    `),

    getStudentToken: async (refresh_token) => await executeQuery(`
        call center_system.get_student_token(
            '${refresh_token}'
        );
    `),

    deleteAdminToken: async (refresh_token) => await executeQuery(`
        call center_system.delete_admin_token(
            '${refresh_token}'
        );
    `),

    deleteStudentToken: async (refresh_token) => await executeQuery(`
        call center_system.delete_student_token(
            '${refresh_token}'
        );
    `),
}
