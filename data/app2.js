

;(function() {
    const name= $('#name')
    const password= $('#password')
    const form= $('#login__btn')
    
    console.log(name)
    console.log(password)
    console.log(form)
    // show error
    function showError(input, message) {
        
        input.classList.add('error')
        const wrapInput= input.parentElement
        const Error= wrapInput.querySelector('small')
        Error.innerText= message
    }

    // show success
    function showSuccess(input) {
        input.classList.add('success')
        input.classList.remove('error')

        const wrapInput= input.parentElement
        const Error= wrapInput.querySelector('small')
        Error.innerText= ''
        return true
    }

    // CLICK BUTTON: 6 < UserName < 20  ký tự
    function checkLengthUser(input, min, max) {
        let ischeckLengthUser= true

        input.value= input.value.trim()

        if(input.value.length < min) {
            showError(input, `UserName phải lớn hơn ${min} ký tự`)
            return true 
        }
        if(input.value.length > max) {
            showError(input, `UserName phải nhỏ hơn ${max} ký tự`)
            return true 
        }
        if( !(input.value === 'Minhquan')) {
            showError(input, `UserName khong dung`)
        } else {
            ischeckLengthUser= false
        }
        // showSuccess(input)
        return ischeckLengthUser 
    }

    // Check Password
    function checkPassword(input) {
        let ischeckPassword = true

        input.value= input.value.trim()
        if( !(input.value === 'Trinhminhquan123')) {

            showError(input, `Password khong dung`)
        } else {
            ischeckPassword = false
        }
        return ischeckPassword
    }

    // CLICK BUTTON:input nào còn trống sẽ showError()
    function checkEmptyError(inputs) {
        let isEmptyError= true

        inputs.forEach(input => {
            
            input.value= input.value.trim()
            if(!input.value) {
                isEmptyError= false
                showError(input, 'khong duoc de trong')
            } else {
                if(showSuccess(input)) {

                    let isCheckLengthUser= checkLengthUser(name, 6, 20)
                    let isCheckPassword= checkPassword(password)

                    if(isCheckPassword || isCheckLengthUser) {
                        console.log('khong lam gi ca')
                    } else {
                        
                        mainPage()
                    }
                }
            }
        })
        return isEmptyError
    }

    // click button
    form.addEventListener('click', (e) => {
        e.preventDefault()
        console.log('render')
        checkEmptyError([name, password])
    })
})()