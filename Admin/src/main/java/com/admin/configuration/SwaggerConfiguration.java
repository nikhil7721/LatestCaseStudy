package com.admin.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.ApiKey;
import springfox.documentation.service.AuthorizationScope;
import springfox.documentation.service.SecurityReference;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spi.service.contexts.SecurityContext;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;


    @Configuration
    @EnableSwagger2
    @SuppressWarnings({"unused"})
    public class SwaggerConfiguration extends WebMvcConfigurerAdapter {

        @Bean
        Docket docket(){
            return new Docket(DocumentationType.SWAGGER_2)
                    .apiInfo(apiInfo())
                    .securityContexts(Arrays.asList(securityContext()))
                    .securitySchemes(Arrays.asList(apiKey()))
                    .select().paths(PathSelectors.any())
//                    .apis(RequestHandlerSelectors.basePackage("com.customer"))
                    .build().apiInfo((apiInfo()));
        }

    private SecurityContext securityContext() {
        return SecurityContext.builder().securityReferences(defaultAuth()).build();
    }

    private List<SecurityReference> defaultAuth() {
        AuthorizationScope authorizationScope = new AuthorizationScope("global", "accessEverything");
        AuthorizationScope[] authorizationScopes = new AuthorizationScope[1];
        authorizationScopes[0] = authorizationScope;
        return Collections.singletonList(new SecurityReference("JWT", authorizationScopes));
    }

		private ApiInfo apiInfo() {

			return new ApiInfo("On Demand Car Wash",
	                "<h1>API reference example for Customer Microservice</h1>", "1.0.0", "Public API",
	                new springfox.documentation.service.Contact("Omkar Dumbhare", "https://github.com/OmkarDumbhare", "dumbhare_omkar.et@ghrce.raisoni.net"),
	                "API License Open", "http://codeshark.com/");
		}

        @Override
        public void addResourceHandlers(ResourceHandlerRegistry registry) {
            registry.addResourceHandler("swagger-ui.html")
                    .addResourceLocations("classpath:/META-INF/resources/");

            registry.addResourceHandler("/webjars/**")
                    .addResourceLocations("classpath:/META-INF/resources/webjars/");
        }
        private ApiKey apiKey() {
            return new ApiKey("JWT", "Authorization", "header");
        }
       
}
