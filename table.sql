use restaurant;
drop table if exists orders;
drop table if exists payments;
drop table if exists items;
drop table if exists categories;
drop table if exists customers;


create table categories(
	 id char(1) not null,
     name varchar(20) not null,
     constraint category_pk primary key (id)
);

create table items(
	id char(5) not null,
    name varchar(20),
    desciption varchar(255),
    price decimal(3,2),
    categoryId char(1),
    constraint item_pk primary key(id),
    constraint item_category_fk foreign key (categoryId) references categories(id)
);

create table customers(
	id char(20) not null,
    firstName char(20),
    lastName char(20),
    phone char(10),
    birth_day date,
    constraint customer_pk primary key (id)
);

create table payments(
	id char(20) not null,
    method char(20),
    transactionAmount decimal,
    transcationTime time,
    transcationDate date,
    constraint payments_pk primary key(id)
);

create table orders(
	id char(20) not null,
    orderDate date,
    orderTime time,
    checkcoutTime time,
    foodAmount decimal(5,2),
    tipAmount decimal(5,2),
    itemId char(5),
    customerId char(20),
    paymentId char(20),
    constraint order_pk primary key (id),
    constraint order_item_fk foreign key(itemId) references items(id),
    constraint order_customer_fk foreign key(customerId) references customers(id),
    constraint order_payment_fk foreign key(paymentId) references payments(id)
);

