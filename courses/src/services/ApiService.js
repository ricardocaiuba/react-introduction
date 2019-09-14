const api = "http://localhost:3002/api/react-courses/" ;

export const ApiService = {
    get(endPoint) {
        return fetch(`${api}${endPoint}`)
            .then(res => res.json()) ;
    },
    post(endPoint, data) {
        return fetch(`${api}${endPoint}`, {
            method: "POST",
            body: JSON.stringify(data) 
        })
        .then(res => res.json()) ;
    },
    delete(endPoint, id) {
        return fetch(`${api}${endPoint}?id=${id}`, {
            method: "DELETE"
        })
        .then(res => res.json()) ;
    }
}
