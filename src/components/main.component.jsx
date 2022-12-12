import Content from "./content.component";
import Header from "./header.component";

//Main Component which Contains Header and Content 
let Main = () => {
    return (
        <div id="mainCont">
            <Header />
            <Content />
        </div>
    )

}

export default Main;