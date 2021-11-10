package com.bancoverde.bancoverde.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bancoverde.bancoverde.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {

}
