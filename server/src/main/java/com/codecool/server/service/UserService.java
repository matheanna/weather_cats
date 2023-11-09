package com.codecool.server.service;

import com.codecool.server.config.AppException;
import com.codecool.server.model.DTO.LoginDTO;
import com.codecool.server.model.DTO.RegisterDTO;
import com.codecool.server.model.DTO.UserDTO;
import com.codecool.server.model.entity.Avatar;
import com.codecool.server.model.entity.User;
import com.codecool.server.repository.AvatarRepository;
import com.codecool.server.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.CharBuffer;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final AvatarRepository avatarRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, AvatarRepository avatarRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.avatarRepository = avatarRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public UserDTO register(RegisterDTO registerDTO) {
        //TODO: check if username is taken
        Avatar avatar = Avatar.builder()
                .bg(registerDTO.getBg())
                .cat(registerDTO.getCat())
                .glass(registerDTO.getGlass())
                .hat(registerDTO.getHat())
                .build();
        Avatar savedAvatar = avatarRepository.save(avatar);
        User user = User.builder()
                .username(registerDTO.getUsername())
                .email(registerDTO.getEmail())
                .avatar(savedAvatar)
                .build();
        user.setPassword(passwordEncoder.encode(CharBuffer.wrap(registerDTO.getPassword())));
        User savedUser = userRepository.save(user);

        UserDTO userDTO = new UserDTO();
        userDTO.setUsername(user.getUsername());
        userDTO.setEmail(user.getEmail());
        userDTO.setCat(user.getAvatar().getCat());
        userDTO.setHat(user.getAvatar().getHat());
        userDTO.setGlass(user.getAvatar().getGlass());
        userDTO.setBg(user.getAvatar().getBg());
        userDTO.setId(user.getId());
        return userDTO;
    }

    public UserDTO login(LoginDTO loginDTO) throws AppException {
        User user = userRepository.findByUsername(loginDTO.getUsername())
                .orElseThrow(() -> new AppException("User not found", HttpStatus.NOT_FOUND));

        if (passwordEncoder.matches(CharBuffer.wrap(loginDTO.getPassword()), user.getPassword())) {
            UserDTO userDTO = new UserDTO();
            userDTO.setUsername(user.getUsername());
            userDTO.setEmail(user.getEmail());
            userDTO.setCat(user.getAvatar().getCat());
            userDTO.setHat(user.getAvatar().getHat());
            userDTO.setGlass(user.getAvatar().getGlass());
            userDTO.setBg(user.getAvatar().getBg());
            userDTO.setId(user.getId());
            return userDTO;
        }
        throw new AppException("Invalid password", HttpStatus.BAD_REQUEST);
    }

    public User findByUsername(String username) {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new AppException("User not found", HttpStatus.NOT_FOUND));
    }

}











