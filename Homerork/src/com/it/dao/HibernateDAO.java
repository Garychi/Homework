package com.it.dao;

import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;

import com.it.exception.SysException;
import com.it.idao.HibernateDaoInterface;

public class HibernateDAO implements HibernateDaoInterface {
	private static Logger log = LogManager.getLogger(HibernateDAO.class);

	@Autowired
	protected SessionFactory sessionFactory;

	public HibernateDAO() {
	}

	protected Session getCurrentSession() {
		return this.sessionFactory.getCurrentSession();
	}

	public int insert(Object paramObject) {
		int count = 0;

		if (paramObject != null) {
			try {
				getCurrentSession().save(paramObject);
				count++;
			} catch (Exception e) {
				// log.error(e.getMessage());
				throw new SysException(e.getMessage());
			}
		}

		return count;
	}

	public int insertByBeanCollection(Collection<?> paramCollection) {
		int i = 0;
		try {
			Iterator localIterator = paramCollection.iterator();
			while (localIterator.hasNext()) {
				Object localObject = localIterator.next();
				getCurrentSession().save(localObject);
				i++;
			}
		} catch (Exception e) {
			log.info(e.getMessage());
			throw new SysException(e.getMessage());
		}
		return i;
	}

	public int update(Object paramObject) {
		int i = 0;
		try {
			getCurrentSession().update(paramObject);
			i++;
		} catch (Exception e) {
			log.info(e.getMessage());
			throw new SysException(e.getMessage());
		}
		return i;
	}

	public int updateByBeanCollection(Collection<?> paramCollection) {
		int i = 0;
		try {
			Iterator localIterator = paramCollection.iterator();
			while (localIterator.hasNext()) {
				Object localObject = localIterator.next();
				getCurrentSession().update(localObject);
				i++;
			}
		} catch (Exception e) {
			log.info(e.getMessage());
			throw new SysException(e.getMessage());
		}
		return i;
	}

	public int delete(Object paramObject) {
		try {
			getCurrentSession().delete(paramObject);
		} catch (Exception e) {
			log.info(e.getMessage());
			throw new SysException(e.getMessage());
		}
		return 0;
	}

	public int deleteByBeanCollection(Collection paramCollection) {
		int i = 0;
		try {
			Iterator localIterator = paramCollection.iterator();
			while (localIterator.hasNext()) {
				Object localObject = localIterator.next();
				getCurrentSession().delete(localObject);
				i++;
			}
		} catch (Exception e) {
			log.info(e.getMessage());
			throw new SysException(e.getMessage());
		}
		return i;
	}

	public Object refreshObject(Object paramObject) {
		if (paramObject != null) {
			try {
				getCurrentSession().refresh(paramObject);
			} catch (IllegalArgumentException localIllegalArgumentException) {
				localIllegalArgumentException.printStackTrace();
			} catch (SecurityException localSecurityException) {
				localSecurityException.printStackTrace();
			}
		}
		return paramObject;
	}

	public Query createQuery(String paramString) {
		Query localQuery = null;
		try {
			localQuery = getCurrentSession().createQuery(paramString);
		} catch (IllegalArgumentException localIllegalArgumentException) {
			localIllegalArgumentException.printStackTrace();
			log.error(localIllegalArgumentException.getMessage());
		}
		return localQuery;
	}

	public Query createQuery(String paramString, List<Object> paramList) {

		return null;
	}

	public Query createQuery(String paramString, Map<String, Object> paramMap) {
		Query localQuery = null;
		try {
			localQuery = getCurrentSession().createQuery(paramString);

			for (String param : localQuery.getNamedParameters()) {
				Object value = paramMap.get(param);
				if (!StringUtils.isEmpty(value)) {
					localQuery.setParameter(param, value);
				}
			}

		} catch (IllegalArgumentException localIllegalArgumentException) {
			localIllegalArgumentException.printStackTrace();
			log.error(localIllegalArgumentException.getMessage());
		}
		return localQuery;
	}


	public Query createQuery(Object paramObject) {
		StringBuffer hql = new StringBuffer();
		Query localQuery = null;
		try {
			localQuery = getCurrentSession().createQuery(hql.toString());
		} catch (IllegalArgumentException localIllegalArgumentException) {
			localIllegalArgumentException.printStackTrace();
			log.error(localIllegalArgumentException.getMessage());
		}

		return localQuery;
	}

	@Override
	public SQLQuery createSQLQuery(String queryString) {
		SQLQuery localQuery = null;
		try {
			localQuery = getCurrentSession().createSQLQuery(queryString);
		} catch (IllegalArgumentException localIllegalArgumentException) {
			localIllegalArgumentException.printStackTrace();
			log.error(localIllegalArgumentException.getMessage());
		}
		return localQuery;
	}

	@Override
	public SQLQuery createSQLQuery(String queryString, Map<String, Object> paramMap) {
		SQLQuery localQuery = null;
		try {
			localQuery = getCurrentSession().createSQLQuery(queryString);
			for (String param : localQuery.getNamedParameters()) {
				Object value = paramMap.get(param);
				if (!StringUtils.isEmpty(value)) {
					localQuery.setParameter(param, value);
				}
			}
		} catch (IllegalArgumentException localIllegalArgumentException) {
			localIllegalArgumentException.printStackTrace();
			log.error(localIllegalArgumentException.getMessage());
		}
		return localQuery;
	}

	@Override
	public Criteria createCriteria(Class<?> paramClass) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateByHQL(String paramString) {
		
		return 0;
	}

	@Override
	public int updateByHQL(String paramString, List<Object> paramList) {
		
		return 0;
	}

	@Override
	public int updateByHQL(String paramString, Map<String, Object> paramMap) {
	
		return 0;
	}

}
