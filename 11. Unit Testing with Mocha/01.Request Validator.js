function validateRequest(obj) {
    const  VALIDATE_METHODS = ['GET', 'POST', 'DELETE', 'CONNECT']
    const  VALIDATE_VERSIONS = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']
    const  URI_REGEX = /^([A-Za-z0-9.]+)$/g
    const MASSAGE_REGEX = /^([^<>\\&'"]+)$/g
    let mapPropertyToUpperFirstLetter = {
        method: 'Method',
        uri: 'URI',
        version: 'Version',
        message: 'Massage'
    }

    let validate = {
        method: () => {
            if (!obj.hasOwnProperty('method')) {
                return false
            }
            if (!VALIDATE_METHODS.includes(obj['method'])) {
                return false
            }
            return true
        },
        uri: () =>{
            if (!obj.hasOwnProperty('uri')) {
                return false
            }
            if (!URI_REGEX.test(obj['uri']) ) {
                return false
            }
            return true
        },
        version: () =>{
            if (!obj.hasOwnProperty('version')) {
                return false
            }
            if (!VALIDATE_VERSIONS.includes(obj['version'])) {
                return false
            }
            return true
        },
        message: () => {
            if (!obj.hasOwnProperty('message')) {
                return false
            }
            if (MASSAGE_REGEX.test(obj['message'])) {
                return false
            }
            return true
        }
    }

    for (let property in validate) {
        if (!validate[property]()) {
            throw new Error(`Invalid request header: Invalid ${mapPropertyToUpperFirstLetter[property]}`)
        }
    }

    return obj
}

validateRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
});
