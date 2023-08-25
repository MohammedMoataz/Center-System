import { executeQuery } from "../config/db/db.js"

export default {
    create: async (lecture) => await executeQuery(`
        call center_system.insert_lecture(
            '${lecture.code}', 
            '${lecture.timestamp}', 
            '${lecture.cost}', 
            '${lecture.sub_id}', 
            '${lecture.t_id}', 
            '${lecture.hall_id}'
            '${lecture.admin_id}'
            '${lecture._created_at}'
        );
    `),

    updateById: async (lecture) => await executeQuery(`
        call center_system.update_lecture(
            '${lecture.id}', 
            '${lecture.code}', 
            '${lecture.timestamp}', 
            '${lecture.cost}', 
            '${lecture.sub_id}', 
            '${lecture.t_id}', 
            '${lecture.hall_id}'
            '${lecture.admin_id}'
            '${lecture._updated_at}'
        );
    `),

    getById: async (id) => await executeQuery(`
        call center_system.get_lecture(
            '${id}'
        );
    `),

    getAll: async () => await executeQuery(`
        call center_system.get_all_lectures();
    `),

    deleteById: async (id, deleted_at) => await executeQuery(`
        call center_system.delete_lecture(
            '${id}',
            '${deleted_at}'
        );
    `),
}
