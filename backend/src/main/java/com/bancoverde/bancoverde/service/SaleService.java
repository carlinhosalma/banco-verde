package com.bancoverde.bancoverde.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bancoverde.bancoverde.dto.SaleDTO;
import com.bancoverde.bancoverde.entities.Sale;
import com.bancoverde.bancoverde.repositories.SaleRepository;
import com.bancoverde.bancoverde.repositories.SellerRepository;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository repository;
	
	@Autowired
	private SellerRepository sellerRepository;
	
	@Transactional(readOnly=true) 
	public Page<SaleDTO> findAll(Pageable pageable){
		 sellerRepository.findAll();
		 Page<Sale> result = repository.findAll(pageable);
		 return result.map(x -> new SaleDTO(x) );
	}

}
