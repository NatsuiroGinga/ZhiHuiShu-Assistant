(function(){function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{return Promise.resolve(value).then(function(value){step("next",value)},function(err){step("throw",err)})}}return step("next")})}}const MAX_DELAY=60;let sleep=time=>{return new Promise((resolve,reject)=>{setTimeout(()=>{resolve()},time)})};let start=(()=>{var _ref=_asyncToGenerator(function*(){console.log('智慧树助手已启动');while(1){console.log('正在检查');let delay=Math.floor(Math.random()*MAX_DELAY*1000)+1000;if($('.popbtn_cancel')[0]){console.log('发现弹题，将在'+delay/1000+' 秒后点击关闭');yield sleep(delay);$('.popbtn_cancel').click()}if($('.current_play').find('.progressbar').width()==$('.current_play').find('.progressbar_box').width()){console.log('本节完成，'+delay/1000+' 秒后将切到下一课');yield sleep(delay);$('.current_play').nextAll('.video')[0].click()}yield sleep(1000)}});return function start(){return _ref.apply(this,arguments)}})();start()})();