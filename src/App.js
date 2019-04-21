import React from 'react'
import { connect } from 'react-redux'
import { eggPaintedActionCreator } from './state/eggs'
import EggNotPainted from './EggNotPainted'
import EggPainted from './EggPainted'


const App = (props) => {
  return (
    <div>
      {
        props._isPainted ?
          <EggPainted 
            paintEgg={props._paintEgg}
          />
          :
          <EggNotPainted
            paintEgg={props._paintEgg}
          />
      }
    </div>
  )
}

const mapStateToProps = state => ({
  _isPainted: state.eggs.isPainted
})

const mapDispatchToProps = dispatch => ({
  _paintEgg: (value) => dispatch(eggPaintedActionCreator(value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)