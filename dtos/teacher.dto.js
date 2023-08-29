const PhoneDTO = {
    id: 0,
    phone_number: null,

    _deleted_at: null,
}

const TeacherDTO = {
    id: 0,
    first_name: null,
    last_name: null,
    bio: null,
    image: null,
    phones: [PhoneDTO],

    _created_at: null,
    _updated_at: null,
}

let TeachersDTO = []
let PhonesDTO = []

export default {
    set: (teacher) => {
        TeacherDTO.id = teacher.id
        TeacherDTO.first_name = teacher.f_name
        TeacherDTO.last_name = teacher.l_name
        TeacherDTO.bio = teacher.bio
        TeacherDTO.image = teacher.image
        TeacherDTO.phones = teacher.phones

        TeacherDTO._created_at = teacher._created_at
        TeacherDTO._updated_at = teacher._updated_at
    },

    setPhone: (phone) => {
        PhoneDTO.id = phone.id
        PhoneDTO.phone_number = phone.phone_no
    },

    addAll: (teacher) => TeachersDTO.push({
        id: teacher.id,
        first_name: teacher.f_name,
        last_name: teacher.l_name,
        bio: teacher.bio,
        image: teacher.image,
        phones: teacher.phones,

        _created_at: teacher._created_at,
        _updated_at: teacher._updated_at
    }),

    addPhones: (phone) => PhonesDTO.push({
        id: phone.id,
        phone_no: phone.phone_no,

        _deleted_at: phone._deleted_at,
    }),

    get: () => TeacherDTO,

    getAll: () => TeachersDTO,

    getPhones: () => PhonesDTO,

    clear: () => TeachersDTO = [],

    clearPhones: () => PhonesDTO = [],
}
