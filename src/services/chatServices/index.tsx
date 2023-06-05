import axios from 'axios';

import { API } from '../../constants/api';
import { SendMessageParams, SendMessageResponse } from './types';

export const ChatServices = {
  async sendMessage(values: SendMessageParams) {
    const { data } = await axios.post<SendMessageResponse[]>(
      `${API.URL_BASE}/waInstance${values.idInstance}/sendMessage/${values.apiTokenInstance}`,
      { ...values.body }
    );

    return data;
  },
};
