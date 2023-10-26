package com.codecool.server.service;

import com.codecool.server.model.DTO.LoginDTO;
import com.codecool.server.model.DTO.UserDTO;
import com.codecool.server.model.entity.Avatar;
import com.codecool.server.model.entity.User;
import com.codecool.server.repository.AvatarRepository;
import com.codecool.server.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final AvatarRepository avatarRepository;
    public UserService(UserRepository userRepository, AvatarRepository avatarRepository) {
        this.userRepository = userRepository;
        this.avatarRepository = avatarRepository;
    }

    public User register(UserDTO userDTO) {
        Avatar avatar = Avatar.builder()
                .bg(userDTO.getBg())
                .cat(userDTO.getCat())
                .glass(userDTO.getGlass())
                .hat(userDTO.getHat())
                .build();
        Avatar savedAvatar = avatarRepository.save(avatar);
        User user = User.builder()
                .username(userDTO.getUsername())
                .email(userDTO.getEmail())
                .password(userDTO.getPassword())
                .avatar(savedAvatar)
                .build();
        User savedUser = userRepository.save(user);


        return savedUser;
    }


    public User login(LoginDTO loginDTO) throws Exception {

    User user = userRepository.findByUsername(loginDTO.getUsername())
            .orElseThrow();
    if(user.getPassword().equals(loginDTO.getPassword())){
        return user;
    }
       throw new Exception("wrong password");
    }
}











