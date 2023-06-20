import Footer from "../../common/footer";
import Header from "../../common/header";


const page = (
    <div className="container">
        <Header />
        <h1>Fun facts about React</h1>
        <ul>
            <li>fact 1</li>
            <li>fact 2</li>
            <li>fact 3</li>
            <li>fact 4</li>
        </ul>
        <Footer />      
    </div>
);


function Section() {
    return (
      page
    );
  }
  
  export default Section;
  