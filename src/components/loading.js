import React from 'react';
import {Oval} from "react-loader-spinner"; //수많은 스피너 중 저는 Oval 스피너 import하겠습니다


function Loading () {
   
    return ( //import 한 스피너는 컴포넌트 형태로 사용가능
        <Oval className="image" color='black' secondaryColor="black"/>
        
    ) ;

};

export default Loading;