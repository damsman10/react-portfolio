
const Category = (props) => {
  return (
    <div>
        <h1 className="text-center font-bold text-[2rem]">{props.title}</h1>
        <p className="text-center text-[1.2rem]">{props.paragraph}</p>
    </div>
  )
}

export default Category