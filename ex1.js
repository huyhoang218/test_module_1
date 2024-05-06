let n

do {
    n = +prompt('Nhập số nguyên gồm n phần tử')
} while (n > 20 || n <= 0 || isNaN(n))

for (let i = 0; i < n; i++) {
    arr[i] = +prompt('Nhập phần tử ' + i)
    document.write(arr[i] + ' ')
}

let arr = []
let sumEven = 0
let sumOdd = 0

for (let i = 0; i < n; i++) {
    if (arr[i] % 2 === 0) {
        sumEven += arr[i]
    } else {
        sumOdd += arr[i]
    }
}

let minus = sumEven - sumOdd
document.write('<br>')
document.write(minus)