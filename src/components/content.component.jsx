import List from "./list.component"
import Search from "./search.component"

//To return Content Component
let Content = () => {
    return <div id="content">
        <List />
        <Search />
    </div>
}

export default Content;