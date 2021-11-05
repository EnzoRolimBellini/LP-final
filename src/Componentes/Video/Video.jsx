import React, {Component} from "react";


class Video extends Component {
render() {
    return (
        <section id="portifolio">
            <h2 class="titulos-mostrados-no-menu">PORTIFÓLIO</h2>
            <figure>   
            <div class="containers-inframe">
                <iframe class="video-ilustrativo" width="100%" height="315"
                src="https://www.youtube.com/embed/wDh_3PVc7sw" title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
            </div>
            </figure>
        </section>
        )
    }
}

export default Video;