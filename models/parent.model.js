const ParentModel = {
    id: 0,
    s_id: 0,
    parent_no: null,
    label: null,

    _deleted_at: null,
}

export default {
    set: (parent) => {
        ParentModel.id = parent.id
        ParentModel.s_id = parent.student_id
        ParentModel.parent_no = parent.parent_number
        ParentModel.label = parent.label

        ParentModel._deleted_at = parent._deleted_at
    },

    get: () => ParentModel
}
