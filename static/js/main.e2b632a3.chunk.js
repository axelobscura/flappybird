(this.webpackJsonpflappybird=this.webpackJsonpflappybird||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),r=n(7),c=n.n(r),o=(n(13),n(1)),s=n(2),l=n(4),d=n(3),u=n(5),h=function(t){function e(){var t,n;Object(o.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(l.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(i)))).state={gravity:.8,lift:-20,bird:{x:50,y:100,velocity:0,radius:10}},n.draw=function(){var t=n.refs.canvas.getContext("2d");t.canvas.width=window.innerWidth,t.canvas.height=window.innerHeight,t.fillStyle="green",t.fillRect(0,0,n.refs.canvas.width,n.refs.canvas.height),t.beginPath(),t.fillStyle="#FF0000",t.arc(n.state.bird.x,n.state.bird.y,n.state.bird.radius,0,2*Math.PI),t.fill()},n.update=function(){var t=.9*(n.state.bird.velocity+n.state.gravity);n.setState({bird:{x:50,y:Math.max(Math.min(n.state.bird.y+t,n.refs.canvas.height-n.state.bird.radius),0),velocity:t,radius:20}})},n}return Object(u.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;setInterval((function(){t.update(),t.draw()}),1e3/60),document.addEventListener("keydown",(function(e){return 32===e.keyCode?t.setState({bird:{x:50,y:t.state.bird.y,velocity:t.state.bird.velocity+t.state.lift,radius:40}}):null}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("canvas",{ref:"canvas",width:450,height:650}))}}]),e}(a.Component),v=(n(14),function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(h,null))}}]),e}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},8:function(t,e,n){t.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.e2b632a3.chunk.js.map