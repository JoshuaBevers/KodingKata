

export class StringCompression {
    dictionary = {}

    stringCompression(string: string): string {
        console.log('firing compression.')
        const test = string.match(/([a-z])([0-9]+)/g);


        console.log(test);

        return 'a20b20c30'

    }
}

export default StringCompression;