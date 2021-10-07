import React from 'react';
import classes from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    statusInputRef = React.createRef();
    // why does a class Component need this ? Is it a kind of OOP? What should I know about local state
    state = {
        // what`s editMode ?
        editMode: false,
        status: this.props.status
    }


    activateEditMode() {
        //  method can also be called thorough simple using of activateEditMode (){} but in this case we will have problems
        //  with binding our props in onDoubleheck
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {

        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "-----"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true}
                            onBlur={this.deactivateEditMode} value={this.state.status} />
                    </div>
                }
                {/* the difference between the both expresions is only input and why do we see both inputs on our html page */}
            </>
        )

    }
}

export default ProfileStatus;