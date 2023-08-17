import { cruds } from "../utils/crud.js"

export const Teacher = {
    data: {
        f_name: "",
        l_name: "",
        bio: "",
        phone_numbers: [],
        subjects: [],

        _created_at: "",
        _updated_at: "",
        _deleted_at: "",
    },

    create: async (teacher) => await cruds.create(`
        call center_system.insert_teacher(
            '${teacher.f_name}', 
            '${teacher.l_name}', 
            '${teacher.bio}', 
            '${teacher._created_at}'
        );
    `),

    updateById: async (id, teacher) => await cruds.updateById(`
        call center_system.update_teacher(
            '${id}', 
            '${teacher.f_name}', 
            '${teacher.l_name}', 
            '${teacher.bio}', 
            '${teacher._updated_at}'
        );
    `),

    getById: async (id) => await cruds.getById(`
        call center_system.get_teacher(
            '${id}'
       );
    `),

    getAll: async () => await cruds.getAll(`
        call center_system.get_teachers(
            '${id}'
        );
    `),

    deleteById: async (id, deleted_at) => await cruds.deleteById(`
        call center_system.delete_teacher(
            ${id}',
            '${deleted_at}'
        );
    `),
}

