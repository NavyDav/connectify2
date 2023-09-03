import React from 'react'
import '../../style/globalssas.css'
import icon1 from '../../asset/Page-profil/Vectorpause.png'
import icon2 from '../../asset/Page-profil/Line 5line.png'
import icon3 from '../../asset/Page-profil/icon_setting.png'

function musicPro(props) {
    const { title,cover} = props;

  return (
<div className='musicContent'>
    
<img src={cover} alt='cover'/>

<h2>{title}</h2>

<div className='player'>
<img src={icon1} alt='player'/>
<img src={icon2} alt='player'/>
<img src={icon3} alt='player'/>
</div>
    </div>

  )
}

export default musicPro