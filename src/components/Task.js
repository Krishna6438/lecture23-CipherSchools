import { formatDate } from "../Utils/dateUtil";

const Task = ({task:{title,description,createDate}}) => {
    
    return (
        <div className="card">
            <div className="content">

                <div className="header">
                    {title}
                </div>
                <div className="meta">
                    {formatDate(createDate)}
                </div>

                <div className="description">
                    {description}
                </div>
            </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Edit</div>
                    <div className="ui basic red button">Delete</div>
                </div>
            </div>
        </div>
    );

}

export default Task;