package com.model;

import java.io.Serializable;

public class MyToken implements Serializable{

	private static final long serialVersionUID = 5011394630734728668L;

	private String tokenName;
	private String currentToken;
	
	public String getTokenName() {
		return tokenName;
	}
	public void setTokenName(String tokenName) {
		this.tokenName = tokenName;
	}
	public String getCurrentToken() {
		return currentToken;
	}
	public void setCurrentToken(String currentToken) {
		this.currentToken = currentToken;
	}
}
