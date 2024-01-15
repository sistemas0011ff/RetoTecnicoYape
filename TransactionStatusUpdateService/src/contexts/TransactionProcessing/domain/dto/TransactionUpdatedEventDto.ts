export interface TransactionUpdatedEventDto {
    eventName: string;
    transactionId: number;
    accountExternalIdDebit: string;
    accountExternalIdCredit: string;
    transferTypeId: number;
    value: number;
    status: string;
    createdAt: string;
    updatedAt: string;
    aggregateId: string;
    occurredOn: string;
  }
  