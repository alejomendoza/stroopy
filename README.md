# Stroopy
Stellar Slack Bot

Stroopy lets you stream transactions from the stellar network into a Slack channel!

<a href="https://slack.com/oauth/authorize?scope=incoming-webhook,commands,bot&client_id=7781033028.322077908401"><img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" /></a>

## How to run locally?
1. `git clone git@github.com:alejomendoza/stroopy.git`

2. `npm install`

3. Create a Slack app, get the Client Id and Client Secret from the slack api dashboard [page.](https://api.slack.com/apps/)

4. Make sure you have localtunnel running (https://localtunnel.me/) with the url set in your app credentials under redirect URI in the slack api dashboard. (Example redirect URL: https://yoursubdomain.localtunnel.me/oauth)

5. Make sure you have your Request URL for interactive messages set to (https://yoursubdomain.localtunnel.me/slack/receive).

6. `CLIENT_ID=xxxxxxxx CLIENT_SECRET=xxxxxxxx PORT=3000 npm start:dev` -> streams from https://horizon-testnet.stellar.org/
   
7. `CLIENT_ID=xxxxxxxx CLIENT_SECRET=xxxxxxxx PORT=3000 npm start` -> streams from https://horizon.stellar.org/

## How to test?

`CLIENT_ID=xxxxxxxx CLIENT_SECRET=xxxxxxxx PORT=3000 npm test`

## Slack commands

Stream transactions: `stream transactions @stroopy`

Stop transactions: `stop transactions @stroopy`

## Liked this project? 

Tip me on Stellar network: `GDUNB6SGNYCGOQCNK44HGM7JXAJDCHU6ZYWUXKCI4S6UDQQ3AE7SAXBM`
