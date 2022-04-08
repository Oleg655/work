

const date = new Date()

const initialState = {
    location: 'Москва',
    date: {
        day: date.getDate(),
        mounth: date.getMonth(),
        year: date.getFullYear(),
    },
    days: 1,
}

const searchReducer = (state = initialState, action) => {
    return state
}

export default searchReducer;