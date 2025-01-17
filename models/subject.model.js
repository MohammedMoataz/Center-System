const SubjectModel = {
    id: 0,
    code: null,
    cost: 0,
    name: null,
    level: 0,

    _created_at: null,
    _updated_at: null,
    _deleted_at: null,
}

export default {
    set: (subject) => {
        SubjectModel.id = subject.id
        SubjectModel.code = subject.code
        SubjectModel.cost = subject.cost
        SubjectModel.name = subject.name
        SubjectModel.level = subject.level

        SubjectModel._created_at = subject._created_at
        SubjectModel._updated_at = subject._updated_at
        SubjectModel._deleted_at = subject._deleted_at
    },

    get: () => SubjectModel
}
