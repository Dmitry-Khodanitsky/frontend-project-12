// Хук для получения id активного в данный момент канала и экшен для изменения активного канала
import { useSelector, useDispatch } from 'react-redux'
import { currentChannelId, setCurrentChannelId } from '@/app/model/uiSlice'

export const useChannelId = () => {
  const dispatch = useDispatch()

  return {
    activeChannelId: useSelector(currentChannelId),
    setCurrentChannelId: (id) => {
      dispatch(setCurrentChannelId(id))
    },
  }
}

// Где используется:
// в AddChannelFrom - при добавиленнии нового канала
// в ChannelList - для автоматического скролла к ативному в данный момент каналу
// в useChannelSelector - для обновления установки дефолтного канала, если текущий id не существует
