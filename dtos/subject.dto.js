let SubjectDTO = {
    id: 0,
    code: null,
    name: null,
    level: 1,

    _created_at: null,
    _updated_at: null,
}

let SubjectsDTO = []

export default {
    set: (subject) => {
        SubjectDTO.id = subject.id
        SubjectDTO.code = subject.code
        SubjectDTO.name = subject.name
        SubjectDTO.level = subject.level
        SubjectDTO._created_at = subject._created_at
        SubjectDTO._updated_at = subject._updated_at
    },

    addAll: (subject) => {
        SubjectsDTO.push({
            id: subject.id,
            first_name: subject.f_name,
            code: subject.code,
            name: subject.name,
            level: subject.level,
            _created_at: subject._created_at,
            _updated_at: subject._updated_at
        })
    },

    get: () => SubjectDTO,

    getAll: () => SubjectsDTO,

    clear: () => {
        SubjectsDTO = []
    }
}
