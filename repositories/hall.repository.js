import { executeQuery } from "../config/db/db.js"

export default {
    create: async (hall) => await executeQuery(`
        call center_system.insert_hall(
            '${hall.code}', 
            '${hall.cost}', 
            '${hall.capacity}', 
            '${hall._created_at}'
        );
    `),

    updateById: async (hall) => await executeQuery(`
        call center_system.update_hall(
            '${hall.id}', 
            '${hall.cost}', 
            '${hall.capacity}', 
            '${hall._updated_at}'
        );
    `),

    getById: async (id) => await executeQuery(`
        call center_system.get_hall(
            '${id}'
        );
    `),

    getAll: async () => await executeQuery(`
        call center_system.get_all_halls();
    `),

    deleteById: async (id, deleted_at) => await executeQuery(`
        call center_system.delete_hall(
            '${id}',
            '${deleted_at}'
        );
    `),
}
