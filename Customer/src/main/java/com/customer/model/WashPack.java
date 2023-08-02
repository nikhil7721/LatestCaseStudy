package com.customer.model;

import org.springframework.data.annotation.Id;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Document(collection="washpackage")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class WashPack 
{
	@Id
	int id;
	String wpName;
	int wpCost;
	String wpDes;
}
