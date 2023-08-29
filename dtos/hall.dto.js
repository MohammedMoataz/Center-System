const HallDTO = {
    id: 0,
    code: null,
    cost: 0,
    capacity: 0,

    _created_at: null,
    _updated_at: null,
}

let HallsDTO = []

export default {
    set: (hall) => {
        HallDTO.id = hall.id
        HallDTO.code = hall.code
        HallDTO.cost = hall.cost
        HallDTO.capacity = hall.capacity

        HallDTO._created_at = hall._created_at
        HallDTO._updated_at = hall._updated_at
    },

    addAll: (hall) => HallsDTO.push({
        id: hall.id,
        code: hall.code,
        cost: hall.cost,
        capacity: hall.capacity,

        _created_at: hall._created_at,
        _updated_at: hall._updated_at
    }),

    get: () => HallDTO,

    getAll: () => HallsDTO,

    clear: () => HallsDTO = [],
}
