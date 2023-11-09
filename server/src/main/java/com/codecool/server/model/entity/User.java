package com.codecool.server.model.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity(name = "users")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;
    private String username;
    private String password;

    @OneToOne
    @JoinColumn(name = "avatar_id", referencedColumnName = "id")
    private Avatar avatar;
}
