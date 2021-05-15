export default function UseMobilePoster(video, poster) {
  const width = window.innerWidth
  if (width < 1000) {
    return (
      <img src={poster} className="video" alt="background image of ink and water" />
    )
  } else {
    return (
      <video className="video" playsInline autoPlay muted loop poster={poster} srcmob={poster}> <source src={video} type='video/mp4' /> </video> 
    )
  }
}