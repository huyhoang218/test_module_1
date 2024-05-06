function checkUpperCase(str) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (char >= 'A' && char <= 'Z') {
            count++
        }
    }
    if (count != 0) {
        return count
    }
    else {
        return 'The Strings is not contain upper char'
    }
}

let string = ''
string = prompt('Enter string')
console.log(checkUpperCase(string));