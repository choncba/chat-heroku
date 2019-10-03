# Simple Chat Sample with NodeJS, SocketIO and Heroku deployment
## Required
- NodeJS
- Git
- Heroku account an Heroku CLI installed

# Option 1 - Locally Install and deploy
```
git clone https://github.com/choncba/chat-heroku.git
npm install             --> Will install nodejs dependencies from package.json
npm test                --> local test from nodejs
heroku local web        --> local test from heroku
git add .
git commit -m "Commit to deploy"
heroku login            --> Login to your account    
heroku create           --> will create a new heroku app
git push heroku master  --> upload and deploy app
heroku open             --> open app in your browswer, auto-generated url from heroku
```

# Option 2 - Fork to your Github Account and Deploy
- Fork this repo to your github account
- Go to [Heroku](https://www.heroku.com/) log in and create new app
- Go to deploy, give a name to you app and then connect with your github repo (forked from this repo)
- Click on Automatic Deploys
- Click on Manual Deploy
Your app must be up and running from given url (click on view)

Any change on your repo will be followed and updated to your deployed app from heroku automatically before every push to your repo.

If you experience problems with socket.io, type from CLI 
```
heroku features:enable http-session-affinity
```

## See 
- [Heroku docs](https://devcenter.heroku.com/articles/deploying-nodejs)
- [SocketIO Example](https://devcenter.heroku.com/articles/node-websockets)