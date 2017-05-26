package com.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;


/**
 * The persistent class for the employee database table.
 * 
 */
@Entity
public class Employee implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="EMP_NO")
	private String empNo;

	@Temporal(TemporalType.TIMESTAMP)
	private Date createdate;

	private String creator;

	private String department;

	private Integer flag;

	private String modiby;

	@Temporal(TemporalType.TIMESTAMP)
	private Date modidate;

	private String name;
	
	@Transient
	private String stationName;
	
	//bi-directional many-to-one association to Station
//	@OneToOne
//	@JoinColumn(name="EMP_NO", referencedColumnName="EMP_NO" ,insertable = false)
//	private Station station;
	
	@Transient
	private List stationList = new ArrayList(0);
	

	public Employee() {
	}

	public String getEmpNo() {
		return this.empNo;
	}

	public void setEmpNo(String empNo) {
		this.empNo = empNo;
	}

	public Date getCreatedate() {
		return this.createdate;
	}

	public void setCreatedate(Date createdate) {
		this.createdate = createdate;
	}

	public String getCreator() {
		return this.creator;
	}

	public void setCreator(String creator) {
		this.creator = creator;
	}

	public String getDepartment() {
		return this.department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public String getModiby() {
		return this.modiby;
	}

	public void setModiby(String modiby) {
		this.modiby = modiby;
	}

	public Date getModidate() {
		return this.modidate;
	}

	public void setModidate(Date modidate) {
		this.modidate = modidate;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getFlag() {
		return flag;
	}

	public void setFlag(Integer flag) {
		this.flag = flag;
	}

//	public Station getStation() {
//		return this.station;
//	}
//
//	public void setStation(Station station) {
//		this.station = station;
//	}

	public String getStationName() {
		return stationName;
	}

	public void setStationName(String stationName) {
		this.stationName = stationName;
	}

	public List getStationList() {
		return stationList;
	}

	public void setStationList(List stationList) {
		this.stationList = stationList;
	}

}