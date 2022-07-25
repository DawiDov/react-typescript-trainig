import { bindActionCreators } from 'redux'
import allActionCreators from 'redux/action-creators'
import { useTypedDispatch } from 'redux/store'

const useActions = () => {
  const dispatch = useTypedDispatch()
  return bindActionCreators(allActionCreators, dispatch)
}

export default useActions
