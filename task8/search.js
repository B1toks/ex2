export function search(list, searchField, searchValue) {
    return new Promise((resolve, reject) => {
        const delay = 1000;
        setTimeout(() => {
            const results = list.filter(person => person[searchField] === searchValue);
            if (results.length > 0) {
                resolve(results);
            } else {
                reject(`No results found for ${searchField}: ${searchValue}`);
            }
        }, delay);
    });
}
