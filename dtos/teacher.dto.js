export default {
    from: (teacher) => {
        return {
            id: teacher.id,
            first_name: teacher.f_name,
            last_name: teacher.l_name,
            bio: teacher.bio,
            image: teacher.image,
            phones: [],

            _created_at: teacher._created_at,
            _updated_at: teacher._updated_at
        }
    },
}
