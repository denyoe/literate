(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,n){e.exports=n(65)},41:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),i=n(19),o=n.n(i),c=(n(41),n(7)),s=n(8),l=n(11),u=n(10),h=n(12),m=n(9),d=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handlerChoiceSelected=n.handlerChoiceSelected.bind(Object(m.a)(n)),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"handlerChoiceSelected",value:function(e){this.props.handlerChoiceSelected(e)}},{key:"render",value:function(){var e=this.props,t="true"===e.body.correct?"radioCustomButtonSuccess":"radioCustomButton";return r.a.createElement("li",{className:"choice-item icobutton"},r.a.createElement("input",{type:"radio",className:t,name:"radioGroup"+e.question,id:e.body.body,value:JSON.stringify(e.body),onChange:this.handlerChoiceSelected}),r.a.createElement("label",{className:"radioCustomLabel",htmlFor:e.body.body},e.body.body))}}]),t}(a.Component),f=function(e){var t=e.body,n=e.choices,a=e.onAnswerSelected;return r.a.createElement("div",null,r.a.createElement("h3",{className:"question"},'" ',t,' "'),r.a.createElement("div",null,r.a.createElement("ul",{className:"choice-list"},Object.keys(n).map(function(e){return r.a.createElement(d,{key:e,body:n[e],question:t,handlerChoiceSelected:a})}))))},v=n(34),y=n(33),p=n(32),g=new y.a,b=new p.a({uri:"https://bookish.bleek.io/api"}),w=new v.a({cache:g,link:b}),k=n(29),E=n.n(k),S=n(30),q=n(31);function _(){var e=Object(S.a)(["\n        query questionList($after: String) {\n            questions(pageSize: 100, after: $after) {\n                cursor\n                hasMore\n                questions {\n                    id\n                    body\n                    choices {\n                        id\n                        body\n                        correct\n                    }\n                }\n            }\n        }\n    "]);return _=function(){return e},e}var O=n.n(q)()(_());function N(e){for(var t,n,a=e.length;0!==a;)n=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[n],e[n]=t;return e}var j=function(){function e(t){Object(c.a)(this,e),this._queue=void 0,this._queue=t||[]}return Object(s.a)(e,[{key:"enqueue",value:function(e){this._queue.push(e)}},{key:"dequeue",value:function(){return this._queue.shift()}},{key:"clear",value:function(){this._queue=[]}},{key:"shuffle",value:function(){N(this._queue)}},{key:"count",get:function(){return this._queue.length}}]),e}(),C=function(){function e(t){Object(c.a)(this,e),this._stack=void 0,this._stack=t||[]}return Object(s.a)(e,[{key:"push",value:function(e){this._stack.push(e)}},{key:"pop",value:function(){return this._stack.pop()}},{key:"empty",value:function(){this._stack=[]}},{key:"shuffle",value:function(){N(this._stack)}},{key:"count",get:function(){return this._stack.length}}]),e}(),I=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"Please wait while we get everything ready for you ",r.a.createElement("i",{className:"far fa-smile-wink"})),r.a.createElement("div",{className:"loading_spinner-wrap"},r.a.createElement("svg",{className:"loading_spinner",width:"60",height:"20",viewBox:"0 0 60 20",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("circle",{cx:"7",cy:"15",r:"4"}),r.a.createElement("circle",{cx:"30",cy:"15",r:"4"}),r.a.createElement("circle",{cx:"53",cy:"15",r:"4"}))))},x=(n(62),function(e){var t=e.score,n=e.total,a={width:t/n*100+"%"};return r.a.createElement("div",{className:"progress"},t," / ",n,r.a.createElement("div",{className:"meter clear animate"},r.a.createElement("span",{style:a},r.a.createElement("span",null))))}),A=(n(63),function(){localStorage.clear(),location.reload()}),J=function(e){var t=(screen.width-570)/2,n="menubar=no,toolbar=no,status=no,width=570,height=570,top="+(screen.height-570)/2+",left="+t;window.open(e,"NewWindow",n)},B=function(e){var t=e.score,n=e.total,a="https%3A%2F%2Fbookish.bleek.io%2F",i="Check+out+this+cool+Literature+Openings+Quiz+I+just+played.",o="https://www.linkedin.com/shareArticle?mini=true&url="+a+"&title=Bookish&summary="+i+"&source=bookish",c="https://www.facebook.com/sharer.php?u="+a,s="https://twitter.com/intent/tweet?url="+a+"&text="+i+"&hashtags=literature,books,quiz";return r.a.createElement("div",{className:"end"},r.a.createElement("span",{className:"stats"},r.a.createElement("ul",null,r.a.createElement("li",null,"Score: ",r.a.createElement("strong",null,t)),r.a.createElement("li",null,"Total Number of Questions: ",r.a.createElement("strong",null,n)))),r.a.createElement("div",null,r.a.createElement("h1",null,"bookish."),r.a.createElement("p",null,"Hot Damn! Sadly, you have reached the end of this Quiz."),r.a.createElement("p",null,"But fear not! I'm hard at work crafting new questions which should be available anytime now."),r.a.createElement("p",null,"You can reach me through ",r.a.createElement("a",{target:"_",href:"https://twitter.com/marcusekon"},"twitter"),", ",r.a.createElement("a",{target:"_",href:"https://www.linkedin.com/in/marcek/"},"LinkedIn"),", or ",r.a.createElement("a",{target:"_",href:"https://www.instagram.com/marcusekon/"},"instagram")," if you have any suggestions for improving this Quiz; or just to say Hi."),r.a.createElement("p",null,"In the meantime, if you wish to restart the Quiz, click ",r.a.createElement("a",{href:"#",onClick:A},"here"),".")),r.a.createElement("div",{className:"social"},r.a.createElement("span",null,r.a.createElement("a",{target:"_",onClick:function(){return J(c)},href:c},r.a.createElement("i",{className:"fab fa-facebook-f"}))),r.a.createElement("span",null,r.a.createElement("a",{target:"_",onClick:function(){return J(s)},href:s},r.a.createElement("i",{className:"fab fa-twitter"}))),r.a.createElement("span",null,r.a.createElement("a",{target:"_",onClick:function(){return J(o)},href:o},r.a.createElement("i",{className:"fab fa-linkedin"})))))},Q=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e)))._queue=new j,n._missed=new C,n.state={current:{},score:0,total:0,count:0,cursor:"0",status:"",loading:!0},n.handlerAnswerSelected=n.handlerAnswerSelected.bind(Object(m.a)(n)),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){null===localStorage.getItem("_queue")||null===localStorage.getItem("state")?this.remotely():this.locally()}},{key:"componentDidUpdate",value:function(e,t){localStorage.setItem("state",JSON.stringify(this.state)),localStorage.setItem("_queue",JSON.stringify(this._queue)),localStorage.setItem("_missed",JSON.stringify(this._missed))}},{key:"remotely",value:function(){this.fetch()}},{key:"locally",value:function(){var e=JSON.parse(localStorage.getItem("_queue")||"")._queue;this.queue(e);var t=JSON.parse(localStorage.getItem("state")||"");this.setState(t)}},{key:"fetch",value:function(){var e=this;console.log("fetching...@",this.state.cursor),null===this.state.cursor?(this.setState({loading:!0,current:{}}),setTimeout(function(){return e.setState({loading:!1})},1e3)):w.query({query:O,variables:{after:this.state.cursor}}).then(function(t){var n=t.data,a=N(n.questions.questions);e.mapQuestions(a);var r=!0===n.questions.hasMore?n.questions.cursor:null;e.setState({cursor:r})}).catch(function(t){e.setState({current:{},loading:!0}),console.log("Something went wrong...",t.message)})}},{key:"mapQuestions",value:function(e){this.setState({count:this.state.count+e.length});var t=[];e.map(function(e){var n={body:e.body,choices:e.choices};t.push(n)}),this.queue(t),this.next(),this.setState({loading:!1})}},{key:"queue",value:function(e){this._queue=new j(e)}},{key:"next",value:function(){if(this._queue.count){var e=this._queue.dequeue();this.setState({current:e,total:this.state.total+1})}else this.fetch()}},{key:"handlerAnswerSelected",value:function(e){var t=JSON.parse(e.target.value);this.eval(t),this.next()}},{key:"eval",value:function(e){"true"==e.correct?this.setState({score:this.state.score+1}):(this._missed.push(this.state.current),this._queue.shuffle()),this.setState({status:e.correct})}},{key:"render",value:function(){var e=0===Object.entries(this.state.current).length&&this.state.current.constructor===Object,t=e?[]:N(this.state.current.choices);return this.state.loading?r.a.createElement(I,null):null===this.state.cursor&&e?r.a.createElement(B,{score:this.state.score,total:this.state.count}):r.a.createElement("div",null,r.a.createElement(E.a,{className:"container",component:"div",transitionName:"fade",transitionEnterTimeout:500,transitionLeaveTimeout:500,transitionAppearTimeout:500},r.a.createElement("div",{key:this.state.current.body},r.a.createElement(f,{body:this.state.current.body,choices:t,onAnswerSelected:this.handlerAnswerSelected}))),r.a.createElement(x,{score:this.state.score,total:this.state.count}))}}]),t}(a.Component),z=(n(64),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Q,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.9e090585.chunk.js.map