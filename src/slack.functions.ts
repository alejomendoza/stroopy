import { Transaction } from './types';

export function createSlackMessage(transaction: Transaction) {
  let operationValue = '';
  if (transaction.operationCount === 1) {
    operationValue = `*Value :* ${transaction.value}\n`;
  }
  return {
    text:
    `*Id :* <${transaction.transactionUrl}|${transaction.id}>\n` +
    `*Account :* <${transaction.accountUrl}|${transaction.account}>\n` +
    `*Created At :* <!date^${transaction.createAtTimestamp}^{date_short} {time_secs}| Couldn't get transaction date.>\n` +
    `*Fee Paid :* ${transaction.feePaid}\n` +
    `*Operation Count :* ${transaction.operationCount}\n` +
    `*Operations :* <${transaction.operationsUrl.split('{')[0]}|See More>\n` +
    `*Ledger :* <${transaction.ledgerUrl}|${transaction.ledger}>\n` +
    `*Type :* ${transaction.type}\n` + operationValue +
    `________________________________________________________________________________`,
    mrkdwn: true,
  };
}