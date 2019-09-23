## Running instructions

1. Clone the repo
      ```text
      git clone --depth=1 https://github.com/rameshsunkara/employee-mgmt-app-v1.git
      ```

1. `cd employee-mgmt-app-v1`

1. Install Node Modules

    ```text
    npm ci
    ```

1. Make Sure Port `270171` is open by visiting `http://portquiz.net:27017`
   This port is used for MongoDB connection.
   
1. Start the App
      ```text
      npm start
      ```

1. Run in Developer Mode. This requires **nodemon**.

    ```text
    npm i nodemon -g
    npm run dev
    ```

## Code
- Refer [UI code](./app)
- Refer [Backend Code](./backend)

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
- [] Add Create Button

## References

- BoilerPlate: [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate)
- MongoClient: [Mongoose](https://mongoosejs.com/)
- [MongoDB Cloud](https://cloud.mongodb.com)



