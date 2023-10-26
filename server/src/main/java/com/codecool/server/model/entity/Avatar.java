package com.codecool.server.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@Entity(name = "avatars")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Avatar {
    @JsonIgnore
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String bg;
    private String cat;
    private String hat;
    private String glass;

    @OneToOne(mappedBy = "avatar")
    private User user;
}
