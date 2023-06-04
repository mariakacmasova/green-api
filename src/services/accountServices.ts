import axios from 'axios';
import { API } from '../constants/api';
import { AccountStatuses } from '../store/types';

type StateResponse<T> = {
  stateInstance: T;
};

export const AccountServices = {
  async getStateInstance(idInstance: string, apiTokenInstance: string) {
    const { data } = await axios.get<StateResponse<AccountStatuses>>(
      `${API.URL_BASE}/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`
    );
    return data.stateInstance;
  },
};
