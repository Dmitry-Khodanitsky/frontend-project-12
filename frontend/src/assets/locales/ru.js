export default {
  translation: {
    // Общие элементы
    common: {
      appName: 'СВЯЗЬ 🤙',
      save: 'Сохранить',
      cancel: 'Отменить',
      send: 'Отправить',
      exit: 'Выйти',
      login: 'Войти',
      registration: 'Регистрация',
      placeholders: {
        channelName: 'Название канала',
        password: 'Пароль',
        username: 'Ваш логин',
      },
    },
    // Ошибки
    errors: {
      auth: 'Неверное имя пользователя или пароль',
      passwordSymbols: 'От 6 до 20 символов',
      loginSymbols: 'От 3 до 20 символов',
      confirmPassword: 'Пароли должны совпадать',
      network: 'Ошибка сети',
      userExists: 'Такой пользователь уже существует',
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
    },
    notifications: {
      success: {
        addChannel: 'Канал добавлен',
        removeChannel: 'Канал успешно удален',
        renameChannel: 'Название канала изменено',
      },
    },
  },
}
