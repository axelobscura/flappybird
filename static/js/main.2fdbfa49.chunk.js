(this.webpackJsonpflappybird=this.webpackJsonpflappybird||[]).push([[0],{13:function(t,e,a){},14:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(7),c=a.n(i),o=(a(13),a(1)),s=a(2),l=a(4),u=a(3),d=a(5),f=function(t){function e(){var t,a;Object(o.a)(this,e);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={gravity:.8,lift:-20,bird:{x:50,y:100,velocity:0,radius:10}},a.draw=function(){var t=a.refs.canvas.getContext("2d");t.fillStyle="green",t.fillRect(0,0,a.refs.canvas.width,a.refs.canvas.height),t.beginPath(),t.arc(a.state.bird.x,a.state.bird.y,a.state.bird.radius,0,2*Math.PI),t.fill(),t.stroke()},a.update=function(){var t=.9*(a.state.bird.velocity+a.state.gravity);a.setState({bird:{x:50,y:Math.max(Math.min(a.state.bird.y+t,a.refs.canvas.height-a.state.bird.radius),0),velocity:t,radius:20}})},a}return Object(d.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;setInterval((function(){t.update(),t.draw()}),1e3/60),document.addEventListener("keydown",(function(e){return 32===e.keyCode?t.setState({bird:{x:50,y:t.state.bird.y,velocity:t.state.bird.velocity+t.state.lift,radius:40}}):null}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("canvas",{ref:"canvas",width:450,height:650}))}}]),e}(n.Component),h=(a(14),function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null))}}]),e}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},8:function(t,e,a){t.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.2fdbfa49.chunk.js.map