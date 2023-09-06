export default {
    from: (lecture) => {
        return {
            id: lecture.l_id,
            code: lecture.l_code,
            cost: lecture.l_cost,
            timestamp: lecture.l_timestamp,

            subject: {
                id: lecture.s_id,
                code: lecture.s_code,
                cost: lecture.s_cost,
                name: lecture.s_name,
                level: lecture.s_level,
                _created_at: lecture.s_created_at,
                _updated_at: lecture.s_updated_at,
            },

            hall: {
                id: lecture.h_id,
                code: lecture.h_code,
                cost: lecture.h_cost,
                capacity: lecture.h_capacity,
                _created_at: lecture.h_created_at,
                _updated_at: lecture.h_updated_at,
            },

            admin: {
                id: lecture.a_id,
                first_name: lecture.a_f_name,
                last_name: lecture.a_l_name,
                email: lecture.a_email,
                phone_no: lecture.a_phone_no,
                start_shift: lecture.a_start_shift,
                end_shift: lecture.a_end_shift,
                _created_at: lecture.a_created_at,
                _updated_at: lecture.a_updated_at,
            },

            _created_at: lecture.l_created_at,
            _updated_at: lecture.l_updated_at,
        }
    }
}