function validate() {
    let username = $("#username")
    let email = $('#email')
    let password = $('#password')
    let confirmPassword = $('#confirm-password')
    let company = $('#company')
    let companyNumber = $('#companyNumber')
    let submitBtn = $('#submit')
    let validationDiv = $('#valid')
    let companyInfo = $('#companyInfo')
    let allIsValid = true

    company.on('change', function () {
        if (company.is(':checked')) {
            companyInfo.css('display', 'block')
        } else {
            companyInfo.css('display', 'none')
        }
    })

    submitBtn.on('click', function (ev) {
        ev.preventDefault()
        validateForm()

        validationDiv.css('display', allIsValid ? 'block' : 'none')
        allIsValid = true
    })
    
    function validateForm() {
        validateInput(username, /^[A-Za-z\d]{3,20}$/g)
        validateInput(email, /^.*?@.*?\..*$/g)

        if (password.val() === confirmPassword.val()){
            validateInput(password, /^\w{5,15}$/g)
            validateInput(confirmPassword, /^\w{5,15}$/g)
        } else {
            password.css('border', 'solid red')
            confirmPassword.css('border', 'solid red')
            allIsValid = false
        }

        if (company.is(':checked')) {
            validateCompanyInfo()
        }
    }
    
    function validateInput(input, pattern) {
        if (pattern.test(input.val())) {
            input.css('border', 'none')
        } else {
            input.css('border', 'solid red')
            allIsValid = false
        }
    }
    
    function validateCompanyInfo() {
        let nubValue = +companyNumber.val()
        if (nubValue >= 1000 && nubValue <= 9999) {
            companyNumber.css('border', 'none')
        } else {
            companyNumber.css('border', 'solid red')
            allIsValid = false
        }
        
    }
}
