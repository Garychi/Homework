package com.webservice.service;

public class TokenBeanService {

//	private String aaa;
	private String myToken;
	
	public void processToken(){
		System.out.println(this.getClass().getName());
	}
	
	public void setMyToken(String myToken){
		this.myToken =myToken;
	}

	public String getMyToken() {
		return myToken;
	}
}
