import React from 'react'
import fetch from 'cross-fetch'
import "redux";
import Video from "./Video";
export const ADD_VIDEO = 'ADD_VIDEO';
export const DELETE_VIDEO = 'DELETE_VIDEO';
export const UPDATE_STATUS = "UPDATE_STATUS";

export let updateStatus;
updateStatus = (status) => {
    return {
        type: UPDATE_STATUS,
        status
    }
};

export const uploadVideo = (file, auth_token, video_status) => {
    let form = new FormData();
    form.append("video[video]", file);
    form.append("video[name]", file.name);

    fetch(process.env.REACT_APP_RAILS + "/videos", {
        method: 'POST',
        body: form,
        headers: {
        }
    })
        .then(response => {
            if (response.ok) {
                video_status(<div className="text-success">Uploaded successfully</div>)
                return response.json()
            } else {
                video_status(<div className="text-danger">Error uploading.</div>)
                let error = response.status;
                console.log("An error occured: ", error);
                return null
            }
        }, error => console.log("rejected promise error: ", error))
        .then(json => {
            if( json != null ) {
                console.log("Successfuly uploaded")
            }

        })
}
