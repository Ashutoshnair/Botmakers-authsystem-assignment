package com.botmakers.authsystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.botmakers.authsystem.dto.LoginRequest;
import com.botmakers.authsystem.dto.RegisterRequest;
import com.botmakers.authsystem.service.UserService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(userService.registerUser(request));
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest request) {
        return ResponseEntity.ok(userService.loginUser(request));
    }

    @GetMapping("/public")
    public ResponseEntity<String> publicEndpoint() {
        return ResponseEntity.ok("Public Content");
    }

    @GetMapping("/user")
    public ResponseEntity<String> userEndpoint() {
        return ResponseEntity.ok("User Content");
    }

    @GetMapping("/admin")
    public ResponseEntity<String> adminEndpoint() {
        return ResponseEntity.ok("Admin Content");
    }
}