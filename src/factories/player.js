const createPlayer = ({
  userPrefix = 'Captain',
  userName = 'Luc',
  userSuffix = '',
} = {}) => ({
  userPrefix,
  userName,
  userSuffix,
})

export default createPlayer