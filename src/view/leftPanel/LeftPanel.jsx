import React from 'react';
import Immutable from 'immutable';
import classNames from 'classnames';
import ParticipantRow from './ParticipantRow.jsx';

export default class LeftPanel extends React.PureComponent {
    static get propTypes() {
        return {
            participants: React.PropTypes.instanceOf(Immutable.Map).isRequired,
            isOpen: React.PropTypes.bool.isRequired,
            onClickOpenButton: React.PropTypes.func.isRequired,
        }
    };
    
    renderOpenButton(isOpen){
        const onClickOpenButton = this.props.onClickOpenButton;
        return (
            <button
                className="openButton"
                onClick={()=>{
                    onClickOpenButton(!isOpen)
                }}
            />
        );
    }

    renderHeader() {
        return (
            <div className="header">

            </div>
        );
    }

    renderParticipantList(){
        const participants = this.props.participants;
        return (
            <div className="body">
                {participants.get('idList').map((id) => {
                    return (
                        <ParticipantRow
                            participant = {participants.getIn(['byId', id])}
                        />
                    );
                })}
            </div>
        )
    }

    renderContent(isOpen) {
        if(!isOpen) {
            return null;
        }
        return (
            <div className="content">
                {this.renderHeader()}
                {this.renderParticipantList()}
            </div>
        );
    }

    render(){
        const isOpen = this.props.isOpen;
        const rootPanelClassName = classNames({
            leftPanel: true,
            isOpen,
        });
        return (
            <div className={rootPanelClassName}>
                {this.renderOpenButton(isOpen)}
                {this.renderContent(isOpen)}
            </div>
        );
    }
}
