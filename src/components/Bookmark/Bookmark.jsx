import PropTypes from "prop-types";

const Bookmark = ({bookmark}) =>{
    const {title} = bookmark

    return(
        <div>
            
            <h3 className="text-xl m-4 p-4 rounded-2xl bg-slate-100">{title}</h3>
        </div>
    )
}

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}

export default Bookmark