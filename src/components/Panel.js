export const Panel = (props) => {
  return (
     <div className="panel panel-primary">
          <div className="panel-heading">
            <h2 className="panel-title">{props.title}</h2>
          </div>
          <div className="panel-body">
           {props.children}
          </div>
     </div>
  )
}