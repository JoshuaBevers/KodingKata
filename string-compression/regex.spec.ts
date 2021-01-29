import { exportAllDeclaration } from "@babel/types";
import { describe } from "yargs";

import stringCompression from './regex'

describe("testing regex string compression", () => {
    console.log('testing string');
    const string1 = 'a20b40c20';
    const testString = stringCompression(string1);
    expect(testString).toEqual('a20b40c20');
})