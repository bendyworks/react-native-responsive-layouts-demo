import { Dimensions, ViewStyle, ImageStyle, TextStyle } from 'react-native';

type Style = ViewStyle | ImageStyle | TextStyle
type StyleObj = Record<string, Style>

export default class Responsive {
  breakpoints: any[];
  match: any;
  styles: StyleObj[];
  base: StyleObj;

  constructor(breakpoints: any[], styles: StyleObj[], base: StyleObj) {
    this.breakpoints = breakpoints;
    this.styles = styles;
    this.base = base;
  }

  comparator(el:any, i:number, arr:any[]):boolean {
    return ( this.match <= el );
  }

  stylePicker(label: string, match: any = null) {
    if ( match === null ) {
      match = Dimensions.get('window').width;
    }
    this.match = match;
    let styling = [];
    if ( this.base[label] ) {
      styling.push(this.base[label]);
    }
    let i = this.breakpoints.findIndex(this.comparator, this);
    if ( i === -1 ) i = this.styles.length - 1;
    const picked = this.styles[i];
    // console.log(width, i, widthPX[i], picked);
    if ( picked && picked[label] ) {
      styling.push(picked[label]);
    }
    return styling;
  };
}