import { filterByStatus } from "@/app/redux/filter/actions"
import { useDispatch, useSelector } from "react-redux"

const Filter = ()=>{
    const dispatch= useDispatch()
    const filter = useSelector(state=>state.filter)

    const statusHandler =(filter)=>{
    dispatch(filterByStatus(filter))
    }
    return (
        <div className="flex items-center space-x-4">
                    <button onClick={()=>statusHandler('all')} className={`filter-btn ${filter.status==='all' && "active-filter"}`} id="lws-filterAll">All</button>
                    <button onClick={()=>statusHandler('featured')} className={`filter-btn ${filter.status==='featured' && "active-filter"}`} id="lws-filterFeatured">Featured</button>
        </div>
    )
}
export default Filter;