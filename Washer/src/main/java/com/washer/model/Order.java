package com.washer.model;



import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Document(collection="orders")
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
	public long getOrderId() {
		return orderId;
	}
	public void setOrderId(long orderId) {
		this.orderId = orderId;
	}
	public String getCarName() {
		return carName;
	}
	public void setCarName(String carName) {
		this.carName = carName;
	}
	public String getCarModel() {
		return carModel;
	}
	public void setCarModel(String carModel) {
		this.carModel = carModel;
	}
	public String getwName() {
		return wName;
	}
	public void setwName(String wName) {
		this.wName = wName;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public long getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(long phoneNo) {
		this.phoneNo = phoneNo;
	}
	public Order(long orderId, String carName, String carModel, String wName, String date, long phoneNo) {
		super();
		this.orderId = orderId;
		this.carName = carName;
		this.carModel = carModel;
		this.wName = wName;
		this.date = date;
		this.phoneNo = phoneNo;
	}
	public Order() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Order [orderId=" + orderId + ", carName=" + carName + ", carModel=" + carModel + ", wName=" + wName
				+ ", date=" + date + ", phoneNo=" + phoneNo + "]";
	}
	
	
	
}
