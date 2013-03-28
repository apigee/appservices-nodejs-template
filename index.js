/* 
	1. Use the command 'npm install' to install the usergrid node module,
	   require it below!	*/

var Usergrid = require("usergrid");

/*
    2. Set your account details in the app

    - Enter your orgName below — it’s the username you picked when you signed up at apigee.com
    - Keep the appName as “sandbox”: it’s a context we automatically created for you. 
      It’s completely open by default, but don’t worry, other apps you create are not!      */

var client = new Usergrid.client({
    orgName:'mdobs',
    appName:'sandbox',
});

/*
    3. Set some details for your first object

    Great, we know where your where account is now!
    Let’s try to create a book, save it on Apigee, and output it on the page.
    
    - Keep the type as “book”.
    - Enter the title of your favorite book below, instead of “the old man and the sea”.    */

var options = {
	type:"book",
	name:""
};

/*
    4. Now, run it!
    
    You’re good to go! Use the command 'node index.js' to run the script.	*/

client.createEntity(options, function(error, response){
	if(error) {
		console.log("Could not create the book. Did you enter your orgName (username) correctly on line 18 of index.js?");
	} else {
		console.log("Success! Here is the object we stored; ");
		console.log("notice the timestamps and unique id we created for you:");
		console.log(response.get());
	}
});


/*
    5. Congrats, you’re done!

    - You can try adding more properties after line 30 and re-running the script!
    - You can then see the admin view of this data by logging in at https://apigee.com/usergrid
    - Or you can go explore more advanced examples in our docs: http://apigee.com/docs/usergrid         */
