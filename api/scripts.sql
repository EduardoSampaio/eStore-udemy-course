create table estore.categories (
	id int not null,
	category varchar(45) default null,
	parent_category_id int default null,
	primary key (id)
)

insert into estore.categories
(id, category, parent_category_id) values
('1', 'Men', null),
('2', 'Women', null),
('3', 'Kids', null),
('4', 'Casual Wear',1),
('5', 'Party Wear', 2),
('6', 'Foot Wear', 2),
('7', 'Accessories', 3);


select * from categories c;

create table estore.products(
  id int not null,
  product_name varchar(45) default null,
  product_description varchar(100) default null,
  price decimal(10,0) default null,
  ratings int default null,
  category_id int default null,
  product_img varchar(45),
  primary key(id),
  key FK_PRODUCTS_CATEGORIES_ID(category_id),
  constraint FK_PRODUCTS_CATEGORIES
  foreign key (category_id) references estore.categories(id)
  on update cascade on delete cascade
);


insert into estore.products
(id, product_name, product_description, price, ratings, category_id, product_img)
values
(1, 'Classic Men T-Shirt', 'Comfortable cotton t-shirt for men', 89.90, 5, 1, 'shop-1.jpg'),

(2, 'Elegant Women Dress', 'Elegant party dress for women', 249.90, 4, 2, 'shop-2.jpg'),

(3, 'Kids Cartoon Hoodie', 'Warm hoodie with cartoon print', 119.90, 5, 3, 'shop-3.jpg'),

(4, 'Men Casual Jacket', 'Stylish casual jacket for daily use', 199.90, 4, 4, 'shop-4.jpg'),

(5, 'Women Party Gown', 'Luxury gown for parties and events', 399.90, 5, 5, 'shop-5.jpg'),

(6, 'Women High Heels', 'Modern high heel footwear', 179.90, 4, 6, 'shop-6.jpg'),

(7, 'Kids Sunglasses', 'UV protection sunglasses for kids', 49.90, 4, 7, 'shop-7.jpg'),

(8, 'Men Sneakers', 'Comfortable sneakers for men', 299.90, 5, 6, 'shop-8.jpg'),

(9, 'Women Handbag', 'Premium leather handbag', 159.90, 5, 7, 'shop-9.jpg');

select * from estore.products;

