package com.webservice;

import java.util.Date;
import java.util.HashMap;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.it.utils.GsonUtil;

import net.sf.json.JSONObject;

public abstract class DefaultResponse {
		
	protected ResponseEntity<Object> responseSuccess(Object result){
		HttpStatus status=result !=null ? HttpStatus.OK : HttpStatus.NO_CONTENT;
		return new ResponseEntity<>(toJsonObject(result),status);
	}
	
	protected ResponseEntity<Object> responseFailed(){
		JSONObject json = new JSONObject();
		json.put("data", "Server error... Please contact to system administrator");
		return new ResponseEntity<>(GsonUtil.toJson(json),HttpStatus.INTERNAL_SERVER_ERROR);
	}
	

	protected Object toJsonObject(Object data) {
		return data == null ? GsonUtil.toJson(new HashMap<String, Object>().put("data", "no data")) : GsonUtil.toJson(data);
	}

}
