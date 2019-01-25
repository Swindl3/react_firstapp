import React from 'react' ;

const Footer = (props)=>{
    const {name,uni} = props
    return (
            <div>Powered By :{name+'||'+uni}</div>
           )
}

export default Footer;