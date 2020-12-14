import React, { PureComponent } from 'react';
import { Modal, Button } from 'react-bootstrap'

class ModalComp extends PureComponent {

    state= {
        show: true,
        label: ""
    }

    handleClose =()=>{
        this.setState({show: false})
    }

    handleChange = (event) => {
        this.setState({ label: event.target.value })
    }

    render() {

        return (
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>What Would You Like to Label this Stop?</Modal.Title>
                </Modal.Header>
                <Modal.Body><input name="label" placeholder="label" onChange={this.handleChange}/></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close </Button>
                    <Button variant="primary" onClick={() => this.props.save(this.props.id, this.state.label)}>
                        Save Stop </Button>
                </Modal.Footer>
            </Modal>
        )
    }

}

export default ModalComp;