package com.qsp.resolvehub.dto;

import com.qsp.resolvehub.entity.Role;
import com.qsp.resolvehub.entity.User;
import lombok.Data;

@Data
public class AuthResponse {
    private String token;
    private String type="bearer";
    private int id;
    private String name;
    private String email;
    private Role role;

    public AuthResponse(String token, User user) {
        this.token = token;
        this.id = user.getId();
        this.name = user.getName();
        this.email = user.getEmail();
        this.role = user.getRoles();

    }

}
