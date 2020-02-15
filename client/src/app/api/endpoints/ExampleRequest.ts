import { RequestType } from '../../utils/Host';
import Host from '../host';
import { ExampleRequest } from '../types/Requests';
import { ExampleResponse } from '../types/Responses';

export const SOME_RESOURCE = '/some_url';
export default (request: ExampleRequest) =>
    Host.fire(SOME_RESOURCE, RequestType.GET, request) as Promise<ExampleResponse>;
