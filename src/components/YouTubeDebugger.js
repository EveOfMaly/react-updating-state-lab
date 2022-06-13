// // Code YouTubeDebugger Component Here

import React from "react"

export default class YouTubeDebugger extends React.Component{
    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    handleClickBitrate = () => {

        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12,
            }
        })
    }

    handleClickResolution = () => {
    
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720px'
                }
            }
        })
    }


 


       

    render(){
        return(
        <div>
            <button onClick={this.handleClickBitrate} className="bitrate">Change Bitrate </button>
            <button onClick={this.handleClickResolution} className="resolution">Change Resolution</button>
        </div>)
        
    }
}




















// import React from 'react';

// export default class YouTubeDebugger extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             errors: [],
//             user: null,
//             settings: {
//                 bitrate: 8,
//                 video: {
//                     resolution: '1080p'
//                 }
//             }
//         }
//     }

//     onClickBitrate = () => {
//         this.setState({
//             settings: {
//                 ...this.state.settings,
//                 bitrate: 12,
//             },
//         })
//     }

//     onClickResolution = () => {
//         this.setState({
//             settings: {
//                 ...this.state.settings,
//                 video: {
//                     ...this.state.settings.video,
//                     resolution: "720p"
//                 }
//             },
//         })
//     }
    
//     render(){
//         return <div>
//          <button className='bitrate' onClick={this.onClickBitrate}>Button</button>
//          <button className='resolution' onClick={this.onClickResolution}>Button</button>
//         </div>
//     }

// }
