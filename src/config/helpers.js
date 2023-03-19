const helpers = {
    getLoggedInStatus: () => {
        let token = localStorage.getItem(process.env.REACT_APP_ACCESSTOKEN_KEY);
        if (token) {
            return true;
        } else {
            return false;
        }
    }
}

export default helpers;