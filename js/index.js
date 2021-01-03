let moved = false;
let tempId = 0;
const setSelected = (id) => {
	tempId = id
	if(!moved){
		const elem = document.getElementById('events');
		let pos = Math.round((document.getElementById('events').getBoundingClientRect().top)/10)*10;
		console.log(window.innerHeight*0.10);
		console.log(pos);
		let id = setInterval(frame, 10);
		function frame() {
		  if (pos <= window.innerHeight*0.10) {
			clearInterval(id);
			document.getElementById('events').classList.add('fixed');
			//elem.style.top = window.innerHeight*0.10 + 'px'; 
			moved = true;
			setSelected(tempId);
		  } else {
			pos-=25;
			elem.style.top = pos + 'px'; 
		  }
		}
	}else {
		document.getElementById('timeline__title').style.display = 'none';
	
		const navs = document.getElementById('events-list').children;
		for (let i = 0; i < navs.length; i++) {
			navs[i].children[0].classList.remove('active');
			navs[i].children[0].classList.remove('currentnav');
		}
	
		for (let i = 0; i < id+1; i++) {
			navs[i].children[0].classList.add('active');
		}
		document.getElementById('nav-'+id).classList.add('active');
		document.getElementById('nav-'+id).classList.add('currentnav');
	
		document.getElementById('filling-line').style.width = `${6+ (80*id/6) + 0.3*id}%`;
	
		const content = document.getElementsByClassName('content-container');
		for (let i = 0; i < content.length; i++) {
			content[i].classList.remove('selected');
		}
		document.getElementById('content-'+id).classList.add('selected');
	}
}