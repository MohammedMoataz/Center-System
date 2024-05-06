const ParentDTO = {
    id: 0,
    parent_number: null,
    label: null,
}

let ParentsDTO = []

export default {
    from: (student) => {
        return {
            id: student.id,
            first_name: student.f_name,
            last_name: student.l_name,
            email: student.email,
            username: student.username,
            phone_number: student.phone_no,
            address: student.address,
            level: student.level,
            parents: [],
            access_token: student.access_token,

            _created_at: student._created_at,
            _updated_at: student._updated_at,
        }
    },

    setParent: (parent) => {
        ParentDTO.id = parent.id
        ParentDTO.parent_number = parent.parent_no
        ParentDTO.label = parent.label
    },

    addParents: (parent) => ParentsDTO.push({
        id: parent.id,
        parent_number: parent.parent_no,
        label: parent.label,
    }),

    getParents: () => ParentsDTO,

    clearParents: () => ParentsDTO = [],
}
