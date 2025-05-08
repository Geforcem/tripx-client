import React, { useState } from 'react';
import '../../assets/css/ui/UserProfile.css';

export default function EditProfilePage({ profile, onSave, onCancel }) {
    const [formData, setFormData] = useState({ ...profile });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <form className="profile-container" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Ad</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label>Bulunduğunuz şehir</label>
                <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label>Web sitesi</label>
                <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://"
                />
            </div>

            <div className="form-group">
                <label>Hakkınızda</label>
                <textarea
                    name="about"
                    rows={4}
                    maxLength={160}
                    value={formData.about}
                    onChange={handleChange}
                />
                <div style={{ fontSize: '12px', color: '#555', textAlign: 'right' }}>
                    {formData.about.length}/160
                </div>
            </div>

            <button type="submit" className="save-button">
                Kaydet
            </button>
            <button type="button" className="cancel-button" onClick={onCancel}>
                İptal
            </button>
        </form>
    );
}
