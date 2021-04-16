import { Link} from 'react-router-dom';
import { useEffect, useState} from 'react';
import LandmarkCard from '../LandmarkCard/LandmarkCard';

const Main = ({
	match,
}) => {
	const [landmark ,setLandmark] = useState([]);

	useEffect(() =>{
		fetch('http://localhost:5000/api')
		.then(res => res.json())
		.then(landmarks => setLandmark(landmarks))
		.catch(error => console.log(error));
	}, [])


    return(

 <section className="wrapper style3 container special">
	<header className="major">
		<h2>Top Rated  <strong>Landmarks</strong></h2>
	</header>
		{landmark.map(x=> <LandmarkCard	key={x._id} {...x} />
		)} 
		
	<div className="row">				
	</div>

	<footer className="major">
		<ul className="buttons">
		<li><Link to="#" className="button">See More</Link></li>
		</ul>
	</footer>

	</section>
    );
}

export default Main;