const StudentModel = {
    id: 0,
    f_name: null,
    l_name: null,
    email: null,
    username: null,
    pass: null,
    phone_no: null,
    address: null,
    level: 0,
    access_token: null,

    _created_at: null,
    _updated_at: null,
    _deleted_at: null,
}

export default {
    set: (student) => {
        StudentModel.id = student.id
        StudentModel.f_name = student.first_name
        StudentModel.l_name = student.last_name
        StudentModel.email = student.email
        StudentModel.username = student.username
        StudentModel.pass = student.password
        StudentModel.phone_no = student.phone_number
        StudentModel.address = student.address
        StudentModel.level = student.level
        StudentModel.access_token = student.access_token

        StudentModel._created_at = student._created_at
        StudentModel._updated_at = student._updated_at
        StudentModel._deleted_at = student._deleted_at
    },

    get: () => StudentModel
}
