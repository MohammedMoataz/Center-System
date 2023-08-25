const HallModel = {
    id: 0,
    code: null,
    cost: 0,
    capacity: 0,

    _created_at: null,
    _updated_at: null,
    _deleted_at: null,
}

export default {
    set: (hall) => {
        HallModel.id = hall.id
        HallModel.code = hall.code
        HallModel.cost = hall.cost
        HallModel.capacity = hall.capacity

        HallModel._created_at = hall._created_at
        HallModel._updated_at = hall._updated_at
        HallModel._deleted_at = hall._deleted_at
    },

    get: () => HallModel
}
