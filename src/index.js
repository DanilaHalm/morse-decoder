const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = [];
    let data = expr;
    for (let i = 0; i < expr.length / 10; i++){
        let symRes = [];
        let sym = data.slice(0, 10);
        if( sym === '**********') {result.push(' ')};
         for ( let i = 0; i < 10; i += 2 ){
            let l = sym.slice(i, i + 2);
            if( l === '10') {symRes.push('.')};
            if( l === '11') {symRes.push('-')};
          }
        result.push(MORSE_TABLE[symRes.join('')]);
        data = data.slice(10);
    }
    return result.join('');
}

module.exports = {
    decode
}