import './counter.css'
import NumberCounter from 'number-counter';
const Counter = () => {
  return (
    <div className='counter'>
      <div>
        <NumberCounter start = {0} end={2000} delay={1} className="increment" preFix="+"/>
        <h3>Students</h3>
      </div>
      <div>
      <NumberCounter start = {0} end={1800} delay={1} className="increment" preFix="+"/>
        <h3>Instrutors</h3>
      </div>
      <div>
      <NumberCounter start = {0} end={2000} delay={1} className="increment" preFix="+"/>
        <h3>Students</h3>
      </div>
      <div>
      <NumberCounter start = {0} end={100} delay={5} className="increment" postFix="%"/>
        <h3>Successfully</h3>
      </div>
    </div>
  )
}

export default Counter
