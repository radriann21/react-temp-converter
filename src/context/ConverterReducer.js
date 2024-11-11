import { REDUCER_ACTIONS } from "./actions"

export const ConverterReducer = (state, action) => {
  switch (action.type) {
    case REDUCER_ACTIONS.CHANGE_TEMP:
      return {
        ...state,
        temp: action.payload
      }

    case REDUCER_ACTIONS.CHANGE_MODE:
      return {
        ...state,
        mode: action.payload
      }

    case REDUCER_ACTIONS.TRANSFORM_TEMP:
      if (state.mode === 'fahrenheit') {
        const celsius = (state.temp * 9 / 5) + 32
        return {
          ...state,
          result: parseFloat(celsius.toFixed(2)) + '°F'
        }
      } else if (state.mode === 'celsius') {
        const fahrenheit = (state.temp - 32) * 5 / 9
        return {
          ...state,
          result: parseFloat(fahrenheit.toFixed(2)) + '°C'
        }
      } else {
        return state
      }

    default:
      return state
  }
}

