// Look up the key in the passed in dictionary
function dictionaryLookup(key, dict) {
    // Inputs: A string representing the key
    //         A dictionary that can be looked up
    // Outputs: On success, the corresponding value in the dictionary
    //          On failure, the boolean value false
    // The function will fail if the input key is not within the dictionary
    // You may assume that key is always a string
    // You may assume that dict is always a JSON object (dictionary)

    if(typeof(dict)!='object'){
        console.log('FAIL: Dict not json object: ',dict );
        return false;
    }else if(typeof(key)!='string'){
        console.log('FAIL: Key not string: ',key);
        return false;
    }
    console.log(dict)
    if (dict[key]!=undefined){
        console.log('SUCCESS: Dictionary: ',dict,'contains key', key);
        return dict[key];
    }
    console.log('FAIL: Dictionary: ', dict, 'does not contains key', key);
    return false;
}

module.exports = dictionaryLookup;
