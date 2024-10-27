const videosList = [
{
	video: 'images/vid-1.mp4',
	title: 'بعض التعليقات الجميلة لزبائننا اللّي جربوا الطماطم الغير محدودة النمو صنف تزارين🍅🍅 و لاقت إعجابهم 🤩 نشكركم جميعا على شهادتكم vid-1'
},
{
	video: 'images/vid-2.mp4',
	title: 'Sissa'
},
{
	video: 'images/vid-3.mp4',
	title: 'Tomate Tsarine'
},
{
	video: 'images/vid-4.mp4',
	title: 'Poivron Atira'
},
{
	video: 'images/vid-5.mp4',
	title: 'Pastèque Hercules'
},
{
	video: 'images/vid-6.mp4',
	title: '⁦🌶️⁩فلفل برق✨ إنتاج، تبكير و ربح وفير✨ منطقة بير النعام بسكرة By Sarl Agroseed'
},
{
	video: 'images/vid-7.mp4',
	title: 'Agroseed en partenariat avec Masseeds vous offrent les hybrides parfaits de Maïs pour reussir vos récoltes 🌽Souplesse d util'
},
{
	video: 'images/vid-8.mp4',
	title: 'HARICOT NELSON'
},
{
	video: 'images/vid-9.mp4',
	title: 'PASTÈQUE Antilop F1 Catégorie SEMENCES HYBRIDE Importé et distribue par Sarl Agroseed By Sarl Agroseed'
},
]

const categories = [...new Set(videosList.map((item) => { return item }))]
document.getElementById('videosList').innerHTML = categories.map((item) => {
	var { video, title } = item;
	return (
		`<div class="list active">
		<video src=${video} class="list-video"></video>
		<h3 class="list-title">${title}</h3>
		</div>`
		)
}).join('')

let videoList = document.querySelectorAll('.video-list-container .list');
videoList.forEach(remove => { remove.classList.remove('active') });
videoList.forEach(vid => {
	vid.onclick = () => {
		videoList.forEach(remove => { remove.classList.remove('active') });
		vid.classList.add('active');
		let src = vid.querySelector('.list-video').src;
		let title = vid.querySelector('.list-title').innerHTML;
		document.querySelector('.main-video-container .main-video').src = src;
		document.querySelector('.main-video-container .main-video').play();
		document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
	};
});