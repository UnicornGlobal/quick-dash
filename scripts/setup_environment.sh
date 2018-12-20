#!/bin/bash
function configure() {
    echo "Configuring Environment"
    pwd

    E_REGISTER=$1
    E_DEBUG=$2
    E_API=$3
    E_STATS=$4

    cat > config/secrets.env.js <<EOL
    'use strict'
    module.exports = {
      registrationAccessKey: '"${E_REGISTER}"',
      debugToken: '"${E_DEBUG}"',
      apiUrl: '"${E_API}"'
    }
EOL
}

function config_dev() {
    echo "Configuring for Staging"

    configure ${REGISTRATION_ACCESS_KEY} ${DEBUG_TOKEN} ${API_URL} ${STATS_URL}
}

function config_prod() {
    echo "Configuring for Production"

    configure ${LIVE_REGISTRATION_ACCESS_KEY} '' ${LIVE_API_URL} ${LIVE_STATS_URL}
}

if [ "$TRAVIS_BRANCH" == "$DEV_BRANCH" ]; then
  config_dev
elif [ "$TRAVIS_BRANCH" == "$LIVE_BRANCH" ]; then
  config_prod
else
  echo "Not a deployment branch"
fi
