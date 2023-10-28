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
import rva.model.Grupa;
import rva.model.Smer;
import rva.repository.GrupaRepository;
import rva.repository.SmerRepository;

@CrossOrigin
@RestController
@Api(tags = {"Grupa CRUD operacije"})
public class GrupaController {
	
	@Autowired
	private GrupaRepository repository;
	
	@Autowired 
	private SmerRepository smerRepository;
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@GetMapping("/grupa")
	@ApiOperation(value = "Vraća kolekciju svih grupa iz baze podataka")
	public Collection<Grupa> returnAll(){
		return repository.findAll();
	}
	
	@GetMapping("/grupa/{id}")
	@ApiOperation(value = "Vraća grupu iz baze podataka čiji je id vrijednost proslijeđena kao path varijabla")
	public Grupa getGrupaById(@PathVariable int id) {
		return repository.getById(id);
	}
	
	@GetMapping("/grupa/oznaka/{oznaka}")
	@ApiOperation(value = "Vraća kolekciju svih grupa iz baze podataka koji u nazivu sadrže string proslijeđen kao path varijabla")
	public Collection<Grupa> getGrupaByOznaka(@PathVariable String oznaka){
		return repository.findByOznakaContainingIgnoreCase(oznaka);
	}
	
	@GetMapping("/grupa/smer/{smer}")
	@ApiOperation(value = "Vraća kolekciju svih grupa iz baze podataka čiji je strani ključ smer proslijeđen kao path varijabla")
	public Collection<Grupa> getGrupaBySmer(@PathVariable int smer){
		Smer temp=smerRepository.getById(smer);
		return repository.findBySmer(temp);
	}
	@PostMapping("/grupa")
	@ApiOperation(value = "Upisuje grupu u bazu podataka")
	public ResponseEntity<Grupa> createGrupa(@RequestBody Grupa grupa){
		if(repository.existsById(grupa.getId())) {
			return new ResponseEntity<Grupa>(HttpStatus.CONFLICT);
		} else {
			Grupa temp=repository.save(grupa);
			return new ResponseEntity<Grupa>(temp,HttpStatus.CREATED);
		}
	}
	@PutMapping("/grupa")
	@ApiOperation(value = "Modifikuje postojeću grupu u bazi podataka")
	public ResponseEntity<Grupa> updateGrupa(@RequestBody Grupa grupa){
		if(repository.existsById(grupa.getId())) {
			repository.save(grupa);
			return new ResponseEntity<Grupa>(HttpStatus.OK);
		}else {
			return new ResponseEntity<Grupa>(HttpStatus.NOT_FOUND);
		}
	}
	@DeleteMapping("/grupa/{id}")
	@ApiOperation(value = "Briše grupu iz baze podataka čiji id je proslijeđen kao path varijabla")
	public ResponseEntity<Grupa> deleteGrupa(@PathVariable int id){
		if(repository.existsById(id)) {
			if(id==-100) {
				repository.deleteById(id);
				jdbcTemplate.execute("insert into grupa(\"id\",\"oznaka\",\"smer\") values (-100,'6',2)");
				return new ResponseEntity<Grupa>(HttpStatus.OK);
			} else {
				repository.deleteById(id);
				return new ResponseEntity<Grupa>(HttpStatus.OK);
			}
		}else {
			return new ResponseEntity<Grupa>(HttpStatus.NOT_FOUND);
		}
	}
	

}
