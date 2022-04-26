package backend.poc.first.POC1BackEnd;

import java.util.List;
import java.util.Optional;

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
	public List<Resources> list()
	{
		return(List<Resources>)repo.findAll();
				}
	public Optional<Resources> read(int week)
	{
		return repo.findById(week);
	}
    public String remove(int key)
    {
    	String nm=repo.findById(key).orElse(new Resources()).getUname()+ "has delete";
    	repo.deleteById(key);
    	return nm;
    	}
}
