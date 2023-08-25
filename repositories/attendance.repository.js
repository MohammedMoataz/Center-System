import { executeQuery } from "../config/db/db.js"

export default {
    create: async (attendance) => await executeQuery(`
        call center_system.insert_attendance(
            '${attendance.s_id}', 
            '${attendance.l_id}', 
            '${attendance.attended}', 
            '${attendance._created_at}'
        );
    `),

    updateById: async (attendance) => await executeQuery(`
        call center_system.update_attendance(
            '${attendance.id}', 
            '${attendance.s_id}', 
            '${attendance.l_id}', 
            '${attendance.attended}',
            '${attendance._updated_at}'
        );
    `),

    getLectureAttendances: async (lecture_id) => await executeQuery(`
        call center_system.get_lecture_attendances(
            '${lecture_id}'
        );
    `),

    getStudentAttandances: async (student_id) => await executeQuery(`
        call center_system.get_student_attendances(
            '${student_id}'
        );
    `),

    getAll: async () => await executeQuery(`
        call center_system.get_all_attendances();
    `),
}
