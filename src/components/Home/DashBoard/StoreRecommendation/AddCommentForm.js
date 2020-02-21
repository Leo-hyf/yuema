import React from 'react';
import {Button, Input, Popover} from "antd"
import {faStar as lightStar} from '@fortawesome/free-regular-svg-icons';
import {faStar as darkStar} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import '../../../../styles/home/dashboard.scss';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import {createComment} from "../../../../graphql/mutations";

const { TextArea } = Input;
class AddCommentForm extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            rate: 0,
            store: this.props.store,
            traveller: this.props.traveller,
        }
    }

    handleOnClick = (e)=>{
        const content = document.getElementsByClassName('add-comment-form-input')[0].value;
        const comment = {}
        comment["content"] = content;
        comment["rate"] = this.state.rate;
        comment['commentStoreId'] = this.state.store.id;
        comment['commentTravellerId'] = this.state.traveller.id;
        API.graphql(graphqlOperation(createComment,{input: comment})).then((response) => {
            alert("Comment successfully added");
            this.setState({rate:0});
        })

    }

    createDarkStars = () => {
        const arr = new Array(this.state.rate);
        for(let i=0; i < this.state.rate; ++i){
            arr[i] = i + 1;
        }
        return arr.map((i) => {
            return <FontAwesomeIcon icon={darkStar} className="rating-star" val={i} onClick={this.handleOnChange} key={i}/>
        })
    }

    createLightStars = () => {
        const arr = new Array(5-this.state.rate);
        for(let i=this.state.rate; i < 5; ++i){
            arr[i] = i + 1;
        }
        return arr.map((i) => {
            return <FontAwesomeIcon icon={lightStar} className="rating-star" val={i} onClick={this.handleOnChange} key={i}/>
        })
    }

    handleOnChange = (e) =>{
        e.preventDefault();
        const rate = parseInt(e.currentTarget.getAttribute('val'));
        this.setState({rate:rate});
    }
    render(){
        return(
            <div className="add-comment-form-container">
                {this.createDarkStars()}
                {this.createLightStars()}

                <TextArea rows={6} className="add-comment-form-input" onPressEnter={this.handleOnClick}/> <br/><br/>
                <Button type="primary" onClick={this.handleOnClick}>Add Comment</Button>
            </div>
        )
    }
}

export default AddCommentForm;