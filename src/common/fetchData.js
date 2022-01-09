export const fetchData = async () => {
        const response = await fetch('https://fakestoreapi.com/products');

        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return await response.json();
    }
;