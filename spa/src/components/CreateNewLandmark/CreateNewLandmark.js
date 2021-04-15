import  './CreateNewLandmark.css'
import * as landmarkService from '../../services/landmarkService'


const CreateNewLandmark = ({
  history,
}) => {
    
const onCreateLandmarkSubmitHandler = (e) =>{
    e.preventDefault();

    const {title, description, imageURL} = e.target;

    landmarkService.create(title.value, description.value, imageURL.value)
    .then((redirect) => {
      history.push('/')
    })

};

    return(
<div className="login-box">
<h2>New Landmark</h2>
<form onSubmit={onCreateLandmarkSubmitHandler}>
<div className="user-box">
    <input type="text" name="title" required=""/>
    <label>TITLE</label>
  </div>

  <div className="user-box">
    <input type="text" name="description" required=""/>
    <label>DESCRIPTION</label>
  </div>
  <div className="user-box">
    <input type="url" name="imageURL" placeholder="Your image location URL"  required=""/>
    <label> Image URL</label>
  </div>

  <input className="input-show" type="submit" value="submit"/>

</form>
</div>
    )
}

export default CreateNewLandmark

