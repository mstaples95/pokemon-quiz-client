import React from "react"
import './Jukebox.scss'

const Jukebox = () => {
    
    return (
        <div className="music-player">
          <iframe 
            title="jukebox"
             
            frameBorder="no" 
            allow="autoplay"
             
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1692262794&color=%23ff0019&auto_play=false&hide_related=false&show_comments=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        </div>
          )
        }
export default Jukebox