package com.qsp.resolvehub.service;

import com.qsp.resolvehub.dao.UserRepository;
import com.qsp.resolvehub.dto.AuthResponse;
import com.qsp.resolvehub.dto.LoginRequest;
import com.qsp.resolvehub.dto.RegisterRequest;
import com.qsp.resolvehub.dto.RegisterResponse;
import com.qsp.resolvehub.entity.Role;
import com.qsp.resolvehub.entity.User;
import com.qsp.resolvehub.exception.UserNotFoundException;
import com.qsp.resolvehub.security.JwtService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    public AuthService(UserRepository userRepository,
                       PasswordEncoder passwordEncoder,
                       AuthenticationManager authenticationManager,
                       JwtService jwtService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
    }

    public RegisterResponse register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new IllegalArgumentException("Email already registered");
        }

        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPhone(request.getPhone());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRoles(Role.USER);

        User savedUser = userRepository.save(user);
        return new RegisterResponse(savedUser);
    }

    public AuthResponse login(LoginRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
        );

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new UserNotFoundException("User not found with email: " + request.getEmail()));

        String token = jwtService.generateToken(user.getEmail());
        return new AuthResponse(token, user);
    }
}