const PhoneModel = {
    id: 0,
    t_id: 0,
    phone_no: null,

    _deleted_at: null,
}

export default {
    set: (teacherPhone) => {
        PhoneModel.id = teacherPhone.id
        PhoneModel.t_id = teacherPhone.teacher_id
        PhoneModel.phone_no = teacherPhone.phone_number

        PhoneModel._deleted_at = teacherPhone._deleted_at
    },

    get: () => PhoneModel
}
