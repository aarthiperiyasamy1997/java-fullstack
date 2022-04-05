package backend.poc.first.POC1BackEnd;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
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

	
	

}
