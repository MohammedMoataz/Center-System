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

    addParent: async (parent) => await executeQuery(`
        call center_system.insert_parent(
            '${parent.s_id}', 
            '${parent.parent_no}', 
            '${parent.label}'
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

    updateParent: async (parent) => await executeQuery(`
        call center_system.update_parent(
            '${parent.id}', 
            '${parent.parent_no}', 
            '${parent.label}'
        );
    `),

    getById: async (id) => await executeQuery(`
        call center_system.get_student_details(
            '${id}'
        );
    `),

    getParents: async (student_id) => await executeQuery(`
        call center_system.get_parents(
            '${student_id}'
        );
    `),

    getAll: async () => await executeQuery(`
        call center_system.get_all_students_details();
    `),

    deleteById: async (id, deleted_at) => await executeQuery(`
        call center_system.delete_student(
            '${id}',
            '${deleted_at}'
        );
    `),

    deleteParent: async (id, deleted_at) => await executeQuery(`
        call center_system.delete_parent(
            '${id}',
            '${deleted_at}'
        );
    `),
}
