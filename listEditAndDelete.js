import React, { useState } from 'react';

const initialData = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 }
];

const App = () => {
  const [data, setData] = useState(initialData);
  const [editingId, setEditingId] = useState(null);

  const handleInputChange = (id, field, value) => {
    const updatedData = data.map(item =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setData(updatedData);
  };

  const handleDelete = id => {
    const filteredData = data.filter(item => item.id !== id);
    setData(filteredData);
  };

  const handleEdit = id => {
    setEditingId(id);
  };

  const handleSave = () => {
    setEditingId(null);
  };

  return (
    <div>
      {data.map(({ id, name, age }) => (
        <div key={id} style={{ marginBottom: '10px' }}>
          <input
            type="text"
            value={name}
            onChange={e => handleInputChange(id, 'name', e.target.value)}
            disabled={editingId !== id}
          />
          <input
            type="number"
            value={age}
            onChange={e => handleInputChange(id, 'age', e.target.value)}
            disabled={editingId !== id}
          />
          {editingId === id ? (
            <button onClick={handleSave}>Save</button>
          ) : (
            <button onClick={() => handleEdit(id)}>Edit</button>
          )}
          <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default App;

