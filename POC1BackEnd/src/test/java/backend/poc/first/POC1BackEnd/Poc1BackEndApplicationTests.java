package backend.poc.first.POC1BackEnd;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNotSame;
import static org.junit.Assert.assertSame;
import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.annotation.Resource;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

@SpringBootTest
@RunWith(SpringRunner.class)
class Poc1BackEndApplicationTests {
	
	@MockBean
	ResourceRepository repo;
	
	@Autowired
	Resourceservice service;
	
	@Test
		public void testList1()
		{
			
			Resources res1=new Resources(21001, "Manoj Kumar","Banglore",50000,new String[] {"React","HTML","MUI","BS"});
			Resources res2=new Resources(21002, "Swathy","Hosur",53000,new String[] {"Spring","HTML","React Js","BS"});
			Resources res3=new Resources(21004, "Boomika","Kallakuruchi",55000,new String[] {"React","HTML","React Js","BS"});
			Resources res4=new Resources(21003, "Devika","Erode",50400,new String[] {"React","Spring","MUI","BS"});
			
			
			when(repo.findAll()).thenReturn(Stream.of(res1,res2,res3,res4).collect(Collectors.toList()));
			
			assertNotNull(service.list());
		}
	
	@Test
	public void testList2()
	{
		Resources res3=new Resources(21004, "Boomika","Kallakuruchi",55000,new String[] {"React","HTML","React Js","BS"});
		Resources res4=new Resources(21003, "Devika","Erode",50400,new String[] {"React","Spring","MUI","BS"});
		
		when(repo.findAll()).thenReturn(Stream.of(res3,res4).collect(Collectors.toList()));
		assertSame("Erode", service.list().get(1).getUplace());
	}
	
	@Test
	public void testList3()
	{
		
		Resources res1=new Resources(21001, "Manoj Kumar","Banglore",50000,new String[] {"React","HTML","MUI","BS"});
		Resources res2=new Resources(21002, "Swathy","Hosur",53000,new String[] {"Spring","HTML","React Js","BS"});
		Resources res3=new Resources(21004, "Boomika","Kallakuruchi",55000,new String[] {"React","HTML","React Js","BS"});
		Resources res4=new Resources(21003, "Devika","Erode",50400,new String[] {"React","Spring","MUI","BS"});
		
		
		when(repo.findAll()).thenReturn(Stream.of(res1,res2,res3,res4).collect(Collectors.toList()));
		assertTrue(Arrays.toString(service.list().get(3).getUskills()).contains("React"));
		
}
	
	@Test
	public void testCreate()
	{
		Resources res1=new Resources(21001, "Manoj Kumar","Banglore",50000,new String[] {"React","HTML","MUI","BS"});
		Resources res2=new Resources(21002, "Swathy","Hosur",53000,new String[] {"Spring","HTML","React Js","BS"});
		
		when(repo.save(res2)).thenReturn(res2);
		assertNotSame("Manoj Kumar",service.create(res2).getUname() );
	}
	

	@Test
	public void testRead()
	{
		Optional<Resources> res1=Optional.of(new Resources(21001, "Manoj Kumar","Banglore",50000,new String[] {"React","HTML","MUI","BS"}));
		Optional<Resources> res2=Optional.of(new Resources(21002, "Swathy","Hosur",53000,new String[] {"Spring","HTML","React Js","BS"}));
		
		when(repo.findById(21001)).thenReturn(res2);
		assertFalse(service.read(21001).get().getUsalary()<10000);
		
}
}
