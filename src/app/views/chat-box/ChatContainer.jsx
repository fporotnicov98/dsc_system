import React, { Fragment } from 'react'
import {
    IconButton,
    Icon,
    Divider,
    Fab,
    TextField,
    MenuItem,
    Hidden,
} from '@material-ui/core'
import { MatxMenu } from 'app/components'
import Scrollbar from 'react-perfect-scrollbar'
import EmptyMessage from './EmptyMessage'
import { ChatAvatar } from 'app/components'
import shortid from 'shortid'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { useState } from 'react'
import dayjs from 'dayjs';

const useStyles = makeStyles(({ palette, ...theme }) => ({
    chatContainer: {
        background: 'rgba(0, 0, 0, 0.05)',
        height: 750,
    },
}))

const ChatContainer = ({
    id: currentUserId,
    toggleSidenav,
    currentChatRoom,
    handleMessageSend,
}) => {
    const [message, setMessage] = useState('')
    const classes = useStyles()

    const sendMessageOnEnter = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            let tempMessage = message.trim()
            if (tempMessage !== '') handleMessageSend(tempMessage)
            setMessage('')
        }
    }

    return (
        <div className={clsx('flex-column relative', classes.chatContainer)}>
            <div className="chat-container__topbar flex items-center justify-between p-1 bg-primary">
                <div className="flex items-center">
                    <Hidden mdUp>
                        <IconButton onClick={toggleSidenav}>
                            <Icon className="text-white">short_text</Icon>
                        </IconButton>
                    </Hidden>

                    <Hidden smDown>
                        <div className="pl-3"></div>
                    </Hidden>

                    {opponentUser && (
                        <Fragment>
                            <ChatAvatar
                                status={opponentUser.status}
                            />
                            <h5 className="ml-4 whitespace-pre mb-0 font-medium text-18 text-white">
                                {opponentUser.name}
                            </h5>
                        </Fragment>
                    )}
                </div>
                <MatxMenu
                    menuButton={
                        <IconButton>
                            <Icon className="text-white">more_vert</Icon>
                        </IconButton>
                    }
                >
                    <MenuItem className="flex items-center">
                        <Icon className="mr-4">account_circle</Icon> Contact
                    </MenuItem>
                    <MenuItem className="flex items-center">
                        <Icon className="mr-4">volume_mute</Icon> Mute
                    </MenuItem>
                    <MenuItem className="flex items-center">
                        <Icon className="mr-4">delete</Icon> Clear Chat
                    </MenuItem>
                </MatxMenu>
            </div>

            <Scrollbar
                className="chat-message-list flex-grow relative"
                id="chat-message-list"
            >
                {currentChatRoom === '' && (
                    <div className="flex-column justify-center items-center h-full">
                        <EmptyMessage />
                        <p>Выберите контакт</p>
                    </div>
                )}
                {messageList.map((message, index) => (
                    <div
                        className="flex items-start px-4 py-3"
                        key={shortid.generate()}
                    >
                        <ChatAvatar
                            status={message.status}
                        />
                        <div className="ml-4">
                            <p className="text-muted m-0 mb-2">
                                {message.name}
                            </p>
                            <div
                                className={clsx({
                                    'px-4 py-2 mb-2 border-radius-4 bg-paper': true,
                                    'bg-primary text-white':
                                        currentUserId === message.contactId,
                                })}
                            >
                                <span className="whitespace-pre-wrap">
                                    {message.text}
                                </span>
                            </div>
                            <small className="text-muted mb-0">
                                {dayjs(message.time).format('DD-MM-YYYY HH:mm')}
                            </small>
                        </div>
                    </div>
                ))}
            </Scrollbar>

            <Divider />

            {currentChatRoom !== '' && (
                <div className="flex items-center px-4 py-2">
                    <TextField
                        label="Введите сообщение..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyUp={sendMessageOnEnter}
                        fullWidth
                        multiline={true}
                        rows={1}
                        variant="outlined"
                    />
                    <div>
                        <Fab
                            onClick={() => {
                                if (message.trim() !== '')
                                    handleMessageSend(message)
                                setMessage('')
                            }}
                            color="primary"
                            className="ml-4"
                        >
                            <Icon>send</Icon>
                        </Fab>
                    </div>
                </div>
            )}
        </div>
    )
}

const opponentUser = {
    avatar: "/assets/images/faces/13.jpg",
    id: "323sa680b3249760ea21rt47",
    mood: "",
    name: "Николай Петров",
    status: "online"
}

const messageList = [
    {
        avatar: "/assets/images/faces/13.jpg",
        contactId: "323sa680b3249760ea21rt47",
        id: "323sa680b3249760ea21rt47",
        mood: "",
        name: "Николай Петров",
        status: "online",
        text: "Добрый вечер! Подскажите, какие инструменты разработки будем использовать",
        time: "2021-12-03T08:45:28.291Z"
    },
    {
        avatar: "/assets/images/face-1.jpg",
        contactId: "7863a6802ez0e277a0f98534",
        id: "7863a6802ez0e277a0f98534",
        mood: "",
        name: "Федор Поротников",
        status: "online",
        text: "Привет, вся разработка на mern стеке",
        time: "2021-12-03T08:52:28.291Z"
    },
    {
        avatar: "/assets/images/faces/13.jpg",
        contactId: "323sa680b3249760ea21rt47",
        id: "323sa680b3249760ea21rt47",
        mood: "",
        name: "Николай Петров",
        status: "online",
        text: "Ок, понял",
        time: "2021-12-03T08:54:28.291Z"
    },
    {
        avatar: "/assets/images/face-1.jpg",
        contactId: "7863a6802ez0e277a0f98534",
        id: "7863a6802ez0e277a0f98534",
        mood: "",
        name: "Федор Поротников",
        status: "online",
        text: "Назначаю тебя ответсвенным за команду разработки",
        time: "2021-12-03T08:56:28.291Z"
    },
    {
        avatar: "/assets/images/faces/13.jpg",
        contactId: "323sa680b3249760ea21rt47",
        id: "323sa680b3249760ea21rt47",
        mood: "",
        name: "Николай Петров",
        status: "online",
        text: "Какие мои основные обязанности будут?",
        time: "2021-12-03T09:00:28.291Z"
    },
    {
        avatar: "/assets/images/face-1.jpg",
        contactId: "7863a6802ez0e277a0f98534",
        id: "7863a6802ez0e277a0f98534",
        mood: "",
        name: "Федор Поротников",
        status: "online",
        text: "Расскажу все на официальном назначении в понедельник",
        time: "2021-12-03T09:05:28.291Z"
    },
    {
        avatar: "/assets/images/faces/13.jpg",
        contactId: "323sa680b3249760ea21rt47",
        id: "323sa680b3249760ea21rt47",
        mood: "",
        name: "Николай Петров",
        status: "online",
        text: "Хорошо",
        time: "2021-12-03T09:12:28.291Z"

    },
    {
        avatar: "/assets/images/face-1.jpg",
        contactId: "7863a6802ez0e277a0f98534",
        id: "7863a6802ez0e277a0f98534",
        mood: "",
        name: "Федор Поротников",
        status: "online",
        text: "Пока подумай кого можно назначить на ревью кода, нужно 3-4 человека, я думаю про Лену и Вову",
        time: "2021-12-03T09:17:28.291Z"

    }
]

export default ChatContainer
