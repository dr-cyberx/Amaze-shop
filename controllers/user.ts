import { ApolloError } from 'apollo-server-errors';
import User from '../db/models/User';
import { findFromDB } from '../utils/shared';
import { amazeResponse } from '../utils/shared/responses';
import { IGetAllUsers } from '../types/authType';
import isValidUser from '../utils/isValid';

export const GetAllUser = async (token: String): Promise<IGetAllUsers> => {
  try {
    const res = await isValidUser(findFromDB, token, User, 'All');
    if ((await res).isValid) {
      return amazeResponse('fetched Successfully', res.data, false, 200);
    }
    return amazeResponse('InValid User', null, true, 400);
  } catch (err: any) {
    return amazeResponse(
      `failed to fetch ${new ApolloError(err)}`,
      null,
      true,
      400,
    );
  }
};

export const hyy: string = 'hii';
