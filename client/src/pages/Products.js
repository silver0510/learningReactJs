import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, Button
  } from 'reactstrap';


class Products extends Component{
    constructor(props){
        super(props);

        this.state = {
            products: [{
                "id": 1,
                "name": "Venison - Striploin",
                "description": "eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat",
                "imageUrl": "http://dummyimage.com/300x200.bmp/ff4444/ffffff"
              }, {
                "id": 2,
                "name": "Turkey - Breast, Bone - In",
                "description": "nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": 3,
                "name": "Steam Pan Full Lid",
                "description": "in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in",
                "imageUrl": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }, {
                "id": 4,
                "name": "Beef Tenderloin Aaa",
                "description": "montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi",
                "imageUrl": "http://dummyimage.com/300x200.png/cc0000/ffffff"
              }, {
                "id": 5,
                "name": "Cheese - Brie, Cups 125g",
                "description": "faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec",
                "imageUrl": "http://dummyimage.com/300x200.bmp/cc0000/ffffff"
              }, {
                "id": 6,
                "name": "Cranberries - Dry",
                "description": "proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis",
                "imageUrl": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
              }, {
                "id": 7,
                "name": "Beef - Salted",
                "description": "erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero",
                "imageUrl": "http://dummyimage.com/300x200.bmp/cc0000/ffffff"
              }, {
                "id": 8,
                "name": "Cheese - Swiss Sliced",
                "description": "libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat",
                "imageUrl": "http://dummyimage.com/300x200.bmp/cc0000/ffffff"
              }, {
                "id": 9,
                "name": "Cape Capensis - Fillet",
                "description": "amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit",
                "imageUrl": "http://dummyimage.com/300x200.bmp/5fa2dd/ffffff"
              }, {
                "id": 10,
                "name": "Pasta - Orecchiette",
                "description": "vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat",
                "imageUrl": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }, {
                "id": 11,
                "name": "Potatoes - Mini White 3 Oz",
                "description": "turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam",
                "imageUrl": "http://dummyimage.com/300x200.bmp/ff4444/ffffff"
              }, {
                "id": 12,
                "name": "Wine - Casillero Del Diablo",
                "description": "convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
                "imageUrl": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }, {
                "id": 13,
                "name": "Wine - Chateauneuf Du Pape",
                "description": "vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec",
                "imageUrl": "http://dummyimage.com/300x200.png/dddddd/000000"
              }, {
                "id": 14,
                "name": "Icecream Bar - Del Monte",
                "description": "nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": 15,
                "name": "Cod - Fillets",
                "description": "imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem",
                "imageUrl": "http://dummyimage.com/300x200.bmp/cc0000/ffffff"
              }, {
                "id": 16,
                "name": "Pepper - Chipotle, Canned",
                "description": "curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi",
                "imageUrl": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
              }, {
                "id": 17,
                "name": "Nantucket - Carrot Orange",
                "description": "lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus",
                "imageUrl": "http://dummyimage.com/300x200.png/dddddd/000000"
              }, {
                "id": 18,
                "name": "Skirt - 29 Foot",
                "description": "velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": 19,
                "name": "Ginger - Pickled",
                "description": "tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo",
                "imageUrl": "http://dummyimage.com/300x200.bmp/dddddd/000000"
              }, {
                "id": 20,
                "name": "Island Oasis - Pina Colada",
                "description": "lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue",
                "imageUrl": "http://dummyimage.com/300x200.bmp/ff4444/ffffff"
              }]
        }
    }
    render() {
        const {products} = this.state;
        return (
            <Container>
                <h2>Products</h2>
                <Row>
                    {
                        products.map(product => (
                            <Col sm="4">
                                <Card>
                                <CardImg top width="100%" src={product.imageUrl}/>
                                <CardBody>
                                    <CardTitle>{product.name}</CardTitle>
                                    <CardText>{product.description}</CardText>
                                    <Button>Add to card</Button>
                                </CardBody>
                                </Card>
                            </Col> 
                        ))
                    }
                </Row>
            </Container>      
        );
    }
}

export default Products;