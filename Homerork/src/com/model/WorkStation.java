package com.model;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Date;


/**
 * The persistent class for the work_station database table.
 * 
 */
@Entity
@Table(name="work_station")
public class WorkStation implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private WorkStationPK id;

	@Temporal(TemporalType.TIMESTAMP)
	private Date createdate;

	private String creator;

	private Integer flag;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="JOIN_DATE")
	private Date joinDate;

	private String modiby;

	@Temporal(TemporalType.TIMESTAMP)
	private Date modidate;

	public WorkStation() {
		this.id = new WorkStationPK();
	}

	public WorkStationPK getId() {
		return this.id;
	}

	public void setId(WorkStationPK id) {
		this.id = id;
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

	public Integer getFlag() {
		return this.flag;
	}

	public void setFlag(Integer flag) {
		this.flag = flag;
	}

	public Date getJoinDate() {
		return this.joinDate;
	}

	public void setJoinDate(Date joinDate) {
		this.joinDate = joinDate;
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

}