export interface Book {
    name: string,
    author: string,
    description: string,
    price: number,
    image: string,
};

// If you have multiple filters, a book matching any of them is a match.
async function listBooks(filters?: Array<{from?: number, to?: number}>) : Promise<Book[]>{
    
    try {

        const response = await fetch('http://localhost:9000/books');
        let books: Book[] = await response.json() as Book[];

        
        if (filters) {
            filters.forEach(filterObj => {

                if (filterObj.from !== undefined && filterObj.to == undefined) {

                    const filtered_books = books.filter((book) => book.price > filterObj.from!);
                    books = filtered_books;
                }

                if (filterObj.from == undefined && filterObj.to !== undefined) {

                    const filtered_books = books.filter((book) => book.price < filterObj.to!);
                    books = filtered_books;
                }

                if (filterObj.from !== undefined && filterObj.to !== undefined) {

                    const filtered_books = books.filter((book) => book.price > filterObj.from! && book.price < filterObj.to!);
                    books = filtered_books;
                }
            });
        } 

        return books;
    
    } catch {
        throw new Error("Error finding book list")
    }
    
}

const assignment = "assignment-1";

export default {
    assignment,
    listBooks
};

