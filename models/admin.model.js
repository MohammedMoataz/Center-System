const AdminModel = {
    id: 0,
    f_name: null,
    l_name: null,
    email: null,
    pass: null,
    phone_no: null,
    sup_pass: null,
    start_shift: null,
    end_shift: null,

    _created_at: null,
    _updated_at: null,
    _deleted_at: null,
}

export default {
    set: (admin) => {
        AdminModel.id = admin.id
        AdminModel.f_name = admin.first_name
        AdminModel.l_name = admin.last_name
        AdminModel.email = admin.email
        AdminModel.pass = admin.password
        AdminModel.phone_no = admin.phone_number
        AdminModel.sup_pass = admin.super_password
        AdminModel.start_shift = admin.start_shift
        AdminModel.end_shift = admin.end_shift

        AdminModel._created_at = admin._created_at
        AdminModel._updated_at = admin._updated_at
        AdminModel._deleted_at = admin._deleted_at
    },

    get: () => AdminModel
}
