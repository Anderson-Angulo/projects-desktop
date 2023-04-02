import "./Tables.css"
const Table = ({title,children}) => {
  return (
    <div className="table">
      <div className="table-container">
        <h3 className="table-title">{title}</h3>
        <div className="table-rows">
          {
            children
          }
        </div>
      </div>

    </div>
  )
}
export default Table