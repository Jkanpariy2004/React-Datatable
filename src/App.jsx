import React, { useState } from "react";
import DataTable from "react-data-table-component";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const columns = [
    {
      name: 'Id',
      selector: row => row.id,
      sortable: true
    },
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true
    },
    {
      name: 'Age',
      selector: row => row.age,
      sortable: true
    }
  ];

  const data = [
    { id: 1, name: 'Jenish', email: 'jenish@gmail.com', age: 18 },
    { id: 2, name: 'Alice', email: 'alice@gmail.com', age: 22 },
    { id: 3, name: 'Bob', email: 'bob@gmail.com', age: 25 },
    { id: 4, name: 'Charlie', email: 'charlie@gmail.com', age: 30 },
    { id: 5, name: 'Diana', email: 'diana@gmail.com', age: 28 },
    { id: 6, name: 'Eve', email: 'eve@gmail.com', age: 35 },
    { id: 7, name: 'Frank', email: 'frank@gmail.com', age: 40 },
    { id: 8, name: 'Grace', email: 'grace@gmail.com', age: 32 },
    { id: 9, name: 'Hannah', email: 'hannah@gmail.com', age: 29 },
    { id: 10, name: 'Ian', email: 'ian@gmail.com', age: 27 },
    { id: 11, name: 'Jack', email: 'jack@gmail.com', age: 24 },
    { id: 12, name: 'Kathy', email: 'kathy@gmail.com', age: 31 },
    { id: 13, name: 'Leo', email: 'leo@gmail.com', age: 26 },
    { id: 14, name: 'Mona', email: 'mona@gmail.com', age: 23 },
    { id: 15, name: 'Nina', email: 'nina@gmail.com', age: 21 },
    { id: 16, name: 'Oscar', email: 'oscar@gmail.com', age: 19 },
    { id: 17, name: 'Paul', email: 'paul@gmail.com', age: 20 },
    { id: 18, name: 'Quinn', email: 'quinn@gmail.com', age: 33 },
    { id: 19, name: 'Rachel', email: 'rachel@gmail.com', age: 36 },
    { id: 20, name: 'Steve', email: 'steve@gmail.com', age: 38 },
    { id: 21, name: 'Tina', email: 'tina@gmail.com', age: 34 },
    { id: 22, name: 'Uma', email: 'uma@gmail.com', age: 37 },
    { id: 23, name: 'Victor', email: 'victor@gmail.com', age: 39 },
    { id: 24, name: 'Wendy', email: 'wendy@gmail.com', age: 30 },
    { id: 25, name: 'Xander', email: 'xander@gmail.com', age: 29 },
    { id: 26, name: 'Yara', email: 'yara@gmail.com', age: 28 },
    { id: 27, name: 'Zane', email: 'zane@gmail.com', age: 26 },
    { id: 28, name: 'Alice', email: 'alice2@gmail.com', age: 22 },
    { id: 29, name: 'Bob', email: 'bob2@gmail.com', age: 25 },
    { id: 30, name: 'Charlie', email: 'charlie2@gmail.com', age: 30 },
    { id: 31, name: 'Diana', email: 'diana2@gmail.com', age: 28 },
    { id: 32, name: 'Eve', email: 'eve2@gmail.com', age: 35 },
    { id: 33, name: 'Frank', email: 'frank2@gmail.com', age: 40 },
    { id: 34, name: 'Grace', email: 'grace2@gmail.com', age: 32 },
    { id: 35, name: 'Hannah', email: 'hannah2@gmail.com', age: 29 },
    { id: 36, name: 'Ian', email: 'ian2@gmail.com', age: 27 }
  ];

  const filteredData = data.filter(
    item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toString().includes(searchTerm) ||
      item.age.toString().includes(searchTerm)
  );

  return (
    <div className="container mt-5">
      <h2 className="mb-4">User Data</h2>
      <input
        type="text"
        placeholder="Search..."
        className="form-control mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <DataTable
        columns={columns}
        data={filteredData}
        selectableRows
        fixedHeader
        pagination
        highlightOnHover
        className="table table-bordered table-striped"
      />
    </div>
  );
}

export default App;
