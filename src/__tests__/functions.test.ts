import { validateEmail } from '../functions';
import { DUMMY_PAYLOAD } from "./app_e2e.test";

describe('Testing Helper Functions', () => {
    test('validateEmail - Correct Value', () => {
        const correctValue =  validateEmail(DUMMY_PAYLOAD.email);
        expect(correctValue).toBe(true);
    });

    test('validateEmail - Wrong Value', () => {
        const wrongValue =  validateEmail('fangshiman');
        expect(wrongValue).toBe(false);
    });
});

