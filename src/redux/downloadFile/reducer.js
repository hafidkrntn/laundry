import {
    START_FETCHING,
    SUCCESS_FETCHING,
    ERROR_FETCHING,
} from "./constants";

const statusList = {
    idle: "idle",
    process: "process",
    success: "success",
    error: "error",
};

const initialState = {
    status: statusList.idle,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case START_FETCHING:
        return { ...state, status: statusList.process };
        case SUCCESS_FETCHING:
        return { ...state, status: statusList.error };
        case ERROR_FETCHING:
        return { ...state, status: statusList.success };
        default:
        return state;
    }
}
