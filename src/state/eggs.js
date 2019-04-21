const PAINT_EGG = 'egg/PAINT_EGG'

export const eggPaintedActionCreator = () => ({
    type: PAINT_EGG,
})

const initialState = {
    isPainted: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case PAINT_EGG:
            return {
                ...state,
                isPainted: true
            }
        default:
            return state
    }
}