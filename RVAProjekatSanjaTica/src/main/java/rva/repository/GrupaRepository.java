package rva.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import rva.model.Grupa;
import rva.model.Smer;


public interface GrupaRepository extends JpaRepository<Grupa,Integer>{
	Collection<Grupa> findBySmer(Smer smer);
	
	Collection<Grupa> findByOznakaContainingIgnoreCase(String oznaka);
}
