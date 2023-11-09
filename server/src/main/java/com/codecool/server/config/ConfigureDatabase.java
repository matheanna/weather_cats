package com.codecool.server.config;

import com.codecool.server.controller.UserController;
import com.codecool.server.model.DTO.RegisterDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.List;


@Component
public class ConfigureDatabase {

    private final UserController userController;
    @Autowired
    public ConfigureDatabase(UserController userController){
        this.userController = userController;
    }

    public void registerUsers() {
        String password = "cica";
        char[] charPassword = password.toCharArray();
        RegisterDTO anna = RegisterDTO.builder()
                .username("anna")
                .password(charPassword)
                .email("anna@mail.com")
                .cat("cat3")
                .hat("hat8")
                .glass("glass5")
                .bg("bg3")
                .build();

        List<RegisterDTO> people = List.of(anna);

        people.forEach(person -> {
            userController.register(person);
        });
    }
}