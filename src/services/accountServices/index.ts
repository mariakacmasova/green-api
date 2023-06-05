import axios from 'axios';

import { API } from '../../constants/api';
import { AccountStatuses } from '../../store/types';
import {
  ContactInfo,
  ContactInfoParams,
  StateResponse,
  WhatsAppStatusParams,
  WhatsAppStatusResponse,
} from './types';

export const AccountServices = {
  async getStateInstance(idInstance: string, apiTokenInstance: string) {
    const { data } = await axios.get<StateResponse<AccountStatuses>>(
      `${API.URL_BASE}/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`
    );
    return data.stateInstance;
  },

  async checkWhatsAppAvailability(values: WhatsAppStatusParams) {
    const { data } = await axios.post<WhatsAppStatusResponse>(
      `${API.URL_BASE}/waInstance${values.idInstance}/checkWhatsapp/${values.apiTokenInstance}`,
      { phoneNumber: values.phone }
    );
    return data;
  },

  async getContactInfo(values: ContactInfoParams) {
    const { data } = await axios.post<ContactInfo>(
      `${API.URL_BASE}/waInstance${values.idInstance}/GetContactInfo/${values.apiTokenInstance}`,
      { chatId: values.chatId }
    );
    return data;
  },
};
