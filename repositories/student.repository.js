import { executeQuery } from "../config/db/db.js"

export default {
    create: async (student) => await executeQuery(`
        call center_system.insert_student(
            '${student.f_name}', 
            '${student.l_name}', 
            '${student.email}', 
            '${student.username}', 
            '${student.pass}', 
            '${student.phone_no}', 
            '${student.address}',
            '${student.level}',
            '${student._created_at}'
        );
    `),

    updateById: async (student) => await executeQuery(`
        call center_system.update_student(
            '${student.id}', 
            '${student.f_name}', 
            '${student.l_name}', 
            '${student.email}', 
            '${student.username}', 
            '${student.pass}', 
            '${student.phone_no}', 
            '${student.address}',
            '${student.level}',
            '${student._updated_at}'
        );
    `),

    getById: async (id) => await executeQuery(`
        call center_system.get_student(
            '${id}'
        );
    `),

    getAll: async () => await executeQuery(`
        call center_system.get_all_students();
    `),

    deleteById: async (id, deleted_at) => await executeQuery(`
        call center_system.delete_student(
            '${id}',
            '${deleted_at}'
        );
    `),
}
