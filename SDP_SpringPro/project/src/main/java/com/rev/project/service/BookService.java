package com.rev.project.service;

import com.rev.project.model.Book;
import com.rev.project.repo.Bookrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {

    @Autowired
    private Bookrepo bookRepository;

    public Book createUser(Book book) {
        return bookRepository.save(book);
    }

    public Optional<Book> getUserById(Long id) {
        return bookRepository.findById(id);
    }

    public List<Book> getAllUsers() {
        return bookRepository.findAll();
    }
}
