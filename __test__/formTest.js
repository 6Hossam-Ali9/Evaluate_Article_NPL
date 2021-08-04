import { handleSubmit } from '../src/client/js/formHandler'


describe('Try handleSubmit() should exist' , () => {
    test('return true', async () => {
        expect(handleSubmit).toBeDefined();
    });
});

describe('Try handleSubmit() should be a function' , () => {
    test('function', async () => {
        expect(typeof handleSubmit).toBe("function");
    });
});