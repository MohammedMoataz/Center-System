let TeacherDTO = {
    id: 0,
    first_name: null,
    last_name: null,
    bio: null,
    image: null,
    phones: [],

    _created_at: null,
    _updated_at: null,
}

let TeachersDTO = []

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

    addAll: (teacher) => {
        TeachersDTO.push({
            id: teacher.id,
            first_name: teacher.f_name,
            last_name: teacher.l_name,
            bio: teacher.bio,
            image: teacher.image,
            phones: teacher.phones,
            _created_at: teacher._created_at,
            _updated_at: teacher._updated_at
        })
    },

    get: () => TeacherDTO,

    getAll: () => TeachersDTO,

    clear: () => {
        TeachersDTO = []
    }
}
