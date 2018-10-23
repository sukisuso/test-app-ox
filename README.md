# Test-App exercise by Jesús Juan Aguilar

# Version used to develop the app:
- Node -> v10.9.0
- MongoDB -> v3.4.17
- NPM -> v6.4.1

## Run the app: 
```
$ npm install
$ node app
# Visit http://localhost:8080
```

## Build react website (is not necessary if you don't change anything)
```
$ npm run-script build
```

## Run tests 
```
$ NODE_ENV=test ./node_modules/mocha/bin/mocha test/
```

* You should remove the DDBB 'testapp_test' each time after run the script.

# Future works
- Real frontend and backend validations.
- Table pagination.
- Use another approach for ajax call in reactjs or create a template to make use full fetch.
- Frontend toast notifications.
- Add redux to manage the react state.
- Express response helper.
- Use Cypress js for react testing
- Create more classes in react to make more easy to understand the react code
- Show answers of a test in a separate page or modal.
- Create id for each question and no repeat the string in DDBB.
- Use Grid system css to make the app responsive.
