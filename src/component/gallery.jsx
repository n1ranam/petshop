import pic from './images/kitten-4611189_640.jpg'
import pic2 from './images/rabbit-373691_640.jpg'
import pic3 from './images/puppy-g698c97e10_640.jpg'
function Gallery(){
    return(
        <>
            
<div className='outer'>
    <div id='inner'>
        <img src={pic} height="200px" width="250px"></img><br/>
        <h4>Description</h4>
        <input type='submit' value="Select"/>
    </div>
    
    <div id='inner'>
    <img src={pic2} height="200px" width="250px"></img><br/>
    <h4>Description</h4>
        <input type='submit' value="Select"/>
    </div>
    
    <div id='inner'>
    <img src={pic3} height="200px" width="250px"></img><br/>
    <h4>Description</h4>
        <input type='submit' value="Select"/>
    </div>
   
    <footer><i>webpage created by Soniya</i></footer>
</div>

</>
    )
}
export default Gallery;