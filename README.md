## Running instructions

1. Clone the repo
```text
git clone --depth=1 https://github.com/rameshsunkara/employee-mgmt-app-v1.git
```

2. Setup

```text
npm run setup
```

3. Make Sure Port `270171` is open by visiting `http://portquiz.net:27017`
   This port is used for MongoDB connection.
   
4. Start the App
```text
npm start
```

5. Run in Developer Mode

This requires `nodemon`
Install `nodemon` using `npm i nodemon -g`

```text
npm run dev
```

## Code
- UI code is in `app` folder
- Backend code is `backend` folder

## Testing

1. Visit `http://localhost:3000/` in your browser
    - Shows List of Employees by fetching data from MongoDB hosted in Cloud.
    - Request `GET http://localhost:3000/api/employees/`
     
1. Create a New Employee by filling in required data and click Create Button
   - Request `POST http://localhost:3000/api/employees/`

## TODO

- [] Add unit tests
- [] Clean up reducers-saga
- [] Fully externalize DB config
- [] Resilient DB Connections
- [] Cleanup UI Code

