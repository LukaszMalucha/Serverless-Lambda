##### SERVERLESS

npm install -g serverless

serverless create --template aws-nodejs


sls create -t aws-nodejs --n <name>

serverless deploy

sls invoke -f hello

##### LOCAL
sls invoke local -f hello

#### INVOKE WITH JSON

sls invoke local -f createArticle -p articles/event.json


##### RETRIEVE LOGS

sls logs -f hello

##### CONNECT APP TO DYNAMODB

npm init -y
npm i --save aws-sdk
npm i --save uuid
