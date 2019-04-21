const PAINT_EGG = 'egg/PAINT_EGG'

export const eggPaintedActionCreator = (value) => ({
    type: PAINT_EGG,
    value,
})

const initialState = {
    isPainted: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case PAINT_EGG:
            return {
                ...state,
                isPainted: action.value
            }
        default:
            return state
    }
}