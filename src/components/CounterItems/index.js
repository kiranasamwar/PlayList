import './index.css'

const CounterItems = props => {
  const {wordDetails} = props
  const {word} = wordDetails

  return (
    <li className="list-items">
      <p className="paragraph-list">
        {word} : {word.length}
      </p>
    </li>
  )
}

export default CounterItems
