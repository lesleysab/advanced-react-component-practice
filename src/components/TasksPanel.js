import React from "react";
import TaskItem from "../components/TaskItem";

function TasksPanel(props) {
    console.log(props)
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title"><i className="fa fa-clock-o fa-fw"></i> Tasks Panel</h3>
            </div>
            <div className="panel-body">
                <div className="list-group">
                    {props.tasks.map(task => (
                        <TaskItem

                            task={task.task}
                            date={task.date} />
                    ))}

                </div>

                <div className="text-right">
                    <a href="#">View All Activity <i className="fa fa-arrow-circle-right"></i></a>
                </div>
            </div>

        </div>);
}
export default TasksPanel;