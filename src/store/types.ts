export interface InitialState {
  isLoggedIn: boolean;
  idInstance: string;
  apiTokenInstance: string;
  setCredentials: (value: CredentialValues) => void;
  setChatContact: (value: ChatContact) => void;
  chatContacts: ChatContact[];
  currentChat: string;
  setCurrentChat: (value: string) => void;
}

export interface CredentialValues {
  idInstance: string;
  apiTokenInstance: string;
  isLoggedIn: boolean;
}

export enum AccountStatuses {
  AUTHORIZED = 'authorized',
  NOT_AUTHORIZED = 'notAuthorized',
  BLOCKED = 'blocked',
  SLEEP_MODE = 'sleepMode',
  STARTING = 'starting',
}

// export interface Chat {
//   id: string;
//   archive: boolean;
//   name: string;
//   notSpam: boolean;
//   ephemeralExpiration: number;
//   ephemeralSettingTimestamp: number;
// }

export enum ChatContactType {
  USER = 'user',
  GROUP = 'group',
}

// export interface ChatContact {
//   id: string;
//   name: string;
//   type: ChatContactType;
// }

export interface ChatContact {
  chatId: string;
  phone: number;
}
