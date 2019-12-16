import React from "react"
import {addPhoto,deletePhoto} from "./PhotoActions";
import {connect, Provider} from 'react-redux'

import Pagination from "react-js-pagination";

class Photos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 1
        }
    }
    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
    }

    selectPhoto(e, photo){
    }
    deletePhoto(photo){
        this.props.remove(photo)
    }

    pagination(){
        const photos = this.props.photos
                return (<Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={10}
                    totalItemsCount={photos.length}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange.bind(this)}
                />)
    }

    render() {
        let {photos} = this.props
        return (
            <React.Fragment>

                <div style={{width: 500 + 'px', margin: '0 auto'}}>
                <b>Photos</b> - hello {this.state.activePage}
                <br/>

                    {this.pagination()}
                </div>

                <div style={{width: 500 + 'px', margin: '0 auto'}}>
                {photos.slice((this.state.activePage-1)*10, (this.state.activePage)*10).map(photo =>(
                        <React.Fragment key={photo.id}>
                            <b>{photo.name}</b><br/>
                            {(() => {
                                switch(photo.class) {
                                    case 'Photo':
                                        return (<div><a href={photo.around_url}>{photo.location_name}</a> <br/> <img onClick={e => { this.deletePhoto(photo) }} src={"http://localhost:3001/" + photo.url}/></div>)
                                    case 'Video':
                                        return <embed src={photo.url}/>
                                }
                            })()}
                            <br/>

                        </React.Fragment>

                    )
                )}
                </div>
                {this.pagination()}
                <b>EOL</b>
            </React.Fragment>
        )
    }
}

const mapSateToProps = (state, ownProps) => {
    const {photos} = state
    return {
        photos
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        add: photo => dispatch(addPhoto(photo)),
        remove: photo => dispatch(deletePhoto(photo)),
        dispatch: e => dispatch(e)
    }
}

export default connect(mapSateToProps, mapDispatchToProps)(Photos)
