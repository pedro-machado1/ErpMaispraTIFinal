package com.erp.maisPraTi.dto.partyDto;

import com.erp.maisPraTi.enums.PartyStatus;
import com.erp.maisPraTi.enums.TypePfOrPj;
import com.erp.maisPraTi.service.validations.DocumentsValid;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@DocumentsValid
public abstract class PartyDto {

    @NotBlank(message = "O campo nome é obrigatório.")
    private String fullName;

    @Enumerated(EnumType.STRING)
    private TypePfOrPj typePfOrPj;

    private String cpfCnpj;

    private String rgIe;

    private String phoneNumber;

    @Email(message = "E-mail inválido.", regexp = "^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$")
    @NotBlank(message = "E-mail é obrigatório.")
    private String email;

    private String address;

    private String number;

    private String district;

    private String zipCode;

    private String city;

    private String state;

    private String country;

    @Enumerated(EnumType.STRING)
    private PartyStatus status;

    private BigDecimal creditLimit;

    private String notes;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private LocalDateTime createdAt;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private LocalDateTime updatedAt;

}
