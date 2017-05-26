package com.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;


/**
 * The persistent class for the station database table.
 * 
 */
@Entity
public class Station implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="STATION_ID")
	private String stationId;
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date createdate;

	private String creator;

	private int flag;

	private String modiby;

	@Temporal(TemporalType.TIMESTAMP)
	private Date modidate;

	@Column(name="STATION_NAME")
	private String stationName;

	@Transient
	private List employeeList = new ArrayList(0);
	
	public Station() {
	}

	public String getStationId() {
		return this.stationId;
	}

	public void setStationId(String stationId) {
		this.stationId = stationId;
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

	public int getFlag() {
		return this.flag;
	}

	public void setFlag(int flag) {
		this.flag = flag;
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

	public String getStationName() {
		return this.stationName;
	}

	public void setStationName(String stationName) {
		this.stationName = stationName;
	}

	public List getEmployeeList() {
		return employeeList;
	}

	public void setEmployeeList(List employeeList) {
		this.employeeList = employeeList;
	}

}