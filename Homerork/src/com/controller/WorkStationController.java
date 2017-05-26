package com.controller;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.it.utils.SpringUtils;
import com.webservice.service.WorkStationService;

@RestController
@RequestMapping("/restfulService/workStation")
public class WorkStationController {

	WorkStationService workStationService = (WorkStationService) SpringUtils.getBean("workStationService");
	
	@RequestMapping(value = "/search", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public Object search(@RequestBody String json) {
		Object result = null;
	
		try {
			result = workStationService.search(json);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return result;
	}

	@RequestMapping(value = "/insert", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public Object insert(@RequestBody String json) {
		Object result = null;

		try {
			result = workStationService.insert(json);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return result;
	}
	
	
	@RequestMapping(value = "/searchStation", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public Object searchStation(@RequestBody String json) {
		Object result = null;
	
		try {
			result = workStationService.searchStation(json);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return result;
	}
	
	@RequestMapping(value = "/delete", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public Object delete(@RequestBody String json) {
		Object result = null;

		try {
			result = workStationService.delete(json);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return result;
	}
	
	@RequestMapping(value = "/deleteMulti", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public Object deleteMulti(@RequestBody String json) {
		Object result = null;

		try {
			result = workStationService.deleteMulti(json);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return result;
	}
	
	@RequestMapping(value = "/searchOthers", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public Object searchOthers(@RequestBody String json) {
		Object result = null;
	
		try {
			result = workStationService.searchOthers(json);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return result;
	}
}
