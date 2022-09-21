const URL = "https://api.agify.io/?name="
export const API = {
    searchText: (text: string) => {
        return fetch(URL + text, {
            method: 'GET',
        })
            .then((response) => response.json())
    }
}