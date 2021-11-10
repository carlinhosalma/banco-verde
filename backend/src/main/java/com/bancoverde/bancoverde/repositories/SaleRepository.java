package com.bancoverde.bancoverde.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bancoverde.bancoverde.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
