import React, { useState } from 'react';

function InitializingStateNestedArray() {
 
  const [nestedItems, setNestedItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [subItem, setSubItem] = useState('');

  const handleNewItemChange = (event) => {
    setNewItem(event.target.value);
  };


  const handleSubItemChange = (event) => {
    setSubItem(event.target.value);
  };

  const handleAddItem = (event) => {
    event.preventDefault();
    if (newItem.trim() !== '' && subItem.trim() !== '') {
      setNestedItems([...nestedItems, [newItem, [subItem]]]);
      setNewItem('');
      setSubItem('');
    }
  };

  return (
    <div>
      <form onSubmit={handleAddItem}>
  
        <input 
          type="text" 
          value={newItem} 
          onChange={handleNewItemChange} 
          placeholder="Add a new item..."
        />
        <input 
          type="text" 
          value={subItem} 
          onChange={handleSubItemChange} 
          placeholder="Add a sub-item..."
        />
        <button type="submit">اضافه کردن آیتم</button>
      </form>
      <ul>
        {nestedItems.map((item, index) => (
          <li key={index}>
            {item[0]}
            <ul>
              {item[1].map((sub, subIndex) => (
                <li key={subIndex}>{sub}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InitializingStateNestedArray;
