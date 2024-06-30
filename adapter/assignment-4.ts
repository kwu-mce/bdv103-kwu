import previous_assignment from './assignment-3'

export type BookID = string

export interface Book {
  id?: BookID
  name: string
  author: string
  description: string
  price: number
  image: string
  stock?: number
}

export interface Filter {
  from?: number
  to?: number
  name?: string
  author?: string
}

// If multiple filters are provided, any book that matches at least one of them should be returned
// Within a single filter, a book would need to match all the given conditions
async function listBooks (filters?: Filter[]): Promise<Book[]> {
  
  try {
  
    const response = await fetch(`http://localhost:9000/books`);
    const books: Book[] = await response.json() as Book[];

    if (!filters || filters.length === 0) {
      return books;
    }

    return books.filter(book => {
      return filters.some(filter => {
        const filterFromPrice = filter.from ? book.price >= filter.from : true;
        const filterToPrice = filter.to ? book.price <= filter.to : true;
        const filterName = filter.name ? book.name.includes(filter.name) : true;
        const filterAuthor = filter.author ? book.author.includes(filter.author) : true;

        return filterFromPrice && filterToPrice && filterName && filterAuthor;
      })
    })

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

async function lookupBookById (book: BookID): Promise<Book> {
  throw new Error("Todo")
}

export type ShelfId = string
export type OrderId = string

async function placeBooksOnShelf (bookId: BookID, numberOfBooks: number, shelf: ShelfId): Promise<void> {
  throw new Error("Todo")
}

async function orderBooks (order: BookID[]): Promise<{ orderId: OrderId }> {
  throw new Error("Todo")
}

async function findBookOnShelf (book: BookID): Promise<Array<{ shelf: ShelfId, count: number }>> {
  throw new Error("Todo")
}

async function fulfilOrder (order: OrderId, booksFulfilled: Array<{ book: BookID, shelf: ShelfId, numberOfBooks: number }>): Promise<void> {
  throw new Error("Todo")
}

async function listOrders (): Promise<Array<{ orderId: OrderId, books: Record<BookID, number> }>> {
  throw new Error("Todo")
}

const assignment = 'assignment-4'

export default {
  assignment,
  createOrUpdateBook,
  removeBook,
  listBooks,
  placeBooksOnShelf,
  orderBooks,
  findBookOnShelf,
  fulfilOrder,
  listOrders,
  lookupBookById
}
