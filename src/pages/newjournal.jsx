import React from 'react'
import Navbar from '../components/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class SubmitPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            text: ''
        }
    }

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value,
            text: e.target.text
        })
    }

    handleTextChange = (e) => { 
        this.setState({
            text: e.target.value
        })
    }

    handleSubmit = (e) => {
        this.setState({
            title: e.target.title,
            text: e.target.text
        })
        this.props.submitJournal(this.title,this.text)
    }

    render() {
        return (
            <div><Navbar />
                <Form onSubmit={this.handleSubmit}>
                    <div>
                        <Form.Group name="journaltitle">
                            <Form.Label>Journal Title</Form.Label>
                            <Form.Control type="text" value={this.state.title} onChange={this.handleTitleChange} />
                        </Form.Group>
                        <Form.Group name="journaltext">
                            <Form.Label>Journal Text</Form.Label>
                            <Form.Control type="text" as="textarea" rows="10" value={this.state.text} onChange={this.handleTextChange} />
                        </Form.Group>
                        <Button type="submit">
                            submit
                        </Button>
                        {this.props.numOfJournal}
                    </div>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        numOfJournal: state.numOfJournal,
        journalArray: state.journalArray
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        submitJournal: (title,text) => dispatch({type:'SUBMIT_JOURNAL',title,text})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SubmitPage)
