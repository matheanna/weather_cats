package com.codecool.server.model.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class UserDTO {
    private Long id;
    private String username;
    private String email;
    private String cat;
    private String hat;
    private String glass;
    private String bg;
    private String token;
}

