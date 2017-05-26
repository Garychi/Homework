package com.webservice.service;

import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import com.it.dao.HibernateDAO;
import com.it.utils.GsonUtil;
import com.webservice.DefaultResponse;

@Service("employeeService")
public class EmployeeService extends DefaultResponse {

	private static final Logger log = LogManager.getLogger(EmployeeService.class);
	
	@Autowired
	protected HibernateDAO hibernateDao;

	@Transactional
	public Object search(String json) throws Exception {
		Object result = null;
		if (!StringUtils.isEmpty(json)) {
			log.info("begin employee search");
			try {
				Map<String, Object> paramMap = (Map<String, Object>) GsonUtil.fromJson(json, Map.class);
				StringBuffer hql = new StringBuffer();
				hql.append("select model from Employee model where 1=1");

				if (!StringUtils.isEmpty(paramMap.get("empNo"))) {
					hql.append(" and model.empNo =:empNo ");
				}

				result = hibernateDao.createQuery(hql.toString(), paramMap).list();
			} catch (Exception e) {
				log.info(e.getMessage());
				e.printStackTrace();
				return responseFailed();
			}
		}

		return responseSuccess(result);
	}

	@Transactional
	public Object searchStation(String json) throws Exception {
		Object result = null;
		if (!StringUtils.isEmpty(json)) {
			try {
				Map<String, Object> paramMap = (Map<String, Object>) GsonUtil.fromJson(json, Map.class);
				StringBuffer sql = new StringBuffer();

				sql.append(" select model from Station model where 1=1 ");
				sql.append(" and model.empNo =:empNo  ");
				
				result = hibernateDao.createQuery(sql.toString(), paramMap).list();
			} catch (Exception e) {
				log.info(e.getMessage());
				e.printStackTrace();
				return responseFailed();
			}
		}

		return responseSuccess(result);
	}

	
	public Object insert(String json) throws Exception {
		Object result = null;
		if (!StringUtils.isEmpty(json)) {
			try {
				Map<String, Object> paramMap = (Map<String, Object>) GsonUtil.fromJson(json, Map.class);
				StringBuffer hql = new StringBuffer();
				hql.append("select model from Employee model where 1=1");
				result = hibernateDao.createQuery(hql.toString(), paramMap).list();
			} catch (Exception e) {
				log.info(e.getMessage());
				e.printStackTrace();
				return responseFailed();
			}
		}

		return responseSuccess(toJsonObject(result));
	}
}
