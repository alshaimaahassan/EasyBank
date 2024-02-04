import mockups from './images/image-mockups.png';
import back from "./images/bg-intro-desktop.svg"
function Article1(){
return(
<article className='article1'>
<div className='p-article'>
  <h1>Next generation digital banking</h1>
  <p>take your financial life online. your Easybank account will be a one stop-shop for spending saving, budgeting, investing, and much more.</p>
  <button type="button" class="prembtn">Request invite</button>
</div>

  <div class="imgCont"  style={{ backgroundColor:"red" }}>
  <img src={mockups} alt="mockups" class="image1" />
</div>
</article>
)
}
export default Article1