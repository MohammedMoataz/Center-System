const SubjectModel = {
    id: 0,
    code: null,
    name: null,
    level: null,

    _created_at: null,
    _updated_at: null,
    _deleted_at: null,
}

export default {
    set: (subject) => {
        SubjectModel.id = subject.id
        SubjectModel.code = subject.code
        SubjectModel.name = subject.name
        SubjectModel.level = subject.level

        SubjectModel._created_at = subject._created_at
        SubjectModel._updated_at = subject._updated_at
        SubjectModel._deleted_at = subject._deleted_at
    },

    get: () => SubjectModel
}
