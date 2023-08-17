import { cruds } from "../utils/crud.js"

export const Student = {
    data: {
        f_name: "",
        l_name: "",
        email: "",
        pass: "",
        phone_number: "",
        parents_numbers: [],
        address: "",
        level: 0,

        _created_at: "",
        _updated_at: "",
        _deleted_at: "",
    },

    create: async (student) => await cruds.create(`
        call center_system.insert_student(
            '${student.f_name}', 
            '${student.l_name}', 
            '${student.email}', 
            '${student.pass}', 
            '${student.phone_number}', 
            '${student.address}'
            '${student.level}'
            '${student._created_at}'
        );
    `),

    updateById: async (id, student) => await cruds.updateById(`
        call center_system.update_student(
            '${id}', 
            '${student.f_name}', 
            '${student.l_name}', 
            '${student.email}', 
            '${student.pass}', 
            '${student.phone_number}', 
            '${student.address}'
            '${student.level}'
            '${student._updated_at}'
        );
    `),

    getById: async (id) => await cruds.getById(`
        call center_system.get_student(
            '${id}'
        );
    `),

    getAll: async () => await cruds.getAll(`
        call center_system.get_students(
            '${id}'
        );
    `),

    deleteById: async (id, deleted_at) => await cruds.deleteById(`
        call center_system.delete_student(
            ${id}',
            '${deleted_at}'
        );
    `),
}
