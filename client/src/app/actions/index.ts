import ExampleRequest from '../api/endpoints/ExampleRequest';
import { ExampleRequest as ExampleRequestType } from '../api/types/Requests';
import * as Actions from '../constants/ReduxActions';

export const exampleRequestAction = (id: string) => {
    const request: ExampleRequestType = {
        id,
    };
    return {
        type: Actions.TEST_ACTION,
        promise: ExampleRequest(request),
    };
};
