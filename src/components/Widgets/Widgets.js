import React from 'react'
import './Widgets.css'
export default function Widgets() {
    return (
        <div className="Widgets">
        <iframe 
        title="Hack Club"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FHackClubHQ&tabs=timeline&width=340&height=2000&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
        width="340" 
        height="100%" 
        style={{border :"none",overflow:"hidden" }}
        scrolling={false} 
        frameBorder={10}
        allowFullScreen={true}
        allow="encrypted-media"
        ></iframe>
        </div>
    )
}
// autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share