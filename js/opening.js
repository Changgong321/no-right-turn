const __opening = (()=>{
function initOpening(){
 const video=document.getElementById('openingVideo'),fallback=document.getElementById('openingFallback'),sound=document.getElementById('videoSound'),skip=document.getElementById('skipVideo');
 let completed=false,failed=false;
 function showVideo(){video.style.display='block';fallback.style.display='none'}
 function showFallback(){video.style.display='none';fallback.style.display='block'}
 function finish(){completed=true;video.pause();showVideo();skip.textContent='重新播放 CG';sound.disabled=false}
 function fail(){failed=true;completed=true;video.pause();showFallback();skip.textContent='重试 CG';sound.disabled=true}
 function goToLastFrame(){
   if(failed){showFallback();return}
   if(!Number.isFinite(video.duration)||video.duration<=0){finish();return}
   video.pause();
   // Seek to the latest decodable frame before the duration boundary. Keep the <video> rendered.
   const target=Math.max(0,video.duration-Math.min(0.045,video.duration/100));
   try{video.currentTime=target}catch(e){}
   finish();
 }
 video.addEventListener('ended',finish);
 video.addEventListener('error',fail);
 video.addEventListener('loadeddata',()=>{if(!completed&&!failed){showVideo();video.play().catch(()=>{video.pause();skip.textContent='播放 CG'})}},{once:true});
 skip.addEventListener('click',()=>{
   if(failed){failed=false;completed=false;skip.textContent='跳过 CG';sound.disabled=false;showVideo();video.load();return}
   if(completed){completed=false;video.currentTime=0;showVideo();skip.textContent='跳过 CG';video.play().catch(()=>{skip.textContent='播放 CG'})}
   else goToLastFrame();
 });
 sound.addEventListener('click',()=>{video.muted=!video.muted;sound.textContent=video.muted?'开启声音':'静音'});
 showVideo();video.load();
 return {stop:()=>video.pause(),resume:()=>{if(!completed&&!failed&&video.style.display==='block')video.play().catch(()=>{})}};
}
return {initOpening};
})();
const {initOpening}=__opening;
