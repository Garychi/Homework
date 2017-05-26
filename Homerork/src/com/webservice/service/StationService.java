package com.webservice.service;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.it.dao.HibernateDAO;
import com.it.utils.GsonUtil;
import com.model.Station;
import com.webservice.DefaultResponse;

import net.sf.json.JSONObject;

@Service("stationService")
public class StationService extends DefaultResponse {

	private static final Logger log = LogManager.getLogger(StationService.class);
	
	@Autowired
	protected HibernateDAO hibernateDao;

	@Transactional
	public Object search(String json) throws Exception {
		Object result = null;
		if (!StringUtils.isEmpty(json)) {
			try {
				Map<String, Object> paramMap = (Map<String, Object>) GsonUtil.fromJson(json, Map.class);
				StringBuffer hql = new StringBuffer();
				hql.append("select model from Station model where 1=1 ");

				if (!StringUtils.isEmpty(paramMap.get("stationId"))) {
					hql.append(" and model.stationId =:stationId");
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
	public Object searchOthers(String json) throws Exception {
		Object result = null;
		if (!StringUtils.isEmpty(json)) {
			try {
				Type listType = new TypeToken<List<Station>>(){}.getType();
				List<Station> jsonObject = (List<Station>) GsonUtil.fromJson(json, listType);
				
				StringBuffer hql = new StringBuffer();
				
				List values = new ArrayList();
				if(jsonObject !=null && jsonObject.size()>0){
					for(Station station :jsonObject){
						values.add(station.getStationId());
					}
				}
				
				hql.append("select model from Station model where 1=1 ");
				hql.append(" and model.stationId not in (:stationIds)");
				
				result = hibernateDao.createQuery(hql.toString()).setParameterList("stationIds", values).list();

			} catch (Exception e) {
				log.info(e.getMessage());
				e.printStackTrace();
				return responseFailed();
			}
		}

		return responseSuccess(result);
	}
	
	@Transactional
	public Object insert(String json) throws Exception {
		Object result = null;
		if (!StringUtils.isEmpty(json)) {
			try {
				Object station = GsonUtil.fromJson(json, Station.class);
				hibernateDao.insert(station);
			} catch (Exception e) {
				log.info(e.getMessage());
				e.printStackTrace();
				return responseFailed();
			}
		}

		return responseSuccess(toJsonObject(result));
	}

	@Transactional
	public Object update(String json) throws Exception {
		JSONObject message = new JSONObject();
		message.put("data", "nothing change");
		if (!StringUtils.isEmpty(json)) {
			try {
				Object jsonObject = GsonUtil.fromJson(json, Station.class);
				hibernateDao.update(jsonObject);
				message.put("data", "update Success");
			} catch (Exception e) {
				log.info(e.getMessage());
				return responseFailed();
			}
		} else {
			return responseFailed();
		}

		return responseSuccess(message);
	}

	@Transactional
	public Object delete(String json) throws Exception {
		JSONObject message = new JSONObject();
		message.put("data", "nothing change");
		if (!StringUtils.isEmpty(json)) {
			try {
				Object jsonObject = GsonUtil.fromJson(json, Station.class);
				hibernateDao.delete(jsonObject);
				message.put("data", "delete success");
			} catch (Exception e) {
				log.info(e.getMessage());
				return responseFailed();
			}
		} else {
			return responseFailed();
		}

		return responseSuccess(message);
	}

	@Transactional
	public Object deleteMulti(String json) throws Exception {
		JSONObject message = new JSONObject();
		message.put("data", "nothing change");
		if (!StringUtils.isEmpty(json)) {
			try {
				Gson gson = new Gson();
				Type listType = new TypeToken<List<Station>>(){}.getType();
				List<Station> jsonObject = (List<Station>) GsonUtil.fromJson(json, listType);
				hibernateDao.deleteByBeanCollection(jsonObject);
				
			} catch (Exception e) {
				log.info(e.getMessage());
				return responseFailed();
			}
		} else {
			return responseFailed();
		}
		return responseSuccess(message);
	}

}
