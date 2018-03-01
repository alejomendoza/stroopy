let Botkit = require('botkit');
import { BOT_TOKEN } from './consts';

export let controller = Botkit.slackbot();
export let bot = controller.spawn({
  token: BOT_TOKEN,
});

bot.startRTM((err: any, bot: any, payload: any) => {
  if (err) {
    throw new Error('Could not connect to Slack');
  }
});