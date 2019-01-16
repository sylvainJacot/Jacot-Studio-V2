import React, { Component } from 'react';
import '../stylesheets/components/gallery.scss';
import Pic01 from '../images/1:1 Copy.png';
import Pic02 from '../images/1:1.png';
import Pic03 from '../images/3:4 Copy.png';
import Pic04 from '../images/4:3 Copy 2.png';
import Pic05 from '../images/4:3 Copy.png';
import Pic06 from '../images/4:3.png';
import Pic07 from '../images/Default.png';


const pictures = [
    {href:"/", alt:"#", classename:"gegg", source:`${Pic01}`,},
    {href:"/", alt:"#", classename:"colufzefzmn", source:`${Pic02}`,},
    {href:"/", alt:"#", classename:"colufzefzmn", source:`${Pic03}`,},
    {href:"/", alt:"#", classename:"colfzefzumn", source:`${Pic04}`,},
    {href:"/", alt:"#", classename:"rofezfezw", source:`${Pic05}`,},
    {href:"/", alt:"#", classename:"rofzefw", source:`${Pic06}`,},
    {href:"/", alt:"#", classename:"rofw", source:`${Pic07}`,},
  ];

class Gallery extends Component {
    render () {
        return (
            <div className="GalleryContainer">
            <div className="row"> 
           <div className="column">
            
            {pictures.map((picture, index) =>(
                          <a key={`picture-${index}`} href={picture.href} alt={picture.alt}>
                          <img src={picture.source} className={picture.classename} />
                        </a>
                        
            ))}
            </div>
            <div className="column">
            
            {pictures.map((picture, index) =>(
                          <a key={`picture-${index}`} href={picture.href} alt={picture.alt}>
                          <img src={picture.source} className={picture.classename} />
                        </a>
                        
            ))}
            </div>
            <div className="column">
            
            {pictures.map((picture, index) =>(
                          <a key={`picture-${index}`} href={picture.href} alt={picture.alt}>
                          <img src={picture.source} className={picture.classename} />
                        </a>
                        
            ))}
            </div>
            </div>
            </div>
        )
    }
}

export default Gallery;