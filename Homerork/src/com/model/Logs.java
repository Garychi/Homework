package com.model;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Date;


/**
 * The persistent class for the logs database table.
 * 
 */
@Entity
public class Logs implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer serialno;

	@Temporal(TemporalType.TIMESTAMP)
	private Date dated;

	@Column(name="EXCEPTION_NO")
	private String exceptionNo;

	@Column(name="LEVEL_NAME")
	private String levelName;

	private String logger;

	private String message;

	@Column(name="USER_ID")
	private String userId;

	public Logs() {
	}

	public Integer getSerialno() {
		return this.serialno;
	}

	public void setSerialno(Integer serialno) {
		this.serialno = serialno;
	}

	public Date getDated() {
		return this.dated;
	}

	public void setDated(Date dated) {
		this.dated = dated;
	}

	public String getExceptionNo() {
		return this.exceptionNo;
	}

	public void setExceptionNo(String exceptionNo) {
		this.exceptionNo = exceptionNo;
	}

	public String getLevelName() {
		return this.levelName;
	}

	public void setLevelName(String levelName) {
		this.levelName = levelName;
	}

	public String getLogger() {
		return this.logger;
	}

	public void setLogger(String logger) {
		this.logger = logger;
	}

	public String getMessage() {
		return this.message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getUserId() {
		return this.userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

}