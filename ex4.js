class Phone {
    constructor(code, name, firm, money) {
        this.code = code
        this.name = name
        this.firm = firm
        this.money = money
    }

    getCode() {
        return this.code
    }

    getName() {
        return this.name
    }

    getFirm() {
        return this.firm
    }

    getMoney() {
        return this.money
    }
}

class Mobile {
    constructor() {
        this.mobile = []
    }

    addMobile(code, name, firm, money) {
        let newPhone = new Phone(code, name, firm, money)
        this.mobile.push(newPhone)
        return newPhone.toString()
    }

    displayMobile() {
        this.mobile.sort(function (a, b) {
            return a - b
        })
        this.mobile.map(this.mobile)
    }
}