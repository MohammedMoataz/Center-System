import { cruds } from "../utils/crud.js"

export const Hall = {
    data: {
        code: "",
        cost: 0,

        _created_at: "",
        _updated_at: "",
        _deleted_at: "",
    },

    create: async (hall) => await cruds.create(`
        call center_system.insert_hall(
            '${hall.code}', 
            '${hall.cost}', 
            '${hall._created_at}'
        );
    `),

    updateById: async (id, hall) => await cruds.updateById(`
        call center_system.update_hall(
            '${id}', 
            '${hall.code}', 
            '${hall.cost}',  
            '${hall._updated_at}'
        );
    `),

    getById: async (id) => await cruds.getById(`
        call center_system.get_hall(
            '${id}'
        );
    `),

    getAll: async () => await cruds.getAll(`
        call center_system.get_halls(
            '${id}'
        );
    `),

    deleteById: async (id, deleted_at) => await cruds.deleteById(`
        call center_system.delete_hall(
        ${id}',
        '${deleted_at}'
        );
    `),
}

