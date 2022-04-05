package backend.poc.first.POC1BackEnd;


import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity //fields to be converted into table
@Table(name="profiles") //Table name changed annotation
public class Resources {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="userid")
	private int uid;
	@Column(name="username")
	private String uname;
	@Column(name="userplace")
	private String uplace;
	@Column(name="usersalary")
	private int usalary;
	@Column(name="userskills")
	private String[] uskills;
	
	public Resources() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Resources [uid=" + 	uid + ", uname=" + uname + ", uplace=" + uplace + ", usalary=" + usalary
				+ ", uskills=" + Arrays.toString(uskills) + "]";
	}
	public Resources(String uname, String uplace, int usalary, String[] uskills) {
		super();
		this.uname = uname;
		this.uplace = uplace;
		this.usalary = usalary;
		this.uskills = uskills;
	}
	public int getUid() {
		return uid;
	}
	public void setUid(int uid) {
		this.uid = uid;
	}
	public String getUname() {
		return uname;
	}
	public void setUname(String uname) {
		this.uname = uname;
	}
	public String getUplace() {
		return uplace;
	}
	public void setUplace(String uplace) {
		this.uplace = uplace;
	}
	public int getUsalary() {
		return usalary;
	}
	public void setUsalary(int usalary) {
		this.usalary = usalary;
	}
	public String[] getUskills() {
		return uskills;
	}
	public void setUskills(String[] uskills) {
		this.uskills = uskills;
	}
	
	
	
	

}
