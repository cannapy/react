const fibonacci = require("./src/fibonacci");
const convertRGBtoHSV = require("./src/convertRGBtoHSV");
const dictionaryLookup = require("./src/dictionaryLookup");

// ===== Tester code ===========================================================

function testFailed(testType, testNum, expected, got, reason = "") {
    let resultString = `[${testType}-${testNum}] Test failed`;
    resultString += ` (expected: ${expected}, got: ${got})`;
    if (reason != "") resultString += ` - ${reason}`;

    console.log(resultString);
}

function checkFibonacci() {
    const points = 40;
    let testsPassed = 0,
        testsTotal = 0;
    let testType = "FIB";

    // You can add a test by adding a new JSON object to this list
    let tests = [
        // Test 01: Basic values
        {
            input: 10, // What value you input to the function
            output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34], // Expected output
            got: (val) => val.toString(), // A small function to transform the function's output
            check: (a, b) => a.toString() == b.toString(), // A function to check if two things are equal
            reason: "Check your math.", // A reason for why you failed, if you did
        },
        // Test 02: Large value length
        {
            input: 10000,
            output: 10000,
            got: (val) => val.length,
            check: (a, b) => a == b.length,
            reason: "Incorrectly sized array - Check your math.",
        },
        // Test 03: Large value... value
        {
            input: 50,
            output: 7778742049,
            got: (val) => val[val.length - 1],
            check: (a, b) => a == b[b.length - 1],
            reason: "Incorrect last value - Check your math.",
        },
        // Test 04: The trivial case
        {
            input: 2,
            output: [0, 1],
            got: (val) => val.toString(),
            check: (a, b) => a.toString() == b.toString(),
            reason: "A size 2 array should be returned. Check your logic.",
        },
        // Test 05: Out of bounds
        {
            input: 1,
            output: false,
            got: (val) => val,
            check: (a, b) => a == b,
            reason: "Out of bounds should return false. Check your logic.",
        },
        // Test 06: Really out of bounds
        {
            input: -50,
            output: false,
            got: (val) => val,
            check: (a, b) => a == b,
            reason: "Out of bounds should return false. Check your logic.",
        },
    ];

    // Run all tests
    for (let i = 0; i < tests.length; i++) {
        testsTotal++;
        let test = tests[i];
        if (test.check(test.output, fibonacci(test.input))) testsPassed++;
        else
            testFailed(
                testType,
                testsTotal,
                test.output.toString(),
                test.got(fibonacci(test.input)),
                test.reason
            );
    }

    // Log out the test stats
    let testResultsString = `[${testType}] ${testsPassed} / ${testsTotal}`;
    let pointsGained = Math.round((points * testsPassed) / testsTotal);
    testResultsString += ` (${pointsGained} pts)`;
    console.log(testResultsString);

    return pointsGained;
}

function checkConvertRGBtoHSV() {
    const points = 30;
    let testsPassed = 0,
        testsTotal = 0;
    let testType = "HSV";

    // You can add a test by adding a new JSON object to this list
    let tests = [
        // Test 01: Basic color
        {
            input: [219, 152, 52], // What value you input to the function
            output: [36, 76, 86], // Expected output
            got: (val) => val.toString(), // A small function to transform the function's output
            check: (a, b) => a.toString() == b.toString(), // A function to check if two things are equal
            reason: "Check your math/usage of the library.", // A reason for why you failed, if you did
        },
        // Test 02: Pure white
        {
            input: [255, 255, 255],
            output: [0, 0, 100],
            got: (val) => val.toString(),
            check: (a, b) => a.toString() == b.toString(),
            reason: "Check your math/usage of the library.",
        },
        // Test 03: Pure black
        {
            input: [0, 0, 0],
            output: [0, 0, 0],
            got: (val) => val.toString(),
            check: (a, b) => a.toString() == b.toString(),
            reason: "Check your math/usage of the library.",
        },
        // Test 04: Number out of bounds
        {
            input: [0, -1, 0],
            output: false,
            got: (val) => val,
            check: (a, b) => a == b,
            reason: "Out of bounds value not returning false.",
        },
        // Number out of bounds (again)
        {
            input: [255, 256, 255],
            output: false,
            got: (val) => val,
            check: (a, b) => a == b,
            reason: "Out of bounds value not returning false.",
        },
    ];

    // Run all tests
    for (let i = 0; i < tests.length; i++) {
        testsTotal++;
        let test = tests[i];
        if (test.check(test.output, convertRGBtoHSV(test.input))) testsPassed++;
        else
            testFailed(
                testType,
                testsTotal,
                test.output.toString(),
                test.got(fibonacci(test.input)),
                test.reason
            );
    }

    // Log out the test stats
    let testResultsString = `[${testType}] ${testsPassed} / ${testsTotal}`;
    let pointsGained = Math.round((points * testsPassed) / testsTotal);
    testResultsString += ` (${pointsGained} pts)`;
    console.log(testResultsString);

    return pointsGained;
}

function checkDictionaryLookup() {
    const points = 30;
    let testsPassed = 0,
        testsTotal = 0;
    let testType = "DLU";

    // You can add a test by adding a new JSON object to this list
    let tests = [
        // Test 01: Basic dictionary lookup
        {
            input: {
                // What value you input to the function
                key: "apples",
                dict: {
                    apples: 5,
                    bananas: 10,
                },
            },
            output: 5, // Expected output
            got: (val) => val, // A small function to transform the function's output
            check: (a, b) => a == b, // A function to check if two things are equal
            reason: "Dictionary isn't working - Check your logic.", // A reason for why you failed, if you did
        },
        // Test 02: Failed dictionary lookup
        {
            input: {
                key: "banana",
                dict: {
                    apple: "red",
                    orange: "orange",
                    plum: "purple",
                },
            },
            output: false,
            got: (val) => val,
            check: (a, b) => a == b,
            reason: "Dictionary fail isn't working - Check your logic.",
        },
        // Test 03: Empty dictionary lookup
        {
            input: {
                key: "apple",
                dict: {},
            },
            output: false,
            got: (val) => val,
            check: (a, b) => a == b,
            reason: "Empty dictionary isn't working - Check your logic.",
        },
    ];

    // Run all tests
    for (let i = 0; i < tests.length; i++) {
        testsTotal++;
        let test = tests[i];
        if (
            test.check(
                test.output,
                dictionaryLookup(test.input.key, test.input.dict)
            )
        )
            testsPassed++;
        else
            testFailed(
                testType,
                testsTotal,
                test.output.toString(),
                test.got(fibonacci(test.input)),
                test.reason
            );
    }

    // Log out the test stats
    let testResultsString = `[${testType}] ${testsPassed} / ${testsTotal}`;
    let pointsGained = Math.round((points * testsPassed) / testsTotal);
    testResultsString += ` (${pointsGained} pts)`;
    console.log(testResultsString);

    return pointsGained;
}

// ===== Main ==================================================================

let fibScore = checkFibonacci(),
    hsvScore = checkConvertRGBtoHSV(),
    dluScore = checkDictionaryLookup();

console.log(
    `All tests ran. Final score: ${fibScore + hsvScore + dluScore} / 100 pts (${
        fibScore + hsvScore + dluScore
    }%)`
);
