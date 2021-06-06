// noinspection JSUnusedGlobalSymbols

const start = () => {
    const unread = GmailApp.getInboxUnreadCount()
    Logger.log(unread)
}

const test = () => {
    start()
}
