import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {apps} from "../firebase/Firebase";


//sign in
export const registerUserApi = (data) => dispatch => {
	const auth = getAuth(apps);
	dispatch({type: "CHANGE_LOADING", value: true})
	return (
		createUserWithEmailAndPassword(auth, data.email, data.password)
			.then((userCredential) => {
				// Signed in
				// const user = userCredential.user;
				console.log('success :', userCredential)
				dispatch({type: "CHANGE_LOADING", value: false})
			})
			.catch((error) => {
				console.log(error)
				// const errorCode = error.code;
				// const errorMessage = error.message;
				dispatch({type: "CHANGE_LOADING", value: false})
			})
	)
}

// login
export const loginUserApi = data => dispatch => {
	return new Promise((resolve, reject) => {
			const auth = getAuth(apps)
			dispatch({type: "CHANGE_LOADING", value: true})
			signInWithEmailAndPassword(auth, data.email, data.password)
				.then((userCredential) => {
					console.log('success :', userCredential)
					const dataUser = {
						email: userCredential.user.email,
						uid: userCredential.user.uid,
						emailVerified: userCredential.user.emailVerified
					}
					dispatch({type: "CHANGE_LOADING", value: false})
					dispatch({type: "CHANGE_ISLOGIN", value: true})
					dispatch({type: "CHANGE_USER", value: dataUser})
					resolve(true)
				})
				.catch((error) => {
						console.log(error)
						// const errorCode = error.code;
						// const errorMessage = error.message;
						dispatch({type: "CHANGE_LOADING", value: false})
						dispatch({type: "CHANGE_ISLOGIN", value: false})
						reject(false)
					}
				)
		}
	)
}
