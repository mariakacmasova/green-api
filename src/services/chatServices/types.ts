export interface SendMessageParams {
  idInstance: string;
  apiTokenInstance: string;
  body: SendMessageFormValues;
}

export interface SendMessageFormValues {
  chatId: string;
  message: string;
  quotedMessageId?: string;
  archiveChat?: boolean;
  linkPreview?: boolean;
}

export interface SendMessageResponse {
  idMessage: string;
}

export interface ChatHistoryParams {
  idInstance: string;
  apiTokenInstance: string;
  body: ChatHistoryFormValues;
}

export interface ChatHistoryFormValues {
  chatId: string;
  count: number;
}

export interface ChatHistoryResponse {
  idMessage: string;
  timestamp: number;
  chatId: string;
  textMessage: string;
  senderId?: string;
  extendedTextMessage?: ChatHistoryExtendedResponse;
}

export interface ChatHistoryExtendedResponse {
  participant: string;
  stanzaId: string;
  text: string;
}
