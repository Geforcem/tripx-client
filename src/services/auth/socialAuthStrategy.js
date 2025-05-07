import { signInWithPopup } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { AuthProviders } from '../../config/authProviders';
import { GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';

export class SocialAuthStrategy {
    constructor(provider) {
        this.provider = provider;
    }

    async login() {
        const { user } = await signInWithPopup(auth, this.provider);
        const token = await user.getIdToken();
        return { email: user.email, token };
    }
}
// Strategy kaydı
export const socialStrategies = {
    [AuthProviders.GOOGLE]: new SocialAuthStrategy(new GoogleAuthProvider()),
    [AuthProviders.FACEBOOK]: new SocialAuthStrategy(new FacebookAuthProvider()),
};
