import { transactionsObservable } from './transactions-observable';
import { observe, Lambda } from 'mobx';
import { controller } from './bot';
import { createSlackMessage } from './slack.functions';

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



