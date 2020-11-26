import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


class Menu extends Component {

    constructor(props) {
        super(props);
        console.log('Menu Component constructor invoked');
    }

    componentDidMount() {
        console.log('Menu Component componentDidMount invoked');
    }

    render() {
        console.log('Menu Component render invoked');
        //this prints in browser repeated food images with overlayed text
        const menu = this.props.dishes.map((dish) => { /* we change this.props, because dishes have been stated in MainComponent.js and delivered here through props */

        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => this.props.onClick(dish.id)}> {/* we receive through props the selected dish id */}
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardImgOverlay className="ml-5"> {/* this overlays text over an image */}
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
            );
        });

        return(
            <div className="container">
                <div className="row">
                    {menu} {/* this shows dish images with overlayed text*/}
                </div>
            </div>
        );
    }
}

export default Menu;
