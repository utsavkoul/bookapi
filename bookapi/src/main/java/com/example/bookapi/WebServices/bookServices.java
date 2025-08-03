package com.example.bookapi.WebServices;

import com.example.bookapi.Entities.Book;
import com.example.bookapi.Repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;
@Service
public class bookServices {
    @Autowired
    BookRepository bookRepository;
    public Book addBook(Book book){
        bookRepository.save(book);
        return book;
    }
    public List<Book> getAllBooks(){
        List<Book> books=bookRepository.findAll();
        return books;

    }
    public Optional<Book> getById(String bookId){
        Optional<Book> book = bookRepository.findById((bookId));

        return book;
    }



    public List<Book> deleteBook(String bookId){
//         Book book = bookRepository.findBookById(bookId);
//         List<Book> book = new ArrayList<>();
//         book=bookRepository.findAll();
        List<Book> books=this.bookRepository.findAll();
      List<Book> upbooks=   books.stream().filter(book -> {
            boolean b = !Objects.equals(book.getId(), bookId);
            return b;
        }).collect(Collectors.toList());
      bookRepository.deleteById(bookId);
//         this.bookRepository.saveAll(upbooks);
        return upbooks;
        }

    public Book updateBook(Book updbook, String bookId){
        Book book= bookRepository.findBookById(bookId);
        book.setBookName(updbook.getBookName());
        book.setAuthor(updbook.getAuthor());
        bookRepository.save(book);
        return book;

    }
}
