import { executeQuery } from "../config/db/db.js"

export default {
    create: async (admin) => await executeQuery(`
        call center_system.insert_admin(
            '${admin.f_name}', 
            '${admin.l_name}', 
            '${admin.email}', 
            '${admin.pass}', 
            '${admin.phone_no}', 
            '${admin.sup_pass}', 
            '${admin.start_shift}', 
            '${admin.end_shift}', 
            '${admin._created_at}'
        );
    `),

    updateById: async (admin) => await executeQuery(`
        call center_system.update_admin(
            '${admin.id}', 
            '${admin.f_name}', 
            '${admin.l_name}', 
            '${admin.email}', 
            '${admin.pass}', 
            '${admin.phone_no}', 
            '${admin.sup_pass}', 
            '${admin.start_shift}', 
            '${admin.end_shift}',
            '${admin._updated_at}'
        );
    `),

    getById: async (id) => await executeQuery(`
        call center_system.get_admin(
            '${id}'
        );
    `),

    getAll: async () => await executeQuery(`
        call center_system.get_all_admins();
    `),

    deleteById: async (id, deleted_at) => await executeQuery(`
        call center_system.delete_admin(
            '${id}',
            '${deleted_at}'
        );
    `),
}
