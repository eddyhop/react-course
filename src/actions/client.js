export const CLIENT_ONLINE = 'CLIENT_ONLINE'
export const CLIENT_OFFLINE = 'CLIENT_OFFLINE'

export const clientOnline = () => ({
  type: CLIENT_ONLINE,
})

export const clientOffline = () => ({
  type: CLIENT_OFFLINE,
})