# jnj-testing-device-tracker
Johnson &amp; Johnson web application to keep track of testing devices.


### Features
- Create account 
- Modify account
- Sign-in account
#### User can also
- Display a list of devices currently in storage
- Be able to add and remove devices
- Be able to check-in/out a device to/from storage
- Give good user feedback on the status of all devices
- Save updates to a database of your choosing
- Run without issues

## Technologies Used

#### Client side:
     - The client side of this application is built with REACT(Front-end Library) and Context API(state management)
#### Server side:
     - The server side is built on NODE using EXPRESS(web framework) as the server,
	  Mongoose as the ODM(Object Data Modeling) for managing relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB
    
    - Written in ES6 and transpiled down to ES5 with BABEL
	
     - API's is RESTful 
		
#### Style checking and best pratice
    - ESLINT, which is configured to Airbnb-base rule

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

#### Installation and Dependencies

You can get the app running locally in the following way:
1.  Install NodeJs [`node`](https://nodejs.org/en/download/), version 5 or greater on your machine

2. Install [`mongodb`](https://docs.mongodb.com/manual/installation/) to your local machine

3. Clone the repository and cd into it
   
	  ```
    git clone https://github.com/akolliy1/jnj-testing-device-tracker.git
    cd jnj-testing-device-tracker
    ```
		
 4. Install dependenices 
    
		npm install

		 and 

		cd client


		npm install

		cd ../ go out of client folder to run app concurrently

		 
 5. Create an .env file in the root directory of the project
    
		 In the application copy from .env.sample file and paste into .env file, then replace the env variables

 6.  start the application
 
		 - npm run dev
		 - Application would be up and running on localhost `.env port` 
		 
#### Testing
	`npm run test`
