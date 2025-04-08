import style from './MainFrame.module.css'
import PropTypes from 'prop-types'

function MainFrame({children}) {

  return (
    <main className={style.mainFrame}>
      {children}
    </main>
  )
}
MainFrame.propTypes = {
  children: PropTypes.node.isRequired
}

export default MainFrame