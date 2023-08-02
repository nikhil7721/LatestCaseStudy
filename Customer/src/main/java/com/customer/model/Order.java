package com.customer.model;



import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Document(collection="orders")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Order 
{
	@Transient
    public static final String SEQUENCE_NAME = "order_sequence";
	
	@Id
	private long orderId;
	private String carName;
	private String carModel;
	private String wName;
	private String date;
	private long phoneNo;
	
}
