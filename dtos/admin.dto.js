const AdminDTO = {
    id: 0,
    first_name: null,
    last_name: null,
    email: null,
    phone_number: null,
    start_shift: null,
    end_shift: null,
    access_token: null,

    _created_at: null,
    _updated_at: null,
}

let AdminsDTO = []

export default {
    set: (admin) => {
        AdminDTO.id = admin.id
        AdminDTO.first_name = admin.f_name
        AdminDTO.last_name = admin.l_name
        AdminDTO.email = admin.email
        AdminDTO.phone_number = admin.phone_no
        AdminDTO.start_shift = admin.start_shift
        AdminDTO.end_shift = admin.end_shift
        AdminDTO.access_token = admin.access_token

        AdminDTO._created_at = admin._created_at
        AdminDTO._updated_at = admin._updated_at
    },

    addAll: (admin) => AdminsDTO.push({
        id: admin.id,
        first_name: admin.f_name,
        last_name: admin.l_name,
        email: admin.email,
        phone_number: admin.phone_no,
        start_shift: admin.start_shift,
        end_shift: admin.end_shift,
        access_token: admin.access_token,
       
        _created_at: admin._created_at,
        _updated_at: admin._updated_at
    }),

    get: () => AdminDTO,

    getAll: () => AdminsDTO,

    clear: () => AdminsDTO = []
}
