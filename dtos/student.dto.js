let StudentDTO = {
    id: 0,
    first_name: null,
    last_name: null,
    email: null,
    username: null,
    phone_number: null,
    parents_numbers: [{
        parent_number: null,
        label: null,
    }],
    address: null,
    level: 1,

    _created_at: null,
    _updated_at: null,
}

let StudentsDTO = []

export default {
    set: (student) => {
        StudentDTO.id = student.id
        StudentDTO.first_name = student.f_name
        StudentDTO.last_name = student.l_name
        StudentDTO.email = student.email
        StudentDTO.username = student.username
        StudentDTO.password = student.pass
        StudentDTO.phone_number = student.phone_no
        StudentDTO.parents_numbers = student.parents_numbers
        StudentDTO.address = student.address
        StudentDTO.level = student.level
        StudentDTO._created_at = student._created_at
        StudentDTO._updated_at = student._updated_at
    },

    addAll: (student) => {
        StudentsDTO.push({
            id: student.id,
            first_name: student.f_name,
            last_name: student.l_name,
            email: student.email,
            username: student.username,
            password: student.pass,
            phone_number: student.phone_no,
            parents_numbers: student.parents_numbers,
            address: student.address,
            level: student.level,
            _created_at: student._created_at,
            _updated_at: student._updated_at
        })
    },

    get: () => StudentDTO,

    getAll: () => StudentsDTO,

    clear: () => {
        StudentsDTO = []
    }
}
