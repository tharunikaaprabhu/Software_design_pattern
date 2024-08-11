package com.rev.project.controller;

import com.rev.project.model.Book;
import com.rev.project.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class BookController {

    @Autowired
    private BookService bookService;

    @PostMapping
    public ResponseEntity<Book> createUser(@RequestBody Book book) {
        Book createdBook = bookService.createUser(book);
        return ResponseEntity.ok(createdBook);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Book> getUserById(@PathVariable Long id) {
        Optional<Book> book = bookService.getUserById(id);
        return book.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<List<Book>> getAllUsers() {
        List<Book> books = bookService.getAllUsers();
        return ResponseEntity.ok(books);
    }
}
