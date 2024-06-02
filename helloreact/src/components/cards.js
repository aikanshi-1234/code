import React from "react";
const statusDict = {
    "pending": 0,
    "notdone": 1,
    'done':2
}

const Cards = ({ tasks, deleteTask, completeTask }) => {
    return (
        <div style={{border:"1px solid black" ,borderRadius:"10px" , width:"30%"}}>
            <div className="p-4">
                <center>
                <div style={{border:"1px solid black" ,borderRadius:"10px" ,margin:"auto"}}>
                    Date: {tasks.date}
                    </div>
                    </center>
            </div>
            <div className="p-3">
                {
                    tasks.task.length && tasks.task.map((obj , index) => {
                        return (
                            <>
                                <div className="d-flex justify-content-between">
                                    <div style={{ width: "5%" }}>
                                        {index+1}.
                                    </div>
                                    <div style={{width:"50%"}}>
                                        {obj.name}
                                    </div>
                                    <div style={{width:"20%"}}>
                                        {statusDict[obj.status.toLowerCase().trim()] == 2 ? "2" : statusDict[obj.status.toLowerCase().trim()] == 1 ? "1" : "0"}
                                    </div>
                                    {statusDict[obj.status.toLowerCase().trim()] === 0 ? <div style={{width:"20%"}}>
                                        <button onClick={() => completeTask(index)}>Done</button>
                                        <button onClick={deleteTask} >
                                       <img src="file:///C:/Users/jaina/OneDrive/Desktop/code/helloreact/src/images/download.png "style={{width:"100% ",height:"100%"}}></img>
                                        </button>

                                    </div> : ""}
                                    </div>
                                <hr/>
                            </>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Cards;
