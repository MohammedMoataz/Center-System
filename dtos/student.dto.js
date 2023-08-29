const ParentDTO = {
    id: 0,
    parent_no: null,
    label: null,

    _deleted_at: null,
}

const StudentDTO = {
    id: 0,
    first_name: null,
    last_name: null,
    email: null,
    username: null,
    phone_number: null,
    address: null,
    level: 0,
    parents: [ParentDTO],
    access_token: null,

    _created_at: null,
    _updated_at: null,
}

let StudentsDTO = []
let ParentsDTO = []

export default {
    set: (student) => {
        StudentDTO.id = student.id
        StudentDTO.first_name = student.f_name
        StudentDTO.last_name = student.l_name
        StudentDTO.email = student.email
        StudentDTO.username = student.username
        StudentDTO.password = student.pass
        StudentDTO.phone_number = student.phone_no
        StudentDTO.address = student.address
        StudentDTO.level = student.level
        StudentDTO.parents = student.parents
        StudentDTO.access_token = student.access_token

        StudentDTO._created_at = student._created_at
        StudentDTO._updated_at = student._updated_at
    },

    setParent: (parent) => {
        ParentDTO.id = parent.id
        ParentDTO.parent_number = parent.parent_no
        ParentDTO.label = parent.label
    },

    addAll: (student) => StudentsDTO.push({
        id: student.id,
        first_name: student.f_name,
        last_name: student.l_name,
        email: student.email,
        username: student.username,
        password: student.pass,
        phone_number: student.phone_no,
        address: student.address,
        level: student.level,
        parents: student.parents,
        access_token: student.access_token,

        _created_at: student._created_at,
        _updated_at: student._updated_at
    }),

    addParents: (parent) => ParentsDTO.push({
        id: parent.id,
        parent_no: parent.phone_no,
        label: parent.label,

        _deleted_at: parent._deleted_at,
    }),

    get: () => StudentDTO,

    getAll: () => StudentsDTO,

    getParents: () => ParentsDTO,

    clear: () => StudentsDTO = [],

    clearParents: () => ParentsDTO = [],
}
