// Get all our models
const db = require('./models'); // individual user

// Create
// db.user.create({
//   name: 'Steve Peters',
//   age: 45,
//   email: 'email@email.com'
// }).then(newUser => {
//   // Create promise returns a new row of data that has been created

//   // Otherwise it throws an error
//   console.log(newUser);
  
//   // Terminate the node process at this point is it doens't just time out
//   process.exit();
// }).catch(error => {
//   console.log(`❌ Error: `, error);
// });

// Read

db.user.findOne({
  where: {
    name: 'Steve Peters'
  }
}).then( user => {
  console.log(`✅ User: `, user);
}).catch( error => console.log(`Error: `, error));

// Update

// Delete