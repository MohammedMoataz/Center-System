let LectureDTO = {
    id: 0,
    code: null,
    timestamp: null,
    cost: 0,
    subject: {
        code: null,
        name: null,
        level: 1,
    },
    teacher: {
        first_name: null,
        last_name: null,
        image: null,
    },
    hall: {
        code: null,
        capacity: 0,
    },
    lecture: {
        first_name: null,
        last_name: null,
    },

    _created_at: null,
    _updated_at: null,
}

let LecturesDTO = []

export default {
    set: (lecture) => {
        LectureDTO.id = lecture.id
        LectureDTO.code = lecture.code
        LectureDTO.timestamp = lecture.timestamp
        LectureDTO.cost = lecture.cost
        LectureDTO.subject = lecture.subject
        LectureDTO.teacher = lecture.teacher
        LectureDTO.hall = lecture.hall
        LectureDTO.lecture = lecture.lecture
        LectureDTO._created_at = lecture._created_at
        LectureDTO._updated_at = lecture._updated_at
    },

    addAll: (lecture) => {
        LecturesDTO.push({
            id: lecture.id,
            code: lecture.code,
            timestamp: lecture.timestamp,
            cost: lecture.cost,
            subject: lecture.subject,
            teacher: lecture.teacher,
            hall: lecture.hall,
            lecture: lecture.lecture,
            _created_at: lecture._created_at,
            _updated_at: lecture._updated_at
        })
    },

    get: () => LectureDTO,

    getAll: () => LecturesDTO,

    clear: () => {
        LecturesDTO = []
    }
}
