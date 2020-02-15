// The "Global" pager
import * as types from '../constants/ReduxActions';

export type InitialStateType = {
    someStateValue: boolean;
};

export const InitialState: InitialStateType = {
    someStateValue: false,
};

const AppReducer = (state = InitialState, action: any) => {
    const { type, payload } = action;
    console.log('Payload:', payload);

    switch (type) {
        case types.TEST_ACTION:
            return {
                ...state,
                someStateValue: !state.someStateValue,
            };

        default:
            // Default, no state change
            return state;
    }
};

export default AppReducer;
