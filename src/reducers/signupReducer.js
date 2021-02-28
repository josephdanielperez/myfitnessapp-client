export default (state = { name: '', username: '', password: ''}, action) => {
    switch (action.type) {
        case 'UPDATE_SIGNUP_FORM':
            return action.formData

        case 'RESET_SIGNUP_FORM':
            return state = { name: '', username: '', password: ''}
            
        default:
            return state
    }
}