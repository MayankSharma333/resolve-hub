package com.qsp.resolvehub.dto;

import com.qsp.resolvehub.entity.Role;
import com.qsp.resolvehub.entity.User;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class RegisterResponse {

    private int id;
    private String name;
    private String email;
    private String phone;
    private Role role;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public RegisterResponse(User user) {
        this.id = user.getId();
        this.name = user.getName();
        this.email = user.getEmail();
        this.phone = user.getPhone();
        this.role = user.getRoles();
        this.createdAt = user.getCreatedAt();
        this.updatedAt = user.getUpdatedAt();
    }
}