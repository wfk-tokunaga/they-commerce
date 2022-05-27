# They-Commerce

They-Commerce is the backend of a e-commerce site that uses Express.js, Sequelize, and MySQL.

## Video Guides

### Video Example 1 of 2:
https://drive.google.com/file/d/1hlCpYufC2mFkdZvwJF_IpPC8IYnihx_p/view

### Video Example 2 of 2:
https://drive.google.com/file/d/1heWr6iEd7C0lGulRcozbVGmXd7KSQ5q0/view


## Installation

Clone the repository to your machine then run with:

```bash
npm start
```

## Usage

### Categories

#### View all categories:
```
GET http://localhost:{PORT}/api/categories/
```

#### View specific category by ID:
```
GET http://localhost:{PORT}/api/categories/{category-id}
```

#### Create a category:
```
POST http://localhost:{PORT}/api/categories/
{
	"category_name": "{New Category Name}"
}
```

#### Update a category by ID:
```
PUT http://localhost:{PORT}/api/categories/{category-id}
{
	"category_name": "{New Category Name}"
}
```

#### Delete a category by ID:
```
DELETE http://localhost:{PORT}/api/categories/{category-id}
```


### Products

#### View all products:
```
GET http://localhost:{PORT}/api/products/
```

#### View specific product by ID:
```
GET http://localhost:{PORT}/api/products/{product-id}
```

#### Create a product:
```
POST http://localhost:{PORT}/api/products/
{
    "product_name": "{New Product Name}",
    "price": {Product Price},
    "stock": {Product Stock},
    "tagIds": [{Associated Tags}]
}
```

#### Update a product by ID:
```
PUT http://localhost:{PORT}/api/products/{product-id}
{
    "product_name": "{Updated Name}",
    "price": {Updated Price},
    "stock": {Updated Stock},
    "tagIds": [{Updated Tags}]
}
```

#### Delete a product by ID:
```
DELETE http://localhost:{PORT}/api/products/{product-id}
```

### Tags

#### View all tags:
```
GET http://localhost:{PORT}/api/tags/
```

#### View specific tag by ID:
```
GET http://localhost:{PORT}/api/tags/{tag-id}
```

#### Create a tag:
```
POST http://localhost:{PORT}/api/tags/
{
	"tag_name": "{New Tag Name}"
}
```

#### Update a tag by ID:
```
PUT http://localhost:{PORT}/api/tags/{tag-id}
{
	"tag_name": "{Updated Tag Name}",
}
```

#### Delete a tag by ID:
```
DELETE http://localhost:{PORT}/api/tags/{tag-id}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
None


## Author
Eika Tokunaga
wktokunaga@gmail.com
