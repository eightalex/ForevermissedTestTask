import { REGEXP } from '@/constants/regexp';

export class Validator {
    static checkEmail(email) {
        const re = REGEXP.EMAIL;
        return re.test(email);
    }
}
