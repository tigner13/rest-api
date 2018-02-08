const mysql = require('mysql');
/*setting up the connection */
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'rest_api_database'
});
con.connect((err) => {
  if(err){
    //if there is an error then return the error
    console.log(err);
    res.json({success : false, message : 'bad connection'})
    return;
  }
  console.log('Connection established -2');
});



/*Calls to restaurants Data Base */

// get to /restaurants
var getRestaurants = function(req, res) {
  // Connecting to the rest_api_database from root@localhost

  con.query('SELECT * FROM restaurants', (err,rows) => {
    if(err) {
      res.json({success : false, message : ' '})
      return;
    }

    console.log('Data received from Db:\n');
    res.json(rows);
  });

}
//post to /restaurants
//has the inputs id, name and address
var postRestaurant = function(req, res) {
  var sql = 'INSERT INTO restaurants (id,name,address) VALUES ('+ req.body.id + ',\"' + req.body.name + '\",\"' + req.body.address +'\")'
  console.log(sql);
  con.query(sql, (err, rows) => {
    if(err) {
      res.json({success : false, message : ' '})
      return;
    }
    res.json({success : true});
  });

}

//put to /restaurants
//has the inputs id, name and address
var putRestaurant = function(req, res) {
  var sql = 'UPDATE restaurants SET name = \"' + req.body.name + '\", address = \"' + req.body.address + '\" WHERE id = '+ req.body.id
  console.log(sql);
  con.query(sql, (err, rows) => {
    if(err) {
      res.json({success : false, message : ' '})
      return;
    }
    res.json({success : true});
  });
}

//delete to /restaurants
//has the input id
var deleteRestaurant = function(req, res) {
  var sql = 'DELETE FROM restaurants WHERE id ='+ req.body.id + ';'
  console.log(sql);
  con.query(sql, (err, rows) => {
    if(err) {
      res.json({success : false, message : ' '})
      return;
    }
    res.json({success : true});
  });
}

//get to Menus
var getMenus = function(req, res) {
  con.query('SELECT * FROM menus', (err,rows) => {
    if(err) {
      res.json({success : false, message : ' '})
      return;
    }

    console.log('Data received from Db:\n');
    res.json(rows);
  });
}

//post to /menus
//input is  id, name, rest_id
var postMenu = function(req, res) {
  var sql = 'INSERT INTO menus (id, name, rest_id) VALUES ('+ req.body.id + ',\"' + req.body.name + '\",\"' + req.body.rest_id +'\")'
  console.log(sql);
  con.query(sql, (err, rows) => {
    if(err) {
      res.json({success : false, message : ' '})
      return;
    }

    res.json({success : true});
  });
}

//put to /menus
//input is  id, name, rest_id
var putMenu = function(req, res) {
  var sql = 'UPDATE menus SET name = \"' + req.body.name + '\", rest_id = \"' + req.body.rest_id + '\" WHERE id = '+ req.body.id
  console.log(sql);
  con.query(sql, (err, rows) => {
    if(err) {
      res.json({success : false, message : ' '})
      return;
    }
    res.json({success : true});
  });
}

//delete to /menus
//input is id
var deleteMenu = function(req, res) {
  var sql = 'DELETE FROM menus WHERE id ='+ req.body.id + ';'
  console.log(sql);
  con.query(sql, (err, rows) => {
    if(err) {
      res.json({success : false, message : ' '})
      return;
    }
    res.json({success : true});
  });
}

// get to /menu_items
var getMenuItems = function(req, res) {
  con.query('SELECT * FROM menu_items', (err,rows) => {
    if(err) {
      res.json({success : false, message : ' '})
      return;
    }

    console.log('Data received from Db:\n');
    res.json(rows);
  });
}

//post to /menu_items
//need id, name, and menu_id
var postMenuItem = function(req, res) {
  var sql = 'INSERT INTO menu_items (id, name, menu_id) VALUES ('+ req.body.id + ',\"' + req.body.name + '\",\"' + req.body.menu_id +'\")'
  console.log(sql);
  con.query(sql, (err, rows) => {
    if(err) {
      res.json({success : false, message : ' '})
      return;
    }

    res.json({success : true});
  });
}

//put to menu_items
//need id, name, and menu_id
var putMenuItem = function(req, res) {
  var sql = 'UPDATE menu_items SET name = \"' + req.body.name + '\", menu_id = \"' + req.body.menu_id + '\" WHERE id = '+ req.body.id
  console.log(sql);
  con.query(sql, (err, rows) => {
    if(err) {
      res.json({success : false, message : ' '})
      return;
    }
    res.json({success : true});
  });
}

//delete to menu_items
//need id
var deleteMenuItem = function(req, res) {
  var sql = 'DELETE FROM menu_id WHERE id ='+ req.body.id + ';'
  console.log(sql);
  con.query(sql, (err, rows) => {
    if(err) {
      res.json({success : false, message : ' '})
      return;
    }
    res.json({success : true});
  });
}


var funcs = { getRestaurants, postRestaurant, putRestaurant, deleteRestaurant,
  getMenus, postMenu, putMenu, deleteMenu, getMenuItems, postMenuItem, putMenuItem, deleteMenuItem};

module.exports = funcs;
