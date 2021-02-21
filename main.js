https://www.bsidesoft.com/285
class Test{
    constructor(){
        this.test = document.getElementById( "test" );
        this.logCount = 0;
        
        this.test.addEventListener( 'touchstart', this.touchListener.bind(this,event) );
        this.test.addEventListener( 'touchend', this.touchListener.bind(this,event) );
    }
    touchListener(e){
        let i, j, t0, touch;
       
        //touches부터 정리
        touch = e.touches;
        t0 = [ '<b>',
          e.type,
          '</b><br>touches(length:',
          j = touch.length
        ];
       
        for( i = 0 ; i < j ; i++ )
          t0.push(
            ', ', i, ':',
            parseInt( touch[i].pageX ), ',',
            parseInt( touch[i].pageY )
          );
       
        //changedTouches 정리
        touch = $e.changedTouches;
        t0.push(
          ')<br> changed(length:',
          j =touch.length
        );
        for( i = 0 ; i < j ; i++ )
          t0.push(
            ', ', i, ':',
            parseInt( touch[i].pageX ), ',',
            parseInt( touch[i].pageY )
          );
       
        //로그에 보고
        log( t0.join( '' ) + ')' );
        test.dispatchEvent( new Event("to") );
    }

    log( $v ){
        if( ++logCount > 10 ){
          logCount = 0;
          test.innerHTML = $v + "<br>";
        }else{
          test.innerHTML += $v + "<br>";
        }
    }
}

window.addEventListener('load', ()=>{
    new Test();
});