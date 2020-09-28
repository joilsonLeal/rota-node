class HttpService {
    get(url) {
        return  new Promise((resolve, reject) =>
        fetch(url)
            .then(response => resolve(response.json()))
            .catch(erro => {
                reject(erro);
        }));
    }
}