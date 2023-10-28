package rva.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import rva.model.Grupa;
import rva.model.Projekat;
import rva.model.Student;

public interface StudentRepository extends JpaRepository<Student,Integer>{
	Collection<Student> findByGrupa(Grupa grupa);
	
	Collection<Student> findByProjekat(Projekat projekat);
	
	Collection<Student> findByPrezimeContainingIgnoreCase(String prezime);
}
