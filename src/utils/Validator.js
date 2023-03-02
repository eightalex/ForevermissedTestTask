import { REGEXP } from '@/constants/regexp';

export class Validator {
    static checkEmail(email) {
        return REGEXP.EMAIL.test(email);
    }
}
