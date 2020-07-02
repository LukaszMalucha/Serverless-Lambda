##### SERVERLESS

npm install -g serverless

serverless create --template aws-nodejs


sls create -t aws-nodejs --n <name>

serverless deploy

sls invoke -f hello

##### LOCAL
sls invoke local -f hello


##### RETRIEVE LOGS

sls logs -f hello

##### RETRIEVE ENDPOINT