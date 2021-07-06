export function storage(key, data) {
    if (!data) {
        return JSON.parse(localStorage.getItem(key))
    }
    localStorage.setItem(key, JSON.stringify(data))
}

export function getDataFromStorage(storagekey, dataKey) {
    if (localStorage.getItem(storagekey)) {
        return JSON.parse(localStorage.getItem(storagekey))[dataKey]
    }
    return false
}

export function showAlert(message, delay, state, setState) {
    setState({
        ...state,
        showAlert: true,
        alertMessage: message
    })
    setTimeout(() => {
        setState({
            ...state,
            showAlert: false
        })
    }, delay)
}

export function emailNoValid(email) {
    return !/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email)
}

export function validFormData({ email, password, displayName }) {
    if (emailNoValid(email)) {
        return {
            message: 'The email address must be clearly structured: [login].@.[domain]',
            delay: 3000
        }
    } else if (password.length < 6) {
        return {
            message: 'Password should be at least 6 characters.',
            delay: 3000
        }
    } else if (displayName.length < 4) {
        return {
            message: 'User name should be at least 4 characters.',
            delay: 3000
        }
    }
}