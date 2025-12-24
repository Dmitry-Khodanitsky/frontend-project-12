export default {
  translation: {
    common: {
      appName: 'INTOUCH 🤙',
      save: 'Save',
      cancel: 'Cancel',
      send: 'Send',
      exit: 'Logout',
      login: 'Login',
      registration: 'Register',
      placeholders: {
        channelName: 'Channel name',
        password: 'Password',
        username: 'Your login',
      },
    },
    errors: {
      auth: 'Invalid username or password',
      passwordSymbols: 'From 6 to 20 characters',
      loginSymbols: 'From 6 to 20 characters',
      confirmPassword: 'Passwords must match',
      network: 'Network error',
      userExists: 'User already exists',
      required: 'This field is required',
      channels: 'Error: failed to load channels',
      addChannel: 'Error adding channel: {{error}}',
      removeChannel: 'Error deleting channel: {{error}}',
      renameChannel: 'Error: failed to change channel name: {{error}}',
      messages: 'Failed to load messages',
      sendingError: 'Sending error: {{error}}',
    },

    auth: {
      loginTitle: 'Login',
      registerTitle: 'Registration',
      noAccount: "Don't have an account?",
      hasAccount: 'Already have an account?',
      confirmPassword: 'Confirm password',
    },

    chat: {
      channelsTitle: 'Channels',
      messagePlaceholder: 'Message {{channelName}}',
    },

    modals: {
      addChannel: {
        title: 'Add channel',
        submit: 'Add',
      },
      renameChannel: {
        title: 'Change channel name?',
        rename: 'Rename',
        submit: 'Change',
      },
      removeChannel: {
        title: 'Delete channel?',
        submit: 'Delete',
      },
    },
    notifications: {
      success: {
        addChannel: 'Channel added',
        removeChannel: 'Channel successfully deleted',
        renameChannel: 'Channel name changed',
      },
    },
  },
}
