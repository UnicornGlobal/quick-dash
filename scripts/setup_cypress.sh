#!/bin/bash
function configure_record() {
    echo "Configuring Cypress for Recording"
    pwd

    cat > cypress.json <<EOL
    {
      "baseUrl": "http://localhost:8080",
      "viewportWidth": 1440,
      "viewportHeight": 900,
      "projectId": "${CYPRESS_PROJECT_ID}",
      "env": {
        "apiUrl": "http://localhost:8000"
      }
    }
EOL
}

function configure_test() {
    echo "Configuring Cypress for Unit Testing"
    pwd

    cat > cypress.json <<EOL
    {
      "baseUrl": "http://localhost:8080",
      "viewportWidth": 1440,
      "viewportHeight": 900,
      "video": false,
      "env": {
        "apiUrl": "http://localhost:8000"
      }
    }
EOL
}

if [ "$TRAVIS_BRANCH" == dev ]; then
  configure_test
elif [ "$TRAVIS_BRANCH" == "$LIVE_BRANCH" ]; then
  configure_record
else
  configure_test
fi
