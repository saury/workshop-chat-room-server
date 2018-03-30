import { SignUpRequest } from './types';

export const isSignUpRequest = (input: any): input is SignUpRequest => {
    // validate the request
    if (typeof input !== 'object') return false;
    if (typeof input.username !== 'string') return false;
    if (typeof input.password !== 'string') return false;
    return !!input.username && !!input.password;
};
