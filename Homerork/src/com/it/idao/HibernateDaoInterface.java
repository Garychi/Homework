package com.it.idao;

import java.util.List;
import java.util.Map;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.SQLQuery;

public abstract interface HibernateDaoInterface {
	public abstract Query createQuery(String paramString);

	public abstract Query createQuery(String paramString, List<Object> paramList);

	public abstract Query createQuery(String paramString, Map<String, Object> paramMap);

	public abstract Criteria createCriteria(Class<?> paramClass);

	public abstract int updateByHQL(String paramString);

	public abstract int updateByHQL(String paramString, List<Object> paramList);

	public abstract int updateByHQL(String paramString, Map<String, Object> paramMap);
	
	public abstract SQLQuery createSQLQuery(String queryString);
	
	public abstract SQLQuery createSQLQuery(String queryString,Map<String,Object>paramMap);

	public abstract Query createQuery(Object object);

}
