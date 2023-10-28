package rva.ctrl;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import rva.model.Projekat;
import rva.repository.ProjekatRepository;
@CrossOrigin
@RestController
@Api(tags = {"Projekat CRUD operacije"})
public class ProjekatController {
	
	@Autowired
	private ProjekatRepository repository;
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@GetMapping("/projekat")
	@ApiOperation(value = "Vraća kolekciju svih projekata iz baze podataka")
	public Collection<Projekat> returnAll(){
		return repository.findAll();
	}
	
	@GetMapping("/projekat/{id}")
	@ApiOperation(value = "Vraća projekat iz baze podataka čiji je id vrijednost proslijeđena kao path varijabla")
	public Projekat getProjekatById(@PathVariable int id) {
		return repository.getById(id);
	}
	
	@GetMapping("/projekat/naziv/{naziv}")
	@ApiOperation(value = "Vraća kolekciju svih projekata iz baze podataka koji u nazivu sadrže string proslijeđen kao path varijabla")
	public Collection<Projekat> getProjekatByNaziv(@PathVariable String naziv){
		return repository.findByNazivContainingIgnoreCase(naziv);
	}
	
	@PostMapping("/projekat")
	@ApiOperation(value = "Upisuje projekat u bazu podataka")
	public ResponseEntity<Projekat> createProjekat(@RequestBody Projekat projekat)
	{
		if(repository.existsById(projekat.getId())) {
			return new ResponseEntity<Projekat>(HttpStatus.CONFLICT);
		}else {
			Projekat temp=repository.save(projekat);
			return new ResponseEntity<Projekat>(temp,HttpStatus.CREATED);
		}
	}
	@PutMapping("/projekat")
	@ApiOperation(value = "Modifikuje postojeći projekat u bazi podataka")
	public ResponseEntity<Projekat>updateProjekat(@RequestBody Projekat projekat){
		if(repository.existsById(projekat.getId())) {
			repository.save(projekat);
			return new ResponseEntity<Projekat>(HttpStatus.OK);
		}else {
			return new ResponseEntity<Projekat>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/projekat/{id}")
	@ApiOperation(value = "Briše projekat iz baze podataka čiji id je proslijeđen kao path varijabla")
	public ResponseEntity<Projekat>deleteProjekat(@PathVariable int id){
		if(repository.existsById(id)) {
			if(id==-100) {
				repository.deleteById(id);
				jdbcTemplate.execute("insert into projekat(\"id\",\"naziv\",\"oznaka\",\"opis\") values (-100,'test naz','test ozn','test opis')");
				return new ResponseEntity<Projekat>(HttpStatus.OK);	
			}else {
				repository.deleteById(id);
				return new ResponseEntity<Projekat>(HttpStatus.OK);
			}
		}else {
			return new ResponseEntity<Projekat>(HttpStatus.NOT_FOUND);
		}
	}
	
	
	

}
