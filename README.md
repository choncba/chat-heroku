# Simple Chat Sample with NodeJS, SocketIO and Heroku deployment
## Required
- NodeJS
- Git
- Heroku account an Heroku CLI installed

# Install and deploy
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

If you experience problems with socket.io, type from CLI 
```
heroku features:enable http-session-affinity
```

## See 
- [Heroku docs](https://devcenter.heroku.com/articles/deploying-nodejs)
- [SocketIO Example](https://devcenter.heroku.com/articles/node-websockets)