import { Dropdown } from 'react-bootstrap'

export default {
  translation: {
    // Общие элементы
    common: {
      testName: 'Hexlet Chat',
      appName: 'СВЯЗЬ 🤙',
      save: 'Сохранить',
      cancel: 'Отменить',
      send: 'Отправить',
      exit: 'Выйти',
      login: 'Войти',
      registration: 'Регистрация',
      placeholders: {
        channelName: 'Имя канала',
        password: 'Пароль',
        username: 'Ваш ник',
        registerUsername: 'Имя пользователя',
      },
    },
    // Ошибки
    errors: {
      auth: 'Неверные имя пользователя или пароль',
      passwordSymbols: 'Не менее 6 символов',
      loginSymbols: 'От 3 до 20 символов',
      confirmPassword: 'Пароли должны совпадать',
      network: 'Ошибка соединения',
      userExists: 'Такой пользователь уже существует',
      channelExist: 'Такой канал уже существует',
      required: 'Это поле обязательно',
      channels: 'Ошибка, каналы не загрузились',
      addChannel: 'Ошибка добавления канала: {{error}}',
      removeChannel: 'Ошибка удаления канала: {{error}}',
      renameChannel: 'Ошибка, не удалось изменить название канала: {{error}}',
      messages: 'Не получилось загрузить сообщения',
      sendingError: 'Ошибка отправки: {{error}}',
    },

    // Страницы авторизации
    auth: {
      loginTitle: 'Войти',
      registerTitle: 'Регистрация',
      noAccount: 'Нет аккаунта?',
      hasAccount: 'Уже есть аккаунт?',
      confirmPassword: 'Подтвердите пароль',
    },

    // Интерфейс чата
    chat: {
      channelsTitle: 'Каналы',
      messagePlaceholder: 'Написать в {{channelName}}',
    },

    // Модальные окна
    modals: {
      addChannel: {
        title: 'Добавить канал',
        submit: 'Добавить',
      },
      renameChannel: {
        title: 'Изменить название канала?',
        rename: 'Переименовать',
        submit: 'Изменить',
      },
      removeChannel: {
        title: 'Удалить канал?',
        submit: 'Удалить',
      },
      dropdown: 'Управление каналом',
    },
    notifications: {
      success: {
        addChannel: 'Канал создан',
        removeChannel: 'Канал удален',
        renameChannel: 'Канал переименован',
      },
    },
  },
}
