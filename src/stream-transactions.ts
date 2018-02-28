import { transactionsObservable } from './transactions-observable';
import { observe, Lambda } from 'mobx';
import { controller } from './bot';
import { Transaction } from './types';

let transactionDisposer: Lambda;

controller.hears('stream transactions', 'mention',  (bot: any, message: any) => {
  if (transactionDisposer) {
    return bot.reply(message, 'already streaming transactions from stellar network!');
  }
  bot.reply(message, 'getting transactions from stellar network...');
  transactionDisposer = observe(transactionsObservable, ({ object }) => {
    let { transaction } = object;
    bot.reply(message, createSlackMessage(transaction));
  });
});

controller.hears('stop transactions', 'mention',  (bot: any, message: any) => {
  bot.reply(message, 'stopped transactions stream from stellar network');
  transactionDisposer();
});

function createSlackMessage(transaction: Transaction) {
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

