const rgbHsv = require("rgb-hsv");
const hsv = require("rgb-hsv");

// Convert an RGB color value into an HSV color value
function convertRGBtoHSV(rgb) {
    // Inputs: rgb (List[number, number, number])
    // Outputs: On success, a list of three number elements with the HSV values
    //          On failure, the boolean value false
    // The function will fail if any of the input values are greater than 255,
    //  or less than 0
    //  It will also fail if there are not exactly 3 elements in the rgb list
    // You may assume that rgb is always a list of numbers

    if(Array.isArray(rgb)==false){
        console.log('rgbtype',rgb)
        return false;
    }else if(rgb.length!=3){
        console.log('rgblength', rgb.length);
        return false;
    }

    let r = rgb[0];
    let g = rgb[1];
    let b = rgb[2];
    if(r>255 || r<0 ||g>255||g<0||b>255||b<0){
        console.log('rgb out of bounds', rgb);
        return false;
    }

    let rgbhsv = hsv(r,g,b);


    console.log('r',r);
    console.log('g',g);
    console.log('b',b);

    console.log('hsv', rgbhsv);

    return rgbhsv;
}

module.exports = convertRGBtoHSV;


module.exports = convertRGBtoHSV;
