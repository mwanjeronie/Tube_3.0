import React from 'react'
import ReactPlayer from 'react-player'
import { FaPlay } from 'react-icons/fa'
// interface Props {
//   name: string;
//   description: string;
//   price: number;
//   pictureCaption: string;
//   pictureURL: string;
//   onClickBuy: () => void;
// }
// interface Props {
interface VideoCardProps {
  videoURL: string;
  onPlay: () => void;
}
//   name: string,
//   description: string,
//   price: number,
//   pictureCaption: string,
//   pictureURL: string,
//   onClickBuy: () => void,
// }

export default function ProductCard(props: VideoCardProps) {
  return (
    <div className='grid-container' style={{ margin: 16, padding: 16, border: '1px solid gray', borderRadius: 8, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ position: 'relative', paddingTop: '56.25%' /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */ }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <ReactPlayer url={props.videoURL} controls width="100%" height="100%" />
        </div>
      </div>
      {/* <div style={{ paddingTop: 16 }}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div> */}
    </div>
  )
}