import { cruds } from "../utils/crud.js"

export const Subject = {
    data: {
        code: "",
        sub_name: "",
        level: "",
        teachers: [],

        _created_at: "",
        _updated_at: "",
        _deleted_at: "",
    },


    create: async (subject) => await cruds.create(`
        call center_system.insert_subject(
            '${subject.code}', 
            '${subject.sub_name}', 
            '${subject.level}', 
            '${subject._created_at}'
        );
    `),

    updateById: async (id, subject) => await cruds.updateById(`
        call center_system.update_subject(
            '${id}', 
            '${subject.code}', 
            '${subject.sub_name}', 
            '${subject.level}', 
            '${subject._updated_at}'
        );
    `),

    getById: async (id) => await cruds.getById(`
        call center_system.get_subject(
            '${id}'
        );
    `),

    getAll: async () => await cruds.getAll(`
        call center_system.get_subjects(
            '${id}'
        );
    `),

    deleteById: async (id, deleted_at) => await cruds.deleteById(`
        call center_system.delete_subject(
            ${id}',
            '${deleted_at}'
        );
    `),
}
