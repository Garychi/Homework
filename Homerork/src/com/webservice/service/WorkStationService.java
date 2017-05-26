package com.webservice.service;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import com.google.gson.reflect.TypeToken;
import com.it.dao.HibernateDAO;
import com.it.utils.GsonUtil;
import com.model.WorkStation;
import com.webservice.DefaultResponse;

import net.sf.json.JSONObject;

@Service("workStationService")
public class WorkStationService extends DefaultResponse {

	private static final Logger log = LogManager.getLogger(WorkStationService.class);
	
	@Autowired
	protected HibernateDAO hibernateDao;

	@Transactional
	public Object search(String json) throws Exception {
		Object result = null;
		if (!StringUtils.isEmpty(json)) {
			try {
				Map<String, Object> paramMap = (Map<String, Object>) GsonUtil.fromJson(json, Map.class);
				StringBuffer hql = new StringBuffer();
				Map<String,Object> keyMap =(Map<String, Object>) paramMap.get("id");
				
				hql.append("select model from WorkStation model where 1=1 ");		
							
				
				if(keyMap!=null){
					for(Entry<String, Object> map :keyMap.entrySet()){
						hql.append(" and model.id."+map.getKey()+" =:"+map.getKey());
					}
					paramMap =keyMap;
				}
				else{
					for(Entry<String, Object> map :paramMap.entrySet()){
						hql.append(" and model."+map.getKey()+" =:"+map.getKey());
					}
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
	public Object insert(String json) throws Exception {
		JSONObject message = new JSONObject();
		message.put("data", "nothing change");
		if (!StringUtils.isEmpty(json)) {
			try {

				Type listType = new TypeToken<List<WorkStation>>() {
				}.getType();
				List<WorkStation> jsonObject = (List<WorkStation>) GsonUtil.fromJson(json, listType);
				hibernateDao.insertByBeanCollection(jsonObject);
				message.put("data", "insert Success");
			} catch (Exception e) {
				log.info(e.getMessage());
				e.printStackTrace();
				return responseFailed();
			}
		}

		return responseSuccess(message);
	}

	@Transactional
	public Object update(String json) throws Exception {
		JSONObject message = new JSONObject();
		message.put("data", "nothing change");
		if (!StringUtils.isEmpty(json)) {
			try {
				Object jsonObject = GsonUtil.fromJson(json, WorkStation.class);
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
				Map<String, Object> paramMap = (Map<String, Object>) GsonUtil.fromJson(json, Map.class);
				String hql = "delete from WorkStation model where model.id.empNo =:empNo ";

				hibernateDao.createQuery(hql, paramMap).executeUpdate();
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
				Type listType = new TypeToken<List<WorkStation>>(){}.getType();
				List<WorkStation> jsonObject = (List<WorkStation>) GsonUtil.fromJson(json, listType);
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

	@Transactional
	public Object searchStation(String json) throws Exception {
		Object result = null;
		if (!StringUtils.isEmpty(json)) {
			try {
				Map<String, Object> paramMap = (Map<String, Object>) GsonUtil.fromJson(json, Map.class);
				StringBuffer sql = new StringBuffer();

				sql.append(" select model from WorkStation model where 1=1 ");
				sql.append(" and model.id.empNo =:empNo  ");

				result = hibernateDao.createQuery(sql.toString(), paramMap).list();
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
				Type listType = new TypeToken<List<WorkStation>>() {}.getType();
				List<WorkStation> jsonObject = (List<WorkStation>) GsonUtil.fromJson(json, listType);

				StringBuffer hql = new StringBuffer();
				hql.append("select model from Station model where 1=1 ");

				List values = new ArrayList();
				if (jsonObject != null && jsonObject.size() > 0) {
					for (WorkStation station : jsonObject) {
						values.add(station.getId().getStationId());
					}
				}

				
				if (values.size() > 0) {
					hql.append(" and model.stationId not in (:stationIds)");
					result = hibernateDao.createQuery(hql.toString()).setParameterList("stationIds", values).list();
				} else {
					result = hibernateDao.createQuery(hql.toString()).list();
				}

			} catch (Exception e) {
				log.info(e.getMessage());
				e.printStackTrace();
				return responseFailed();
			}
		}

		return responseSuccess(result);
	}

}
