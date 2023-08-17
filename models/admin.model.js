import { cruds } from "../utils/crud.js"

export const Admin = {
    data: {
        f_name: "",
        l_name: "",
        email: "",
        pass: "",
        phone_no: "",
        sup_pass: "",
        start_shift: "",
        end_shift: "",

        _created_at: "",
        _updated_at: "",
        _deleted_at: "",
    },

    create: async (admin) => await cruds.create(`
        call center_system.insert_admin(
            '${admin.f_name}', 
            '${admin.l_name}', 
            '${admin.email}', 
            '${admin.pass}', 
            '${admin.phone}', 
            '${admin.superPass}', 
            '${admin.startShift}', 
            '${admin.endShift}', 
            '${admin._created_at}'
        );
    `),

    updateById: async (id, admin) => await cruds.updateById(`
        call center_system.update_admin(
            '${id}', 
            '${admin.f_name}', 
            '${admin.l_name}', 
            '${admin.email}', 
            '${admin.pass}', 
            '${admin.phone}', 
            '${admin.superPass}', 
            '${admin.startShift}', 
            '${admin.endShift}', 
            '${admin._updated_at}'
        );
    `),

    getById: async (id) => await cruds.getById(`
        call center_system.get_admin(
            '${id}'
        );
    `),

    getAll: async (id) => await cruds.getAll(`
        call center_system.get_admins(
            '${id}'
        );
    `),

    deleteById: async (id, deleted_at) => await cruds.deleteById(`
        call center_system.delete_admin(
            ${id}',
            '${deleted_at}'
        );
    `),
}

