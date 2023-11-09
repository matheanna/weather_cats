package com.codecool.server.controller;

import com.codecool.server.config.UserAuthProvider;
import com.codecool.server.model.DTO.LoginDTO;
import com.codecool.server.model.DTO.RegisterDTO;
import com.codecool.server.model.DTO.UserDTO;
import com.codecool.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

@RestController
@RequestMapping("/api/user")
public class UserController {
    private final UserService userService;
    private final UserAuthProvider userAuthProvider;

    @Autowired
    public UserController(UserService userService, UserAuthProvider userAuthProvider) {
        this.userService = userService;
        this.userAuthProvider = userAuthProvider;
    }

    @PostMapping("/register")
    public ResponseEntity<UserDTO> register(@RequestBody RegisterDTO registerDTO){
        UserDTO user = userService.register(registerDTO);
        user.setToken(userAuthProvider.createToken(user.getUsername()));
        return ResponseEntity.created(URI.create("/users/" + user.getId())).body(user);
    }

    @PostMapping("/login")
    public ResponseEntity<UserDTO> login(@RequestBody LoginDTO loginDTO) throws Exception {
        UserDTO user = userService.login(loginDTO);
        user.setToken(userAuthProvider.createToken(user.getUsername()));
        return ResponseEntity.ok(user);
    }

}















