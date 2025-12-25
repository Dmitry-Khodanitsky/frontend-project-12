export default {
  translation: {
    common: {
      testName: 'Hexlet Chat',
      appName: 'CONNECTION 🤙',
      save: 'Save',
      cancel: 'Cancel',
      send: 'Send',
      exit: 'Logout',
      login: 'Login',
      registration: 'Register',
      placeholders: {
        channelName: 'Channel name',
        password: 'Password',
        username: 'Username',
      },
    },
    errors: {
      auth: 'Invalid username or password',
      passwordSymbols: 'At least 6 characters',
      loginSymbols: 'From 3 to 20 characters',
      confirmPassword: 'Passwords must match',
      network: 'Connection error',
      userExists: 'User already exists',
      channelExist: 'Channel already exists',
      required: 'This field is required',
      channels: 'Error: failed to load channels',
      addChannel: 'Error adding channel: {{error}}',
      removeChannel: 'Error deleting channel: {{error}}',
      renameChannel: 'Error: failed to rename channel: {{error}}',
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
      dropdown: 'Channel settings',
    },
    notifications: {
      success: {
        addChannel: 'Channel created',
        removeChannel: 'Channel deleted',
        renameChannel: 'Channel renamed',
      },
    },
  },
}
