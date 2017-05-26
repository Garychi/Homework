package com.it.utils;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.AutowireCapableBeanFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

@Component
public class SpringUtils implements ApplicationContextAware {
	private static ApplicationContext context;

	public SpringUtils() {
	}

	public void setApplicationContext(ApplicationContext paramApplicationContext) throws BeansException {
		context = paramApplicationContext;
	}

	public static Object getBean(String paramString) throws BeansException {
		Object localObject = null;
		try {
			if (context.containsBean(paramString)) {
				localObject = context.getBean(paramString);
			}
		}
		catch (Exception localException) {
//			localException.printStackTrace();
		}
		return localObject;
	}

	public static ApplicationContext getApplicationContext() {
		return context;
	}

	/**
	 * 當需要 autowire 非一般bean物件時，可以使用此方式手動wire， 如要使用AutoWired 兩個calss物件皆須為bean物件
	 * 
	 * @param bean
	 */
	public static void autowireBean(Object bean) {
		/*
		 * The first method will process @Autowire fields and methods (but not
		 * classic properties). The second method will invoke post processing
		 * (@PostConstruct and any defined BeanPostProcessors). Application
		 * context can be obtained in a bean if it implements
		 * ApplicationContextAware interface.
		 */

		AutowireCapableBeanFactory factory = context.getAutowireCapableBeanFactory();
		factory.autowireBean(bean);
	}
}