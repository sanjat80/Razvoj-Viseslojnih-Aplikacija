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
import rva.model.Projekat;
import rva.model.Student;
import rva.repository.GrupaRepository;
import rva.repository.ProjekatRepository;
import rva.repository.StudentRepository;
@CrossOrigin
@RestController
@Api(tags = {"Student CRUD operacije"})
public class StudentController {
	
	@Autowired
	private StudentRepository repository;
	@Autowired
	private GrupaRepository grupaRepository;
	@Autowired
	private ProjekatRepository projekatRepository;
	@Autowired
	private JdbcTemplate jdbcTemplate; //omogucava direktno izvrsavanje upita nad bazom; rucno se kuca query
	
	@GetMapping("/student")
	@ApiOperation(value = "Vraća kolekciju svih studenata iz baze podataka")
	public Collection<Student> returnAll(){
		return repository.findAll();
	}
	
	@GetMapping("/student/{id}")
	@ApiOperation(value = "Vraća studenta iz baze podataka čiji je id vrijednost proslijeđena kao path varijabla")
	public Student getStudentById(@PathVariable int id) {
		return repository.getById(id);
	}
	
	@GetMapping("/student/prezime/{prezime}")
	@ApiOperation(value = "Vraća kolekciju svih studenata iz baze podataka koji u nazivu sadrže string proslijeđen kao path varijabla")
	public Collection<Student> getStudentByPrezime(@PathVariable String prezime){
		return repository.findByPrezimeContainingIgnoreCase(prezime);
	}
	
	@GetMapping("/student/grupa/{grupa}")
	@ApiOperation(value = "Vraća kolekciju svih studenata iz baze podataka čiji je strani ključ grupa proslijeđen kao path varijabla")
	public Collection<Student> getStudentByGrupa(@PathVariable int grupa)
	{
		Grupa temp=grupaRepository.getById(grupa);
		return repository.findByGrupa(temp);
	}
	
	@GetMapping("/student/projekat/{projekat}")
	@ApiOperation(value = "Vraća kolekciju svih studenata iz baze podataka čiji je strani ključ projekat proslijeđen kao path varijabla")
	public Collection<Student> getStudentByProjekat(@PathVariable int projekat)
	{
		Projekat temp=projekatRepository.getById(projekat);
		return repository.findByProjekat(temp);
	}
	@PostMapping("/student")
	@ApiOperation(value = "Upisuje studenta u bazu podataka")
	public ResponseEntity<Student> createStudent(@RequestBody Student student){
		if(repository.existsById(student.getId())) {
			return new ResponseEntity<Student>(HttpStatus.CONFLICT);
		}else {
			Student temp=repository.save(student);
			return new ResponseEntity<Student>(temp,HttpStatus.CREATED);
		}
	}
	@PutMapping("/student")
	@ApiOperation(value = "Modifikuje postojećeg studenta u bazi podataka")
	public ResponseEntity<Student> updateStudent(@RequestBody Student student){
		if(repository.existsById(student.getId())) {
			repository.save(student);
			return new ResponseEntity<Student>(HttpStatus.OK);
		}else {
			return new ResponseEntity<Student>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/student/{id}")
	@ApiOperation(value = "Briše studenta iz baze podataka čiji id je proslijeđen kao path varijabla")
	public ResponseEntity<Student> deleteStudent(@PathVariable int id){
		if(repository.existsById(id)) {
			if(id==-100) {
				repository.deleteById(id);
				jdbcTemplate.execute("insert into student(\"id\",\"ime\",\"prezime\",\"broj_indeksa\",\"grupa\",\"projekat\")"
						+ "values (-100,'test ime','test prz','test br ind',1,1);");
				return new ResponseEntity<Student>(HttpStatus.OK);
			} else {
				repository.deleteById(id);
				return new ResponseEntity<Student>(HttpStatus.OK);
			}
		}else {
			return new ResponseEntity<Student>(HttpStatus.NOT_FOUND);
		}
	}
}
