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
          <EggPainted />
          :
          <EggNotPainted
            paintEgg={props._paintEgg}
          />
      }
    </div>
  )
}

const mapStateToProps = state => ({
  _isPainted: state.isPainted
})

const mapDispatchToProps = dispatch => ({
  _paintEgg: () => dispatch(eggPaintedActionCreator())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)