export type StateResponse<T> = {
  stateInstance: T;
};

export type WhatsAppStatusResponse = {
  existsWhatsapp: boolean;
};

export type WhatsAppStatusParams = {
  idInstance: string;
  apiTokenInstance: string;
  phone: number;
};

export type ContactInfoParams = {
  idInstance: string;
  apiTokenInstance: string;
  chatId: string;
};

export interface ContactInfo {
  chatId: string;
  avatar: string;
  name: string;
  email: string;
  category: string;
  description: string;
  lastSeen: string | null;
  isArchive: boolean;
  isDisappearing: boolean;
  isMute: boolean;
  messageExpiration: number;
  muteExpiration: number | null;
}
