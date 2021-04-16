import { Link} from 'react-router-dom';

const LandmarkCard = ({
    id,
    title,
    description,
    imageURL,
    likes,
}) => {


    return(

<div className="row">
<div className="col-6 col-12-narrower">

    <section>
        <Link to="" className="image featured"><img src={imageURL} alt="" /></Link>
        <li className="fa fa-heart" style={{"color": "red"}} > <span style={{"color": "aqua"}} >{likes}</span></li>
       
        <header >
            <h3> {title}</h3>
        </header>
        <p> {description} </p>
     
    </section>
</div>
</div>
    );
}

export default LandmarkCard;