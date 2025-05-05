
interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  coverImage: string;
  available: boolean;
  description: string;
  publishedYear: number;
  isbn: string;
}

export const booksData: Book[] = [
  {
    id: "BK001",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Fiction",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    available: true,
    description: "A novel about racial injustice and moral growth in the American South.",
    publishedYear: 1960,
    isbn: "978-0061120084"
  },
  {
    id: "BK002",
    title: "1984",
    author: "George Orwell",
    category: "Fiction",
    coverImage: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    available: false,
    description: "A dystopian novel about totalitarianism, surveillance, and thought control.",
    publishedYear: 1949,
    isbn: "978-0451524935"
  },
  {
    id: "BK003",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    category: "Classic",
    coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    available: true,
    description: "A romantic novel of manners set in early 19th-century England.",
    publishedYear: 1813,
    isbn: "978-0141439518"
  },
  {
    id: "BK004",
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "Fiction",
    coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    available: true,
    description: "A philosophical novel about following your dreams and discovering your destiny.",
    publishedYear: 1988,
    isbn: "978-0062315007"
  },
  {
    id: "BK005",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Classic",
    coverImage: "https://images.unsplash.com/photo-1585813868888-2d477a8f8f9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    available: false,
    description: "A tragic tale of wealth, love, and the American Dream in the Roaring Twenties.",
    publishedYear: 1925,
    isbn: "978-0743273565"
  },
  {
    id: "BK006",
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    category: "Fantasy",
    coverImage: "https://images.unsplash.com/photo-1618666012174-83b441c0bc76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    available: true,
    description: "The first book in the Harry Potter series about a young wizard's adventures.",
    publishedYear: 1997,
    isbn: "978-1408855652"
  },
  {
    id: "BK007",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    coverImage: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    available: true,
    description: "A fantasy adventure about a hobbit's journey to reclaim treasure from a dragon.",
    publishedYear: 1937,
    isbn: "978-0547928227"
  },
  {
    id: "BK008",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    category: "Fiction",
    coverImage: "https://images.unsplash.com/photo-1603162361777-1af0395645fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    available: false,
    description: "A novel about teenage alienation and a critique of adult superficiality.",
    publishedYear: 1951,
    isbn: "978-0316769488"
  },
  {
    id: "BK009",
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    coverImage: "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    available: true,
    description: "An epic high-fantasy trilogy about the quest to destroy the One Ring.",
    publishedYear: 1954,
    isbn: "978-0618640157"
  },
  {
    id: "BK010",
    title: "The Da Vinci Code",
    author: "Dan Brown",
    category: "Mystery",
    coverImage: "https://images.unsplash.com/photo-1592496001020-d31bd830651f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    available: true,
    description: "A mystery thriller involving symbology, secret societies, and religious history.",
    publishedYear: 2003,
    isbn: "978-0307474278"
  },
  {
    id: "BK011",
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    category: "Science",
    coverImage: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    available: true,
    description: "A popular science book on cosmology and the universe's origins.",
    publishedYear: 1988,
    isbn: "978-0553380163"
  },
  {
    id: "BK012",
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    category: "History",
    coverImage: "https://images.unsplash.com/photo-1576872381149-7847515ce5d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    available: true,
    description: "A book about the history and evolution of Homo sapiens.",
    publishedYear: 2011,
    isbn: "978-0062316097"
  },
  {
    id: "BK013",
    title: "The Origin of Species",
    author: "Charles Darwin",
    category: "Science",
    coverImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    available: false,
    description: "The foundational work on evolutionary biology.",
    publishedYear: 1859,
    isbn: "978-0451529060"
  },
  {
    id: "BK014",
    title: "The Selfish Gene",
    author: "Richard Dawkins",
    category: "Science",
    coverImage: "https://images.unsplash.com/photo-1633477189729-9290b3261d0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    available: true,
    description: "A book on evolution that popularized the gene-centered view.",
    publishedYear: 1976,
    isbn: "978-0198788607"
  },
  {
    id: "BK015",
    title: "Cosmos",
    author: "Carl Sagan",
    category: "Science",
    coverImage: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    available: true,
    description: "A popular science book about the universe and human knowledge.",
    publishedYear: 1980,
    isbn: "978-0345539434"
  },
  {
    id: "BK016",
    title: "Wings of Fire",
    author: "A.P.J. Abdul Kalam",
    category: "Autobiography",
    coverImage: "https://images.unsplash.com/photo-1594312915251-48db9280c8f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    available: true,
    description: "Autobiography of former Indian President and scientist A.P.J. Abdul Kalam.",
    publishedYear: 1999,
    isbn: "978-8173711466"
  },
  {
    id: "BK017",
    title: "The Discovery of India",
    author: "Jawaharlal Nehru",
    category: "History",
    coverImage: "https://images.unsplash.com/photo-1606074280798-2dabb75ce10c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    available: true,
    description: "A book written by India's first Prime Minister during his imprisonment.",
    publishedYear: 1946,
    isbn: "978-0143031031"
  },
  {
    id: "BK018",
    title: "Gitanjali",
    author: "Rabindranath Tagore",
    category: "Poetry",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    available: false,
    description: "A collection of poems by Nobel laureate Rabindranath Tagore.",
    publishedYear: 1910,
    isbn: "978-1420951882"
  },
  {
    id: "BK019",
    title: "Midnight's Children",
    author: "Salman Rushdie",
    category: "Fiction",
    coverImage: "https://images.unsplash.com/photo-1531072901881-d644216d4bf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    available: true,
    description: "A novel about India's transition from British colonialism to independence.",
    publishedYear: 1981,
    isbn: "978-0812976533"
  },
  {
    id: "BK020",
    title: "The God of Small Things",
    author: "Arundhati Roy",
    category: "Fiction",
    coverImage: "https://images.unsplash.com/photo-1513001900722-370f803f498d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    available: true,
    description: "A novel about how small things affect people's lives and behavior.",
    publishedYear: 1997,
    isbn: "978-0812979657"
  }
];
