type Book = {
    title: string;
    year: number;
    author: string;
    preview: string;
    url: string;
}

// Функция для создания объекта книги
const createBook = (title: string, year: number, author: string): Book => {
    const preview = `Название: ${title}, Автор: ${author}, Год: ${year}`;
    const url = `www.someurl.com/preview?title=${encodeURIComponent(title)}&year=${year}&author=${encodeURIComponent(author)}`;
  
    return {
      title,
      year,
      author,
      preview,
      url,
    };
  };
  
  const source = {
    title: "Harry Potter",
    year: 1997,
    author: "J.K. Rowling",
  };
  
  const target = createBook(source.title, source.year, source.author);
  
  console.log(target);