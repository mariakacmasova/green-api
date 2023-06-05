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
