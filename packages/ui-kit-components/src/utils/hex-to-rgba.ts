const hexToRgbA = (hex: string, opacity = 0.1) => {
  var c;
  if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
      c= hex.substring(1).split('');
      if(c.length== 3){
          c= [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c= '0x'+c.join('');
      return 'rgba('+[(parseInt(c)>>16)&255, (parseInt(c)>>8)&255, parseInt(c)&255].join(',')+`,${opacity})`;
  }
  throw new Error('Bad Hex');
}

export default hexToRgbA;