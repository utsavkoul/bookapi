package com.example.bookapi.Controller;

import com.example.bookapi.Entities.Book;
import com.example.bookapi.Repository.BookRepository;
import com.example.bookapi.WebServices.bookServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Controller
@RestController
public class BookController {

    @Autowired
    bookServices bookservice;
    @Autowired
    BookRepository bookRepository;
    @GetMapping("/api/v1/books")
    public List<Book> getAllBooks(){
        List<Book> book= bookservice.getAllBooks();
        return book;
    }
    @GetMapping("/{bookId}")
    public Optional<Book> getByBookId(@PathVariable String bookId){

        Optional<Book> book =(bookservice.getById(bookId));
        return book;
    }
    @PostMapping("/addbook")
    public String addBook(@RequestBody Book book){
        bookservice.addBook(book);
       return ("added");
    }
    @DeleteMapping("/deletebook/{bookId}")
    public ResponseEntity<List<Book>> deleteBook(@PathVariable("bookId") String bookId){
        List<Book> delbookststatus= bookservice.deleteBook(bookId);
//        delbookststatus.stream().forEach(delbook->{
//            this.bookservice.addBook(delbook);
//
//        });
        return ResponseEntity.ok(delbookststatus);

    }
    @PutMapping("/updatebook/{bookId}")
    public Book UpdateBook(@RequestBody Book book, @PathVariable String bookId){
       Book updatedbook =  bookservice.updateBook(book, bookId);
        return updatedbook;
    }




}
