import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    componentDidMount() {
        console.log('Invoke componentDidMount Dishdetail');
    }

    componentDidUpdate() {
        console.log('Invoke componentDidUpdate Dishdetail');
    }

    renderComments(comments) { 
        const listComment = comments.map((phrase) => {
            return (
                <ul className="list-unstyled" key={phrase.id}>
                    <li>{phrase.comment}</li>
                    <li>{phrase.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(phrase.date)))}</li>
                </ul>
            );
        });

        if(comments != null) {
            return (
                <div>
                    <h4>Comments</h4>
                        {listComment}
                 </div>
            )
        } 
        else {
            return (
                <div></div>
            );
        }
    }

    renderDish(dish) { 
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name}/>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(dish.comments)} 
                    </div>
                </div>
            </div>

        );
    }

    render() {
        console.log('Invoke render Dishdetail');
        const dish = this.props.dish; 

        if(dish != null) { 
            return (
                <div className="container">
                    <div className="row">
                        {this.renderDish(dish)} 
                    </div>
                </div>
            );
        } 
        else {
            return (
                <div></div>
            );
        }
    }
}

export default DishDetail;