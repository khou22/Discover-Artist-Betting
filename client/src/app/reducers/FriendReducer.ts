import { handle } from 'redux-pack';
// The "Global" pager
import * as types from '../constants/ReduxActions';
import * as Models from '../models';

export type InitialStateType = {
    isLoading: boolean;
    didError: boolean;
    users: Models.User[];
    error?: string;
};

export const InitialState: InitialStateType = {
    isLoading: false,
    didError: false,
    users: [],
};

const AppReducer = (state = InitialState, action: any) => {
    const { type, payload } = action;

    switch (type) {
        case types.GET_FRIENDS:
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
                    const { success, users } = payload;
                    if (success) {
                        return {
                            ...prevState,
                            users: users.map((d) => ({
                                ...d.user,
                                score: d.score,
                            })),
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
