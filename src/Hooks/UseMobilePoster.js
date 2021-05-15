export default function UseMobilePoster(video, poster, posterDesktop) {
  const width = window.innerWidth
  if (width < 1000) {
    return (
      <img src={poster} className="video" alt="background of ink and water" />
    )
  } else {
    return (
      // <video className="video" playsInline autoPlay muted loop poster={posterDesktop} srcmob={poster}> <source src={video} type='video/mp4' /> </video> 
      <video className="video" playsInline autoPlay muted loop poster={posterDesktop} srcmob={poster}> <source src={video} type='video/mp4' /> </video> 
    )
  }
}