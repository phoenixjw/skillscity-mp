export default function NavigationItem(props) {
    return(
        <div className="border border-gray-900 px-3 py-1 text-center ">
          <a href = {props.ahref}>{props.name}</a>  
        </div>
    )
}