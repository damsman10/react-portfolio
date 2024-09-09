

const Procard = (props) => {
  return (
    <div className="w-[14rem] h-[22rem] flex flex-col border-black border-2">
        <div className="top h-[45%]" style={{backgroundColor: "green"}}>

        </div>
        <div className="bottom">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <div className="bottom flex justify-between items-center">
                <p>Live Prevview</p>
                <p>view code</p>
            </div>
        </div>
    </div>
  )
}

export default Procard