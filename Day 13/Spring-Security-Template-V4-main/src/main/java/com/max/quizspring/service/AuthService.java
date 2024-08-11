package com.max.quizspring.service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.max.quizspring.auth.LoginRequest;
import com.max.quizspring.auth.RegisterRequest;
import com.max.quizspring.config.JwtToken;
import com.max.quizspring.model.Token;
import com.max.quizspring.model.User;
import com.max.quizspring.repo.JwtRepo;
import com.max.quizspring.repo.UserRepo;
import com.max.quizspring.service.AuthService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")

public class AuthService {

    private final UserRepo userRepository;
    private final JwtRepo tokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtToken jwtUtil;

    public String register(RegisterRequest registerRequest) {
        Optional<User> userExist = userRepository.findByEmail(registerRequest.getEmail());
        if (userExist.isPresent()) {
            return "User already exists with email id " + registerRequest.getEmail();
        }
        var user = User.builder()
              
                .email(registerRequest.getEmail())
                .password(passwordEncoder.encode(registerRequest.getPassword()))
                
                .role(User.Role.STUDENT)
                .build();
        userRepository.save(user);
        return "User registered successfully.";
    }

    public String login(LoginRequest loginRequest) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
        var user = userRepository.findByEmail(loginRequest.getEmail()).orElseThrow();
        Map<String, Object> extraClaims = new HashMap<>();
        extraClaims.put("role", user.getRole().toString());
        var accessToken = jwtUtil.generateToken(extraClaims, user);
        revokeAllUserTokens(user);
        saveUserToken(user, accessToken);
        return accessToken;
    }

    private void saveUserToken(User user, String accessToken) {
        var token = Token.builder().user(user).token(accessToken).expired(false).revoked(false).build();
        tokenRepository.save(token);
    }

    private void revokeAllUserTokens(User user) {
        var validUserTokens = tokenRepository.findAllByUser_UidAndExpiredFalseAndRevokedFalse(user.getUid());
        if (validUserTokens.isEmpty())
            return;
        validUserTokens.forEach(token -> {
            token.setExpired(true);
            token.setRevoked(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }

    public String createAdmin() {
        Optional<User> userExist = userRepository.findByEmail("admin@gmail.com");
        if (userExist.isPresent()) {
            return "Admin already exists";
        }

        var user = User.builder()
               
                .email("admin@gmail.com")
                .password(passwordEncoder.encode("Admin@123"))
              
                .role(User.Role.ADMIN)
                .build();
        userRepository.save(user);
        return "Admin registered successfully.";
    }
}
