import { useState, useEffect } from 'react';
// örnek: localStorage ya da API'den çekilebilir
export default function useUserProfile() {
    const [profile, setProfile] = useState({
        name: 'Murat A',
        joinedYear: 2023,
        contributions: 0,
        location: 'Ankara, Türkiye',
        website: '',
        about: '',
        avatarUrl: ''
    });

    useEffect(() => {
        // fetch('/api/profile')...
    }, []);

    return profile;
}