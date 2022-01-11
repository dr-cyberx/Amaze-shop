import User from '../models/User';
import { findFromDB } from '../shared/user';
import { SingleuserType } from '../types/userType';

const UserQuery = {
  getAllUser: async (): Promise<any[] | SingleuserType | null> => {
    try {
      const res: Promise<any[] | SingleuserType> = findFromDB(User, 'All');
      return res;
    } catch (err) {
      return null;
    }
  },
};

export default UserQuery;
