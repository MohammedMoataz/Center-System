const TeacherPhoneModel = {
    id: 0,
    t_id: 0,
    phone_no: null,

    _deleted_at: null,
}

export default {
    set: (teacherPhone) => {
        TeacherPhoneModel.id = teacherPhone.id
        TeacherPhoneModel.t_id = teacherPhone.teacher_id
        TeacherPhoneModel.phone_no = teacherPhone.phone_number

        TeacherPhoneModel._deleted_at = teacherPhone._deleted_at
    },

    get: () => TeacherPhoneModel
}
