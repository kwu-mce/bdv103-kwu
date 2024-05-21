import previous_assignment from './assignment-2'

export type BookID = string

export interface Book {
  id?: BookID
  name: string
  author: string
  description: string
  price: number
  image: string
};

export interface Filter {
  from?: number
  to?: number
  name?: string
  author?: string
};

// If multiple filters are provided, any book that matches at least one of them should be returned
// Within a single filter, a book would need to match all the given conditions
async function listBooks (filters?: Filter[]): Promise<Book[]> {
  try {
    
    let queryParams = '';

    if (filters) {
      // for (const filter of filters) {
       
      //     let filter_from = filter.from;
      //     let filter_to = filter.to;
      //     let filter_name = filter.name;
      //     let filter_author = filter.author;

      //     console.log(`filterfrom= ${filter_from}`);
      //     console.log(`filterto= ${filter_to}`);
      //     console.log(`filtername= ${filter_name}`);
      //     console.log(`filterauthor= ${filter_author}`);
      //   }
      
      filters.forEach((filter, index) => {

        for (const key in filter) {
          queryParams += `${key}=${filter[key as keyof Filter]}&`;
        }
        
      });
    }

    if (queryParams.endsWith('&')) {
      queryParams = queryParams.slice(0, -1);
    }

    console.log(`queryParams= ${queryParams}`);

    const response = await fetch(`http://localhost:9000/filteredbooks?${queryParams}`);
    const books: Book[] = await response.json() as Book[];

    return books;

  } catch {
      throw new Error("Error finding book list")
  }
}

async function createOrUpdateBook (book: Book): Promise<BookID> {
  return await previous_assignment.createOrUpdateBook(book)
}

async function removeBook (book: BookID): Promise<void> {
  await previous_assignment.removeBook(book)
}

const assignment = 'assignment-3'

export default {
  assignment,
  createOrUpdateBook,
  removeBook,
  listBooks
}
