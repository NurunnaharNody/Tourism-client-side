import {initializeApp} from "firebase/app";
import firebaseConfig from "./firebase.config";

const initailizeAuthenticaton = () => {
    initializeApp(firebaseConfig);
}

export default initailizeAuthenticaton;