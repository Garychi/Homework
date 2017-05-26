package com.it.utils;

import java.lang.reflect.Type;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

public class GsonUtil {
	
	private static Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
	
	public static Object toJson(Object data){		
		
		return gson.toJson(data);
	}
	
	public static Object fromJson(String data,Class clazz){
		return gson.fromJson(data,clazz);
	}
	
	public static Object fromJson(String data,Type type){
		return gson.fromJson(data, type);
	}
}
