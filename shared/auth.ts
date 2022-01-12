import { ISignUpResolver } from '../types/authType';
import { SingleuserType } from '../types/userType';

export const signUpResponse = (
  message: string = 'Something Went wrong',
  data: SingleuserType | null = null,
  token: string = '',
  error: boolean = true,
  status: number = 400,
): ISignUpResolver => ({
  data,
  token,
  error,
  status,
  message,
});

export const hello = () => 'hwllo';
