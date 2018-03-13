let Botkit = require('botkit');
import { CLIENT_ID, CLIENT_SECRET, PORT } from './consts';

export let controller = Botkit.slackbot();

export let bot: any;

controller.configureSlackApp({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  scopes: ['bot', 'incoming-webhook', 'team:read', 'users:read', 'users.profile:read', 'channels:read', 'im:read', 'im:write', 'groups:read', 'emoji:read', 'chat:write:bot'],
});

controller.setupWebserver(PORT, (err: any, webserver: any) => {

  controller
    .createHomepageEndpoint(controller.webserver)
    .createOauthEndpoints(controller.webserver, (err: any, req: any, res: any) => {
      if (err) {
        res.status(500).send('ERROR: ' + err);
      } else {
        res.send('Success!');
      }
    })
    .createWebhookEndpoints(controller.webserver);

});

controller.on('create_bot', (stroopyBot: any, config: any) => {
  if (!bot) {
    stroopyBot.startRTM((err: any) => {
      if (!err) {
        bot = stroopyBot;
      }
      bot.startPrivateConversation({user: config.createdBy}, (err: any, convo: any) => {
        if (err) {
          console.log(err);
        } else {
          convo.say('I am stroopy, very excited to join your team!');
          convo.say('You must now /invite me to a channel so that I can be of use!');
        }
      });
    });
  }
});

controller.storage.teams.all((err: any, teams: any) => {
  if (err) {
    throw new Error(err);
  }

  for (let t  in teams) {
    if (teams[t].bot) {
      controller.spawn(teams[t]).startRTM((err: any, stroopyBot: any) => {
        if (err) {
          console.log('Error connecting bot to Slack:', err);
        } else {
          console.log(stroopyBot);
          bot = stroopyBot;
        }
      });
    }
  }
});