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
import rva.model.Smer;
import rva.repository.SmerRepository;
@CrossOrigin
@RestController
@Api(tags = {"Smer CRUD operacije"})
public class SmerController {
	
	
	@Autowired
	private SmerRepository repository;
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@GetMapping("/smer")
	@ApiOperation(value = "Vraća kolekciju svih smjerova iz baze podataka")
	public Collection<Smer> returnAll(){
		return repository.findAll();
	}
	
	
	@GetMapping("/smer/{id}")
	@ApiOperation(value = "Vraća smjer iz baze podataka čiji je id vrijednost proslijeđena kao path varijabla")
	public Smer getSmerById(@PathVariable int id) {
		return repository.getById(id);
	}
	
	@GetMapping("/smer/naziv/{naziv}")
	@ApiOperation(value = "Vraća kolekciju svih smjerova iz baze podataka koji u nazivu sadrže string proslijeđen kao path varijabla")
	public Collection <Smer> getSmerByNaziv(@PathVariable String naziv){
		return repository.findByNazivContainingIgnoreCase(naziv);
	}
	
	@PostMapping("/smer")
	@ApiOperation(value = "Upisuje smjer u bazu podataka")
	public ResponseEntity<Smer> createSmer(@RequestBody Smer smer){
		if(repository.existsById(smer.getId())) {
			return new ResponseEntity<Smer>(HttpStatus.CONFLICT);
		}else {
			Smer temp=repository.save(smer);
			return new ResponseEntity<Smer>(temp,HttpStatus.CREATED);
		}
	}
	
	@PutMapping("/smer")
	@ApiOperation(value = "Modifikuje postojeći smjer u bazi podataka")
	public ResponseEntity<Smer> updateSmer(@RequestBody Smer smer){
		if(repository.existsById(smer.getId())){
			repository.save(smer);
			return new ResponseEntity<Smer>(HttpStatus.OK);
		}else {
			return new ResponseEntity<Smer>(HttpStatus.NOT_FOUND);
		}
	}
	@DeleteMapping("/smer/{id}")
	@ApiOperation(value = "Briše smjer iz baze podataka čiji id je proslijeđen kao path varijabla")
	public ResponseEntity<Smer> deleteSmer(@PathVariable int id){
		if(repository.existsById(id)) {
			if(id==-100) {
				repository.deleteById(id);
				jdbcTemplate.execute("Insert into Smer(\"id\",\"naziv\",\"oznaka\") values (-100,'test naziv','test oznaka')");
				return new ResponseEntity<Smer>(HttpStatus.OK);
			}else {
				repository.deleteById(id);
				return new ResponseEntity<Smer>(HttpStatus.OK);
			}
		}else {
			return new ResponseEntity<Smer>(HttpStatus.NOT_FOUND);
		}
	}

}
