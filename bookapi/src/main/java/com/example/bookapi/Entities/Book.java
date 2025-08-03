package com.example.bookapi.Entities;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

public class Book {
    @Getter
    @Setter
    @Id
    private String id;
    private String bookName;
    private String author;

    public String getAuthor() {
        return this.author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getId() {
        return id;
    }


    public void setId(String id){
        this.id=id;
    }
    public String getBookName(){
        return this.bookName;
    }
    public void setBookName(String bookName){
        this.bookName=bookName;
    }

}
