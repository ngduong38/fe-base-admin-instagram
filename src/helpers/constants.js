export const USER = {
    levels: {
        admin: {
            value: 1,
            label: 'Admin'
        },
        user: {
            value: 2,
            label: 'User'
        },
    },
}
export const GENDER={
    gender:{
        male: {
            value: 1,
            label:'Male',
        },
        female: {
            value: 0,
            label:"Female",
        }
    }
}

export const USER_IMPORT = {
    status: {
        pending: {
            value: 1,
            label: 'Đang chờ'
        },
        processing: {
            value: 2,
            label: 'Đang diễn ra'
        },
        done: {
            value: 3,
            label: 'Hoàn thành'
        },
    },
    has_errors: {
        true: 1,
        false: 2,
    },
}

export const PAGINATION = {
    ellipsisPostion: 3,
    maxPagesShowAll: 10,
    limit: 10,
    startPage: 1,
}

export const POST = {
    id: Number,
    date: Date,  
    status: {
        public: {
            value: 1,
            label: 'Công khai'
        },
        private: {
            value: 2,
            label: 'Riêng tư'
        },
    }
}
