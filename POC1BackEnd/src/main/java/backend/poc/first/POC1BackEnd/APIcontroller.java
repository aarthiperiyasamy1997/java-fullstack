package backend.poc.first.POC1BackEnd;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController 
@CrossOrigin(origins="http://localhost:3000")
public class APIcontroller {
@Autowired	
Resourceservice service;

@PostMapping("/new")
public String makecreate(@RequestBody Resources res)
{
	return service.create(res).getUname()+" has recruited";
}

@GetMapping("/home")	
public List<Resources> makeList()
{
	return service.list();
}

@GetMapping("/getting/{quiz}")
public Optional<Resources> makeRead(@PathVariable("quiz")int quiz)
{
	return service.read(quiz);
}

@PutMapping("/update")
public String makeUpdate(@RequestBody Resources res)
{
	return service.create(res).getUname()+"has updated";
}

@DeleteMapping("/del/{unique}")
public String makeRemove(@PathVariable("unique")int unique)
{
	return service.remove(unique);
}

}

