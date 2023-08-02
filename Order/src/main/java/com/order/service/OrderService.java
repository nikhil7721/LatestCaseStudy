package com.order.service;

import java.util.List;
import java.util.Objects;

import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;
import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import com.order.model.Order;
import com.order.model.OrderSequence;
import com.order.repository.OrderRepository;

@Service
public class OrderService {

	@Autowired
	private OrderRepository orderRepository;
	
	@Autowired
	private MongoOperations mongoOperations;
    
	//for creating/adding order
	public Order addOrder(Order order) {
		return orderRepository.save(order);
	}
     
	
	//for getting List of Order
	public List<Order> getOrders() {
		
		List<Order> order= orderRepository.findAll();
		System.out.println("Getting order from DB" + order);
		return order;
	}

	//for deleting order
	public void deleteById(long id) {
		orderRepository.deleteById(id);
		
	}
	
	public long generateSequence(String seqName) {

        OrderSequence counter = mongoOperations.findAndModify(query(where("id").is(seqName)),
                new Update().inc("seq",1), options().returnNew(true).upsert(true),
                OrderSequence.class);
        return !Objects.isNull(counter) ? counter.getSeq() : 1;

    }
	

}
