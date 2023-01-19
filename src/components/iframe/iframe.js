
import video from './iframe.css';

const Iframe = () => {
  return (
    <>
        <div className="video">
            <h1 id="h1">THE BEST ALL-IN-ONE PLATFORM<br/>TO RUN AND TURN YOUR BUSINESS.</h1>
            <iframe  height="315" src="https://www.youtube.com/embed/5wF8phuYGv4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </>
  )
}

export default Iframe