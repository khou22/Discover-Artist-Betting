import { EXAMPLE_UPLOAD_STATE } from '../constants/States';

export interface User {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
}

export interface ExampleModel {
    id?: number;
    fileState: EXAMPLE_UPLOAD_STATE;
}
