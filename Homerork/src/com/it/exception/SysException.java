package com.it.exception;

public class SysException extends RuntimeException {

	private static final long serialVersionUID = 8833758099214955339L;

	private String errorMessage;
	private Exception ex;

	public SysException() {
	}

	public SysException(String msg) {
		this.errorMessage = msg;
	}

	public SysException(Exception paramException) {
		super(paramException);
		this.ex = paramException;
	}

	public SysException(Exception paramException, String msg) {
		this.ex = paramException;
		this.errorMessage = msg;
	}

	public String getErrorMessage() {
		return this.errorMessage;
	}

	public Exception getException() {
		return this.ex;
	}
}
