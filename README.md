# MongoDB CRUD Operations

CRUD stands for **Create, Read, Update, and Delete** — the four basic operations used to interact with databases.  
In **MongoDB**, mastering these operations is essential for building efficient and scalable applications.

- **Create**: Insert new documents into collections.  
- **Read**: Retrieve and query data from collections.  
- **Update**: Modify existing documents based on given criteria.  
- **Delete**: Remove documents from collections.

MongoDB's flexible schema and powerful querying capabilities make CRUD operations straightforward and efficient, enabling developers to manage data effectively.

![MongoDB CRUD](https://github.com/ketankirty/CRUD-operation-in-Backend-Express.js-and-Mongodb-/blob/main/lyg8ziob3mi9rb6i3-image1.png?raw=true)
---

## Screenshots

![MongoDB CRUD](https://github.com/ketankirty/CRUD-operation-in-Backend-Express.js-and-Mongodb-/blob/f23afbbd56697e13252ce7189c5b39c775502d25/Screenshot%202025-09-03%20144820.png)
![MongoDB CRUD](https://github.com/ketankirty/CRUD-operation-in-Backend-Express.js-and-Mongodb-/blob/main/Screenshot%202025-09-03%20144916.png?raw=true)
![MongoDB CRUD](https://github.com/ketankirty/CRUD-operation-in-Backend-Express.js-and-Mongodb-/blob/main/Screenshot%202025-09-03%20145320.png?raw=true)
![MongoDB CRUD](https://github.com/ketankirty/CRUD-operation-in-Backend-Express.js-and-Mongodb-/blob/main/Screenshot%202025-09-03%20144916.png?raw=true)
---

## CRUD Operation Examples

### 🟢 Create
```javascript
// Insert a single document
db.users.insertOne({
  name: "John Doe",
  email: "john@example.com",
  age: 28
});

// Insert multiple documents
db.users.insertMany([
  { name: "Jane Doe", email: "jane@example.com", age: 25 },
  { name: "Sam Smith", email: "sam@example.com", age: 30 }
]);
🔍 Read
javascript
Copy code
// Find all documents
db.users.find();

// Find documents with a filter
db.users.find({ age: { $gt: 25 } });

// Find one document
db.users.findOne({ email: "john@example.com" });
✏️ Update
javascript
Copy code
// Update a single document
db.users.updateOne(
  { email: "john@example.com" },
  { $set: { age: 29 } }
);

// Update multiple documents
db.users.updateMany(
  { age: { $lt: 30 } },
  { $set: { status: "young" } }
);
🗑️ Delete
javascript
Copy code
// Delete a single document
db.users.deleteOne({ email: "john@example.com" });

// Delete multiple documents
db.users.deleteMany({ status: "young" });

#Contact- ketanrathor269@gmail.com
