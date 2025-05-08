import React from 'react';
import '../../assets/css/ui/UserProfile.css';
import {useNavigate} from "react-router-dom";

export default function ProfilePage() {
    const { name, joinedYear, contributions, location, website, about, avatarUrl } = {
        name: 'Murat A',
        joinedYear: 2023,
        contributions: 0,
        location: 'Ankara, Türkiye',
        website: '',
        about: '',
        avatarUrl: ''
    };

    const navigate = useNavigate();


    return (
        <div className="profile-container">
            <div className="profile-header">
                <img
                    src={avatarUrl || 'https://via.placeholder.com/64'}
                    alt="Avatar"
                    className="avatar"
                />
                <div className="profile-info">
                    <h2 className="name">{name}</h2>
                    <p className="subtext">
                        {joinedYear} yılında katıldı • {contributions} katkı
                    </p>
                </div>
                <button
                    className="edit-button"
                    onClick={() => navigate('/profile/edit')}
                >
                    Düzenle
                </button>
            </div>

            <p className="about">
                {about ||
                    'Diğer gezginlerin sizi tanıyabilmesi için kendinizle ilgili biraz bilgi paylaşın.'}
            </p>

            <div className="profile-details">
                <div className="detail-item">
                    <span className="detail-label">Konum:</span>
                    <span>{location}</span>
                </div>
                <div className="detail-item">
                    <span className="detail-label">Web sitesi:</span>
                    <span>{website || 'Hiç web sitesi eklenmedi.'}</span>
                </div>
            </div>
        </div>
    );
}