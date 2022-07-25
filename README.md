# SimplyFit Workout App

Welcome to my first project: a full-stack web app using React.js, Express.js, Node.js and MongoDB. 
This is a workout tracker where you can login (after signing up) to add, edit, delete and view workouts. The app is primarily for weightlifting with dropdowns of excercises, equipment used and input for reps, sets and weight.

Note (Jul 24 2022): MongoDB connection is broken. Need to update the app code to have logged workouts display again. Currently extremely busy with internship and school. Will get to it around end August 2022.
This app is accessible [here](https://simplyfit-workouts.netlify.app)


## To run the app on Local Machine

1. Clone this repository from Github
2. Obtain MongoDB Atlas URL for database 
	- Create (or Sign In to) an account at [MongoDB Cloud Atlas](https://account.mongodb.com/account/login)
	- Create and build a cluster
	- Add new database user with your own IP address (can use password authentication)
	- Add your own IP address (to the Network Access page
	- Go to cluster and connect with application
	- Obtain the database string (replace placeholders with appropriate credentials) and paste into `.env.test`
3. Set up Google authentication
	- Create (or Sign In to) an account at [Google Developers Console](https://console.developers.google.com/)
	- Navigate to OAuth consent screen and resgister the app with your details
	- Navigate to Credentials and create a new OAuth client ID with `http://localhost:3000` and `http://localhost:3000/auth` as redirect URLs
	- Copy the generated client id and follow the instructions of `google_client_id_test.js` in `/client/src/components/Auth`
4. Set up JSX authentication
	- Navigate to `.env.test` in `/server` and replace `SECRET_KEY_JSON` with any secret string of your choice
	- Set `PORT` to `5000`
	- Rename `.env.test` to `.env`
5. Run the App
	- In the project directory, run `npm install`
	- Navigate to the client directory, run `npm install` then `npm start`
	- Navigate to the server directory, run `npm install` then `npm start`
6. If all works, the app should open on a new window (may need to refresh)


## Todos
1. Add logic where no weight option needs to have weight 0
2. Add a confirmation message when an activity has been added or edited
3. Alert when unable to add workout or login / sign up due to incomplete fields or invalid input
4. Searching and filtering in a "profile" tab
5. Better mobile resizing of workouts


#### Acknowledgements
The main source of learning was from [JavaScript Mastery - YouTube](https://www.youtube.com/channel/UCmXmlB4-HJytD7wek0Uo97A).\
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

