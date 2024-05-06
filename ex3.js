//kiểm tra số nguyên tố
function checkPrime(number) {
    if (number < 2) return false
    if (number === 2 || number === 1) return true
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false
    }
    return true
}
// Sắp xếp các phần tử trong mảng
function sortArray(arr) {
    let min
    for (let i = 0; i < arr.length - 1; i++) {
        min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
    }
    return arr
}
//trả về mảng là các số nguyên tố được sắp xếp
function checkArrayPrime(arr) {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        if (checkPrime(arr[i])) {
            newArray.push(arr[i])
        }

    }
    sortArray(newArray)
    return newArray
    //cách khác:
    // return newArray.sort(function (a, b) {
    //     return a - b
    // })
}

let array = [1, 5, 6, 23, 8, 47, 10, 3]

console.log(checkArrayPrime(array))