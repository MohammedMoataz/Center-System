const AttendanceModel = {
    id: 0,
    s_id: 0,
    l_id: 0,
    attended: false,

    _created_at: null,
    _updated_at: null,
}

export default {
    set: (attendance) => {
        AttendanceModel.id = attendance.id
        AttendanceModel.s_id = attendance.student_id
        AttendanceModel.l_id = attendance.lecture_id
        AttendanceModel.attended = attendance.attended

        AttendanceModel._created_at = attendance._created_at
        AttendanceModel._updated_at = attendance._updated_at
    },

    get: () => AttendanceModel
}
