package com.model;

import java.io.Serializable;
import javax.persistence.*;

/**
 * The primary key class for the work_station database table.
 * 
 */
@Embeddable
public class WorkStationPK implements Serializable {
	//default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;

	@Column(name="STATION_ID")
	private String stationId;

	@Column(name="EMP_NO")
	private String empNo;

	public WorkStationPK() {
	}
	public String getStationId() {
		return this.stationId;
	}
	public void setStationId(String stationId) {
		this.stationId = stationId;
	}
	public String getEmpNo() {
		return this.empNo;
	}
	public void setEmpNo(String empNo) {
		this.empNo = empNo;
	}

	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof WorkStationPK)) {
			return false;
		}
		WorkStationPK castOther = (WorkStationPK)other;
		return 
			this.stationId.equals(castOther.stationId)
			&& this.empNo.equals(castOther.empNo);
	}

	public int hashCode() {
		final int prime = 31;
		int hash = 17;
		hash = hash * prime + this.stationId.hashCode();
		hash = hash * prime + this.empNo.hashCode();
		
		return hash;
	}
}