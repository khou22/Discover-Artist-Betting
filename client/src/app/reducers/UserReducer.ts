import { handle } from 'redux-pack';
// The "Global" pager
import * as types from '../constants/ReduxActions';
import * as Models from '../models';

export type InitialStateType = {
    isLoading: boolean;
    didError: boolean;
    user?: Models.User;
    error?: string;
};

export const InitialState: InitialStateType = {
    isLoading: false,
    didError: false,
};

const AppReducer = (state = InitialState, action: any) => {
    const { type, payload } = action;

    switch (type) {
        case types.GET_USER_BY_ID:
            return handle(state, action, {
                start: (prevState: InitialStateType) => {
                    return {
                        ...prevState,
                        isLoading: true,
                        didError: false,
                    };
                },
                finish: (prevState: InitialStateType) => {
                    return {
                        ...prevState,
                        isLoading: false,
                    };
                },
                failure: (prevState: InitialStateType) => {
                    return {
                        ...prevState,
                        didError: true,
                        error: 'Error with (network?) request',
                    };
                },
                success: (prevState: InitialStateType) => {
                    const { success, user, score } = payload;
                    if (success) {
                        return {
                            ...prevState,
                            user: {
                                ...user,
                                score,
                            },
                        };
                    } else {
                        return {
                            ...prevState,
                            didError: true,
                            error: payload.error,
                        };
                    }
                },
            });

        default:
            // Default, no state change
            return state;
    }
};

export default AppReducer;
