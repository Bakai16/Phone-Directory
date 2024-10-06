import React, { useState } from 'react';

const PhoneForm = ({ addContact }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobilePhone: '',
    workPhone: '',
    department: '',
    position: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.mobilePhone) {
      addContact({ ...formData, id: Date.now() });
      setFormData({ name: '', mobilePhone: '', workPhone: '', department: '', position: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="ФИО"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="mobilePhone"
          placeholder="Мобильный телефон"
          value={formData.mobilePhone}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="workPhone"
          placeholder="Рабочий телефон"
          value={formData.workPhone}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="department"
          placeholder="Отдел"
          value={formData.department}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="position"
          placeholder="Должность"
          value={formData.position}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary mt-2">Добавить</button>
    </form>
  );
};

export default PhoneForm;
