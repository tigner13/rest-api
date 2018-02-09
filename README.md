# Rest-API

This is a project for the Zappos internship coding challenge. Authored by Elizabeth Tigner.

## API Docs
#### Restaurant Actions
- GET `/restaurant`
	- Will return a list of all restaurants in the database with their ids as well as their menus with their ids
- GET `/restaurant/:id`
	- Will return full info about the specified restaurant
- POST `/restaurant`
	- Endpoint to add a restaurant
	- A request looks like this:
```
    	{
        	name: String,
            address: String,
            genre: String,
            phoneNumber: String,
            url: String
        }
```
- PUT `/restaurant/:id`
	- This will allow you to pass any restaurant attribute to update it
- DELETE `/restaurant/:id`
	- This deletes the specified restaurant.

#### Menu Actions
- GET `/restaurant/:id/menu/:type`
	- This will get the specified menu for the specified restaurant
- POST `/restaurant/:id/menu`
	- This adds a menu to the restaurant
	- A request looks like this:
```
    	{
        	name: String,
            menuType: String,
        }
```
- DELETE `/restaurant/:id/menu/:type`
	- Deletes the specified menu

#### Menu Item Actions
- POST `/restaurant/:id/menu/:type`
	- This adds an item to the specified menu
- DELETE `/restaurant/:id/menu/:type/:itemId`
	- This will delete the item off the menu

## Instructions

### Install Dependencies
This all takes place in project root directory.

- Make sure npm and mongodb installed.
- Run `npm install`
- (Optional Step) Seed the database
	- Run `npm install -g node-mongo-seeds`
	- Then run `seed`
### Run the app
- Start a mongodb instance, usually by running `mongod`
- Running `npm start` will start the server on localhost:3000

### Run tests
- `npm test`

