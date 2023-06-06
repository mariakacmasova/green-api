import axios from 'axios';

import { API } from '../../constants/api';
import {
  ChatHistoryParams,
  ChatHistoryResponse,
  SendMessageParams,
  SendMessageResponse,
} from './types';

export const ChatServices = {
  async sendMessage(values: SendMessageParams) {
    const { data } = await axios.post<SendMessageResponse[]>(
      `${API.URL_BASE}/waInstance${values.idInstance}/sendMessage/${values.apiTokenInstance}`,
      { ...values.body }
    );

    return data;
  },

  async geChatHistory(values: ChatHistoryParams) {
    const { data } = await axios.post<ChatHistoryResponse[]>(
      `${API.URL_BASE}/waInstance${values.idInstance}/getChatHistory/${values.apiTokenInstance}`,
      { ...values.body }
    );

    return data;
  },
};
