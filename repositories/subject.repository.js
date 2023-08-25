import { executeQuery } from "../config/db/db.js"

export default {
    create: async (subject) => await executeQuery(`
        call center_system.insert_subject(
            '${subject.code}', 
            '${subject.name}', 
            '${subject.level}', 
            '${subject._created_at}'
        );
    `),

    updateById: async (subject) => await executeQuery(`
        call center_system.update_subject(
            '${subject.id}', 
            '${subject.code}', 
            '${subject.name}', 
            '${subject.level}', 
            '${subject._updated_at}'
        );
    `),

    getById: async (id) => await executeQuery(`
        call center_system.get_subject(
            '${id}'
        );
    `),

    getAll: async () => await executeQuery(`
        call center_system.get_all_subjects();
    `),

    deleteById: async (id, deleted_at) => await executeQuery(`
        call center_system.delete_subject(
            '${id}',
            '${deleted_at}'
        );
    `),
}
