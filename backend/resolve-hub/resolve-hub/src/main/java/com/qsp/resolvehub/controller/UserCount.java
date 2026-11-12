package com.qsp.resolvehub.controller;

import com.qsp.resolvehub.dao.UserRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/users")
public class UserCount {

    private final UserRepository userRepository;

    public UserCount(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/count")
    public Map<String, Long> getUserCount() {
        return Map.of("totalUsers", userRepository.count());
    }
}