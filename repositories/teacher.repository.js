import { executeQuery } from "../config/db/db.js"

export default {
    create: async (teacher) => await executeQuery(`
        call center_system.insert_teacher(
            '${teacher.f_name}', 
            '${teacher.l_name}', 
            '${teacher.bio}', 
            '${teacher.image}', 
            '${teacher._created_at}'
        );
    `),

    updateById: async (teacher) => await executeQuery(`
        call center_system.update_teacher(
            '${teacher.id}', 
            '${teacher.f_name}', 
            '${teacher.l_name}', 
            '${teacher.bio}', 
            '${teacher.image}', 
            '${teacher._updated_at}'
        );
    `),

    getById: async (id) => await executeQuery(`
        call center_system.get_teacher(
            '${id}'
        );
    `),

    getPhones: async (teacher_id) => await executeQuery(`
        call center_system.get_teacher_phones(
            '${teacher_id}'
        );
    `),

    getAll: async () => await executeQuery(`
        call center_system.get_all_teachers();
    `),

    deleteById: async (id, deleted_at) => await executeQuery(`
        call center_system.delete_teacher(
            '${id}',
            '${deleted_at}'
        );
    `),

    deletePhone: async (id, deleted_at) => await executeQuery(`
        call center_system.delete_teacher_phone(
            '${id}',
            '${deleted_at}'
        );
    `),
}
