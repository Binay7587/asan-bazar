export function getLoggedInStatus() {
    let token = localStorage.getItem(import.meta.env.VITE_ACCESSTOKEN_KEY);
    if (token) {
        return true;
    } else {
        return false;
    }
}

export function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function capitalizeFirstLowercaseRest(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}