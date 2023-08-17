import { cruds } from "../utils/crud.js"
import { Admin } from "./admin.model.js"
import { Hall } from "./hall.model.js"
import { Subject } from "./subject.model.js"

export const Lecture = {
    data: {
        code: "",
        cost: 0,
        timestamp: "",
        subject: Subject,
        admin: Admin,
        all: Hall,

        _created_at: "",
        _updated_at: "",
        _deleted_at: "",
    },

    create: async (lecture) => await cruds.create(`
        call center_system.insert_lecture(
            '${lecture.code}', 
            '${lecture.cost}', 
            '${lecture.timestamp}', 
            '${lecture.sub_id}', 
            '${lecture.t_id}', 
            '${lecture.hall_id}'
            '${lecture.admin_id}'
            '${lecture._created_at}'
        );
    `),

    updateById: async (id, lecture) => await cruds.updateById(`
        call center_system.update_lecture(
            '${id}', 
            '${lecture.code}', 
            '${lecture.cost}', 
            '${lecture.timestamp}', 
            '${lecture.sub_id}', 
            '${lecture.t_id}', 
            '${lecture.hall_id}'
            '${lecture.admin_id}' 
            '${lecture._updated_at}'
        );
    `),

    getById: async (id) => await cruds.getById(`
        call center_system.get_lecture(
            '${id}'
        );
    `),

    getAll: async () => await cruds.getAll(`
        call center_system.get_lectures(
            '${id}'
        );
    `),

    deleteById: async (id, deleted_at) => await cruds.deleteById(`
        call center_system.delete_lecture(
        ${id}',
        '${deleted_at}'
        );
    `),
}
