package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.it.utils.SpringUtils;
import com.webservice.service.EmployeeService;
import com.webservice.service.TokenBeanService;

@RestController
@RequestMapping("/restfulService/employee")
public class EmployeeController {

	EmployeeService employeeService = (EmployeeService) SpringUtils.getBean("employeeService");
	
	@Autowired
	TokenBeanService tokenService;

	@RequestMapping(value = "/search", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public Object search(@RequestBody String json) {
		
		Object result = null;
		
		try {
			result = employeeService.search(json);
		} catch (Exception e) {

			e.printStackTrace();
		}

		return result;
	}

	@RequestMapping(value = "/searchStation", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public Object searchStation(@RequestBody String json) {
		Object result = null;

		try {
			result = employeeService.searchStation(json);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return result;
	}

	@RequestMapping(value = "/insert", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public Object insert(@RequestBody String json) {
		Object result = null;

		try {
			result = employeeService.insert(json);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return result;
	}
}
