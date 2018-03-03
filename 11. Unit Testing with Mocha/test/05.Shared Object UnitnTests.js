let expect = require("chai").expect
let jsdom = require("jsdom-global")()
let $ = require("jquery")

document.body.innerHTML = '<div id="wrapper">' +
    '<input type="text" id="name">' +
    '<input type="text" id="income">' +
    '</div>'

let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};


describe('sharedObject', function () {
    it('name property, should start as null', function () {
        expect(sharedObject.name).to.equal(null)
    })
    it('name property, should start as null', function () {
        expect(sharedObject.income).to.equal(null)
    })

    describe('changeName', function () {
        it('with invalid parameters, should not change name property', function () {
            sharedObject.changeName('')
            expect(sharedObject.name).to.equal(null)
        })
        it('with invalid parameters, should not change name property', function () {
            sharedObject.name = 'Pesho'
            sharedObject.changeName('')
            expect(sharedObject.name).to.equal('Pesho')
        })
        it('with invalid parameters, should not change name property', function () {
            let nameTextbox = $('#name')
            nameTextbox.val('Ivan')
            sharedObject.changeName('')
            expect(nameTextbox.val()).to.equal('Ivan')
        })
        it('with valid name, should not change name property', function () {
            sharedObject.changeName('Pesho')
            expect(sharedObject.name).to.equal('Pesho')
        })
        it('with valid name, should not change name property', function () {
            sharedObject.changeName('Stamat')
            let nameTextbox = $('#name')
            expect(nameTextbox.val()).to.equal('Stamat')
        })
    })
    describe('changeIncome', function () {
        it('should not change income property', function () {
            sharedObject.income = 130
            sharedObject.changeIncome({name: 'pesho'})
            expect(sharedObject.income).to.equal(130)
        })
        it(' should not change income property', function () {
            sharedObject.income = 13
            sharedObject.changeIncome(245.24)
            expect(sharedObject.income).to.equal(13)
        })
        it('should not change income property', function () {
            sharedObject.income = 130
            sharedObject.changeIncome(-10)
            expect(sharedObject.income).to.equal(130)
        })
        it('should not change income property', function () {
            let incomeTextbox = $('#income')
            incomeTextbox.val('5')
            sharedObject.changeIncome({name: 'pesho'})
            expect(incomeTextbox.val()).to.equal('5')
        })
        it('should not change income property', function () {
            let incomeTextbox = $('#income')
            incomeTextbox.val('5')
            sharedObject.changeIncome(24.55)
            expect(incomeTextbox.val()).to.equal('5')
        })
        it('should not change income property', function () {
            let incomeTextbox = $('#income')
            incomeTextbox.val('5')
            sharedObject.changeIncome(-15)
            expect(incomeTextbox.val()).to.equal('5')
        })
        it('should not change income property', function () {
            let incomeTextbox = $('#income')
            incomeTextbox.val('5')
            sharedObject.changeIncome(0)
            expect(incomeTextbox.val()).to.equal('5')
        })
        it('should not change income property', function () {
            sharedObject.income = 130
            sharedObject.changeIncome(0)
            expect(sharedObject.income).to.equal(130)
        })
        it('should not change income property', function () {
            sharedObject.changeIncome(56)
            expect(sharedObject.income).to.equal(56)
        })
        it('should not change income property', function () {
            sharedObject.changeIncome(56)
            let incomeTextbox = $('#income')
            expect(incomeTextbox.val()).to.equal('56')
        })
    })

    describe('updateName', function () {
        it('should not change name property', function () {
            sharedObject.name = 'test'
            let nameTextbox = $('#name')
            nameTextbox.val('')
            sharedObject.updateName()
            expect(sharedObject.name).to.equal('test')
        })
        it('should not change name property', function () {
            let nameTextbox = $('#name')
            nameTextbox.val('test')
            sharedObject.updateName()
            expect(sharedObject.name).to.equal('test')
        })
    })

    describe('updateIncome', function () {
        it('should not change name property', function () {
            sharedObject.income = 55
            let incomeTextbox = $('#income')
            incomeTextbox.val('pesho')
            sharedObject.updateIncome()
            expect(sharedObject.income).to.equal(55)
        })
        it('should not change name property', function () {
            sharedObject.income = 55
            let incomeTextbox = $('#income')
            incomeTextbox.val('23.17')
            sharedObject.updateIncome()
            expect(sharedObject.income).to.equal(55)
        })
        it('should not change name property', function () {
            sharedObject.income = 55
            let incomeTextbox = $('#income')
            incomeTextbox.val('-20')
            sharedObject.updateIncome()
            expect(sharedObject.income).to.equal(55)
        })
        it('should not change name property', function () {
            sharedObject.income = 55
            let incomeTextbox = $('#income')
            incomeTextbox.val('')
            sharedObject.updateIncome()
            expect(sharedObject.income).to.equal(55)
        })
        it('should not change name property', function () {
            let incomeTextbox = $('#income')
            incomeTextbox.val('177')
            sharedObject.updateIncome()
            expect(sharedObject.income).to.equal(177)
        })
    })
})