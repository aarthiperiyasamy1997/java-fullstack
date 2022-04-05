package backend.poc.first.POC1BackEnd;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository // used for interact with database connection.
public interface ResourceRepository extends CrudRepository<Resources,Integer>
{

}
