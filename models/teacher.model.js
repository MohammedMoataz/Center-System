const TeacherModel = {
    id: 0,
    f_name: null,
    l_name: null,
    bio: null,
    image: null,

    _created_at: null,
    _updated_at: null,
    _deleted_at: null,
}

export default {
    set: (teacher) => {
        TeacherModel.id = teacher.id
        TeacherModel.f_name = teacher.first_name
        TeacherModel.l_name = teacher.last_name
        TeacherModel.bio = teacher.bio
        TeacherModel.image = teacher.image

        TeacherModel._created_at = teacher._created_at
        TeacherModel._updated_at = teacher._updated_at
        TeacherModel._deleted_at = teacher._deleted_at
    },

    get: () => TeacherModel
}
