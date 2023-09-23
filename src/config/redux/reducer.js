const initialStare = {
	// popup: 'false',
	popup: false,
	isLogin: false,
	user: {},
	isLoading:false
}
export const reducer = (state = initialStare, action) => {
	if (action.type === "CHANGE_POPUP") { // harus ada type
		return {
			...state,
			popup: action.value
		}
	}
	if (action.type === "CHANGE_ISLOGIN") {
		return {
			...state,
			isLogin: action.value
		}
	}
	if (action.type === "CHANGE_USER") {
		return {
			...state,
			user: action.value
		}
	}
	if (action.type === "CHANGE_LOADING") {
		return {
			...state,
			isLoading: action.value
		}
	}
	return state
}//reducer kumpulan instruksi yang di gunakan untuk mengubah store
