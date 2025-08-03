package com.example.bookapi.Repository;

import com.example.bookapi.Entities.Book;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
@EnableMongoRepositories

public interface BookRepository extends MongoRepository<Book,String> {
       Book findBookById(String bookId);
}
