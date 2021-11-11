package com.bancoverde.bancoverde.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bancoverde.bancoverde.dto.SaleSuccessDTO;
import com.bancoverde.bancoverde.dto.SaleSumDTO;
import com.bancoverde.bancoverde.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {
	
	@Query("SELECT new com.bancoverde.bancoverde.dto.SaleSumDTO(obj.seller, SUM(obj.amount) )"
			+ " FROM Sale AS obj GROUP BY obj.seller ")
	List<SaleSumDTO> amountGroupedBySeller();
	
	@Query("SELECT new com.bancoverde.bancoverde.dto.SaleSuccessDTO(obj.seller, SUM(obj.visited), SUM(obj.deals) )"
			+ " FROM Sale AS obj GROUP BY obj.seller ")
	List<SaleSuccessDTO> successGroupedBySeller();

}
