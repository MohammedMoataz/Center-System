export default {
    from: (attendance) => {
        return {
            id: attendance.a_id,
            attended: attendance.a_attended ? true : false,

            student: {
                id: attendance.s_id,
                first_name: attendance.s_f_name,
                last_name: attendance.s_l_name,
                email: attendance.s_email,
                username: attendance.s_username,
                phone_no: attendance.s_phone_no,
                address: attendance.s_address,
                level: attendance.s_level,
                _created_at: attendance.s_created_at,
                _updated_at: attendance.s_updated_at,
            },

            lecture: {
                id: attendance.l_id,
                code: attendance.l_code,
                cost: attendance.l_cost,
                timestamp: attendance.l_timestamp,
                _created_at: attendance.l_created_at,
                _updated_at: attendance.l_updated_at,
            },

            _created_at: attendance.a_created_at,
            _updated_at: attendance.a_updated_at
        }
    },
}
