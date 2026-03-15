package com.botmakers.authsystem.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.botmakers.authsystem.dto.LoginRequest;
import com.botmakers.authsystem.dto.RegisterRequest;
import com.botmakers.authsystem.entity.User;
import com.botmakers.authsystem.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public String registerUser(RegisterRequest request) {

        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(request.getRole());

        userRepository.save(user);

        return "User registered successfully";
    }

   public String loginUser(LoginRequest request) {

    User user = userRepository.findByEmail(request.getEmail())
            .orElseThrow(() -> new RuntimeException("User not found"));

    if (passwordEncoder.matches(request.getPassword(), user.getPassword())) {
        return user.getRole();
    }

    throw new RuntimeException("Invalid password");

    }
}