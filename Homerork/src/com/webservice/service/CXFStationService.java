package com.webservice.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import com.it.dao.HibernateDAO;
import com.it.utils.GsonUtil;
import com.model.Station;
import com.webservice.DefaultResponse;
import com.webservice.header.IStationService;

public class CXFStationService extends DefaultResponse implements IStationService{
	@Autowired
	protected HibernateDAO hibernateDao;

	@Transactional
	@Override
	public Object search(String json) throws Exception {
		Object result = null;
		if (!StringUtils.isEmpty(json)) {
			try {
				
				Map<String, Object> paramMap = (Map<String, Object>) GsonUtil.fromJson(json, Map.class);
				StringBuffer hql = new StringBuffer();
				hql.append("select model from Station model where 1=1");
				
				result = hibernateDao.createQuery(hql.toString()).list();
			} catch (Exception e) {
				e.printStackTrace();
				return responseFailed();
			}
		}

		return responseSuccess(toJsonObject(result));
	}

	@Transactional
	@Override
	public Object insert(String json) throws Exception {
		Object result = null;
		if (!StringUtils.isEmpty(json)) {
			try {
				Object station = GsonUtil.fromJson(json, Station.class);
				hibernateDao.insert(station);
			} catch (Exception e) {
				e.printStackTrace();
				return responseFailed();
			}
		}

		return responseSuccess(toJsonObject(result));
	}

	@Transactional
	@Override
	public Object update(String json) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Transactional
	@Override
	public Object delete(String json) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

}
