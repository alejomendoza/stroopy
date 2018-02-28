const StellarSdk = require('stellar-sdk');
import { HORIZON_URL } from './consts';
const server = new StellarSdk.Server(HORIZON_URL);
import { observable, IObservableObject } from 'mobx';
import { Transaction, getOperationType } from './types';
import { getOperationValue } from './value';

export let transactionsObservable: { transaction: Transaction } & IObservableObject = observable({
  transaction: null,
});

function emitTransaction(transaction: Transaction) {
  transactionsObservable.transaction = transaction;
}

server.transactions()
  .cursor('now')
  .stream({
    onmessage: async (message: any) => {
      let { id, hash, source_account, created_at, fee_paid, operation_count, _links, ledger_attr } = message;
      let ops = await message.operations();
      let { records } = ops._embedded;
      let [ firstOperation ] = records;
      emitTransaction({
        id: id,
        hash: hash,
        account: source_account,
        accountUrl: _links.account.href,
        createdAt: created_at,
        createAtTimestamp: new Date(created_at).getTime() / 1000 | 0,
        feePaid: fee_paid,
        operationCount: operation_count,
        operationsUrl: _links.operations.href,
        ledger: ledger_attr,
        ledgerUrl: _links.ledger.href,
        transactionUrl: _links.self.href,
        type: getOperationType(firstOperation.type),
        value: getOperationValue(firstOperation),
      });
    }
  });
