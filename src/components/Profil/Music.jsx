import React from 'react';
import '../../style/globalssas.css';
import cover1 from '../../asset/Page-profil/album-hip-hop.png';
import cover2 from '../../asset/Page-profil/album-hop.png'
import Musicprops from './musicPro';

function Music() {
  return (

    <div className='musicSection'>
    <h1>Music</h1>
<Musicprops
title="RioGane - Down"  
cover={cover1} />

<br/>
<br/>
<br/>
<br/>

<Musicprops
title="Grange - WAP"  
cover={cover2} />

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

</div>

  )
}

export default Music