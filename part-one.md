An update item query is in this format :
`db.[collectionName].update(queryObj, changesObj, function(err, response){})`

We need to build our queryObj.  We have our id from our parameters we just need to format it.
This is going to work exactly like it did in our `findOne()` above.
Pass the result in as the queryObj

It's pretty standard to have the client to send us a copy of item they want to save with the changes already made.  To do this they use the body.
Pass the body into the query as the changes.

The function will be invoked when our database call is done.  We want to check for errors and return a 500 status code if we got any.
If we have no err then return our result.  Just to make sure it's valid json use `res.json` and pass in our response.

####
**code**
```
app.put('/api/products/:id', function(req, res){
	if(!req.params.id){
		return res.status(400).send('id query needed');
	}
	var query = {
		_id: mongo.ObjectId(req.params.id)
	};
	db.products.update(query, req.body, function(error, response){
		if(error) {
			return res.status(500).json(error);
		} else {
			return res.json(response);
		}
	});
});
```

### Delete a product

####

Complete the DELETE `/api/products/:id` endpoint

**TESTPOINT**: At this point you should be able to hit the endpoint and have it use your database. Use Postman to hit your endpoint.  You should be able to get a response back in Postman, and be able to see your data being removed in your database.  You can check your database via the terminal or [MongoChef](http://3t.io/mongochef/).

####

**Mongo Query**

An delete item query is in this format :
`db.[collectionName].remove(queryObj, function(err, response){})`

The query object will delete all records matching the query.  If you send it an empty object it will delete everything.

In this case let's delete only a specific id.  Get the id from the req.params again just like in the update step and pass it in as our query object.
`_id` is guaranteed to be unique so by using that we can be sure to only delete the 1 record we want.

The function will be invoked when our database call is done.  We want to check for errors and return a 500 status code if we got any.
If we have no err then return our result.  Just to make sure it's valid json use `res.json` and pass in our response.

####
**code**
```
app.delete('/api/products/:id', function(req, res){
	if(!req.params.id){
		return res.status(400).send('id query needed');
	}
	var query = {
		_id: mongo.ObjectId(req.params.id)
	};
	db.products.remove(query, function(error, response){
		if(error) {
			return res.status(500).json(error);
		} else {
			return res.json(response);
		}
	});
});
```


### Create Front-end Interface

####

Now let's create the front-end. Feel free to set it up however you like.  The only stipulations are that you should have a main route/state where you can see all of the products and an admin route/state where you can create, edit, or delete products.  Don't worry about authentication or protecting your routes at this point.  If you have time, start to set up your front-end application as you think an eCommerce site should be organized.  Introduce some basic styling as well. You could use Bootstrap to help get things going visually.

**TestPoint**: At this point, you should be able to go to the main view and see all of the products that are in your database.  You should also be able to go to the admin view, where you can create, update, or delete products.  As you use this interface, you should be able to get responses from the server, and see the data being changed in the database.

### End Day 1

####

Congrats!  You've just created a skeleton eCommerce application.  Over the next couple of days we will be adding users and orders to our application to make it a full eCommmerce site.

### Copyright

####

© DevMountain LLC, 2015. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.
