package com.codecool.server.controller;

import com.codecool.server.model.DTO.LoginDTO;
import com.codecool.server.model.DTO.UserDTO;
import com.codecool.server.model.entity.User;
import com.codecool.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public User register(@RequestBody UserDTO userDTO){
        User user = userService.register(userDTO);
        return user;
    }

    @PostMapping("/login")
    public User login(@RequestBody LoginDTO loginDTO) throws Exception {
        User user = userService.login(loginDTO);
        return user;
    }

}














