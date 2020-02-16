import { handle } from 'redux-pack';
// The "Global" pager
import * as types from '../constants/ReduxActions';
import * as Models from '../models';

export type InitialStateType = {
    isLoading: boolean;
    didError: boolean;
    transactions: Models.Transaction[];
    error?: string;
};

export const InitialState: InitialStateType = {
    isLoading: false,
    didError: false,
    transactions: [],
};

const AppReducer = (state = InitialState, action: any) => {
    const { type, payload } = action;

    switch (type) {
        case types.GET_TRANSACTIONS:
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
                    const { success, transactions } = payload;
                    if (success) {
                        return {
                            ...prevState,
                            transactions,
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
