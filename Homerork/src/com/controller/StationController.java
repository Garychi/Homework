package com.controller;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.it.utils.SpringUtils;
import com.webservice.service.StationService;

@RestController
@RequestMapping("/restfulService/station")
public class StationController {
	
	StationService stationService= (StationService) SpringUtils.getBean("stationService");

	@RequestMapping(value = "/search", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public Object search(@RequestBody String json) {
		Object result = null;
	
		try {
			result = stationService.search(json);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return result;
	}

	
	@RequestMapping(value = "/searchOthers", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public Object searchOthers(@RequestBody String json) {
		Object result = null;
	
		try {
			result = stationService.searchOthers(json);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return result;
	}
	
	@RequestMapping(value = "/insert", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public Object insert(@RequestBody String json) {
		Object result = null;

		try {
			result = stationService.insert(json);
		} catch (Exception e) {
			e.printStackTrace();
		}

		return result;
	}

	@RequestMapping(value = "/update", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public Object update(@RequestBody String json) {
		Object result = null;
		
		try {
			result = stationService.update(json);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return result;
	}

	@RequestMapping(value = "/delete", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public Object delete(@RequestBody String json) {
		Object result = null;
		
		try {
			result = stationService.delete(json);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return result;
	}
	
	@RequestMapping(value = "/deleteMulti", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public Object deleteMulti(@RequestBody String json) {
		Object result = null;
		
		try {
			result = stationService.deleteMulti(json);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return result;
	}
}
