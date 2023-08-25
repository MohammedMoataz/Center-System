const LectureModel = {
    id: 0,
    code: null,
    timestamp: null,
    cost: 0,
    sub_id: 0,
    t_id: 0,
    hall_id: 0,
    admin_id: 0,

    _created_at: null,
    _updated_at: null,
    _deleted_at: null,
}

export default {
    set: (lecture) => {
        LectureModel.id = lecture.id
        LectureModel.code = lecture.code
        LectureModel.timestamp = lecture.timestamp
        LectureModel.cost = lecture.cost
        LectureModel.sub_id = lecture.subject_id
        LectureModel.t_id = lecture.teacher_id
        LectureModel.hall_id = lecture.hall_id
        LectureModel.admin_id = lecture.admin_id

        LectureModel._created_at = lecture._created_at
        LectureModel._updated_at = lecture._updated_at
        LectureModel._deleted_at = lecture._deleted_at
    },

    get: () => LectureModel
}
