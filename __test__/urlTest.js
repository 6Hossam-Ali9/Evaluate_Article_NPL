import {checkForUrl} from './src/client/js/urlChecker.js'

describe('Test check url functionality', () => {
    test('Testing the checkUrl function defined or not', () => {
        expect(checkForUrl).toBeDefined();
    })

    test('Testing the checkUrl function return false for invalid url', () => {
        expect(checkURL('jpgerngoildmfjsdoifjroijfklvmokfngoenrogneoi')).toBe(false);
    })

    test('Testing the checkUrl function return true for valid url', () => {
        expect(checkURL('www.facebook.com')).toBe(true)
    })
})