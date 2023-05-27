import layerBaseImage from './assets/img/layer-base.png';
import layerMiddleImage from './assets/img/layer-middle.png';
import layerFrontImage from './assets/img/layer-front.png';
import dungeonImage from './assets/img/dungeon.jpg';
import { useEffect } from 'react';

const App = () => {
	useEffect(() => {
		window.addEventListener('scroll', () => {
			let scrollY = window.scrollY;
			document.documentElement.style.setProperty('--scrollTop', `${scrollY}px`);
		});
	}, []);

	return (
		<div className="wrapper">
			<div className="content">
				<header className="header-main">
					<div className="layers">
						<div className="layer-head">
							<div className="caption">Welcome to Parallax Web</div>
							<div className="title">Dark Forest</div>
						</div>
						<div
							className="img-layer layer-base"
							style={{ backgroundImage: `url(${layerBaseImage})` }}
						></div>
						<div
							className="img-layer layer-mid"
							style={{ backgroundImage: `url(${layerMiddleImage})` }}
						></div>
						<div
							className="img-layer layer-front"
							style={{ backgroundImage: `url(${layerFrontImage})` }}
						></div>
					</div>
				</header>
				<article
					className="article-main"
					style={{ backgroundImage: `url(${dungeonImage})` }}
				>
					<div className="m-article-content">
						<h2 className="m-header">Story To Be Continued</h2>
						<p className="m-paragraph">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
							quibusdam harum veritatis, nihil excepturi quam laudantium aliquam
							velit doloremque vitae fugit qui et provident exercitationem
							tempora voluptate minus, hic, recusandae reiciendis accusantium.
							Repudiandae distinctio commodi assumenda autem iste, debitis ad
							veritatis mollitia fugiat quas! Consectetur deleniti maxime
							aspernatur quibusdam commodi!
						</p>
					</div>
					<div className="copy"> &copy; 2023 Oyier</div>
				</article>
			</div>
		</div>
	);
};

export default App;
