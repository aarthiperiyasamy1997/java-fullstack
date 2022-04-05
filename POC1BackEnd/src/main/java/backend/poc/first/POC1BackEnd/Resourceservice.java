package backend.poc.first.POC1BackEnd;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service // To implements the Repository methods ex.findall, findByid
public class Resourceservice {
	@Autowired //repository,service,bean,component,controller
	ResourceRepository repo;
	
	public Resources create(Resources resources)
	{
		return repo.save(resources);
	}

}
