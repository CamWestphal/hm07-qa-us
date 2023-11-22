# Sprint 7 project

to create the kits we used the api/docs/ and postman.
to find proper endpoints we used api/swagger
in the config.js script, make sure to update it with the current server address. config.js stores the url into a variable name that is used to make the scripts work.

For these scripts to work, you must create a kit before running.

The Delete handler deletes an already created kit. 

the Get handler retrieves and tests if the endpoint works

the post handler tests creating an order

the put handler test adding products to an already created kit

the expect.toBe function verifies that we are getting the right codes when we run the tests and gives an error when it doesnt

to run the tests make sure the delete and put enpoints match up with the id created for the kits

to run the scripts use the cmd line in the folder and do 'npm install' to install the packages needed for this test.

to run the tests use 'npx jest tests/deleteHandlers.test.js' and change the file name when you run a different script.