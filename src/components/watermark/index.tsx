import React from 'react';

/**
 * @description 水印功能组件
 */
class WaterMark extends React.Component<any, any>{

  value = {
    text: 'A220117',
    fontSize: 16,
    fillOpacity: 0.2,
    fillColor: "#A6ADB4",
  }
  render() {
    const res = `
        <svg xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink" 
        width="150px" height="150px" 
        viewBox="0 0 150 150"
        >
        <text x="-100" y="-30" 
        fill='${this.value.fillColor}'  
        transform = "rotate(-35 220 -220)" 
        fill-opacity='${this.value.fillOpacity}' 
        font-size='${this.value.fontSize}'> ${this.value.text}</text>
      </svg>
      `;
    const blob = new Blob([res], {
      type: 'image/svg+xml',
    })
    const url = URL.createObjectURL(blob)
    return (
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: `url(${url})`,
          top: 0,
          left: 0,
          zIndex: 9990,
          pointerEvents: 'none', //点击穿透
        }}
      >
      </div>
    )
  }
}


export default WaterMark;