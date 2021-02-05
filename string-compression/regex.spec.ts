import { StringCompression } from './regex'

describe('tests compression', () => {
    it('regex test', () => {
        const tests: string[] = ['a20b20c30'];
        const answers: string[] = ['a20b20c30'];

        for (let test of tests) {
            const toTest: string = test
            let count = 0;
            const compressor = new StringCompression();
            const returnedString = compressor.stringCompression(toTest);
            expect(returnedString).toEqual(answers[count]);
            count++
        }
    })

});




// describe('testing string compression',  () =>
//     test('testing regex compression', () => {
//         const tests = ['a20b20c30d20'];
//         stringCompression(tests);
//         return null
//     });




// });