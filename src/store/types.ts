export interface CredentialValues {
  idInstance: string;
  apiTokenInstance: string;
  isLoggedIn: boolean;
}

export interface InitialState {
  isLoggedIn: boolean;
  idInstance: string;
  apiTokenInstance: string;
  setCredentials: (value: CredentialValues) => void;
}

export enum AccountStatuses {
  AUTHORIZED = 'authorized',
  NOT_AUTHORIZED = 'notAuthorized',
  BLOCKED = 'blocked',
  SLEEP_MODE = 'sleepMode',
  STARTING = 'starting',
}
