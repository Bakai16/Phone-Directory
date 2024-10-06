import React, { useState } from 'react';

const PhoneItem = ({ contact, deleteContact, editContact }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(contact);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    editContact(formData);
    setIsEditing(false);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {isEditing ? (
        <>
          <input
            type="text"
            className="form-control mr-2"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control mr-2"
            name="mobilePhone"
            value={formData.mobilePhone}
            onChange={handleChange}
          />
          <input
          type="text"
          className="form-control"
          name="workPhone"
          placeholder="Рабочий телефон"
          value={formData.workPhone}
          onChange={handleChange}
          />
          <input
          type="text"
          className="form-control"
          name="department"
          placeholder="Отдел"
          value={formData.department}
          onChange={handleChange}
          />
          <input
          type="text"
          className="form-control"
          name="position"
          placeholder="Должность"
          value={formData.position}
          onChange={handleChange}
          />
          <button className="btn btn-success" onClick={handleSave}>Сохранить</button>
        </>
      ) : (
        <>
          <div className='d-flex flex-column flex-md-row gap-3'>
            <span>{contact.name}</span>
            <span>{contact.mobilePhone}</span>
            <span>{contact.workPhone}</span>
            <span>{contact.department}</span>
            <span>{contact.position}</span>
          </div>

          <div>
            <button className="btn btn-warning mr-2" onClick={() => setIsEditing(true)}>Редактировать</button>
            <button className="btn btn-danger" onClick={() => deleteContact(contact.id)}>Удалить</button>
          </div>
        </>
      )}
    </li>
  );
};

export default PhoneItem;
